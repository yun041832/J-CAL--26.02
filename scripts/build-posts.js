/**
 * contents/posts/*.md → insight/insight-b21.html ~ insight-b60.html 빌드
 * 21~60번 블로그 글을 HTML로 변환하여 insight 폴더에 출력
 */
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const POSTS_DIR = path.join(__dirname, '..', 'contents', 'posts');
const OUT_DIR = path.join(__dirname, '..', 'insight');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { front: {}, body: content };
  const front = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) {
      let v = m[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
        v = v.slice(1, -1);
      front[m[1]] = v;
    }
  });
  return { front, body: match[2] };
}

const REDIRECT_URL = 'https://www.upsidelog.com';
const REDIRECT_MSG = '현재 페이지는 업사이드로그(https://www.upsidelog.com)로 이전되었습니다';

/** 포스팅 폐쇄: 과거 URL 접속 시 업사이드로그로 리다이렉트하는 HTML 생성 */
function buildRedirectHtml(fileName) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>콘텐츠 이전 안내 | J-Calendar</title>
  <meta http-equiv="refresh" content="0;url=${REDIRECT_URL}">
  <script>location.replace("${REDIRECT_URL}");</script>
  <style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f6f7fb;color:#111827;} .box{padding:24px;text-align:center;} a{color:#5c8dff;}</style>
</head>
<body>
  <div class="box">
    <p>${REDIRECT_MSG}</p>
    <p><a href="${REDIRECT_URL}">업사이드로그로 이동</a></p>
  </div>
</body>
</html>`;
}

const MAX_POSTS = 160;
function buildHtml(num, title, dateStr, bodyHtml) {
  const prev = num > 21 ? `/insight/insight-b${String(num - 1).padStart(2, '0')}.html` : (num === 21 ? '/insight/insight-p20.html' : '');
  const next = num < MAX_POSTS ? `/insight/insight-b${String(num + 1).padStart(2, '0')}.html` : '';
  const navPrev = prev
    ? `<a href="${prev}">← 이전 글</a>`
    : '<span></span>';
  const navNext = next
    ? `<a href="${next}">다음 글 →</a>`
    : '<span></span>';

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)} | J-Calendar 인사이트</title>
  <meta name="description" content="${escapeHtml(title)}">
  <link rel="canonical" href="https://www.jaycalendar.com/insight/insight-b${String(num).padStart(2, '0')}.html">
  <meta name="theme-color" content="#5c8dff">
  <link rel="stylesheet" href="/style.css?v=1.1">
  <style>
    .insight-post .insight-card { max-width: 720px; margin: 0 auto; padding: 24px 20px; font-size: 16px; line-height: 1.8; }
    .insight-post .insight-card h1 { font-size: 1.5rem; margin: 0 0 24px; line-height: 1.4; font-weight: 700; }
    .insight-post .insight-card h2 { font-size: 1.25rem; margin: 28px 0 12px; line-height: 1.4; font-weight: 600; }
    .insight-post .insight-card h3 { font-size: 1.1rem; margin: 24px 0 10px; line-height: 1.4; font-weight: 600; }
    .insight-post .insight-card p { margin: 0 0 16px; line-height: 1.8; }
    .insight-post .insight-card table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    .insight-post .insight-card th, .insight-post .insight-card td { border: 1px solid var(--line,#e2e8f0); padding: 10px 12px; text-align: left; }
    .insight-post .insight-card th { background: #f8fafc; font-weight: 600; }
    .insight-post .insight-card blockquote { margin: 16px 0; padding: 12px 16px; border-left: 4px solid var(--primary,#5c8dff); background: #f8fafc; }
    .insight-post .back-link { display: inline-block; margin-bottom: 16px; color: var(--text-muted); font-size: 0.9rem; }
    .insight-post .back-link:hover { color: var(--accent); }
    .insight-nav { display: flex; justify-content: space-between; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); gap: 16px; flex-wrap: wrap; }
    .insight-nav a { color: var(--accent); text-decoration: none; font-size: 15px; }
    .insight-nav a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="app">
    <aside class="sidebar" role="navigation" aria-label="메인 메뉴">
      <a class="nav-link menu-button nav-item" href="/index.html"><span class="menu-content"><span class="label">홈</span></span></a>
      <a class="nav-link menu-button nav-item" href="/index.html?widget=memo"><span class="menu-content"><span class="label">메모</span></span></a>
      <a class="nav-link menu-button nav-item" href="/insight/insight.html"><span class="menu-content"><span class="label">인사이트</span></span></a>
      <a class="nav-link menu-button nav-item" href="/index.html?widget=routine"><span class="menu-content"><span class="label">루틴</span></span></a>
      <a class="nav-link menu-button nav-item" href="/about/about.html"><span class="menu-content"><span class="label">About</span></span></a>
      <button type="button" id="themeToggleB${num}" class="menu-button nav-item" data-feature="dark" aria-label="테마 전환"><span class="menu-content"><span class="label">다크</span></span></button>
    </aside>
    <main class="main insight-post">
      <a href="/insight/insight.html" class="back-link" aria-label="인사이트 목록으로">← 인사이트 목록</a>
      <article class="insight-card content" itemscope itemtype="https://schema.org/Article">
        <span class="insight-card__category">Guide</span>
        <h1>${escapeHtml(title)}</h1>
        <div class="insight-card__body">${bodyHtml}</div>
        <nav class="insight-nav" aria-label="글 내비게이션">${navPrev}${navNext}</nav>
        <footer class="insight-card__meta">
          <time datetime="${dateStr}">${dateStr}</time>
          <span aria-hidden="true"> · </span>
          <span>Guide</span>
        </footer>
      </article>
    </main>
  </div>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-links">
        <a href="/index.html" class="footer-link">홈</a>
        <span class="footer-divider">|</span>
        <a href="/insight/insight.html" class="footer-link">인사이트</a>
        <span class="footer-divider">|</span>
        <a href="/privacy.html" class="footer-link">개인정보 보호정책</a>
        <span class="footer-divider">|</span>
        <a href="/contact.html" class="footer-link">문의하기</a>
      </div>
      <p class="footer-copyright">&copy; 2025 Jay Calendar. All rights reserved.</p>
    </div>
  </footer>
  <script>
    (function(){ var path=window.location.pathname.replace(/^.*\\//,''); document.querySelectorAll('.sidebar a[href]').forEach(function(a){ a.removeAttribute('aria-current'); var h=(a.getAttribute('href')||'').split('#')[0]; if(h&&path.indexOf(h)!==-1) a.setAttribute('aria-current','page'); }); })();
    (function(){ var theme=localStorage.getItem('jcal_theme')||'light'; if(theme==='dark')document.documentElement.setAttribute('data-theme','dark'); var btn=document.getElementById('themeToggleB${num}'); if(btn){ var label=btn.querySelector('.label'); if(theme==='dark')label.textContent='라이트'; btn.onclick=function(){ var isDark=document.documentElement.getAttribute('data-theme')==='dark'; if(isDark){ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('jcal_theme','light'); label.textContent='다크'; }else{ document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('jcal_theme','dark'); label.textContent='라이트'; } }; } })();
  </script>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 01~60번 파일명 패턴 (동일 ID 중 알파벳 순 첫 번째 파일 사용 → 일관된 매핑)
const files = fs.readdirSync(POSTS_DIR).filter((f) => /^\d+[-_].*\.md$/.test(f)).sort();
const numToFile = {};
files.forEach((f) => {
  const num = parseInt(f.split(/[-_]/)[0], 10);
  if (num >= 1 && num <= 160) numToFile[num] = f;
});

marked.setOptions({ gfm: true, breaks: false });
const posts = [];

// 블로그 폐쇄: 모든 포스팅 URL을 업사이드로그 리다이렉트 페이지로 출력
const pad = (n) => String(n).padStart(2, '0');
for (let n = 1; n <= 20; n++) {
  const fileName = `insight-p${pad(n)}.html`;
  fs.writeFileSync(path.join(OUT_DIR, fileName), buildRedirectHtml(fileName), 'utf-8');
  console.log(`Redirect: ${fileName}`);
}
for (let n = 21; n <= 80; n++) {
  const fileName = `insight-b${pad(n)}.html`;
  fs.writeFileSync(path.join(OUT_DIR, fileName), buildRedirectHtml(fileName), 'utf-8');
  console.log(`Redirect: ${fileName}`);
}
// (기존 마크다운 빌드 비활성화)
// for (let n = 1; n <= 20; n++) { ... }
// for (let n = 21; n <= 160; n++) { ... }

// (블로그 폐쇄: 메타·insight·sitemap 자동 갱신 비활성화)
// fs.writeFileSync(posts-meta.json ...
// insight.html 테이블 갱신 비활성화
// sitemap.xml 포스팅 URL 추가 비활성화 — sitemap.xml은 수동 유지

console.log('Done. Redirect pages written for insight-p01~p20, insight-b21~b80.');
