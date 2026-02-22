/**
 * 60개 md 파일 제목 복구: H1 전체 사용 (slice/자르기 금지)
 * title = "NN. " + h1
 */
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'contents', 'posts');
const files = fs.readdirSync(POSTS_DIR)
  .filter(f => /^\d+[-_].*\.md$/.test(f))
  .sort((a, b) => parseInt(a.split(/[-_]/)[0], 10) - parseInt(b.split(/[-_]/)[0], 10));

function toHumanTitle(num, h1) {
  if (!h1 || !h1.trim()) return `${String(num).padStart(2, '0')}. 인사이트`;
  const key = h1.trim().replace(/_/g, ' ');
  return `${String(num).padStart(2, '0')}. ${key}`;
}

for (let i = 0; i < files.length; i++) {
  const f = files[i];
  const num = i + 1;
  const fp = path.join(POSTS_DIR, f);
  const raw = fs.readFileSync(fp, 'utf-8');
  const bodyMatch = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);
  const body = bodyMatch ? bodyMatch[1] : raw;
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = toHumanTitle(num, h1);

  const newRaw = raw.replace(/^title:\s*[^\n]+/m, `title: "${title}"`);
  fs.writeFileSync(fp, newRaw, 'utf-8');
  console.log(`${String(num).padStart(2, '0')} → ${title}`);
}
