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

const MAX_POSTS = 160;
function buildHtml(num, title, dateStr, bodyHtml) {
  const prev = num > 21 ? `insight-b${String(num - 1).padStart(2, '0')}.html` : (num === 21 ? 'insight-p20.html' : '');
  const next = num < MAX_POSTS ? `insight-b${String(num + 1).padStart(2, '0')}.html` : '';
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
  <link rel="stylesheet" href="../style.css?v=1.1">
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
      <a class="menu-button nav-item" href="../index.html"><span class="menu-content"><span class="label">홈</span></span></a>
      <a class="menu-button nav-item" href="../index.html"><span class="menu-content"><span class="label">루틴</span></span></a>
      <a class="menu-button nav-item" href="../index.html"><span class="menu-content"><span class="label">메모</span></span></a>
      <a class="menu-button nav-item" href="../insight.html"><span class="menu-content"><span class="label">인사이트</span></span></a>
      <a class="menu-button nav-item" href="../about.html">About</a>
      <button type="button" id="themeToggleB${num}" class="menu-button nav-item" data-feature="dark" aria-label="테마 전환"><span class="menu-content"><span class="label">다크</span></span></button>
    </aside>
    <main class="main insight-post">
      <a href="../insight.html" class="back-link" aria-label="인사이트 목록으로">← 인사이트 목록</a>
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
        <a href="../index.html" class="footer-link">홈</a>
        <span class="footer-divider">|</span>
        <a href="../insight.html" class="footer-link">인사이트</a>
        <span class="footer-divider">|</span>
        <a href="../privacy.html" class="footer-link">개인정보 보호정책</a>
        <span class="footer-divider">|</span>
        <a href="../contact.html" class="footer-link">문의하기</a>
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

// 01~60번 파일명 패턴
const files = fs.readdirSync(POSTS_DIR).filter((f) => /^\d+[-_].*\.md$/.test(f));
const numToFile = {};
files.forEach((f) => {
  const num = parseInt(f.split(/[-_]/)[0], 10);
  if (num >= 1 && num <= 160) numToFile[num] = f;
});

marked.setOptions({ gfm: true, breaks: true });
const posts = [];

// 01~20: insight-p01 ~ insight-p20 (제미니 메모)
for (let n = 1; n <= 20; n++) {
  const f = numToFile[n];
  if (!f) continue;
  const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8');
  const { front, body } = parseFrontmatter(raw);
  const title = front.title || body.match(/^#\s+(.+)$/m)?.[1]?.trim() || `게시글 ${String(n).padStart(2, '0')}`;
  const dateStr = front.date || '2026-01-01';
  const isDraft = String(front.draft || '').toLowerCase() === 'true';
  const bodyHtml = marked.parse(body || '');
  const prev = n > 1 ? `insight-p${String(n - 1).padStart(2, '0')}.html` : '';
  const next = n < 20 ? `insight-p${String(n + 1).padStart(2, '0')}.html` : 'insight-b21.html';
  const navPrev = prev ? `<a href="${prev}">← 이전 글</a>` : '<span></span>';
  const navNext = next ? `<a href="${next}">다음 글 →</a>` : '<span></span>';
  let html = buildHtml(21, title, dateStr, bodyHtml); // reuse template
  html = html.replace(/insight-b21/g, `insight-p${String(n).padStart(2, '0')}`);
  html = html.replace(/insight\/insight-b21\.html/g, `insight/insight-p${String(n).padStart(2, '0')}.html`);
  html = html.replace(/id="themeToggleB21"/, `id="themeToggleP${n}"`);
  html = html.replace(/themeToggleB21/g, `themeToggleP${n}`);
  html = html.replace(/<nav class="insight-nav"[^>]*>[\s\S]*?<\/nav>/, `<nav class="insight-nav" aria-label="글 내비게이션">${navPrev}${navNext}</nav>`);
  html = html.replace(/<span class="insight-card__category">Guide<\/span>/, '<span class="insight-card__category">Action</span>');
  const outPath = path.join(OUT_DIR, `insight-p${String(n).padStart(2, '0')}.html`);
  fs.writeFileSync(outPath, html, 'utf-8');
  posts.push({ num: n, title, dateStr, isDraft });
  console.log(`Built insight-p${String(n).padStart(2, '0')}.html`);
}

for (let n = 21; n <= 160; n++) {
  const f = numToFile[n];
  if (!f) continue;
  const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8');
  const { front, body } = parseFrontmatter(raw);
  // fallback: 첫 번째 # 제목에서 추출
  let title = front.title || '';
  if (!title) {
    const h1 = body.match(/^#\s+(.+)$/m);
    if (h1) title = h1[1].trim();
  }
  if (!title) title = `글 ${n}`;
  const dateStr = front.date || '2026-02-08';
  const isDraft = String(front.draft || '').toLowerCase() === 'true';
  const bodyHtml = marked.parse(body || '');
  const outPath = path.join(OUT_DIR, `insight-b${String(n).padStart(2, '0')}.html`);
  fs.writeFileSync(outPath, buildHtml(n, title, dateStr, bodyHtml), 'utf-8');
  posts.push({ num: n, title, dateStr, isDraft });
  console.log(`Built insight-b${String(n).padStart(2, '0')}.html`);
}

// posts 메타데이터를 JSON으로 저장
fs.writeFileSync(
  path.join(__dirname, '..', 'scripts', 'posts-meta.json'),
  JSON.stringify(posts, null, 2),
  'utf-8'
);

// insight.html 테이블 tbody 갱신 (draft 제외, 날짜 내림차순)
const insightPath = path.join(__dirname, '..', 'insight', 'insight.html');
let insightHtml = fs.readFileSync(insightPath, 'utf-8');
const published = posts.filter((p) => !p.isDraft);
const sorted = [...published].sort((a, b) => b.dateStr.localeCompare(a.dateStr));
const pad = (n) => String(n).padStart(2, '0');
const rows = sorted.map((p, i) => {
  const displayNum = published.length - i;
  const cat = p.num <= 20 ? 'Action' : 'Guide';
  const href = p.num <= 20 ? `insight-p${pad(p.num)}.html` : `insight-b${pad(p.num)}.html`;
  const title = escapeHtml(p.title);
  return `<tr><td class="insight-list-num">${displayNum}</td><td class="insight-list-cat">${cat}</td><td class="insight-list-title"><a href="${href}">${title}</a></td><td class="insight-list-author">J-Calendar</td><td class="insight-list-date">${p.dateStr}</td></tr>`;
});
const newTbody = '              <tbody>\n                ' + rows.join('\n                ') + '\n              </tbody>';
insightHtml = insightHtml.replace(/<tbody>[\s\S]*?<\/tbody>/, newTbody);
fs.writeFileSync(insightPath, insightHtml, 'utf-8');
console.log(`Updated insight/insight.html table (${published.length} published, ${posts.length - published.length} draft hidden, date desc).`);

// sitemap.xml 생성 (draft 제외 + 정적 페이지)
const base = 'https://jaycalendar.com';
const today = new Date().toISOString().slice(0, 10);
const postUrls = published.map((p) => {
  const file = p.num <= 20 ? `insight-p${pad(p.num)}.html` : `insight-b${pad(p.num)}.html`;
  return `  <url>
    <loc>${base}/insight/${file}</loc>
    <lastmod>${p.dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${base}/insight/insight.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${postUrls.join('\n')}
  <url>
    <loc>${base}/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${base}/privacy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${base}/contact.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemap, 'utf-8');
console.log(`Updated sitemap.xml (${published.length} posts + static).`);

console.log(`Done. ${posts.length} posts built.`);
