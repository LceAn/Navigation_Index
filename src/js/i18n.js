// ===== 导航站双语支持 =====
// 用法：在 redesign.js 渲染完成后调用 applyLang()

const NAV_LANG = (() => {
  const p = new URLSearchParams(location.search).get('lang');
  if (p === 'en') return 'en';
  if (p === 'zh') return 'zh';
  try {
    const saved = localStorage.getItem('navLang');
    if (saved) return saved;
  } catch {}
  return (navigator.language || 'zh-CN').startsWith('zh') ? 'zh' : 'en';
})();



const NAV_T = {
  // 页面标题
  'LceAn - 个人网站导航': "LceAn - Personal Navigation",
  // 导航
  '跳到网站导航': 'Skip to navigation',
  '关于': 'About',
  '时间线': 'Timeline',
  '更多': 'More',
  // Hero 区域
  '山海有寄 · 日常有光': 'Mountains & Seas · Daily Light',
  '我的导航页': 'My Navigation',
  '在技术与': 'Between tech and',
  '生活之间': 'life',
  '你好，我是 LceAn。': "Hi, I'm LceAn.",
  '写一点代码，记录一些日常，': 'Writing code, recording daily life,',
  '在不断探索中，慢慢构建自己的世界。': 'slowly building my own world through exploration.',
  '探索我的世界': 'Explore My World',
  '认识一下': 'Get to Know Me',
  '保持好奇，持续生长。': 'Stay curious, keep growing.',
  '山海一隅': 'A Corner of Mountains & Seas',
  // 卡片标题
  '技术博客': 'Tech Blog',
  '时光相册': 'Photo Gallery',
  '探针': 'Status Monitor',
  '你是谁': 'Who Are You',
  '青龙': 'QingLong',
  '图书馆': 'Library',
  '导航': 'Navigation',
  '前往未知的网站': 'The Useless Web',
  '我的邮箱': 'Webmail',
  '个人日记': 'Journal',
  // 卡片描述
  '我的个人技术博客': 'My personal tech blog',
  '路途遥远，让我和你 岁月相随。': 'Far away, together through time.',
  '我的Docker状态': 'My Docker status',
  '我的服务器状态监控': 'Server status monitoring',
  'IP 身份 · 出口分析 · 隐私泄露 · 指纹': 'IP identity · Exits · Leaks · Fingerprint',
  'AI 编码用量与成本追踪（自建云）': 'AI coding usage & cost tracking',
  '部署的本地Github、Docker镜像加速': 'Local GitHub & Docker mirror',
  '云盘聚合与挂载': 'Cloud drive aggregation',
  '在线代码编辑器': 'Online code editor',
  '脚本云托管平台': 'Script hosting platform',
  '默默看书': 'Quiet reading',
  '我的新导航': 'My new navigation',
  "Let's go it!": "Let's go!",
  // 分类过滤
  '生活': 'Life',
  '开发': 'Dev',
  '工具': 'Tools',
  '全部': 'All',
  // 页脚
  '此刻 · 一句诗': 'Now · A Poem',
};

function applyNavLang() {
  if (NAV_LANG !== 'en') return;
  // 翻译所有匹配的文本节点
  const walk = (node) => {
    if (node.nodeType === 3) {
      const txt = node.textContent.trim();
      if (NAV_T[txt]) node.textContent = NAV_T[txt];
    } else if (node.nodeType === 1 && !['SCRIPT','STYLE'].includes(node.tagName)) {
      node.childNodes.forEach(walk);
    }
  };
  walk(document.body);
  // 页面标题
  document.title = NAV_T[document.title] || document.title;
  // title 属性
  document.querySelectorAll('[title]').forEach(el => {
    const t = el.getAttribute('title');
    if (NAV_T[t]) el.setAttribute('title', NAV_T[t]);
  });
  // alt 属性
  document.querySelectorAll('[alt]').forEach(el => {
    const a = el.getAttribute('alt');
    if (NAV_T[a]) el.setAttribute('alt', NAV_T[a]);
  });
}

// 语言切换按钮
function createNavLangBtn() {
  const btn = document.createElement('button');
  btn.textContent = NAV_LANG === 'en' ? '中文' : 'EN';
  btn.style.cssText = 'position:fixed;top:16px;right:16px;z-index:9999;padding:4px 14px;border:1px solid rgba(128,128,128,.3);border-radius:99px;background:rgba(255,255,255,.8);backdrop-filter:blur(8px);color:#666;font-size:12px;cursor:pointer;transition:all .2s';
  btn.onclick = () => {
    const newLang = NAV_LANG === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('navLang', newLang); } catch {}
    const url = new URL(location.href);
    url.searchParams.set('lang', newLang);
    location.href = url.toString();
  };
  document.body.appendChild(btn);
}

// 初始化（多次重试，因为卡片是异步渲染的）
function init() {
  applyNavLang();
  createNavLangBtn();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
// 卡片渲染后再次翻译（redesign.js 是异步的）
setTimeout(applyNavLang, 500);
setTimeout(applyNavLang, 1500);
setTimeout(applyNavLang, 3000);

