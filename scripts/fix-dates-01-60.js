/**
 * 1~60번 포스팅 날짜를 2026-01-01 ~ 2026-02-21 사이로 과거형 일괄 수정
 * 구글 서치콘솔 대응용
 */
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'contents', 'posts');

// 60개 포스트 날짜 매핑: 2026-01-01 ~ 2026-02-21 (하루 1~2개씩)
const DATE_MAP = {};
// 01-20: 2026-01-01 ~ 01-20
for (let n = 1; n <= 20; n++) {
  DATE_MAP[n] = `2026-01-${String(n).padStart(2, '0')}`;
}
// 21-31: 2026-01-21 ~ 01-31
for (let n = 21; n <= 31; n++) {
  DATE_MAP[n] = `2026-01-${String(n).padStart(2, '0')}`;
}
// 32-40: 2026-02-01 ~ 02-09
for (let n = 32; n <= 40; n++) {
  DATE_MAP[n] = `2026-02-${String(n - 31).padStart(2, '0')}`;
}
// 41-60: 2026-02-10 ~ 02-21 (일부 하루 2개)
DATE_MAP[41] = '2026-02-10';
DATE_MAP[42] = '2026-02-11';
DATE_MAP[43] = '2026-02-12';
DATE_MAP[44] = '2026-02-13';
DATE_MAP[45] = '2026-02-14';
DATE_MAP[46] = '2026-02-15';
DATE_MAP[47] = '2026-02-16';
DATE_MAP[48] = '2026-02-16';
DATE_MAP[49] = '2026-02-17';
DATE_MAP[50] = '2026-02-17';
DATE_MAP[51] = '2026-02-18';
DATE_MAP[52] = '2026-02-18';
DATE_MAP[53] = '2026-02-19';
DATE_MAP[54] = '2026-02-19';
DATE_MAP[55] = '2026-02-20';
DATE_MAP[56] = '2026-02-20';
DATE_MAP[57] = '2026-02-21';
DATE_MAP[58] = '2026-02-21';
DATE_MAP[59] = '2026-02-21';
DATE_MAP[60] = '2026-02-21';

// 21-31 재계산
for (let n = 21; n <= 31; n++) {
  DATE_MAP[n] = `2026-01-${String(n).padStart(2, '0')}`;
}

const files = fs.readdirSync(POSTS_DIR).filter((f) => /^\d+[-_].*\.md$/.test(f));
const numToFile = {};
files.forEach((f) => {
  const num = parseInt(f.split(/[-_]/)[0], 10);
  if (num >= 1 && num <= 60) numToFile[num] = f;
});

let updated = 0;
for (let n = 1; n <= 60; n++) {
  const f = numToFile[n];
  if (!f) {
    console.log(`[SKIP] ${n}번 파일 없음`);
    continue;
  }
  const newDate = DATE_MAP[n];
  if (!newDate) {
    console.log(`[SKIP] ${n}번 날짜 매핑 없음`);
    continue;
  }
  const fp = path.join(POSTS_DIR, f);
  let raw = fs.readFileSync(fp, 'utf-8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) {
    console.log(`[SKIP] ${n}: frontmatter 없음`);
    continue;
  }
  let front = m[1];
  const oldDateMatch = front.match(/^date:\s*(.+)$/m);
  const oldDate = oldDateMatch ? oldDateMatch[1].trim() : '';
  if (oldDate === newDate) {
    console.log(`[OK] ${n}: ${f} 이미 ${newDate}`);
    continue;
  }
  if (oldDateMatch) {
    front = front.replace(/^date:\s*.+$/m, `date: ${newDate}`);
  } else {
    front = front + `\ndate: ${newDate}`;
  }
  raw = '---\n' + front + '\n---\n' + m[2];
  fs.writeFileSync(fp, raw, 'utf-8');
  console.log(`[UPD] ${n}: ${f} ${oldDate || '(없음)'} → ${newDate}`);
  updated++;
}
console.log(`\n완료. ${updated}개 파일 수정됨.`);
console.log('검수: 01번=', DATE_MAP[1], ', 30번=', DATE_MAP[30], ', 60번=', DATE_MAP[60]);
