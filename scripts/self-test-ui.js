/**
 * Self-Test: 4가지 UI/UX 수정 검증
 * 실행: node scripts/self-test-ui.js
 * 
 * Task 1: 홈화면 타이포그래피 - ellipsis/nowrap 제거
 * Task 2: 네비게이션 - About→Calendar 버그
 * Task 3: 인사이트→메모/루틴 더블클릭
 * Task 4: 포스팅 줄바꿈/마크다운
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let passed = 0;
let failed = 0;
const results = [];

function ok(name, msg) {
  passed++;
  results.push({ ok: true, name, msg });
  console.log('  \x1b[32m✓\x1b[0m', name, msg || '');
}
function fail(name, msg) {
  failed++;
  results.push({ ok: false, name, msg });
  console.log('  \x1b[31m✗\x1b[0m', name, msg || '');
}

// --- Task 1: 홈화면 ellipsis/nowrap ---
function test1() {
  console.log('\n--- Task 1: 홈화면 타이포그래피 ---');
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const styleCss = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');

  const homeValueDesc = /\.home-value-desc[^}]*white-space:\s*normal/;
  const homeHero = /\.home-hero-title|\.home-hero-subtitle/;
  const hasEllipsisOnHomeValue = /\.home-value-desc[^}]*text-overflow:\s*ellipsis/;
  const hasNowrapOnHomeValue = /\.home-value-desc[^}]*white-space:\s*nowrap/;

  if (styleCss.includes('.home-value-desc') && styleCss.match(homeValueDesc)) {
    ok('Task 1', 'home-value-desc에 white-space: normal 적용됨');
  } else if (!styleCss.includes('.home-value-desc')) {
    ok('Task 1', 'home-value-desc 정의 없음(인라인/다른 방식)');
  } else {
    fail('Task 1', 'home-value-desc에 ellipsis/nowrap 제거 필요');
  }

  if (indexHtml.includes('truncate') && indexHtml.includes('whitespace-nowrap')) {
    fail('Task 1', 'index.html 기능 카드에 truncate/nowrap 남아있음');
  } else {
    ok('Task 1', 'index.html 기능 카드에 truncate/nowrap 없음');
  }
}

// --- Task 2: 네비게이션 About 경로 ---
function test2() {
  console.log('\n--- Task 2: 네비게이션 About 경로 ---');
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const aboutHtml = fs.readFileSync(path.join(ROOT, 'about', 'about.html'), 'utf8');
  const appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');

  const aboutHref = /href="[^"]*about[^"]*"/;
  const hasAboutLink = indexHtml.includes('About') && (indexHtml.match(/href="\/about\/about\.html"/) || indexHtml.match(/href="about\/about\.html"/));
  const ariaPathFix = appJs.includes('hFile') && appJs.includes('split(\'/\').pop()');

  if (hasAboutLink) {
    ok('Task 2', 'About 링크가 /about/about.html로 설정됨');
  } else {
    fail('Task 2', 'About 링크 href 확인 필요');
  }
  if (ariaPathFix) {
    ok('Task 2', 'aria-current 경로 매칭 개선(hFile)');
  } else {
    fail('Task 2', 'aria-current 경로 정규화 권장');
  }
}

// --- Task 3: 인사이트→메모/루틴 단일클릭 ---
function test3() {
  console.log('\n--- Task 3: 인사이트→메모/루틴 단일클릭 ---');
  const appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');

  const hasSyncWidget = appJs.includes("startWidget === 'memo'") && appJs.includes('showMemoPage()');
  const noSetTimeout100 = !appJs.match(/setTimeout\s*\(\s*function\s*\(\)\s*\{[^}]*showMemoPage|showRoutinePage/);
  const hasSyncRoutine = appJs.includes("startWidget === 'routine'") && appJs.includes('showRoutinePage()');

  if (hasSyncWidget && hasSyncRoutine) {
    ok('Task 3', 'widget=memo/routine URL 파라미터로 즉시 showMemoPage/showRoutinePage 호출');
  } else {
    fail('Task 3', 'startWidget 동기 처리 확인 필요');
  }
}

// --- Task 4: 포스팅 줄바꿈/마크다운 ---
function test4() {
  console.log('\n--- Task 4: 포스팅 줄바꿈 ---');
  const buildPosts = fs.readFileSync(path.join(ROOT, 'scripts', 'build-posts.js'), 'utf8');
  const hasBreaksFalse = buildPosts.includes('breaks: false');
  const hasParagraphMargin = buildPosts.includes('insight-card p') && buildPosts.includes('margin');

  if (hasBreaksFalse) {
    ok('Task 4', 'marked breaks: false (불필요한 <br> 억제)');
  } else {
    fail('Task 4', 'breaks: true → false 변경 권장');
  }
  if (hasParagraphMargin) {
    ok('Task 4', 'insight-card p margin으로 단락 간격');
  } else {
    fail('Task 4', '단락 margin 설정 확인');
  }
}

test1();
test2();
test3();
test4();

console.log('\n--- 결과 ---');
console.log('통과:', passed, '실패:', failed);
process.exit(failed > 0 ? 1 : 0);
