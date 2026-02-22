/**
 * 60개 md 파일 날짜 순차 할당
 * p01=2026-02-18, p02=2026-02-19, ... p60=2026-04-18
 */
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'contents', 'posts');
const START = new Date(2026, 1, 18); // 2026-02-18

const files = fs.readdirSync(POSTS_DIR)
  .filter(f => /^\d+[-_].*\.md$/.test(f))
  .sort((a, b) => parseInt(a.split(/[-_]/)[0], 10) - parseInt(b.split(/[-_]/)[0], 10));

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const num = i + 1;
  const d = new Date(START);
  d.setDate(d.getDate() + i);
  const dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const fp = path.join(POSTS_DIR, f);
  let raw = fs.readFileSync(fp, 'utf-8');
  raw = raw.replace(/^date:\s*[\d-]+/m, `date: ${dateStr}`);
  fs.writeFileSync(fp, raw, 'utf-8');
  console.log(`${String(num).padStart(2, '0')} → ${dateStr}`);
}
