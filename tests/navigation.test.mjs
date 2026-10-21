import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import config from "../src/cfg/config.js";

const root = new URL("../", import.meta.url);
const read = (file) => readFile(new URL(file, root), "utf8");

test("all 14 existing destinations remain unique and use HTTPS", () => {
    assert.equal(config.weblists.length, 14);
    assert.equal(new Set(config.weblists.map((item) => item.url)).size, 14);
    for (const item of config.weblists) {
        assert.equal(new URL(item.url).protocol, "https:");
        assert.ok(item.title && item.description);
    }
    assert.ok(config.weblists.some((item) => item.url === "https://cd.lcean.com/"));
    assert.ok(!config.weblists.some((item) => new URL(item.url).hostname === "ctf.lcean.com"));
});

test("every card has a valid filter category", () => {
    const counts = { life: 0, dev: 0, tools: 0 };
    for (const item of config.weblists) {
        assert.ok(Object.hasOwn(counts, item.category));
        counts[item.category]++;
    }
    assert.deepEqual(counts, { life: 4, dev: 5, tools: 5 });
});

test("every R2 card image has an identical local fallback filename", async () => {
    for (const item of config.weblists) {
        const url = new URL(item.img_url);
        assert.equal(url.hostname, "img.lcean.com");
        const filename = url.pathname.split("/").pop();
        const file = new URL(`src/img/cards/${filename}`, root);
        await access(file);
        const data = await readFile(file);
        assert.equal(data.subarray(0, 4).toString(), "RIFF");
        assert.equal(data.subarray(8, 12).toString(), "WEBP");
    }
});

test("all local homepage source references resolve", async () => {
    const html = await read("index.html");
    for (const match of html.matchAll(/(?:src|href)="(src\/[^"]+)"/g)) {
        await access(new URL(match[1].split("?")[0], root));
    }
    assert.match(html, /garden\.css\?20261021v2/);
    assert.match(html, /redesign\.js\?20261020v2/);
});

test("timeline begins with the October update and August CloudDrive record", async () => {
    const timeline = await read("src/b_html/timeline.html");
    const dates = [...timeline.matchAll(/datetime="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(dates.slice(0, 2), ["2026-10-20", "2026-08-30"]);
    assert.equal(dates.length, 28);
});

test("homepage IDs are unique and required controls exist", async () => {
    const html = await read("index.html");
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const id of ["site-search", "filter-status", "directory-tools", "dynamic-content"]) {
        assert.ok(ids.includes(id));
    }
    assert.match(html, /aria-live="polite"/);
    assert.match(html, /class="skip-link"/);
});

test("theme icons are inline SVG and never require an external icon font", async () => {
    const html = await read("index.html");
    assert.doesNotMatch(html, /Material\+Symbols|>light_mode<|>dark_mode</);
    assert.equal([...html.matchAll(/<svg class="theme-icon /g)].length, 4);
});
