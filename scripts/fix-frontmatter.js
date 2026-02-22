/**
 * contents/posts/*.md 전수 수정
 * - date: 01번=2026-01-01, 02번=2026-01-02, ... 60번=2026-03-01 (60일 연속)
 * - title: "게시글 01" ~ "게시글 60"
 */
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'contents', 'posts');
const files = fs.readdirSync(POSTS_DIR)
  .filter(f => /^\d+[-_].*\.md$/.test(f))
  .sort((a, b) => parseInt(a.split(/[-_]/)[0], 10) - parseInt(b.split(/[-_]/)[0], 10));

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const num = i + 1;
  const d = new Date(2026, 0, 1 + num - 1);
  const dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const title = `게시글 ${String(num).padStart(2, '0')}`;

  const fp = path.join(POSTS_DIR, f);
  let raw = fs.readFileSync(fp, 'utf8');
  raw = raw.replace(/^title:\s*[^\n]+/m, `title: "${title}"`);
  raw = raw.replace(/^date:\s*[\d-]+/m, `date: ${dateStr}`);
  fs.writeFileSync(fp, raw);
  console.log(`${f} → date: ${dateStr}, title: "${title}"`);
}
