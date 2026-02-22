/**
 * [데이터 전면 재구조화]
 * - temp_posts/ 생성, 60개 수집
 * - contents/posts 비우기
 * - 01~60번 새 규칙으로 재배치 (번호-제목.md)
 *
 * 01~20: 제미니 메모글 (old 01~20 .txt) → 2026-01-01 ~ 01-20
 * 21~40: 19일 원고 (old 41~60 .md) → 2026-01-21 ~ 02-15
 * 41~60: 오늘 원고 (old 21~40 .md) → 2026-02-16 ~ 02-21
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const POSTS = path.join(ROOT, 'contents', 'posts');
const TEMP = path.join(ROOT, 'temp_posts');

// 21~40 dates (20 files): 01-21 ~ 02-15
const D21_40 = ['01-21','01-22','01-23','01-24','01-25','01-26','01-27','01-28','01-29','01-30','01-31','02-01','02-02','02-03','02-05','02-06','02-08','02-09','02-12','02-15'];
// 41~60 dates (20 files): 02-16 ~ 02-21
const D41_60 = ['02-16','02-16','02-16','02-16','02-17','02-17','02-17','02-18','02-18','02-18','02-18','02-19','02-19','02-19','02-20','02-20','02-20','02-20','02-21','02-21'];

function sanitize(s) {
  return s.replace(/[\\/:*?"<>|]/g, '-').replace(/\s+/g, '_').slice(0, 80);
}

function getTitleFromTxt(content) {
  const first = content.split('\n')[0].trim();
  return first.replace(/^#+\s*/, '') || 'untitled';
}

function getTitleFromMd(content) {
  const m = content.match(/^title:\s*["']?([^"'\n]+)["']?/m);
  return m ? m[1].trim() : content.split('\n')[0].replace(/^#+\s*/, '') || 'untitled';
}

// 1. temp_posts 생성
if (!fs.existsSync(TEMP)) fs.mkdirSync(TEMP, { recursive: true });
console.log('1. temp_posts/ 생성 완료');

// 2. 60개 파일 수집 (중복 제거)
const all = fs.readdirSync(POSTS);
const byNum = {};
for (const f of all) {
  const m = f.match(/^(\d{2})_/);
  if (!m) continue;
  const n = parseInt(m[1], 10);
  if (n >= 1 && n <= 60 && !byNum[n]) {
    byNum[n] = f;
  }
}

// 제미니 01~20, 19일 41~60, 오늘 21~40
const gemini = [];
const day19 = [];
const today = [];
for (let i = 1; i <= 20; i++) {
  if (byNum[i]) gemini.push({ old: byNum[i], num: i });
}
for (let i = 41; i <= 60; i++) {
  if (byNum[i]) day19.push({ old: byNum[i], num: i });
}
for (let i = 21; i <= 40; i++) {
  if (byNum[i]) today.push({ old: byNum[i], num: i });
}

// temp로 복사
for (const g of gemini) {
  fs.copyFileSync(path.join(POSTS, g.old), path.join(TEMP, g.old));
}
for (const d of day19) {
  fs.copyFileSync(path.join(POSTS, d.old), path.join(TEMP, d.old));
}
for (const t of today) {
  fs.copyFileSync(path.join(POSTS, t.old), path.join(TEMP, t.old));
}
console.log(`2. 수집: 제미니 ${gemini.length}, 19일 ${day19.length}, 오늘 ${today.length}`);

// 3. contents/posts 비우기
for (const f of fs.readdirSync(POSTS)) {
  fs.unlinkSync(path.join(POSTS, f));
}
console.log('3. contents/posts 비우기 완료');

// 4. temp → contents/posts 재배치
const out = [];

// 01~20: 제미니
for (let i = 0; i < gemini.length; i++) {
  const g = gemini[i];
  const src = path.join(TEMP, g.old);
  const raw = fs.readFileSync(src, 'utf8');
  const title = g.old.endsWith('.txt') ? getTitleFromTxt(raw) : getTitleFromMd(raw);
  const newNum = String(i + 1).padStart(2, '0');
  const newName = `${newNum}-${sanitize(title)}.md`;
  const dateStr = `2026-01-${newNum}`;
  let body = raw;
  if (g.old.endsWith('.txt')) {
    body = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${dateStr}
---

${raw}`;
  } else {
    body = raw.replace(/^date:\s*[\d-]+/m, `date: ${dateStr}`);
  }
  fs.writeFileSync(path.join(POSTS, newName), body);
  out.push(newName);
}

// 21~40: 19일 원고
for (let i = 0; i < day19.length; i++) {
  const d = day19[i];
  const src = path.join(TEMP, d.old);
  const raw = fs.readFileSync(src, 'utf8');
  const title = getTitleFromMd(raw);
  const newNum = String(21 + i).padStart(2, '0');
  const newName = `${newNum}-${sanitize(title)}.md`;
  const body = raw.replace(/^date:\s*[\d-]+/m, `date: 2026-${D21_40[i]}`);
  fs.writeFileSync(path.join(POSTS, newName), body);
  out.push(newName);
}

// 41~60: 오늘 원고
for (let i = 0; i < today.length; i++) {
  const t = today[i];
  const src = path.join(TEMP, t.old);
  const raw = fs.readFileSync(src, 'utf8');
  const title = getTitleFromMd(raw);
  const newNum = String(41 + i).padStart(2, '0');
  const newName = `${newNum}-${sanitize(title)}.md`;
  const body = raw.replace(/^date:\s*[\d-]+/m, `date: 2026-${D41_60[i]}`);
  fs.writeFileSync(path.join(POSTS, newName), body);
  out.push(newName);
}

console.log(`4. 재배치 완료: ${out.length}개`);
out.sort().forEach((f, i) => console.log(`   ${i + 1}. ${f}`));
