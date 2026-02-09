// app.js
/* 메모위젯 v0.8.2 — 홈패널/달력/메모/ToDo + 팝아웃/위젯 동기화 */
function el(t,c,txt){const x=document.createElement(t);if(c)x.className=c;if(txt!=null)x.textContent=txt;return x;}
const DEFAULT_COLOR='', DONE_COLOR='#9aa5b1';
// ...existing code...
const homeIntroSection=document.getElementById('homeIntroSection');
const calendarPage=document.getElementById('calendarPage');
const memoPage=document.getElementById('memoPage');
const memoWritePage=document.getElementById('memoWritePage');
const routinePage=document.getElementById('routinePage');
const timerPage=document.getElementById('timerPage');
const rightPane=document.querySelector('.right');

var CONTENT_FOOTER_TEXTS={
  home:'Jay Calendar는 일정·할 일·메모를 한 화면에서 관리하고, 위젯으로 띄워 쓸 수 있는 웹 서비스입니다. 달력, 루틴, 메모, 타이머 등을 필요에 맞게 활용할 수 있습니다.',
  calendar:'달력에서 날짜를 선택하면 해당 날짜의 일정과 할 일을 등록·체크할 수 있습니다. 이달의 목표를 상단에 두고 매일 확인할 수 있습니다.',
  routine:`성공을 만드는 뇌 과학, 루틴의 힘

"하고 싶은 일이 있다면 바로 하라. 생각이 뒤따라 오기 전에.."— 멜 로빈스, <5초의 법칙> 중 —

오늘도 더 나은 내일을 위해 분투하고 계시는 J-캘린더 사용자님. 우리가 매일 반복하는 작은 습관은 단순한 행동을 넘어 뇌의 신경 가소성(Neuroplasticity)을 변화시키는 강력한 힘을 가지고 있다는 것을 알고 계시나요?

뇌는 반복되는 행동을 수행할 때 에너지를 최소화하려는 경향이 있습니다. 이는 반대로 습관화되지 않은 행동에 대해선 뇌 에너지를 과도하게 소모한다는 뜻입니다. 해야 할 일이 있다면 생각을 최소한으로 줄이고 바로 행동하는 것이 성공을 위한 뇌 과학적 기술입니다.

J-캘린더의 루틴 기능은 여러분의 목표와 이를 위한 작업을 빠르고 쉽게 습관화할 수 있도록 설계되었습니다. 이를 통해 형성된 '루틴'은 의지력이라는 한정된 에너지를 소모하지 않고도 우리가 목표에 도달하게 돕습니다. 루틴을 설정하고 이를 시각화함으로써, 뇌가 새로운 습관을 거부감 없이 받아들일 수 있도록 하였습니다. 특히 아침 루틴을 설정하는 것은 하루의 결정권을 스스로 쥐는 행위와 같습니다.

매일 나만의 루틴을 따라가는 것만으로도 도파민 시스템이 긍정적으로 반응하여 생산성이 비약적으로 향상됩니다. 처음에는 아주 작은 일부터 시작해 보세요. 물 한 잔 마시기, 1분 명상하기와 같은 사소한 루틴이 쌓여 결국 당신의 삶을 바꾸는 거대한 변화를 만들어낼 것입니다.

하루하루는 작을 수 있으나 그것들이 모이면 삶을 변화시키는 기적이 됩니다. 지금 이 순간의 작은 실천이 미래의 당신을 만듭니다. 성장을 향해 나아가는 모든 J-캘린더 사용자님을 응원합니다.`,
  memo:`망각을 이기는 기록의 미학, 제2의 뇌 만들기

여러분은 인간의 뇌에 대해 어떻게 생각하시나요? 인간의 뇌는 정보를 단순히 저장하는 창고가 아니라, 새로운 아이디어를 생산하는 공장입니다. 최신 연구 결과에 따르면 인간은 하루에 평균 6,200번 이상의 생각을 하며, 일부 학계에서는 수만 가지의 생각이 머릿속을 스쳐 지나간다고 설명합니다.

하지만 중요한 부분은 그토록 많은 생각이 찰나에 지나가지만, 이를 즉시 기록하지 않으면 대부분 망각의 강으로 사라지고 만다는 것입니다. J-캘린더의 메모 기능은 단순히 글자를 적는 공간을 넘어, 당신의 창의적인 영감을 보관하는 '제2의 뇌' 역할을 수행합니다. 기록은 복잡한 머릿속을 정리해 줄 뿐만 아니라, 뇌의 인지 부하(Cognitive Load)를 획기적으로 줄여주어 우리가 현재 집중해야 할 일에 더 많은 에너지를 쏟을 수 있게 해줍니다.

성공한 사람들의 공통점 중 하나는 사소한 영감도 놓치지 않는 기록 습관입니다. 갑자기 떠오른 아이디어나 잊지 말아야 할 중요한 일들을 J-캘린더에 즉시 기록해 보세요. 정돈되지 않은 생각 조각들이 메모장에 쌓이다 보면, 어느 순간 그것들이 서로 연결되어 거대한 해결책이나 새로운 기회로 변모하는 경험을 하게 될 것입니다.

메모하는 습관이 좋다는 것은 모두 알지만, 그것을 꾸준히 실천하는 사람은 그에 비해 매우 드뭅니다. 매일의 루틴과 그에 대한 피드백, 그리고 순식간에 왔다 사라지는 소중한 영감들.

기록은 미래의 자신에게 보내는 가장 신뢰할 수 있는 메시지이자 선물입니다. 당신의 소중한 생각들이 흩어지지 않도록, J-캘린더가 그 자리를 든든하게 지키겠습니다. 당신의 모든 기록은 성장의 발판이 될 것이며, 그 과정 속에서 더 선명해진 목표를 발견하시길 진심으로 응원합니다.`,
  timer:'타이머와 스탑워치로 집중 시간·운동·휴식 등을 측정할 수 있습니다. 여러 타이머를 동시에 사용할 수 있습니다.'
};
function setContentFooterText(key){
  var text=CONTENT_FOOTER_TEXTS[key]||'';
  document.querySelectorAll('.content-footer-text').forEach(function(el){ el.textContent=text; });
}

function showHomeIntro(){
  homeIntroSection?.classList.remove('hidden');
  calendarPage?.classList.add('hidden');
  memoPage?.classList.add('hidden');
  memoWritePage?.classList.add('hidden');
  routinePage?.classList.add('hidden');
  timerPage?.classList.add('hidden');
  rightPane?.classList.add('hidden');
  setContentFooterText('home');
}
function showCalendarPage(){
  homeIntroSection?.classList.add('hidden');
  calendarPage?.classList.remove('hidden');
  memoPage?.classList.add('hidden');
  memoWritePage?.classList.add('hidden');
  routinePage?.classList.add('hidden');
  timerPage?.classList.add('hidden');
  rightPane?.classList.remove('hidden');
  renderCalendar?.();
  renderRight?.();
  renderMonthlyGoals?.();
  setContentFooterText('calendar');
}
function showMemoPage(){
  homeIntroSection?.classList.add('hidden');
  calendarPage?.classList.add('hidden');
  memoPage?.classList.remove('hidden');
  memoWritePage?.classList.add('hidden');
  routinePage?.classList.add('hidden');
  timerPage?.classList.add('hidden');
  rightPane?.classList.add('hidden');
  initMemoPage?.();
  setContentFooterText('memo');
}
function showMemoWritePage(editMode=false,itemId=null,idx=null,dstr=null){
  homeIntroSection?.classList.add('hidden');
  calendarPage?.classList.add('hidden');
  memoPage?.classList.add('hidden');
  memoWritePage?.classList.remove('hidden');
  routinePage?.classList.add('hidden');
  timerPage?.classList.add('hidden');
  rightPane?.classList.add('hidden');
  initMemoWritePage?.(editMode,itemId,idx,dstr);
  setContentFooterText('memo');
}
function showRoutinePage(){
  homeIntroSection?.classList.add('hidden');
  calendarPage?.classList.add('hidden');
  memoPage?.classList.add('hidden');
  memoWritePage?.classList.add('hidden');
  routinePage?.classList.remove('hidden');
  timerPage?.classList.add('hidden');
  rightPane?.classList.add('hidden');
  initRoutinePage?.();
  setContentFooterText('routine');
}
function showTimerPage(){
  homeIntroSection?.classList.add('hidden');
  calendarPage?.classList.add('hidden');
  memoPage?.classList.add('hidden');
  memoWritePage?.classList.add('hidden');
  routinePage?.classList.add('hidden');
  timerPage?.classList.remove('hidden');
  rightPane?.classList.add('hidden');
  initTimersPage?.();
  setContentFooterText('timer');
}
// ...existing code...

document.addEventListener('DOMContentLoaded',()=>{
  // ...existing code...
  const openCalWidgetBtn=document.getElementById('openCalendarWidgetBtn');

  if(openCalWidgetBtn){
    openCalWidgetBtn.onclick=()=>{
      widgetCalendar?.({popupOnly:true});
      trackMenuPV('nav:widgetCalendar');
    };
  }
  
  // 메뉴 버튼 설정 (href가 있는 링크형 메뉴는 위젯 핸들러 적용하지 않음 → 페이지 이동)
  document.querySelectorAll('.menu-btn, .menu-button').forEach(b=>{
    b.onclick=(e)=>{
      if(b.tagName==='A'&&b.getAttribute('href')) return;
      const t=b.dataset.widget;
      trackMenuPV(`menu:${t||'unknown'}`);
      showUsage(t);
      if(t==='calendar'){ showCalendarPage(); }
      if(t==='memo') showMemoPage();
      if(t==='routine') showRoutinePage();
      if(t==='todo') widgetTodo?.();
      if(t==='timer') showTimerPage();
      if(t==='alarm') widgetAlarm?.();
      if(t==='stopwatch') widgetStopwatch?.();
    };
  });

  // 홈 메뉴 클릭 핸들러
  const homeBtn = document.getElementById('homeBtn');
  if(homeBtn) {
    homeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showHomeIntro();
      trackMenuPV('menu:home');
    });
  }

  // 루틴 추가 버튼 핸들러 (초기화)
  const addRoutineBtn = document.getElementById('addRoutineBtn');
  if(addRoutineBtn) {
    addRoutineBtn.onclick = () => {
      console.log('루틴 추가 버튼 클릭됨');
      showRoutineModal();
    };
  }
  
  // 초기에는 홈 소개 화면 노출
  showHomeIntro();

  // ...existing code...
});

// ...existing code...
const effectiveColor=(it)=> it.done?DONE_COLOR:(it.color||DEFAULT_COLOR);
const EMOJI_ICON='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z"/></svg>';
const setEmojiIcon=(btn,val)=>{
  if(!btn) return;
  if(val){
    btn.textContent=val;
  } else {
    btn.innerHTML=EMOJI_ICON;
  }
};

function fmtLocalDate(d){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function parseLocalDate(str){ if(!str) return new Date(); const [y,m,d]=str.split('-').map(Number); return new Date(y,(m||1)-1,d||1); }
const normalizeDate=(d)=>{ const nd=new Date(d); nd.setHours(0,0,0,0); return nd; };
function ymLabel(y,m){return `${y}년 ${m+1}월`;}
function fmtAmPm(date){let h=date.getHours();const m=date.getMinutes();const ap=h>=12?'오후':'오전';const hh=(h%12)||12;return `${ap} ${hh}:${String(m).padStart(2,'0')}`;}

const ST={viewYear:new Date().getFullYear(),viewMonth:new Date().getMonth(),selected:new Date(),linesHint:4,cellHeight:120,eventEmoji:'',eventColor:'',todoEmoji:'',todoColor:'',reminderEmoji:'',reminderColor:''};
const $={
  ym:document.getElementById('headerYmLabel'),
  grid:document.getElementById('calendarGrid'),
  todayBtn:document.getElementById('todayBtn'),
  prev:document.getElementById('prevMonth'),
  next:document.getElementById('nextMonth'),
  reminderList:document.getElementById('reminderList'),
  selText:document.getElementById('selectedDateText'),
  eventMenuBtn:document.getElementById('eventMenuBtn'),
  eventStartDate:document.getElementById('eventStartDate'),
  eventEndDate:document.getElementById('eventEndDate'),
  eventTime:document.getElementById('eventTime'),
  eventAlarm:document.getElementById('eventAlarm'),
  eventRepeatBtn:document.getElementById('eventRepeatBtn'),
  todoInput:document.getElementById('todoInput'),
  todoAddBtn:document.getElementById('todoAddBtn'),
  todoColorBtn:document.getElementById('todoColorBtn'),
  todoEmojiBtn:document.getElementById('todoEmojiBtn'),
  todoStartDate:document.getElementById('todoStartDate'),
  todoEndDate:document.getElementById('todoEndDate'),
  todoList:document.getElementById('todoList'),
  memoDate:document.getElementById('memoDate'),
  memoInput:document.getElementById('memoInput'),
  memoAdd:document.getElementById('memoAddBtn'),
  memoList:document.getElementById('memoList'),
  calWrap:document.querySelector('.calendar'),
  host:document.getElementById('widgetHost'),
  calSizeSlider:document.getElementById('calSizeSlider'),
};

// 날짜 필드 초기값 설정
// 일정/투두 탭 상태
let scheduleTab = 'event'; // 'event' 또는 'todo'

const initDateStr = fmtLocalDate(ST.selected);
if($.eventStartDate) $.eventStartDate.value = initDateStr;
if($.eventEndDate) $.eventEndDate.value = initDateStr;
if($.todoStartDate) $.todoStartDate.value = initDateStr;
if($.todoEndDate) $.todoEndDate.value = initDateStr;
if($.memoDate) $.memoDate.value = initDateStr;
if($.selText) $.selText.textContent = initDateStr;

const kTodo=(d)=>`memo2.todos.${d}`, kMemo=(d)=>`memo2.memos.${d}`;
const storeCache=new Map();
const cloneDefault=(val)=>{
  if(Array.isArray(val)) return [...val];
  return (val && typeof val==='object')?{...val}:val;
};
const readFromStore=(key,def=[])=>{
  if(storeCache.has(key)) return storeCache.get(key);
  let parsed=cloneDefault(def);
  try{
    const raw=localStorage.getItem(key);
    if(raw!=null) parsed=JSON.parse(raw);
  }catch(err){
    console.warn('storage parse fail', err);
  }
  storeCache.set(key,parsed);
  return parsed;
};
const writeToStore=(key,val)=>{
  storeCache.set(key,val);
  localStorage.setItem(key,JSON.stringify(val));
};
const invalidateStoreCache=(key)=>{
  if(!key){
    storeCache.clear();
    return;
  }
  storeCache.delete(key);
};
const get=(k,def=[])=>readFromStore(k,def);
const set=(k,v)=>writeToStore(k,v);
if(typeof window!=='undefined'){
  window.addEventListener('storage',(evt)=>{
    if(evt.key){
      storeCache.delete(evt.key);
    }else{
      storeCache.clear();
    }
  });
}
const isMobileViewport=()=>{
  if(typeof window==='undefined') return false;
  try{
    const mq=window.matchMedia('(max-width: 768px)');
    if(mq?.matches) return true;
  }catch{}
  try{
    return /Mobi|Android/i.test(window.navigator?.userAgent||'');
  }catch{}
  return false;
};
const runWhenIdle=(task,timeout=800)=>{
  if(typeof window==='undefined'){ task(); return; }
  if('requestIdleCallback' in window){
    requestIdleCallback(()=>task(),{timeout});
  }else{
    setTimeout(task,timeout);
  }
};

// 메뉴 클릭 시 페이지뷰 유사 카운터 (광고 효과 확인용)
const PV_KEY='memo2.menuPV';
function trackMenuPV(label){
  try{
    const snap=get(PV_KEY,{count:0,events:[]});
    snap.count+=1;
    snap.events.unshift({label,ts:Date.now()});
    if(snap.events.length>100) snap.events.length=100;
    set(PV_KEY,snap);
    if(window.memo2PVLogEnabled){
      const ts=new Date().toISOString();
      console.log(`[menuPV] ${label} | total=${snap.count} | ${ts}`);
    }
  }catch(err){ console.warn('menuPV track fail', err); }
}
window.memo2PVStats=()=>{ const snap=get(PV_KEY,{count:0,events:[]}); console.table(snap.events.map(e=>({label:e.label, time:new Date(e.ts).toLocaleString()}))); console.log('total', snap.count); return snap; };
window.memo2ClearPV=()=>{ localStorage.removeItem(PV_KEY); invalidateStoreCache(PV_KEY); console.log('menuPV cleared'); };

/* ── 전역 앱 채널 ── */
const APP_CH='memo2.app';
const appBC=('BroadcastChannel' in window)? new BroadcastChannel(APP_CH):null;
function postApp(msg){ if(appBC) appBC.postMessage(msg); }
function setGlobalSelected(d){
  const s=typeof d==='string'?d:fmtLocalDate(d);
  localStorage.setItem('memo2.selected',s);
  postApp({type:'select',date:s});
}
if(!localStorage.getItem('memo2.selected')) localStorage.setItem('memo2.selected', fmtLocalDate(new Date()));

/* ── 달력 ── */
const dim=(y,m)=>new Date(y,m+1,0).getDate();
function calcCellHeight(){
  const weekdays=$.calWrap?.querySelector('.calendar__weekdays');
  const wrapH=$.calWrap?.clientHeight||0;
  const widthBase=$.grid?.clientWidth||$.calWrap?.clientWidth||0;
  const rows=6;
  // Reduced min height further so ads below calendar stay visible on desktop
  const minHeight=isMobileViewport()?80:90;
  let candidate=minHeight;
  if(widthBase){
    const perCol=Math.floor(widthBase/7);
    candidate=Math.max(candidate, perCol+10);
  }
  if(wrapH){
    const usable=wrapH-(weekdays?.offsetHeight||0)-12;
    if(usable>0){
      candidate=Math.max(candidate, Math.floor(usable/rows));
    }
  }
  return Math.min(Math.max(candidate,minHeight),125);
}
function calcMaxLines(){
  const cellH=ST.cellHeight||calcCellHeight();
  const usable=cellH-34;
  return Math.max(1,Math.floor(usable/18));
}
function renderCalendar(){
  const y=ST.viewYear,m=ST.viewMonth;
  if($.ym) $.ym.textContent=`🗓 ${ymLabel(y,m)}`;
  $.grid.innerHTML='';
  const first=new Date(y,m,1),start=first.getDay(),total=dim(y,m);
  const prevTotal=new Date(y,m,0).getDate(),cells=42; // 6주 고정
  
  const cellH=calcCellHeight();
  ST.cellHeight=cellH;

  for(let i=0;i<cells;i++){
    const cell=el('div','day'); let dNum,dObj,out=false;
    cell.style.height=cellH+'px';
    if(i<start){dNum=prevTotal-start+1+i; dObj=new Date(y,m-1,dNum); out=true;}
    else if(i>=start+total){dNum=i-(start+total)+1; dObj=new Date(y,m+1,dNum); out=true;}
    else{dNum=i-start+1; dObj=new Date(y,m,dNum);}
    cell.append(el('div','day__num',dNum));
    if(out) cell.classList.add('day--outside');
    if(fmtLocalDate(dObj)===fmtLocalDate(new Date())) cell.classList.add('day--today');
    if(fmtLocalDate(dObj)===fmtLocalDate(ST.selected)) cell.classList.add('day--selected');

    const dstr=fmtLocalDate(dObj);
    const allItems=get(kTodo(dstr));
    const memoItems=get(kMemo(dstr));
    const isEvent=(t)=>Object.prototype.hasOwnProperty.call(t,'time');
    const events=allItems.filter(isEvent);
    const todos=allItems.filter(t=>!isEvent(t));
    const combined=[...events,...todos];

    if(Array.isArray(memoItems) && memoItems.length){
      const memoFlag=el('span','memo-flag','🗒️');
      memoFlag.title=`메모 ${memoItems.length}개`;
      memoFlag.setAttribute('aria-label',`메모 ${memoItems.length}개`);
      memoFlag.dataset.count=String(memoItems.length);
      cell.appendChild(memoFlag);
    }
    
    if(combined.length){
      // 일정/투두 분리 표시
      const labels=el('div','labels');
      labels.style.gap='0';
      labels.style.padding='0';
      const MAX_LINES=7;
      let linesLeft=MAX_LINES;
      const eventItems = linesLeft>0 ? events.slice(0,linesLeft) : [];
      linesLeft-=eventItems.length;
      if(eventItems.length){
        eventItems.forEach(t=>{
          const row=el('div','label');
          row.style.margin='0';
          row.style.padding='0';
          row.style.width='100%';
          const content=el('div','label-content');
          content.style.padding='0';
          content.style.margin='0';
          content.style.lineHeight='1.2';
          content.style.fontSize='10px';
          content.style.width='100%';
          content.style.borderRadius='0';
          if(t.emoji){
            const emoji=el('span','label-emoji',t.emoji);
            content.appendChild(emoji);
          }
          const txt=el('span','label-text',t.text);
          content.appendChild(txt);
          txt.style.color = '#000';
          if(t.color==='rainbow'){
            content.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
          } else {
            content.style.backgroundColor=t.color||'transparent';
          }
          content.onclick=(e)=>{
            e.stopPropagation();
            if(isMobileViewport()){
              showEventDetailModal(t,allItems,dstr);
            }else{
              showEventMenu(content,t,allItems,dstr,()=>{
                txt.style.color='#000';
                if(t.color==='rainbow'){
                  content.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
                }else{
                  content.style.background='';
                  content.style.backgroundColor=t.color||'transparent';
                }
              });
            }
          };
          content.style.cursor='pointer';
          row.appendChild(content);
          labels.appendChild(row);
        });
      }
      // 투두 리스트
      const todoItems = linesLeft>0 ? todos.slice(0,linesLeft) : [];
      linesLeft=Math.max(0,linesLeft-todoItems.length);
      if(todoItems.length){
        todoItems.forEach(t=>{
          const row=el('div','label');
          row.style.margin='0';
          row.style.padding='0';
          row.style.width='100%';
          const chk=el('input'); chk.type='checkbox'; chk.checked=!!t.done;
          chk.className='label-checkbox';
          chk.onclick=(e)=>{
            e.stopPropagation();
            t.done=!t.done;
            set(kTodo(dstr),allItems);
            postApp({type:'refresh'});
            renderCalendar();
          };
          row.appendChild(chk);
          const content=el('div','label-content');
          content.style.padding='0';
          content.style.margin='0';
          content.style.lineHeight='1.2';
          content.style.fontSize='10px';
          content.style.width='100%';
          content.style.borderRadius='0';
          if(t.emoji){
            const emoji=el('span','label-emoji',t.emoji);
            content.appendChild(emoji);
          }
          const txt=el('span','label-text',t.text);
          content.appendChild(txt);
          content.style.backgroundColor='transparent';
          if(t.done) {
            txt.classList.add('done');
            txt.style.color='#9aa5b1';
          } else {
            txt.style.color=t.color||'#000';
          }
          row.appendChild(content);
          labels.appendChild(row);
        });
      }
      const displayed=eventItems.length+todoItems.length;
      const hidden=events.length+todos.length-displayed;
      if(hidden>0){
        const moreRow=el('div','label');
        moreRow.style.margin='0';
        moreRow.style.padding='0';
        moreRow.style.display='flex';
        moreRow.style.justifyContent='flex-end';
        moreRow.style.width='100%';
        const moreTxt=el('span','label-more',`+${hidden}`);
        moreTxt.style.fontSize='10px';
        moreTxt.style.color='#5c8dff';
        moreTxt.style.padding='0';
        moreTxt.style.margin='0';
        moreRow.append(moreTxt);
        labels.appendChild(moreRow);
      }
      cell.append(labels);
      const dots=el('div','dots');
      combined.slice(0,5).forEach(t=>{const d=el('span','dot'); d.style.background=effectiveColor(t); dots.append(d);});
      cell.append(dots);
    }

    cell.addEventListener('click',()=>{
      ST.selected=dObj; setGlobalSelected(dObj); renderCalendar(); renderRight();
    });
    $.grid.appendChild(cell);
  }
  const measured=calcMaxLines();
  if(measured!==ST.linesHint){ ST.linesHint=measured; requestAnimationFrame(renderCalendar); }
}
function renderRight(){
  const dstr=fmtLocalDate(ST.selected);
  if($.selText) $.selText.textContent=dstr;
  if($.eventStartDate) $.eventStartDate.value=dstr;
  if($.eventEndDate) $.eventEndDate.value=dstr;
  if($.todoStartDate) $.todoStartDate.value=dstr;
  if($.todoEndDate) $.todoEndDate.value=dstr;
  if($.memoDate) $.memoDate.value=dstr;
  // 일정/투두 리스트 분리 렌더링
  const eventLabel = document.getElementById('eventListLabel');
  const todoLabel = document.getElementById('todoListLabel');
  if(eventLabel) eventLabel.innerHTML = '<span class="tab-icon">📅</span>일정';
  if(todoLabel) todoLabel.innerHTML = '<span class="tab-icon">✅</span>TODO';
  renderEvents();
  renderTodos();
  renderMemos();
}

let fabInitScheduled=false;
function scheduleFabButton(){
  if(fabInitScheduled) return;
  fabInitScheduled=true;
  runWhenIdle(()=>{
    try{
      setupFabButton();
    }catch(err){
      fabInitScheduled=false;
      console.warn('fab init failed', err);
    }
  });
}
function setupFabButton(){
  if(document.querySelector('.fab-add')) return;
  const host=document.getElementById('calendarWrapper')||document.body;
  const fab=el('button','fab-add','+');
  // 기본 스타일 백업(스타일시트가 늦게 로드될 때 대비)
  Object.assign(fab.style,{
    position:'absolute',right:'16px',bottom:'16px',width:'58px',height:'58px',
    borderRadius:'50%',border:'2px solid #1f2933',background:'#fff',color:'#1f2933',
    fontSize:'30px',fontWeight:'800',boxShadow:'0 10px 24px rgba(0,0,0,0.16)',
    cursor:'pointer',zIndex:'5000',display:'grid',placeItems:'center',opacity:'1',visibility:'visible'
  });
  fab.type='button';
  const menu=document.createElement('div'); menu.className='fab-menu';
  Object.assign(menu.style,{position:'absolute',right:'16px',bottom:'84px',zIndex:'4999'});
  const addEvent=el('button','fab-action','일정 추가');
  const addTodo=el('button','fab-action','TODO 추가');
  menu.append(addEvent,addTodo);
  host.append(fab,menu);
  // 만약 다른 요소에 가려지면 위치/디스플레이를 재보정
  const ensureVisible=()=>{
    if(!host.contains(fab)) host.appendChild(fab);
    if(!host.contains(menu)) host.appendChild(menu);
    fab.style.display='grid';
    fab.style.position='absolute';
    fab.style.opacity='1';
    fab.style.visibility='visible';
  };
  setTimeout(ensureVisible,50);
  setTimeout(ensureVisible,250);
  setTimeout(ensureVisible,800);
  let open=false;
  const close=()=>{ open=false; menu.classList.remove('fab-menu--open'); };
  fab.addEventListener('click',(e)=>{ e.stopPropagation(); open=!open; menu.classList.toggle('fab-menu--open',open); });
  document.addEventListener('click',(e)=>{ if(!open) return; if(!menu.contains(e.target) && !fab.contains(e.target)){ close(); } });
  const activateTab=(mode)=>{
    const tabEvent=document.getElementById('tabEvent');
    const tabTodo=document.getElementById('tabTodo');
    scheduleTab=mode;
    if(tabEvent&&tabTodo){
      tabEvent.classList.toggle('active',mode==='event');
      tabTodo.classList.toggle('active',mode==='todo');
    }
    const panel=document.getElementById('todoOptionsPanel');
    if(panel){ panel.style.display=mode==='event'?'block':'none'; }
  };
  const focusForm=()=>{
    document.querySelector('.right')?.scrollIntoView({behavior:'smooth',block:'start'});
    if($.todoInput){ $.todoInput.focus(); $.todoInput.select?.(); }
  };
  addEvent.onclick=(e)=>{ e.stopPropagation(); activateTab('event'); focusForm(); close(); };
  addTodo.onclick=(e)=>{ e.stopPropagation(); activateTab('todo'); focusForm(); close(); };
}

// 일정 리스트 렌더링 함수 (체크박스 없음, 바탕색만 적용)
function renderEvents(){
  const dstr=fmtLocalDate(ST.selected);
  const allItems=get(kTodo(dstr));
  const isEvent=(t)=>Object.prototype.hasOwnProperty.call(t,'time');
  const list=allItems.filter(isEvent);
  const eventList = document.getElementById('eventList');
  if(!eventList) return;
  eventList.innerHTML='';
  if(list.length === 0) {
    const empty = el('div', '', '등록된 일정이 없습니다');
    empty.style.color = '#b0b8c1';
    empty.style.fontSize = '14px';
    empty.style.textAlign = 'center';
    eventList.appendChild(empty);
  } else {
    list.forEach((it,i)=> {
      const li=el('li','event-item');
      const labelWrap=el('span','event-label-wrapper');
      if(it.emoji){ labelWrap.appendChild(el('span','event-emoji',it.emoji)); }
      const txt=el('span','event-text',it.text);
      labelWrap.appendChild(txt);
      // 바탕색 적용
      txt.style.color='#000';
      if(it.color==='rainbow'){
        labelWrap.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      } else {
        labelWrap.style.backgroundColor=it.color||'transparent';
        labelWrap.style.background='';
      }

      const actions=el('div','item-actions');
      const delBtn=el('button','del-btn','🗑'); delBtn.type='button';
      const menuBtn=el('button','event-menu-btn','⋮'); menuBtn.type='button';
      delBtn.onclick=(e)=>{
        e.stopPropagation();
        allItems.splice(allItems.indexOf(it),1);
        set(kTodo(dstr),allItems);
        renderEvents();
        renderCalendar();
        postApp({type:'refresh'});
      };
      menuBtn.onclick=(e)=>{
        e.stopPropagation();
        showEventMenu(menuBtn,it,allItems,dstr,()=>{
          // applyStyle inline
          txt.style.color='#000';
          if(it.color==='rainbow'){
            labelWrap.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
          } else {
            labelWrap.style.backgroundColor=it.color||'transparent';
            labelWrap.style.background='';
          }
        });
      };
      actions.append(delBtn,menuBtn);
      li.append(labelWrap,actions);
      eventList.appendChild(li);
    });
  }
  renderCalendar();
}

document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.style.fontFamily='"Noto Sans KR","Noto Sans",sans-serif';
  if(document.body) document.body.style.fontFamily='"Noto Sans KR","Noto Sans",sans-serif';
  const tabEvent = document.getElementById('tabEvent');
  const tabTodo = document.getElementById('tabTodo');
  
  if(tabEvent && tabTodo){
    tabEvent.onclick = ()=>{
      scheduleTab = 'event';
      tabEvent.classList.add('active');
      tabTodo.classList.remove('active');
      renderRight();
      reloadAdsense();
      trackMenuPV('tab:event');
    };
    tabTodo.onclick = ()=>{
      scheduleTab = 'todo';
      tabTodo.classList.add('active');
      tabEvent.classList.remove('active');
      renderRight();
      reloadAdsense();
      trackMenuPV('tab:todo');
    };
  }

  runWhenIdle(()=>setupInlineRepeat());
  scheduleFabButton();
});

// 페이지가 이미 로드된 상태에서 스크립트가 삽입되는 경우를 대비한 안전 호출
if(document.readyState!=='loading'){
  scheduleFabButton();
}
window.addEventListener('load',()=>scheduleFabButton());

/* ── 선택 날짜 (Event) - 사용하지 않음 ── */
function eventItemEl(item,idx,ref,dstr){
  const li=el('li','event-item');
  const labelWrap=el('span','event-label-wrapper');
  
  if(item.emoji){ const emoji=el('span','event-emoji',item.emoji); labelWrap.appendChild(emoji); }
  const txt=el('span','event-text',item.text);
  labelWrap.appendChild(txt);

  const delBtn=el('button','del-btn','🗑'); delBtn.type='button';
  const menuBtn=el('button','event-menu-btn','⋮'); menuBtn.type='button';

  const applyStyle=()=>{
    txt.style.color=item.color==='rainbow'?'#fff':'#000';
    if(item.color==='rainbow'){
      labelWrap.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      labelWrap.style.backgroundColor='transparent';
    } else {
      labelWrap.style.backgroundColor=item.color||'transparent';
      labelWrap.style.background='';
    }
  };
  applyStyle();
  
  labelWrap.onclick=()=>{
    if(isMobileViewport()){
      showEventDetailModal(item,ref,dstr);
    }else{
      showEventMenu(labelWrap,item,ref,dstr,applyStyle);
    }
  };
  
  menuBtn.onclick=(e)=>{
    e.stopPropagation();
    labelWrap.onclick();
  };

  delBtn.onclick=(e)=>{
    e.stopPropagation();
    ref.splice(ref.indexOf(item),1);
    set(kTodo(dstr),ref);
    renderEvents();
    renderCalendar();
    postApp({type:'refresh'});
  };

  labelWrap.draggable=true;
  labelWrap.addEventListener('dragstart',e=>{ e.dataTransfer.setData('text/plain',String(idx)); });
  li.addEventListener('dragover',e=>e.preventDefault());
  li.addEventListener('drop',e=>{ e.preventDefault(); const from=+e.dataTransfer.getData('text/plain'); const to=idx; if(from===to)return; const [m]=ref.splice(from,1); ref.splice(to,0,m); set(kTodo(dstr),ref); renderEvents(); renderCalendar(); postApp({type:'refresh'}); });

  const actions=el('div','item-actions');
  actions.append(delBtn,menuBtn);
  li.append(labelWrap,actions);
  return li;
}

/* ── 일정 메뉴 ── */
function showEventMenu(anchor,item,ref,dstr,applyStyle){
  const doc=anchor.ownerDocument||document;
  if(openPop) openPop.remove();
  
  const pop=doc.createElement('div');
  pop.className='event-menu-popup';
  
  const emojiBtn=el('button','menu-item','💬 이모티콘 변경');
  const colorBtn=el('button','menu-item','🎨 색상 변경');
  
  emojiBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showEmojiPicker(anchor,(emoji)=>{
      item.emoji=emoji;
      set(kTodo(dstr),ref);
      renderEvents();
      renderCalendar();
      postApp({type:'refresh'});
    });
  };
  
  colorBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showPalette(anchor,(c)=>{
      item.color=c;
      set(kTodo(dstr),ref);
      applyStyle();
      renderCalendar();
      postApp({type:'refresh'});
    });
  };
  
  pop.append(emojiBtn,colorBtn);
  doc.body.appendChild(pop);
  openPop=pop;
  
  const rect=anchor.getBoundingClientRect();
  pop.style.left=rect.left+'px';
  pop.style.top=(rect.bottom+4)+'px';
  
  const closeMenu=(e)=>{
    if(!pop.contains(e.target) && e.target!==anchor){
      pop.remove();
      openPop=null;
      doc.removeEventListener('click',closeMenu);
    }
  };
  setTimeout(()=>doc.addEventListener('click',closeMenu),10);
}

/* ── 팔레트 ── */
const PALETTE_BASE=["#3b82f6","#ef4444","#ec4899","#f97316","#eab308","#22c55e",
               "#10b981","#14b8a6","#6366f1","#8b5cf6","#9ca3af","#64748b"];
const PALETTE_EXTENDED=[
  "#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626",
  "#fed7aa","#fdba74","#fb923c","#f97316","#ea580c","#c2410c",
  "#fef08a","#fde047","#facc15","#eab308","#ca8a04","#a16207",
  "#d9f99d","#bef264","#a3e635","#84cc16","#65a30d","#4d7c0f",
  "#a7f3d0","#6ee7b7","#34d399","#10b981","#059669","#047857",
  "#a5f3fc","#67e8f9","#22d3ee","#06b6d4","#0891b2","#0e7490",
  "#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8",
  "#c7d2fe","#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca",
  "#ddd6fe","#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9",
  "#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf","#86198f"
];
const getRecentColors=()=>get('memo2.recentColors',[]);
const saveRecentColor=(col)=>{
  let recent=getRecentColors();
  recent=recent.filter(c=>c!==col);
  recent.unshift(col);
  if(recent.length>10) recent=recent.slice(0,10);
  set('memo2.recentColors',recent);
};

/* ── 이모티콘 선택기 ── */
const EMOJI_CATEGORIES={
  '자주 사용': ['😊','😂','❤️','🎉','👍','🔥','✨','💯','🎯','⭐'],
  '얼굴': ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🫢','🫣','🤫','🤔','🫡','🤐','🤨','😐','😑','😶','🫥','😏','😒','🙄','😬','😮‍💨','🤥'],
  '활동': ['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏒','🏑','🥍','🏏','🪃','🥅','⛳','🪁','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛼','🛷','⛸️','🥌','🎿','⛷️','🏂'],
  '음식': ['🍎','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶️','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨'],
  '여행': ['🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🦯','🦽','🦼','🛴','🚲','🛵','🏍️','🛺','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','✈️'],
  '기호': ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
};

let openPop=null;
function showEmojiPicker(anchor,onPick){
  const doc=anchor.ownerDocument||document;
  const win=doc.defaultView||window;
  if(openPop) openPop.remove();
  
  const pop=doc.createElement('div'); pop.className='emoji-picker';
  
  Object.keys(EMOJI_CATEGORIES).forEach(category=>{
    const title=doc.createElement('div');
    title.className='emoji-category-title';
    title.textContent=category;
    pop.appendChild(title);
    
    const grid=doc.createElement('div');
    grid.className='emoji-grid';
    EMOJI_CATEGORIES[category].forEach(emoji=>{
      const btn=doc.createElement('button');
      btn.className='emoji-item';
      btn.textContent=emoji;
      btn.onclick=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        onPick(emoji);
        pop.remove();
        openPop=null;
      };
      grid.appendChild(btn);
    });
    pop.appendChild(grid);
  });
  
  doc.body.appendChild(pop);
  const r=anchor.getBoundingClientRect();
  
  let left=r.left+(win.scrollX||0);
  let top=r.bottom+6+(win.scrollY||0);
  
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  pop.style.visibility='hidden';
  
  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const viewWidth=win.innerWidth;
    const viewHeight=win.innerHeight;
    
    if(popRect.right>viewWidth){
      left=Math.max(0, viewWidth-popRect.width-10);
    }
    if(popRect.bottom>viewHeight){
      top=r.top-popRect.height-6+(win.scrollY||0);
    }
    
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
    pop.style.visibility='visible';
  });
  
  const close=(e)=>{ if(!pop.contains(e.target)&&e.target!==anchor){pop.remove();openPop=null;doc.removeEventListener('mousedown',close);} };
  doc.addEventListener('mousedown',close);
  openPop=pop;
}
function showPalette(anchor,onPick){
  const doc=anchor.ownerDocument||document;
  const win=doc.defaultView||window;
  if(openPop) openPop.remove();
  const pop=doc.createElement('div'); pop.className='color-pop-advanced';
  pop.style.zIndex='10002';

  // 1. 맨 위: 색상 없음
  const noColorRow=doc.createElement('div'); noColorRow.className='color-row';
  const noColor=doc.createElement('div');
  noColor.className='color-swatch no-color';
  noColor.textContent='없음';
  noColor.style.background='#fff';
  noColor.style.border='2px solid #e2e8f0';
  noColor.style.color='#64748b';
  noColor.style.fontSize='11px';
  noColor.style.fontWeight='600';
  noColor.onclick=()=>{onPick(''); pop.remove(); openPop=null;};
  noColorRow.appendChild(noColor);
  pop.appendChild(noColorRow);

  // 2. 그 다음: 최근 사용한 색상
  const recentColors=getRecentColors();
  if(recentColors.length>0){
    const recentTitle=doc.createElement('div');
    recentTitle.className='color-section-title';
    recentTitle.textContent='최근 사용한 색상';
    pop.appendChild(recentTitle);

    const recentRow=doc.createElement('div'); recentRow.className='color-row';
    recentColors.forEach(col=>{
      const sw=doc.createElement('div');
      sw.className='color-swatch';
      if(col==='rainbow'){
        sw.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
        sw.classList.add('rainbow');
      } else {
        sw.style.background=col;
      }
      sw.onclick=()=>{saveRecentColor(col); onPick(col); pop.remove(); openPop=null;};
      recentRow.appendChild(sw);
    });
    pop.appendChild(recentRow);
  }

  // 3. 그 다음: 색상표 (기본 + 무지개 + 확장 그리드)
  const basicRow=doc.createElement('div'); basicRow.className='color-row';
  PALETTE_BASE.forEach(col=>{
    const sw=doc.createElement('div');
    sw.className='color-swatch';
    sw.style.background=col;
    sw.onclick=()=>{saveRecentColor(col); onPick(col); pop.remove(); openPop=null;};
    basicRow.appendChild(sw);
  });
  const rainbow=doc.createElement('div');
  rainbow.className='color-swatch rainbow';
  rainbow.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
  rainbow.onclick=()=>{saveRecentColor('rainbow'); onPick('rainbow'); pop.remove(); openPop=null;};
  basicRow.appendChild(rainbow);
  pop.appendChild(basicRow);

  const extendedGrid=doc.createElement('div'); extendedGrid.className='color-grid';
  PALETTE_EXTENDED.forEach(col=>{
    const sw=doc.createElement('div');
    sw.className='color-swatch-small';
    sw.style.background=col;
    sw.onclick=()=>{saveRecentColor(col); onPick(col); pop.remove(); openPop=null;};
    extendedGrid.appendChild(sw);
  });
  pop.appendChild(extendedGrid);

  doc.body.appendChild(pop);
  const r=anchor.getBoundingClientRect();
  
  // 팔레트 위치 계산 (화면 밖으로 나가지 않도록)
  let left=r.left+(win.scrollX||0);
  let top=r.bottom+6+(win.scrollY||0);
  
  // 팝업 크기 측정 후 위치 조정
  pop.style.left=`${left}px`; 
  pop.style.top=`${top}px`;
  pop.style.visibility='hidden';
  
  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const viewWidth=win.innerWidth;
    const viewHeight=win.innerHeight;
    
    // 오른쪽으로 벗어나면 왼쪽으로 이동
    if(popRect.right>viewWidth){
      left=Math.max(0, viewWidth-popRect.width-10);
    }
    // 아래로 벗어나면 위로 표시
    if(popRect.bottom>viewHeight){
      top=r.top-popRect.height-6+(win.scrollY||0);
    }
    
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
    pop.style.visibility='visible';
  });
  
  const close=(e)=>{ if(!pop.contains(e.target)&&e.target!==anchor){pop.remove();openPop=null;doc.removeEventListener('mousedown',close);} };
  doc.addEventListener('mousedown',close);
  openPop=pop;
}

/* ── 오른쪽 ToDo ── */
function renderTodos(){
  const dstr=fmtLocalDate(ST.selected);
  const allItems=get(kTodo(dstr));
  const isEvent=(t)=>Object.prototype.hasOwnProperty.call(t,'time');
  const list=allItems.filter(t=>!isEvent(t)); // 투두만 필터링
  const todoList = document.getElementById('todoList');
  if(!todoList) return;
  todoList.innerHTML='';
  if(list.length === 0) {
    const empty = el('div', '', '등록된 할 일이 없습니다');
    empty.style.color = '#b0b8c1';
    empty.style.fontSize = '14px';
    empty.style.textAlign = 'center';
    todoList.appendChild(empty);
  } else {
    list.forEach((it,i)=> {
      todoList.appendChild(todoItemEl(it,i,allItems,dstr));
    });
  }
  renderCalendar();
}
function todoItemEl(item,idx,ref,dstr){
  const li=el('li','todo-item');
  const cb=document.createElement('input'); 
  cb.type='checkbox'; 
  cb.checked=item.done;
  cb.className='todo-checkbox';
  const emoji=item.emoji?el('span','todo-emoji',item.emoji):null;
  const txt=el('span','text',item.text);
  const delBtn=el('button','del-btn','🗑'); delBtn.type='button';
  const menuBtn=el('button','event-menu-btn','⋮'); menuBtn.type='button';

  const applyText=()=>{
    // 투두: 색상 변경은 글자색만 적용
    if(item.done){
      txt.style.color='#9aa5b1';
      txt.style.textDecoration='line-through';
      txt.style.backgroundColor='transparent';
    } else {
      txt.style.color=item.color||'#000';
      txt.style.textDecoration='none';
      txt.style.backgroundColor='transparent';
    }
    txt.classList.toggle('done',!!item.done);
  };
  applyText();

  cb.addEventListener('change',()=>{ 
    item.done=cb.checked; 
    set(kTodo(dstr),ref); 
    applyText(); 
    renderCalendar(); 
    postApp({type:'refresh'}); 
  });
  
  // 더블클릭으로 수정
  txt.ondblclick=(e)=>{ 
    e.stopPropagation();
    const inp=document.createElement('input'); 
    inp.type='text'; 
    inp.value=item.text; 
    inp.className='todo-edit';
    inp.style.flex='1';
    inp.onkeydown=(ev)=>{
      if(ev.key==='Enter'){ item.text=inp.value.trim()||item.text; set(kTodo(dstr),ref); renderTodos(); postApp({type:'refresh'}); }
      if(ev.key==='Escape'){ renderTodos(); }
    };
    inp.onblur=()=>{ item.text=inp.value.trim()||item.text; set(kTodo(dstr),ref); renderTodos(); postApp({type:'refresh'}); };
    li.replaceChild(inp,txt); 
    inp.focus(); 
    inp.select();
  };

  menuBtn.onclick=(e)=>{
    e.stopPropagation();
    showTodoMenu(menuBtn,item,ref,dstr,applyText);
  };

  delBtn.onclick=(e)=>{
    e.stopPropagation();
    ref.splice(ref.indexOf(item),1);
    set(kTodo(dstr),ref);
    renderTodos();
    renderCalendar();
    postApp({type:'refresh'});
  };

  // 정렬(텍스트만 드래그)
  txt.draggable=true;
  txt.addEventListener('dragstart',e=>{ e.dataTransfer.setData('text/plain',String(idx)); });
  li.addEventListener('dragover',e=>e.preventDefault());
  li.addEventListener('drop',e=>{ e.preventDefault(); const from=+e.dataTransfer.getData('text/plain'); const to=idx; if(from===to)return; const [m]=ref.splice(from,1); ref.splice(to,0,m); set(kTodo(dstr),ref); renderTodos(); postApp({type:'refresh'}); });

  const actions=el('div','item-actions');
  actions.append(delBtn,menuBtn);
  if(emoji) li.append(cb,emoji,txt,actions);
  else li.append(cb,txt,actions);
  return li;
}

/* ── TODO 메뉴 ── */
function showTodoMenu(anchor,item,ref,dstr,applyText){
  const doc=anchor.ownerDocument||document;
  if(openPop) openPop.remove();
  
  const pop=doc.createElement('div');
  pop.className='event-menu-popup';
  
  const emojiBtn=el('button','menu-item','💬 이모티콘 변경');
  const colorBtn=el('button','menu-item','🎨 색상 변경');
  
  emojiBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showEmojiPicker(anchor,(emoji)=>{
      item.emoji=emoji;
      set(kTodo(dstr),ref);
      renderTodos();
      postApp({type:'refresh'});
    });
  };
  
  colorBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showPalette(anchor,(c)=>{
      item.color=c;
      set(kTodo(dstr),ref);
      applyText();
      renderCalendar();
      postApp({type:'refresh'});
    });
  };
  
  pop.append(emojiBtn,colorBtn);
  doc.body.appendChild(pop);
  openPop=pop;
  
  const rect=anchor.getBoundingClientRect();
  const win=doc.defaultView||window;
  
  let left=rect.left+(win.scrollX||0);
  let top=rect.bottom+4+(win.scrollY||0);
  
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  pop.style.visibility='hidden';
  
  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const viewWidth=win.innerWidth;
    const viewHeight=win.innerHeight;
    
    // 화면 오른쪽 경계 처리
    if(popRect.right>viewWidth){
      left=Math.max(10, viewWidth-popRect.width-10);
    }
    
    // 화면 아래쪽 경계 처리
    if(popRect.bottom>viewHeight){
      top=rect.top-popRect.height-4+(win.scrollY||0);
    }
    
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
    pop.style.visibility='visible';
  });
  
  const closeMenu=(e)=>{
    if(!pop.contains(e.target) && e.target!==anchor){
      pop.remove();
      openPop=null;
      doc.removeEventListener('click',closeMenu);
    }
  };
  setTimeout(()=>doc.addEventListener('click',closeMenu),10);
}

/* ── 반복 설정 ── */
ST.eventRepeat='none';
function updateRepeatButton(){
  const labels={
    'none':'반복 안 함',
    'daily':'매일',
    'weekly':'매주',
    'monthly':'매월',
    'yearly':'매년'
  };
  if($.eventRepeatBtn){
    $.eventRepeatBtn.textContent=labels[ST.eventRepeat]||'반복 안 함';
    if(ST.eventRepeat!=='none'){
      $.eventRepeatBtn.classList.add('active');
    }else{
      $.eventRepeatBtn.classList.remove('active');
    }
  }

  const inlineBtn=document.getElementById('inlineRepeatBtn');
  if(inlineBtn){
    inlineBtn.textContent=labels[ST.eventRepeat]||'반복 안 함';
    const active=ST.eventRepeat && ST.eventRepeat!=='none';
    inlineBtn.style.background=active?'#e0ecff':'#f8fafc';
    inlineBtn.style.color=active?'#2563eb':'#334155';
  }
}

if($.eventRepeatBtn){
  $.eventRepeatBtn.onclick=(e)=>{
    e.stopPropagation();
    showRepeatModal(ST.eventRepeat,(value)=>{
      ST.eventRepeat=value;
      updateRepeatButton();
    });
  };
}

function showRepeatModal(currentValue,onConfirm){
  const overlay=el('div','repeat-modal-overlay');
  const modal=el('div','event-detail-modal');
  
  const options=['none','daily','weekly','monthly','yearly'];
  const labels={'none':'반복 안 함','daily':'매일','weekly':'매주','monthly':'매월','yearly':'매년'};
  
  modal.innerHTML='<h3>반복 설정</h3>';
  options.forEach(opt=>{
    const btn=el('button','repeat-option',labels[opt]);
    if(opt===currentValue) btn.classList.add('active');
    btn.onclick=()=>{
      onConfirm(opt);
      overlay.remove();
    };
    modal.appendChild(btn);
  });
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  overlay.onclick=(e)=>{ if(e.target===overlay) overlay.remove(); };
}

/* ── 일정 상세 편집 모달 ── */
function showEventDetailModal(item,ref,dstr){
  if(!isMobileViewport()) return;
  const overlay=el('div','repeat-modal-overlay');
  const modal=el('div','event-detail-modal');
  
  // 제목 입력
  const titleInput=document.createElement('input');
  titleInput.type='text';
  titleInput.className='event-detail-title';
  titleInput.value=item.text;
  titleInput.placeholder='제목';
  
  // 이모티콘과 색상 버튼
  const toolRow=el('div','event-detail-tools');
  const emojiBtn=el('button','tool-btn');
  setEmojiIcon(emojiBtn,item.emoji||'');
  const colorBtn=el('button','tool-btn color-wheel-btn');
  colorBtn.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
  if(item.color && item.color!=='rainbow'){
    colorBtn.style.background=item.color;
  }else if(item.color==='rainbow'){
    colorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
  }
  
  emojiBtn.onclick=(e)=>{
    e.stopPropagation();
    showEmojiPicker(emojiBtn,(emoji)=>{
      item.emoji=emoji;
      setEmojiIcon(emojiBtn,emoji);
    });
  };
  
  colorBtn.onclick=(e)=>{
    e.stopPropagation();
    showPalette(colorBtn,(c)=>{
      item.color=c;
      if(c && c!=='rainbow'){
        colorBtn.style.background=c;
      }else if(c==='rainbow'){
        colorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      }else{
        colorBtn.style.background='';
      }
    });
  };
  
  toolRow.append(emojiBtn,colorBtn);
  
  // 하루 종일 토글
  const allDayRow=el('div','event-detail-row');
  const allDayIcon=el('span','row-icon','🕐');
  const allDayLabel=el('span','row-label','하루 종일');
  const allDayToggle=document.createElement('input');
  allDayToggle.type='checkbox';
  allDayToggle.className='toggle-switch';
  allDayToggle.checked=!item.time;
  allDayRow.append(allDayIcon,allDayLabel,allDayToggle);
  
  // 날짜 범위
  const dateRow=el('div','event-detail-row');
  const dateIcon=el('span','row-icon','📅');
  const dateInputs=el('div','date-inputs');
  const startDateInput=document.createElement('input');
  startDateInput.type='date';
  startDateInput.value=dstr;
  const arrow=el('span','','→');
  const endDateInput=document.createElement('input');
  endDateInput.type='date';
  endDateInput.value=dstr;
  dateInputs.append(startDateInput,arrow,endDateInput);
  dateRow.append(dateIcon,dateInputs);
  
  // 시간
  const timeRow=el('div','event-detail-row');
  const timeIcon=el('span','row-icon','⏰');
  const timeLabel=el('span','row-label','시간');
  const timeInput=document.createElement('input');
  timeInput.type='time';
  timeInput.value=item.time||'';
  timeInput.disabled=allDayToggle.checked;
  timeRow.append(timeIcon,timeLabel,timeInput);
  
  allDayToggle.onchange=()=>{
    timeInput.disabled=allDayToggle.checked;
    if(allDayToggle.checked) timeInput.value='';
  };
  
  // 알림
  const alarmRow=el('div','event-detail-row');
  const alarmIcon=el('span','row-icon','🔔');
  const alarmLabel=el('span','row-label','알림');
  const alarmValue=el('span','row-value',item.alarm?'설정됨':'없음');
  alarmRow.append(alarmIcon,alarmLabel,alarmValue);
  
  // 반복
  const repeatLabels={'none':'반복 안 함','daily':'매일','weekly':'매주','monthly':'매월','yearly':'매년'};
  const repeatRow=el('div','event-detail-row');
  const repeatIcon=el('span','row-icon','🔄');
  const repeatLabel=el('span','row-label','반복');
  const repeatValue=el('span','row-value',repeatLabels[item.repeat||'none']);
  repeatRow.append(repeatIcon,repeatLabel,repeatValue);
  repeatRow.style.cursor='pointer';
  repeatRow.onclick=()=>{
    showRepeatModal(item.repeat||'none',(value)=>{
      item.repeat=value;
      repeatValue.textContent=repeatLabels[value];
    });
  };
  
  // 삭제 버튼
  const deleteRow=el('div','event-detail-row delete-row');
  const deleteIcon=el('span','row-icon','🗑');
  const deleteLabel=el('span','row-label','삭제');
  deleteRow.append(deleteIcon,deleteLabel);
  deleteRow.onclick=()=>{
    if(confirm('이 일정을 삭제하시겠습니까?')){
      ref.splice(ref.indexOf(item),1);
      set(kTodo(dstr),ref);
      renderEvents();
      renderCalendar();
      postApp({type:'refresh'});
      overlay.remove();
    }
  };
  
  // 저장/취소 버튼
  const footer=el('div','repeat-modal-footer');
  const cancelBtn=el('button','btn-cancel','취소');
  const saveBtn=el('button','btn-confirm','저장');
  
  cancelBtn.onclick=()=>overlay.remove();
  saveBtn.onclick=()=>{
    item.text=titleInput.value.trim()||item.text;
    item.time=allDayToggle.checked?'':timeInput.value;
    set(kTodo(dstr),ref);
    renderEvents();
    renderCalendar();
    postApp({type:'refresh'});
    overlay.remove();
  };
  
  footer.append(cancelBtn,saveBtn);
  modal.append(titleInput,toolRow,allDayRow,dateRow,timeRow,alarmRow,repeatRow,deleteRow,footer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  overlay.onclick=(e)=>{
    if(e.target===overlay) overlay.remove();
  };
  
  titleInput.focus();
}

/* ── 일정 등록 메뉴 버튼 ── */
if($.eventMenuBtn){
  $.eventMenuBtn.onclick=(e)=>{
    e.stopPropagation();
    showEventInputMenu($.eventMenuBtn);
  };
}

function showEventInputMenu(anchor){
  const doc=anchor.ownerDocument||document;
  if(openPop) openPop.remove();
  
  const pop=doc.createElement('div');
  pop.className='event-menu-popup';
  
  const emojiBtn=el('button','menu-item','💬 이모티콘 추가');
  const colorBtn=el('button','menu-item','🎨 색상 변경');
  
  emojiBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showEmojiPicker(anchor,(emoji)=>{
      ST.eventEmoji=emoji;
    });
  };
  
  colorBtn.onclick=()=>{
    pop.remove();
    openPop=null;
    showPalette(anchor,(c)=>{
      ST.eventColor=c;
    });
  };
  
  pop.append(emojiBtn,colorBtn);
  doc.body.appendChild(pop);
  openPop=pop;
  
  const rect=anchor.getBoundingClientRect();
  const win=doc.defaultView||window;
  
  let left=rect.left+(win.scrollX||0);
  let top=rect.bottom+4+(win.scrollY||0);
  
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  pop.style.visibility='hidden';
  
  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const viewWidth=win.innerWidth;
    const viewHeight=win.innerHeight;
    
    // 화면 오른쪽 경계 처리
    if(popRect.right>viewWidth){
      left=Math.max(10, viewWidth-popRect.width-10);
    }
    
    // 화면 아래쪽 경계 처리
    if(popRect.bottom>viewHeight){
      top=rect.top-popRect.height-4+(win.scrollY||0);
    }
    
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
    pop.style.visibility='visible';
  });
  
  const closeMenu=(e)=>{
    if(!pop.contains(e.target) && e.target!==anchor){
      pop.remove();
      openPop=null;
      doc.removeEventListener('click',closeMenu);
    }
  };
  setTimeout(()=>doc.addEventListener('click',closeMenu),10);
}


function addTodoFromInput(){
  const text=($.todoInput?.value||'').trim(); 
  if(!text) return;
  
  const startDateRaw = (scheduleTab==='event' ? ($.eventStartDate?.value || $.todoStartDate?.value) : ($.todoStartDate?.value)) || fmtLocalDate(ST.selected);
  const endDateRawInput = (scheduleTab==='event' ? ($.eventEndDate?.value || $.todoEndDate?.value) : ($.todoEndDate?.value)) || startDateRaw;

  const startDate = startDateRaw;
  const endDate = endDateRawInput;

  const start=normalizeDate(parseLocalDate(startDate));
  const endRaw=normalizeDate(parseLocalDate(endDate));
  let end=endRaw<start?start:endRaw;
  
  if(scheduleTab==='event'){
    const timeVal=$.eventTime?$.eventTime.value:'';
    const alarmChecked=$.eventAlarm?.checked||false;
    const repeatValue=ST.eventRepeat||'none';

    const addEventForDate=(dObj)=>{
      const dstr=fmtLocalDate(dObj);
      const list=get(kTodo(dstr));
      list.push({
        text,
        emoji:ST.eventEmoji||'',
        color:ST.eventColor||DEFAULT_COLOR,
        done:false,
        time:timeVal,
        alarm:alarmChecked,
        repeat:repeatValue,
      });
      set(kTodo(dstr),list);
    };
    const maxIterations=400; // 안전장치
    if(repeatValue==='weekly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setDate(d.getDate()+7),count++) addEventForDate(d);
    } else if(repeatValue==='daily' || (repeatValue==='none' && end>start)){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setDate(d.getDate()+1),count++) addEventForDate(d);
    } else if(repeatValue==='monthly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setMonth(d.getMonth()+1),count++) addEventForDate(d);
    } else if(repeatValue==='yearly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setFullYear(d.getFullYear()+1),count++) addEventForDate(d);
    } else {
      addEventForDate(start);
    }
  } else {
    const repeatValue=ST.eventRepeat||'none';
    const addTodoForDate=(dObj)=>{
      const dstr=fmtLocalDate(dObj);
      const list=get(kTodo(dstr));
      list.push({
        text,
        emoji:ST.todoEmoji||'',
        color:ST.todoColor||DEFAULT_COLOR,
        done:false,
      });
      set(kTodo(dstr),list);
    };
    const maxIterations=400;
    if(repeatValue==='weekly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setDate(d.getDate()+7),count++) addTodoForDate(d);
    } else if(repeatValue==='daily' || (repeatValue==='none' && end>start)){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setDate(d.getDate()+1),count++) addTodoForDate(d);
    } else if(repeatValue==='monthly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setMonth(d.getMonth()+1),count++) addTodoForDate(d);
    } else if(repeatValue==='yearly'){
      let count=0; for(let d=new Date(start); d<=end && count<maxIterations; d.setFullYear(d.getFullYear()+1),count++) addTodoForDate(d);
    } else {
      addTodoForDate(start);
    }
  }
  
  $.todoInput.value=''; 
  const dstr=fmtLocalDate(ST.selected);
  if($.todoStartDate) $.todoStartDate.value=dstr;
  if($.todoEndDate) $.todoEndDate.value=dstr;
  if(scheduleTab==='event'){
    ST.eventEmoji='';
    if($.eventTime) $.eventTime.value='';
    if($.eventAlarm) $.eventAlarm.checked=false;
    ST.eventRepeat='none';
    updateRepeatButton();
  } else {
    ST.todoEmoji='';
  }
  renderEvents(); 
  renderTodos(); 
  renderCalendar();
  postApp({type:'refresh'});
}
if($.todoInput){
  $.todoInput.onkeydown=(e)=>{ if(e.key==='Enter'){ e.preventDefault(); addTodoFromInput(); } };
}
if($.todoAddBtn){
  $.todoAddBtn.onclick=()=>addTodoFromInput();
}
if($.todoColorBtn){
  $.todoColorBtn.onclick=()=>{
    showPalette($.todoColorBtn, (c)=>{
      if(scheduleTab==='event') ST.eventColor=c; else ST.todoColor=c;
      const colorToApply=c;
      if(colorToApply==='rainbow'){
        $.todoColorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        $.todoColorBtn.classList.add('has-color');
      } else if(colorToApply){
        $.todoColorBtn.style.background=colorToApply;
        $.todoColorBtn.classList.add('has-color');
      } else {
        $.todoColorBtn.style.background='#e5e7eb';
        $.todoColorBtn.classList.remove('has-color');
      }
    });
  };
}
if($.todoEmojiBtn){
  setEmojiIcon($.todoEmojiBtn,'');
  $.todoEmojiBtn.onclick=()=>{
    showEmojiPicker($.todoEmojiBtn, (emoji)=>{
      if(scheduleTab==='event') ST.eventEmoji=emoji; else ST.todoEmoji=emoji;
      setEmojiIcon($.todoEmojiBtn,emoji);
      $.todoEmojiBtn.classList.remove('emoji-gray');
    });
  };
}
if(document.getElementById('todoOptionsBtn')){
  document.getElementById('todoOptionsBtn').onclick=()=>{
    const panel=document.getElementById('todoOptionsPanel');
    if(!panel) return;
    const isOpen=panel.style.display!=='none';
    panel.style.display=isOpen?'none':'block';
    if(!isOpen) setupInlineRepeat();
  };
}

// 인라인 반복 버튼: 날짜 입력 옆에 생성
function setupInlineRepeat(){
  const row=document.querySelector('.event-datetime-row');
  if(!row || document.getElementById('inlineRepeatBtn')) return;
  row.style.display='flex';
  row.style.flexWrap='wrap';
  row.style.gap='8px';
  row.querySelectorAll('.event-date-group').forEach(g=>{
    g.style.flex='1 1 140px';
    g.style.minWidth='140px';
    const inp=g.querySelector('input');
    if(inp) inp.style.width='100%';
  });
  const wrap=document.createElement('div');
  wrap.style.display='flex';
  wrap.style.alignItems='center';
  wrap.style.gap='6px';

  const btn=document.createElement('button');
  btn.id='inlineRepeatBtn';
  btn.type='button';
  Object.assign(btn.style,{
    padding:'6px 10px',
    border:'1px solid #e2e8f0',
    borderRadius:'10px',
    background:'#f8fafc',
    cursor:'pointer',
    minWidth:'80px'
  });

  const list=document.createElement('div');
  list.id='inlineRepeatList';
  Object.assign(list.style,{
    position:'absolute',
    zIndex:'9999',
    background:'#fff',
    border:'1px solid #e2e8f0',
    borderRadius:'10px',
    boxShadow:'0 10px 24px rgba(0,0,0,0.12)',
    padding:'6px',
    display:'none',
    minWidth:'120px'
  });

  const options=[
    {val:'none',label:'반복 안 함'},
    {val:'daily',label:'매일'},
    {val:'weekly',label:'매주'},
    {val:'monthly',label:'매월'},
    {val:'yearly',label:'매년'},
  ];

  options.forEach(opt=>{
    const oBtn=document.createElement('button');
    oBtn.type='button';
    oBtn.textContent=opt.label;
    Object.assign(oBtn.style,{
      display:'block',width:'100%',padding:'6px 8px',border:'1px solid #e2e8f0',borderRadius:'8px',background:'#f8fafc',margin:'3px 0',cursor:'pointer'
    });
    oBtn.onclick=(e)=>{
      e.stopPropagation();
      ST.eventRepeat=opt.val;
      updateRepeatButton();
      list.style.display='none';
    };
    list.appendChild(oBtn);
  });

  btn.onclick=(e)=>{
    e.stopPropagation();
    const rect=btn.getBoundingClientRect();
    list.style.left=`${rect.left + (window.scrollX||0)}px`;
    list.style.top=`${rect.bottom + 4 + (window.scrollY||0)}px`;
    list.style.display=list.style.display==='none'?'block':'none';
  };

  document.addEventListener('mousedown',(e)=>{
    const listEl=document.getElementById('inlineRepeatList');
    const btnEl=document.getElementById('inlineRepeatBtn');
    if(!listEl || !btnEl) return;
    if(listEl.style.display==='none') return;
    if(!listEl.contains(e.target) && !btnEl.contains(e.target)) listEl.style.display='none';
  });

  wrap.appendChild(btn);
  row.appendChild(wrap);
  document.body.appendChild(list);
  updateRepeatButton();
}

/* ── REMINDER ── */
const kReminder=()=>'memo2.reminders';
function renderReminders(){
  if(!$.reminderList) return;
  const list=get(kReminder(),[]);
  $.reminderList.innerHTML='';
  list.forEach((it,i)=> $.reminderList.appendChild(reminderItemEl(it,i,list)));
}
function reminderItemEl(item,idx,ref){
  const li=el('li','reminder-item');
  const chk=document.createElement('input'); chk.type='checkbox'; chk.checked=!!item.done;
  chk.className='reminder-check';
  
  const labelWrap=el('span','reminder-label-wrapper');
  if(item.emoji){ const emoji=el('span','reminder-emoji',item.emoji); labelWrap.appendChild(emoji); }
  const txt=el('span','reminder-text',item.text);
  labelWrap.appendChild(txt);
  
  const colorBtn=el('button','color-btn','🎨'); colorBtn.type='button';
  const del=el('button','del-btn','🗑'); del.type='button';

  const applyStyle=()=>{
    if(item.done){
      txt.style.color='#9aa5b1';
      labelWrap.style.backgroundColor='transparent';
      labelWrap.style.background='transparent';
      chk.classList.add('done');
    } else {
      txt.style.color=item.color==='rainbow'?'#fff':'#000';
      if(item.color==='rainbow'){
        labelWrap.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
        labelWrap.style.backgroundColor='transparent';
      } else {
        labelWrap.style.backgroundColor=item.color||'transparent';
        labelWrap.style.background='';
      }
      chk.classList.remove('done');
    }
    txt.classList.toggle('done',!!item.done);
  };
  applyStyle();

  chk.addEventListener('change',()=>{ item.done=chk.checked; set(kReminder(),ref); applyStyle(); postApp({type:'refresh'}); });
  
  txt.ondblclick=()=>{
    const inp=document.createElement('input'); inp.type='text'; inp.className='reminder-edit'; inp.value=item.text;
    inp.onblur=()=>{ item.text=inp.value.trim()||item.text; set(kReminder(),ref); renderReminders(); postApp({type:'refresh'}); };
    inp.onkeydown=(e)=>{ if(e.key==='Enter'){ inp.blur(); } if(e.key==='Escape'){ inp.value=item.text; inp.blur(); } };
    labelWrap.replaceChild(inp,txt); inp.focus(); inp.select();
  };
  
  colorBtn.onclick=()=> showPalette(colorBtn,(c)=>{ item.color=c; set(kReminder(),ref); applyStyle(); postApp({type:'refresh'}); });
  del.onclick=()=>{ ref.splice(idx,1); set(kReminder(),ref); renderReminders(); postApp({type:'refresh'}); };

  labelWrap.draggable=true;
  labelWrap.addEventListener('dragstart',e=>{ e.dataTransfer.setData('text/plain',String(idx)); });
  li.addEventListener('dragover',e=>e.preventDefault());
  li.addEventListener('drop',e=>{ e.preventDefault(); const from=+e.dataTransfer.getData('text/plain'); const to=idx; if(from===to)return; const [m]=ref.splice(from,1); ref.splice(to,0,m); set(kReminder(),ref); renderReminders(); postApp({type:'refresh'}); });

  li.append(chk,labelWrap,colorBtn,del);
  return li;
}

/* ── 오른쪽 메모 ── */
function renderMemos(){
  const dstr=$.memoDate.value||fmtLocalDate(ST.selected);
  const list=get(kMemo(dstr));
  $.memoList.innerHTML=''; list.forEach((it,i)=> $.memoList.appendChild(memoItemEl(it,i,list,dstr)));
}
function showEventConfigModal(anchor){
  const doc=anchor?.ownerDocument||document;
  const win=doc.defaultView||window;
  if(openPop){ openPop.remove(); openPop=null; }
  const pop=doc.createElement('div');
  pop.className='event-config-pop';
  Object.assign(pop.style,{
    position:'absolute',
    zIndex:'9999',
    background:'#fff',
    border:'1px solid #e2e8f0',
    borderRadius:'12px',
    boxShadow:'0 10px 30px rgba(0,0,0,0.12)',
    padding:'12px',
    minWidth:'240px'
  });

  const title=el('div','event-config-title','일정 설정');

  const allDayRow=el('div','event-detail-row');
  const allDayIcon=el('span','row-icon','⏰');
  const allDayLabel=el('span','row-label','하루 종일');
  const allDayToggle=document.createElement('input');
  allDayToggle.type='checkbox';
  allDayToggle.className='toggle-switch';
  allDayToggle.checked=false;
  allDayRow.append(allDayIcon,allDayLabel,allDayToggle);

  const dateRow=el('div','event-detail-row');
  const dateIcon=el('span','row-icon','📅');
  const dateInputs=el('div','date-inputs');
  dateInputs.style.gap='6px';
  dateInputs.style.alignItems='center';
  const startInput=document.createElement('input'); startInput.type='date'; startInput.value=$.eventStartDate?.value||$.todoStartDate?.value||fmtLocalDate(ST.selected);
  const arrow=el('span','','→');
  const endInput=document.createElement('input'); endInput.type='date'; endInput.value=$.eventEndDate?.value||$.todoEndDate?.value||startInput.value;
  dateInputs.append(startInput,arrow,endInput);
  dateRow.append(dateIcon,dateInputs);

  const timeRow=el('div','event-detail-row');
  const timeIcon=el('span','row-icon','⏱️');
  const timeLabel=el('span','row-label','시간');
  const timeInput=document.createElement('input'); timeInput.type='time'; timeInput.value=$.eventTime?.value||''; timeInput.disabled=allDayToggle.checked;
  allDayToggle.onchange=()=>{ timeInput.disabled=allDayToggle.checked; if(allDayToggle.checked) timeInput.value=''; };
  timeRow.append(timeIcon,timeLabel,timeInput);

  const alarmRow=el('div','event-detail-row');
  const alarmIcon=el('span','row-icon','🔔');
  const alarmLabel=el('span','row-label','알림');
  const alarmToggle=document.createElement('input'); alarmToggle.type='checkbox'; alarmToggle.className='toggle-switch'; alarmToggle.checked=$.eventAlarm?.checked||false;
  alarmRow.append(alarmIcon,alarmLabel,alarmToggle);

  const repeatRow=el('div','event-detail-row');
  const repeatIcon=el('span','row-icon','🔄');
  const repeatLabel=el('span','row-label','반복');
  const repeatBtn=document.createElement('button');
  repeatBtn.type='button';
  repeatBtn.className='repeat-inline-btn';
  repeatBtn.style.padding='8px 12px';
  repeatBtn.style.border='1px solid #e2e8f0';
  repeatBtn.style.borderRadius='10px';
  repeatBtn.style.background='#f8fafc';
  repeatBtn.style.cursor='pointer';
  const repeatLabels={'none':'반복 안 함','daily':'매일','weekly':'매주','monthly':'매월','yearly':'매년'};
  const applyRepeatLabel=()=>{
    repeatBtn.textContent=repeatLabels[ST.eventRepeat]||'반복 안 함';
    const active=ST.eventRepeat && ST.eventRepeat!=='none';
    repeatBtn.style.background=active?'#e0ecff':'#f8fafc';
    repeatBtn.style.color=active?'#2563eb':'#334155';
  };
  applyRepeatLabel();
  repeatBtn.onclick=(e)=>{
    e.stopPropagation();
    showRepeatModal(ST.eventRepeat,(value)=>{
      ST.eventRepeat=value;
      applyRepeatLabel();
      updateRepeatButton();
    });
  };
  repeatRow.append(repeatIcon,repeatLabel,repeatBtn);

  const footer=el('div','repeat-modal-footer');
  const saveBtn=el('button','btn-confirm','저장');
  saveBtn.onclick=()=>{
    if($.eventStartDate) $.eventStartDate.value=startInput.value;
    if($.eventEndDate) $.eventEndDate.value=endInput.value;
    if($.todoStartDate) $.todoStartDate.value=startInput.value;
    if($.todoEndDate) $.todoEndDate.value=endInput.value;
    if($.eventTime){ $.eventTime.value=allDayToggle.checked?'':timeInput.value; $.eventTime.disabled=allDayToggle.checked; }
    if($.eventAlarm) $.eventAlarm.checked=alarmToggle.checked;
    updateRepeatButton();
    pop.remove();
    openPop=null;
  };
  footer.append(saveBtn);

  pop.append(title,allDayRow,dateRow,timeRow,alarmRow,repeatRow,footer);
  doc.body.appendChild(pop);
  openPop=pop;

  const rect=anchor?.getBoundingClientRect?.()||{left:0,bottom:0};
  let left=rect.left+(win.scrollX||0);
  let top=rect.bottom+4+(win.scrollY||0);
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  pop.style.minWidth='240px';

  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const vw=win.innerWidth; const vh=win.innerHeight;
    if(popRect.right>vw) left=Math.max(10,vw-popRect.width-10);
    if(popRect.bottom>vh) top=Math.max(10,vh-popRect.height-10);
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
  });

  const close=(e)=>{
    if(!pop.contains(e.target) && e.target!==anchor){ pop.remove(); openPop=null; doc.removeEventListener('mousedown',close); }
  };
  setTimeout(()=>doc.addEventListener('mousedown',close),10);
}

function memoItemEl(item,idx,ref,dstr){
  const li=el('li','memo-item');
  if(!item.hasOwnProperty('emoji')) item.emoji='';
  const text=el('span','memo-text',(item.emoji?item.emoji+' ':'')+item.text);
  const applyColor=(col)=>{
    if(col==='rainbow'){
      text.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      text.style.color='#fff';
    } else if(col){
      text.style.backgroundColor=col;
      const c=col.replace('#','');
      const r=parseInt(c.substr(0,2),16)||0,g=parseInt(c.substr(2,2),16)||0,b=parseInt(c.substr(4,2),16)||0;
      const lum=(0.299*r+0.587*g+0.114*b)/255;
      text.style.color=lum>0.6?'#111':'#fff';
    } else {
      text.style.background='transparent';
      text.style.backgroundColor='transparent';
      text.style.color='#111';
    }
    text.style.padding='2px 6px';
    text.style.borderRadius='6px';
    text.style.display='inline-block';
  };
  applyColor(item.color);

  const delBtn=el('button','del-btn','🗑'); delBtn.type='button';
  const menuBtn=el('button','memo-menu-btn','⋮'); menuBtn.type='button';
  const actions=el('div','item-actions'); actions.append(delBtn,menuBtn);
  li.append(text,actions);

  text.ondblclick=()=>{ 
    const box=document.createElement('div'); 
    box.style.display='grid'; 
    box.style.gridTemplateColumns='1fr auto auto'; 
    box.style.gap='6px';
    const ta=document.createElement('textarea'); 
    ta.className='memo-edit'; 
    ta.rows=3; 
    ta.value=item.text;
    const save=el('button','btn','저장'), cancel=el('button','btn','취소');
    save.onclick=()=>{ item.text=ta.value.trim()||item.text; set(kMemo(dstr),ref); renderMemos(); postApp({type:'refresh'}); };
    cancel.onclick=()=> renderMemos();
    box.append(ta,save,cancel); 
    li.replaceChild(box,text); 
    ta.focus();
  };

  menuBtn.onclick=(e)=>{ e.stopPropagation(); showMemoMenu(menuBtn,item,idx,ref,dstr); };
  delBtn.onclick=(e)=>{ e.stopPropagation(); ref.splice(idx,1); set(kMemo(dstr),ref); renderMemos(); postApp({type:'refresh'}); };

  text.draggable=true;
  text.addEventListener('dragstart',e=>{ e.dataTransfer.setData('text/plain',String(idx)); });
  li.addEventListener('dragover',e=>e.preventDefault());
  li.addEventListener('drop',e=>{ e.preventDefault(); const from=+e.dataTransfer.getData('text/plain'); const to=idx; if(from===to)return; const [m]=ref.splice(from,1); ref.splice(to,0,m); set(kMemo(dstr),ref); renderMemos(); postApp({type:'refresh'}); });

  return li;
}

function showMemoMenu(anchor,item,idx,ref,dstr){
  const doc=anchor.ownerDocument||document;
  if(openPop) openPop.remove();
  const pop=doc.createElement('div');
  pop.className='event-menu-popup';

  const emojiBtn=el('button','menu-item','💬 이모티콘 변경');
  const colorBtn=el('button','menu-item','🎨 색상 변경');

  emojiBtn.onclick=(e)=>{
    e.stopPropagation();
    const anchorRect=anchor.getBoundingClientRect();
    const tempAnchor={ getBoundingClientRect:()=>anchorRect, ownerDocument:doc };
    pop.remove(); openPop=null;
    showEmojiPicker(tempAnchor,(emoji)=>{ item.emoji=emoji; set(kMemo(dstr),ref); renderMemos(); postApp({type:'refresh'}); });
  };
  colorBtn.onclick=(e)=>{
    e.stopPropagation();
    const anchorRect=anchor.getBoundingClientRect();
    const tempAnchor={ getBoundingClientRect:()=>anchorRect, ownerDocument:doc };
    pop.remove(); openPop=null;
    showPalette(tempAnchor,(color)=>{ item.color=color; set(kMemo(dstr),ref); renderMemos(); postApp({type:'refresh'}); });
  };

  pop.append(emojiBtn,colorBtn);
  doc.body.appendChild(pop);
  openPop=pop;

  const rect=anchor.getBoundingClientRect();
  const win=doc.defaultView||window;
  let left=rect.left+(win.scrollX||0);
  let top=rect.bottom+4+(win.scrollY||0);
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  pop.style.visibility='hidden';

  requestAnimationFrame(()=>{
    const popRect=pop.getBoundingClientRect();
    const viewWidth=win.innerWidth;
    const viewHeight=win.innerHeight;
    if(popRect.right>viewWidth) left=Math.max(10, viewWidth-popRect.width-10);
    if(popRect.bottom>viewHeight) top=rect.top-popRect.height-4+(win.scrollY||0);
    pop.style.left=`${left}px`;
    pop.style.top=`${top}px`;
    pop.style.visibility='visible';
  });

  const closeMenu=()=>{
    if(openPop){ openPop.remove(); openPop=null; doc.removeEventListener('click',closeMenu); }
  };
  setTimeout(()=>doc.addEventListener('click',closeMenu),10);
}
$.memoAdd.onclick=()=>{ const txt=$.memoInput.value.replace(/\s+$/,''); if(!txt) return;
  const dstr=$.memoDate.value||fmtLocalDate(ST.selected);
  const list=get(kMemo(dstr)); list.push({text:txt}); set(kMemo(dstr),list); $.memoInput.value=''; renderMemos(); postApp({type:'refresh'});
};
$.memoInput.onkeydown=()=>{};

/* ── 공통 위젯 + 팝아웃 ── */
const TIME_STYLE_ID='time-style-shared';
const TIME_STYLE=`
        /* 타이머 */
        .timer__ring{position:relative;width:220px;height:220px;margin:4px auto 6px;display:flex;align-items:center;justify-content:center}
        .timer__display{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800}
        .timer__eta{display:block;text-align:center;font-size:12px;color:#6b7280;background:#eef2ff;border-radius:999px;width:max-content;margin:0 auto 6px;padding:4px 10px}
        .timer__inputs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:0 auto 6px;max-width:220px}
        .timer__inputs input{width:100%;box-sizing:border-box;padding:6px 6px;font-size:14px}
        /* 알람 & 스탑워치 공통 */
        .time-card{width:100%;max-width:260px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:6px;padding:6px;box-sizing:border-box}
        .widget--stopwatch .time-card{max-width:520px}
        .time-circle{position:relative;width:220px;height:220px;border:10px solid #e9ecf2;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:4px auto 6px;box-sizing:border-box}
        .time-circle__label{font-size:26px;font-weight:800}
        .time-sub{font-size:12px;color:#334155;background:#eef2ff;border-radius:999px;padding:4px 10px;margin:0 auto}
        .time-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:100%;max-width:240px}
        .time-grid input,.time-grid select{width:100%;box-sizing:border-box;padding:6px;font-size:14px;text-align:center}
        .time-actions{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:100%;max-width:240px;margin-top:2px}
        /* 스탑워치 전용 */
        .stopwatch__wrap{width:100%;max-width:520px;margin:0 auto;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
        .stopwatch__display{width:100%;max-width:100%;text-align:center;font-weight:800;font-size:72px;line-height:1;letter-spacing:0}
        @media (min-width:600px){ .stopwatch__display{font-size:84px;} }
`;
function ensureTimeStyles(win){
  try{
    if(win.document.getElementById(TIME_STYLE_ID)) return;
    const st=win.document.createElement('style'); st.id=TIME_STYLE_ID; st.textContent=TIME_STYLE;
    win.document.head.appendChild(st);
  }catch{}
}

function openWidgetPopup(title, bodyBuilder){
  const win=window.open('', '_blank', 'width=420,height=420,resizable=yes');
  if(!win) return null;
  win.document.write(`<!doctype html><meta charset="utf-8"><title>${title}</title>
      <style id="${TIME_STYLE_ID}">
        html,body{margin:0;height:100%;overflow:hidden}
        body{background:#fff;font-family:"Noto Sans","Noto Sans KR",sans-serif}
        .wrap{padding:0;box-sizing:border-box;height:100%;width:100%;overflow:hidden;display:flex;align-items:stretch;justify-content:stretch}
        .wrap > *{flex:1;min-height:100%}
        .btn{padding:6px 10px;border:1px solid #e9ecf2;border-radius:10px;background:#f6f8ff;cursor:pointer}
        .color-btn,.del-btn{width:32px;height:28px;padding:0;border:1px solid #d9e0eb;border-radius:10px;background:#f7f9fc;display:inline-grid;place-items:center;cursor:pointer;font-size:15px;line-height:1;color:#475569}
        .color-btn:hover,.del-btn:hover{background:#eef2f8;border-color:#cdd5e2}
        .color-pop{position:absolute;z-index:9999;background:#fff;border:1px solid #e9ecf2;border-radius:10px;padding:8px;display:grid;grid-template-columns:repeat(10,16px);gap:6px;box-shadow:0 6px 18px rgba(17,24,39,.08)}
        .color-pop .sw{width:16px;height:16px;border-radius:4px;border:1px solid #d6dae3;cursor:pointer}
${TIME_STYLE}
        /* ★ 미니 달력 */
        .mini-cal__head{display:flex;gap:8px;align-items:center;margin-bottom:6px;font-size:12px}
        .mini-cal__days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:2px}
        .mini-cal__days span{font-size:11px;font-weight:600;color:#475569;text-align:center}
        .mini-cal__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:0;border:1px solid #e9ecf2;border-radius:12px;overflow:hidden;background:#fff;height:100%;min-height:0;grid-auto-rows:minmax(0,1fr)}
        .mini-day{position:relative;display:flex;flex-direction:column;gap:3px;padding:4px 2px 2px;border-right:1px solid #e9ecf2;border-bottom:1px solid #e9ecf2;background:#fff;min-height:0;box-sizing:border-box}
        .mini-day:nth-child(7n){border-right:none}
        .mini-day:nth-last-child(-n+7){border-bottom:none}
        .mini-day__num{font-size:11px;font-weight:700;color:#0f172a;margin-bottom:0}
        .mini-day--out .mini-day__num{color:#cbd5e1}
        .mini-day--sel{outline:2px solid #dbeafe}
        .mini-labels{display:flex;flex-direction:column;gap:2px;flex:1;overflow:hidden}
        .mini-label{display:flex;align-items:center;gap:3px;font-size:10px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#1f2937;padding:0;border-radius:0;background:transparent}
        .mini-label.done{color:#94a3b8;text-decoration:line-through;background:transparent}
        .mini-more{margin-left:auto;font-size:10px;color:#2563eb;font-weight:600}
      </style><div class="wrap"></div>`);
  const wrap=win.document.querySelector('.wrap');
  if(wrap) wrap.appendChild(bodyBuilder(true, win));
  win.document.close();
  return win;
}

let z=10;
let widgetSpawnIdx=0;
function makeWidget(title, bodyBuilder, rootClass){
  ensureTimeStyles(window);
  const w=el('section','widget'+(rootClass?` ${rootClass}`:'')); w.style.zIndex=++z; w.style.fontFamily='"Noto Sans KR","Noto Sans",sans-serif';
  const head=el('div','widget__head'); head.style.cursor='grab';
  const t=el('div','widget__title',title);
  const btns=el('div'); const pop=el('button','widget__btn','↗'); const x=el('button','widget__btn','✕');
  btns.append(pop,x); head.append(t,btns);
  const body=el('div','widget__body'); body.appendChild(bodyBuilder(false, window));

  let sx=0,sy=0,ox=0,oy=0,dragging=false;
  const onMove=(e)=>{ if(!dragging) return; w.style.left=`${ox+(e.clientX-sx)}px`; w.style.top=`${oy+(e.clientY-sy)}px`; };
  const onUp=()=>{ dragging=false; window.removeEventListener('mousemove',onMove); window.removeEventListener('mouseup',onUp); head.style.cursor='grab'; };
  head.addEventListener('mousedown',(e)=>{ dragging=true; head.style.cursor='grabbing'; sx=e.clientX; sy=e.clientY; const r=w.getBoundingClientRect(); ox=r.left; oy=r.top; w.style.zIndex=++z; window.addEventListener('mousemove',onMove); window.addEventListener('mouseup',onUp); });

  x.onclick=()=>w.remove();

  // spawn offset so multiple widgets don't perfectly overlap
  const step=28;
  const guessW=380, guessH=240;
  const idx=widgetSpawnIdx++;
  const offset=idx*step;
  const baseL=260, baseT=140;
  const maxL=Math.max(16,(window.innerWidth||960)-guessW-24);
  const maxT=Math.max(16,(window.innerHeight||640)-guessH-24);
  w.style.left=`${Math.min(baseL+offset, maxL)}px`;
  w.style.top=`${Math.min(baseT+offset, maxT)}px`;

  pop.onclick=()=>{ openWidgetPopup(title, bodyBuilder); };

  w.append(head,body); $.host.appendChild(w); return w;
}

/* ── 전역 타이머(동기화/복원) ── */
function getGlobalTimerId(){
  let id=localStorage.getItem('memo2.timer.globalId');
  if(!id){ id='global-timer-1'; localStorage.setItem('memo2.timer.globalId', id); }
  return id;
}
function widgetTimer(){
  const groupId=getGlobalTimerId();
  const key=`memo2.timer.${groupId}`;
  const stateKey=`memo2.timer.state.${groupId}`;

  function build(isPopup, targetWin){
    const selfId=Math.random().toString(36).slice(2);
    const bc=('BroadcastChannel' in targetWin)? new targetWin.BroadcastChannel(key): null;
    const send=(msg)=>{ if(bc) bc.postMessage({src:selfId,...msg}); localStorage.setItem(key,JSON.stringify({src:selfId,...msg,ts:Date.now()})); };
    const saveState=(snap)=> localStorage.setItem(stateKey, JSON.stringify(snap));

    const wrap=el('div');
    wrap.style.display='flex';
    wrap.style.flexDirection='column';
    wrap.style.alignItems='center';
    wrap.style.gap='6px';
    wrap.style.padding='6px';

    const size=220, sw=10, r=(size-sw)/2, C=2*Math.PI*r, NS='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(NS,'svg'); svg.setAttribute('width',size); svg.setAttribute('height',size);
    const bg=document.createElementNS(NS,'circle'); bg.setAttribute('cx',size/2); bg.setAttribute('cy',size/2); bg.setAttribute('r',r);
    bg.setAttribute('fill','none'); bg.setAttribute('stroke','#e9ecf2'); bg.setAttribute('stroke-width',sw);
    const fg=document.createElementNS(NS,'circle'); fg.setAttribute('cx',size/2); fg.setAttribute('cy',size/2); fg.setAttribute('r',r);
    fg.setAttribute('fill','none'); fg.setAttribute('stroke','#5c8dff'); fg.setAttribute('stroke-width',sw); fg.setAttribute('stroke-linecap','round');
    fg.setAttribute('transform',`rotate(-90 ${size/2} ${size/2})`);
    fg.setAttribute('stroke-dasharray',String(C)); fg.setAttribute('stroke-dashoffset',String(C));
    const disp=el('div','timer__display','00:00:00');
    const ring=el('div','timer__ring'); ring.append(svg,disp); svg.append(bg,fg);
    const eta=el('div','timer__eta','—');

    // 버튼 컨테이너 (원형 아이콘 버튼)
    const row=el('div');
    row.style.display='flex';
    row.style.justifyContent='center';
    row.style.gap='12px';
    row.style.width='100%';
    row.style.margin='8px auto 0';
    
    // 시작 버튼 (재생 아이콘)
    const bStart=document.createElement('button');
    bStart.className='timer-btn timer-btn-start';
    bStart.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
    
    // 일시정지 버튼 (일시정지 아이콘)
    const bPause=document.createElement('button');
    bPause.className='timer-btn timer-btn-pause';
    bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
    
    // 리셋 버튼 (리셋 아이콘)
    const bReset=document.createElement('button');
    bReset.className='timer-btn timer-btn-reset';
    bReset.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="currentColor"/></svg>`;
    
    row.append(bStart,bPause,bReset);

    let totalMs=0,endPerf=0,raf=null,paused=false,remainMs=0;
    const fmt=(ms)=>{const s=Math.max(0,Math.ceil(ms/1000));const hh=String(Math.floor(s/3600)).padStart(2,'0');const mm=String(Math.floor((s%3600)/60)).padStart(2,'0');const ss=String(s%60).padStart(2,'0');return `${hh}:${mm}:${ss}`;}
    const draw=(left)=>{ const p=totalMs>0?Math.min(1,Math.max(0,1-left/totalMs)):0; fg.setAttribute('stroke-dashoffset',String(C*(1-p))); disp.textContent=fmt(left); }
    const tick=()=>{ const left=Math.max(0,endPerf-performance.now()); draw(left); if(left<=0){ cancelAnimationFrame(raf); raf=null; alert('타이머 종료'); send({type:'reset'}); saveState({status:'idle'}); return; } raf=requestAnimationFrame(tick); }

    function apply(msg,remote=false){
      if(msg.type==='start'){
        totalMs=msg.totalMs; const dur=Math.max(0,msg.endEpoch-Date.now()); endPerf=performance.now()+dur; paused=false; remainMs=0;
        eta.textContent=`종료 ${fmtAmPm(new Date(msg.endEpoch))}`; bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); draw(dur); raf=requestAnimationFrame(tick);
        if(!remote) send({type:'start',totalMs,endEpoch:msg.endEpoch});
        saveState({status:'running',totalMs,endEpoch:msg.endEpoch});
      }else if(msg.type==='pause'){
        if(raf){ cancelAnimationFrame(raf); raf=null; } paused=true; remainMs=msg.remainMs; eta.textContent='—'; bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; draw(remainMs);
        if(!remote) send({type:'pause',remainMs});
        saveState({status:'paused',totalMs,remainMs});
      }else if(msg.type==='resume'){
        paused=false; endPerf=performance.now()+msg.remainMs; eta.textContent=`종료 ${fmtAmPm(new Date(Date.now()+msg.remainMs))}`; bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); raf=requestAnimationFrame(tick);
        if(!remote) send({type:'resume',remainMs:msg.remainMs});
        saveState({status:'running',totalMs,endEpoch:Date.now()+msg.remainMs});
      }else if(msg.type==='reset'){
        if(raf) cancelAnimationFrame(raf); raf=null; paused=false; totalMs=0; endPerf=0; remainMs=0;
        fg.setAttribute('stroke-dashoffset',String(C)); disp.textContent='00:00:00'; eta.textContent='—'; bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        if(!remote) send({type:'reset'});
        saveState({status:'idle'});
      }
    }

    bStart.onclick=()=>{ 
      // 입력 필드가 없으므로 기본 3분 설정
      if(totalMs<=0) totalMs=3*60*1000;
      const duration=remainMs>0?remainMs:totalMs; 
      apply({type:'start',totalMs,endEpoch:Date.now()+duration},false); 
    };
    bPause.onclick=()=>{ if(raf){const left=Math.max(0,endPerf-performance.now()); apply({type:'pause',remainMs:left},false);} else if(paused&&remainMs>0){apply({type:'resume',remainMs},false);} };
    bReset.onclick=()=> apply({type:'reset'},false);

    if(bc) bc.onmessage=(e)=>{ if(e.data?.src===selfId) return; apply(e.data,true); };
    targetWin.addEventListener('storage',(e)=>{ if(e.key!==key||!e.newValue) return; const msg=JSON.parse(e.newValue); if(msg.src===selfId) return; apply(msg,true); });

    // 복원
    try{
      const snap=JSON.parse(localStorage.getItem(stateKey)||'null');
      if(snap){
        if(snap.status==='running'&&snap.endEpoch){ apply({type:'start',totalMs:snap.totalMs||0,endEpoch:snap.endEpoch},true); }
        else if(snap.status==='paused'&&typeof snap.remainMs==='number'){ totalMs=snap.totalMs||0; apply({type:'pause',remainMs:snap.remainMs},true); }
      }
    }catch{}

    wrap.append(ring,eta,row);
    return wrap;
  }
  return makeWidget('타이머', build, 'widget--timer');
}

/* ── 타이머 페이지 (6개 타이머) ── */
function initTimersPage(){
  const grid=document.getElementById('timerGrid');
  if(!grid) return;
  
  // 이미 초기화되었으면 리턴
  if(grid.dataset.initialized==='true') return;
  grid.dataset.initialized='true';
  
  // 6개 타이머 생성
  for(let i=1; i<=6; i++){
    const box=createTimerBox(i);
    grid.appendChild(box);
  }
}

function createTimerBox(index){
  const key=`memo2.timer.multi.${index}`;
  const stateKey=`memo2.timer.state.multi.${index}`;
  const settingsKey=`memo2.timer.settings.multi.${index}`;
  
  // 저장된 설정값 불러오기
  let savedSettings={h:0,m:0,s:0};
  try{
    const saved=localStorage.getItem(settingsKey);
    if(saved) savedSettings=JSON.parse(saved);
  }catch{}
  
  const box=el('div','timer-box');
  
  // 헤더 (화살표, X 버튼)
  const header=el('div','timer-box__header');
  const popoutBtn=el('button','timer-box__btn','↗');
  popoutBtn.title='위젯으로 열기';
  popoutBtn.onclick=()=> openTimerWidgetPopup(index);
  header.appendChild(popoutBtn);
  
  // SVG 원형 프로그레스
  const size=180, sw=10, r=(size-sw)/2, C=2*Math.PI*r, NS='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(NS,'svg'); 
  svg.setAttribute('width',size); 
  svg.setAttribute('height',size);
  const bg=document.createElementNS(NS,'circle'); 
  bg.setAttribute('cx',size/2); 
  bg.setAttribute('cy',size/2); 
  bg.setAttribute('r',r);
  bg.setAttribute('fill','none'); 
  bg.setAttribute('stroke','#e9ecf2'); 
  bg.setAttribute('stroke-width',sw);
  const fg=document.createElementNS(NS,'circle'); 
  fg.setAttribute('cx',size/2); 
  fg.setAttribute('cy',size/2); 
  fg.setAttribute('r',r);
  fg.setAttribute('fill','none'); 
  fg.setAttribute('stroke','#5c8dff'); 
  fg.setAttribute('stroke-width',sw); 
  fg.setAttribute('stroke-linecap','round');
  fg.setAttribute('transform',`rotate(-90 ${size/2} ${size/2})`);
  fg.setAttribute('stroke-dasharray',String(C)); 
  fg.setAttribute('stroke-dashoffset',String(C));
  
  const disp=el('div','timer__display','00:00:00');
  const ring=el('div','timer__ring'); 
  ring.append(svg,disp); 
  svg.append(bg,fg);
  
  const eta=el('div','timer__eta','—');
  
  // 입력 필드
  const inputs=el('div','timer__inputs');
  const ih=document.createElement('input'); 
  ih.type='number'; ih.min=0; ih.placeholder='시'; ih.value=savedSettings.h||'';
  const im=document.createElement('input'); 
  im.type='number'; im.min=0; im.placeholder='분'; im.value=savedSettings.m||'';
  const is=document.createElement('input'); 
  is.type='number'; is.min=0; is.placeholder='초'; is.value=savedSettings.s||'';
  inputs.append(ih,im,is);
  
  // 설정값 저장
  const saveSettings=()=>{
    const settings={h:+ih.value||0,m:+im.value||0,s:+is.value||0};
    localStorage.setItem(settingsKey,JSON.stringify(settings));
  };
  [ih,im,is].forEach(inp=>inp.addEventListener('change',saveSettings));
  
  // 컨트롤 버튼 (원형 아이콘)
  const controls=el('div','timer__controls');
  
  // 시작 버튼 (재생 아이콘)
  const bStart=document.createElement('button');
  bStart.className='timer-btn timer-btn-start';
  bStart.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M8 5v14l11-7z" fill="currentColor"/>
  </svg>`;
  
  // 일시정지 버튼 (일시정지 아이콘)
  const bPause=document.createElement('button');
  bPause.className='timer-btn timer-btn-pause';
  bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
  </svg>`;
  
  // 리셋 버튼 (리셋 아이콘)
  const bReset=document.createElement('button');
  bReset.className='timer-btn timer-btn-reset';
  bReset.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="currentColor"/>
  </svg>`;
  
  controls.append(bStart,bPause,bReset);
  
  box.append(header,ring,eta,inputs,controls);
  
  // 타이머 로직
  let totalMs=0,endPerf=0,raf=null,paused=false,remainMs=0;
  const selfId=Math.random().toString(36).slice(2);
  
  const fmt=(ms)=>{
    const s=Math.max(0,Math.ceil(ms/1000));
    const hh=String(Math.floor(s/3600)).padStart(2,'0');
    const mm=String(Math.floor((s%3600)/60)).padStart(2,'0');
    const ss=String(s%60).padStart(2,'0');
    return `${hh}:${mm}:${ss}`;
  };
  
  const fmtAmPm=(d)=>{
    const h=d.getHours(),m=d.getMinutes();
    const ampm=h>=12?'오후':'오전';
    const hh=h%12||12;
    return `${ampm} ${hh}:${String(m).padStart(2,'0')}`;
  };
  
  const draw=(left)=>{ 
    const p=totalMs>0?Math.min(1,Math.max(0,1-left/totalMs)):0; 
    fg.setAttribute('stroke-dashoffset',String(C*(1-p))); 
    disp.textContent=fmt(left); 
  };
  
  const tick=()=>{ 
    const left=Math.max(0,endPerf-performance.now()); 
    draw(left); 
    if(left<=0){ 
      cancelAnimationFrame(raf); 
      raf=null; 
      alert(`타이머 ${index} 종료`); 
      apply({type:'reset'}); 
      return; 
    } 
    raf=requestAnimationFrame(tick); 
  };
  
  const saveState=(snap)=> localStorage.setItem(stateKey, JSON.stringify(snap));
  const bc=('BroadcastChannel' in window)? new BroadcastChannel(key): null;
  const send=(msg)=>{ 
    if(bc) bc.postMessage({src:selfId,...msg}); 
    localStorage.setItem(key,JSON.stringify({src:selfId,...msg,ts:Date.now()})); 
  };
  
  function apply(msg,remote=false){
    if(msg.type==='start'){
      totalMs=msg.totalMs; 
      const dur=Math.max(0,msg.endEpoch-Date.now()); 
      endPerf=performance.now()+dur; 
      paused=false; 
      remainMs=0;
      eta.textContent=`종료 ${fmtAmPm(new Date(msg.endEpoch))}`; 
      bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
      if(raf) cancelAnimationFrame(raf); 
      draw(dur); 
      raf=requestAnimationFrame(tick);
      if(!remote) send({type:'start',totalMs,endEpoch:msg.endEpoch});
      saveState({status:'running',totalMs,endEpoch:msg.endEpoch});
    }else if(msg.type==='pause'){
      if(raf){ cancelAnimationFrame(raf); raf=null; } 
      paused=true; 
      remainMs=msg.remainMs; 
      eta.textContent='—'; 
      bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; 
      draw(remainMs);
      if(!remote) send({type:'pause',remainMs});
      saveState({status:'paused',totalMs,remainMs});
    }else if(msg.type==='resume'){
      paused=false; 
      endPerf=performance.now()+msg.remainMs; 
      eta.textContent=`종료 ${fmtAmPm(new Date(Date.now()+msg.remainMs))}`; 
      bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
      if(raf) cancelAnimationFrame(raf); 
      raf=requestAnimationFrame(tick);
      if(!remote) send({type:'resume',remainMs:msg.remainMs});
      saveState({status:'running',totalMs,endEpoch:Date.now()+msg.remainMs});
    }else if(msg.type==='reset'){
      if(raf) cancelAnimationFrame(raf); 
      raf=null; 
      paused=false; 
      totalMs=0; 
      endPerf=0; 
      remainMs=0;
      fg.setAttribute('stroke-dashoffset',String(C)); 
      disp.textContent='00:00:00'; 
      eta.textContent='—'; 
      bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
      if(!remote) send({type:'reset'});
      saveState({status:'idle'});
    }
  }
  
  bStart.onclick=()=>{ 
    saveSettings();
    const hh=+ih.value||0, mm=+im.value||0, ss=+is.value||0; 
    totalMs=((hh*3600)+(mm*60)+ss)*1000; 
    if(totalMs<=0) return;
    const duration=remainMs>0?remainMs:totalMs; 
    apply({type:'start',totalMs,endEpoch:Date.now()+duration}); 
  };
  
  bPause.onclick=()=>{ 
    if(raf){
      const left=Math.max(0,endPerf-performance.now()); 
      apply({type:'pause',remainMs:left});
    } else if(paused&&remainMs>0){
      apply({type:'resume',remainMs});
    } 
  };
  
  bReset.onclick=()=> apply({type:'reset'});
  
  if(bc) bc.onmessage=(e)=>{ 
    if(e.data?.src===selfId) return; 
    apply(e.data,true); 
  };
  
  window.addEventListener('storage',(e)=>{ 
    if(e.key!==key||!e.newValue) return; 
    const msg=JSON.parse(e.newValue); 
    if(msg.src===selfId) return; 
    apply(msg,true); 
  });
  
  // 복원
  try{
    const snap=JSON.parse(localStorage.getItem(stateKey)||'null');
    if(snap){
      if(snap.status==='running'&&snap.endEpoch){ 
        apply({type:'start',totalMs:snap.totalMs||0,endEpoch:snap.endEpoch},true); 
      }
      else if(snap.status==='paused'&&typeof snap.remainMs==='number'){ 
        totalMs=snap.totalMs||0; 
        apply({type:'pause',remainMs:snap.remainMs},true); 
      }
    }
  }catch{}
  
  return box;
}

function openTimerWidgetPopup(index){
  const key=`memo2.timer.multi.${index}`;
  const stateKey=`memo2.timer.state.multi.${index}`;
  const settingsKey=`memo2.timer.settings.multi.${index}`;
  
  function build(isPopup, targetWin){
    // 저장된 설정값 불러오기
    let savedSettings={h:0,m:0,s:0};
    try{
      const saved=localStorage.getItem(settingsKey);
      if(saved) savedSettings=JSON.parse(saved);
    }catch{}
    
    const selfId=Math.random().toString(36).slice(2);
    const bc=('BroadcastChannel' in targetWin)? new targetWin.BroadcastChannel(key): null;
    const send=(msg)=>{ 
      if(bc) bc.postMessage({src:selfId,...msg}); 
      localStorage.setItem(key,JSON.stringify({src:selfId,...msg,ts:Date.now()})); 
    };
    const saveState=(snap)=> localStorage.setItem(stateKey, JSON.stringify(snap));

    const wrap=el('div');
    wrap.style.display='flex';
    wrap.style.flexDirection='column';
    wrap.style.alignItems='center';
    wrap.style.gap='6px';
    wrap.style.padding='6px';

    const size=220, sw=10, r=(size-sw)/2, C=2*Math.PI*r, NS='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(NS,'svg'); 
    svg.setAttribute('width',size); 
    svg.setAttribute('height',size);
    const bg=document.createElementNS(NS,'circle'); 
    bg.setAttribute('cx',size/2); 
    bg.setAttribute('cy',size/2); 
    bg.setAttribute('r',r);
    bg.setAttribute('fill','none'); 
    bg.setAttribute('stroke','#e9ecf2'); 
    bg.setAttribute('stroke-width',sw);
    const fg=document.createElementNS(NS,'circle'); 
    fg.setAttribute('cx',size/2); 
    fg.setAttribute('cy',size/2); 
    fg.setAttribute('r',r);
    fg.setAttribute('fill','none'); 
    fg.setAttribute('stroke','#5c8dff'); 
    fg.setAttribute('stroke-width',sw); 
    fg.setAttribute('stroke-linecap','round');
    fg.setAttribute('transform',`rotate(-90 ${size/2} ${size/2})`);
    fg.setAttribute('stroke-dasharray',String(C)); 
    fg.setAttribute('stroke-dashoffset',String(C));
    const disp=el('div','timer__display','00:00:00');
    const ring=el('div','timer__ring'); 
    ring.append(svg,disp); 
    svg.append(bg,fg);
    const eta=el('div','timer__eta','—');

    const inputs=el('div','timer__inputs');
    const ih=document.createElement('input'); 
    ih.type='number'; ih.min=0; ih.placeholder='시'; ih.value=savedSettings.h||'';
    const im=document.createElement('input'); 
    im.type='number'; im.min=0; im.placeholder='분'; im.value=savedSettings.m||'';
    const is=document.createElement('input'); 
    is.type='number'; is.min=0; is.placeholder='초'; is.value=savedSettings.s||'';
    inputs.append(ih,im,is);
    
    // 설정값 저장
    const saveSettings=()=>{
      const settings={h:+ih.value||0,m:+im.value||0,s:+is.value||0};
      localStorage.setItem(settingsKey,JSON.stringify(settings));
    };
    [ih,im,is].forEach(inp=>inp.addEventListener('change',saveSettings));

    // 버튼 컨테이너 (원형 아이콘 버튼)
    const row=el('div');
    row.style.display='flex';
    row.style.justifyContent='center';
    row.style.gap='12px';
    row.style.width='100%';
    row.style.margin='8px auto 0';
    
    // 시작 버튼 (재생 아이콘)
    const bStart=document.createElement('button');
    bStart.className='timer-btn timer-btn-start';
    bStart.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
    
    // 일시정지 버튼
    const bPause=document.createElement('button');
    bPause.className='timer-btn timer-btn-pause';
    bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
    
    // 리셋 버튼
    const bReset=document.createElement('button');
    bReset.className='timer-btn timer-btn-reset';
    bReset.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="currentColor"/></svg>`;
    
    row.append(bStart,bPause,bReset);

    let totalMs=0,endPerf=0,raf=null,paused=false,remainMs=0;
    const fmt=(ms)=>{
      const s=Math.max(0,Math.ceil(ms/1000));
      const hh=String(Math.floor(s/3600)).padStart(2,'0');
      const mm=String(Math.floor((s%3600)/60)).padStart(2,'0');
      const ss=String(s%60).padStart(2,'0');
      return `${hh}:${mm}:${ss}`;
    };
    const draw=(left)=>{ 
      const p=totalMs>0?Math.min(1,Math.max(0,1-left/totalMs)):0; 
      fg.setAttribute('stroke-dashoffset',String(C*(1-p))); 
      disp.textContent=fmt(left); 
    };
    const tick=()=>{ 
      const left=Math.max(0,endPerf-performance.now()); 
      draw(left); 
      if(left<=0){ 
        cancelAnimationFrame(raf); 
        raf=null; 
        alert(`타이머 ${index} 종료`); 
        send({type:'reset'}); 
        saveState({status:'idle'}); 
        return; 
      } 
      raf=requestAnimationFrame(tick); 
    };

    function apply(msg,remote=false){
      if(msg.type==='start'){
        totalMs=msg.totalMs; 
        const dur=Math.max(0,msg.endEpoch-Date.now()); 
        endPerf=performance.now()+dur; 
        paused=false; 
        remainMs=0;
        eta.textContent=`종료 ${fmtAmPm(new Date(msg.endEpoch))}`; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); 
        draw(dur); 
        raf=requestAnimationFrame(tick);
        if(!remote) send({type:'start',totalMs,endEpoch:msg.endEpoch});
        saveState({status:'running',totalMs,endEpoch:msg.endEpoch});
      }else if(msg.type==='pause'){
        if(raf){ cancelAnimationFrame(raf); raf=null; } 
        paused=true; 
        remainMs=msg.remainMs; 
        eta.textContent='—'; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; 
        draw(remainMs);
        if(!remote) send({type:'pause',remainMs});
        saveState({status:'paused',totalMs,remainMs});
      }else if(msg.type==='resume'){
        paused=false; 
        endPerf=performance.now()+msg.remainMs; 
        eta.textContent=`종료 ${fmtAmPm(new Date(Date.now()+msg.remainMs))}`; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); 
        raf=requestAnimationFrame(tick);
        if(!remote) send({type:'resume',remainMs:msg.remainMs});
        saveState({status:'running',totalMs,endEpoch:Date.now()+msg.remainMs});
      }else if(msg.type==='reset'){
        if(raf) cancelAnimationFrame(raf); 
        raf=null; 
        paused=false; 
        totalMs=0; 
        endPerf=0; 
        remainMs=0;
        fg.setAttribute('stroke-dashoffset',String(C)); 
        disp.textContent='00:00:00'; 
        eta.textContent='—'; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        if(!remote) send({type:'reset'});
        saveState({status:'idle'});
      }
    }

    bStart.onclick=()=>{ 
      saveSettings();
      const hh=+ih.value||0, mm=+im.value||0, ss=+is.value||0; 
      totalMs=((hh*3600)+(mm*60)+ss)*1000; 
      if(totalMs<=0) return;
      const duration=remainMs>0?remainMs:totalMs; 
      apply({type:'start',totalMs,endEpoch:Date.now()+duration}); 
    };
    
    bPause.onclick=()=>{ 
      if(raf){
        const left=Math.max(0,endPerf-performance.now()); 
        apply({type:'pause',remainMs:left});
      } else if(paused&&remainMs>0){
        apply({type:'resume',remainMs});
      } 
    };
    
    bReset.onclick=()=> apply({type:'reset'});
    
    if(bc) bc.onmessage=(e)=>{ 
      if(e.data?.src===selfId) return; 
      apply(e.data,true); 
    };
    targetWin.addEventListener('storage',(e)=>{ 
      if(e.key!==key||!e.newValue) return; 
      const msg=JSON.parse(e.newValue); 
      if(msg.src===selfId) return; 
      apply(msg,true); 
    });

    // 복원
    try{
      const snap=JSON.parse(localStorage.getItem(stateKey)||'null');
      if(snap){
        if(snap.status==='running'&&snap.endEpoch){ 
          apply({type:'start',totalMs:snap.totalMs||0,endEpoch:snap.endEpoch},true); 
        }
        else if(snap.status==='paused'&&typeof snap.remainMs==='number'){ 
          totalMs=snap.totalMs||0; 
          apply({type:'pause',remainMs:snap.remainMs},true); 
        }
      }
    }catch{}

    wrap.append(ring,eta,inputs,row);
    return wrap;
  }
  
  openWidgetPopup(`타이머 ${index}`, build);
}

function openTimerWidget(index){
  const key=`memo2.timer.multi.${index}`;
  const stateKey=`memo2.timer.state.multi.${index}`;
  const settingsKey=`memo2.timer.settings.multi.${index}`;
  
  function build(isPopup, targetWin){
    // 저장된 설정값 불러오기
    let savedSettings={h:0,m:0,s:0};
    try{
      const saved=localStorage.getItem(settingsKey);
      if(saved) savedSettings=JSON.parse(saved);
    }catch{}
    
    const selfId=Math.random().toString(36).slice(2);
    const bc=('BroadcastChannel' in targetWin)? new targetWin.BroadcastChannel(key): null;
    const send=(msg)=>{ 
      if(bc) bc.postMessage({src:selfId,...msg}); 
      localStorage.setItem(key,JSON.stringify({src:selfId,...msg,ts:Date.now()})); 
    };
    const saveState=(snap)=> localStorage.setItem(stateKey, JSON.stringify(snap));

    const wrap=el('div');
    wrap.style.display='flex';
    wrap.style.flexDirection='column';
    wrap.style.alignItems='center';
    wrap.style.gap='6px';
    wrap.style.padding='6px';

    const size=220, sw=10, r=(size-sw)/2, C=2*Math.PI*r, NS='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(NS,'svg'); 
    svg.setAttribute('width',size); 
    svg.setAttribute('height',size);
    const bg=document.createElementNS(NS,'circle'); 
    bg.setAttribute('cx',size/2); 
    bg.setAttribute('cy',size/2); 
    bg.setAttribute('r',r);
    bg.setAttribute('fill','none'); 
    bg.setAttribute('stroke','#e9ecf2'); 
    bg.setAttribute('stroke-width',sw);
    const fg=document.createElementNS(NS,'circle'); 
    fg.setAttribute('cx',size/2); 
    fg.setAttribute('cy',size/2); 
    fg.setAttribute('r',r);
    fg.setAttribute('fill','none'); 
    fg.setAttribute('stroke','#5c8dff'); 
    fg.setAttribute('stroke-width',sw); 
    fg.setAttribute('stroke-linecap','round');
    fg.setAttribute('transform',`rotate(-90 ${size/2} ${size/2})`);
    fg.setAttribute('stroke-dasharray',String(C)); 
    fg.setAttribute('stroke-dashoffset',String(C));
    const disp=el('div','timer__display','00:00:00');
    const ring=el('div','timer__ring'); 
    ring.append(svg,disp); 
    svg.append(bg,fg);
    const eta=el('div','timer__eta','—');

    const inputs=el('div','timer__inputs');
    const ih=document.createElement('input'); 
    ih.type='number'; ih.min=0; ih.placeholder='시'; ih.value=savedSettings.h||'';
    const im=document.createElement('input'); 
    im.type='number'; im.min=0; im.placeholder='분'; im.value=savedSettings.m||'';
    const is=document.createElement('input'); 
    is.type='number'; is.min=0; is.placeholder='초'; is.value=savedSettings.s||'';
    [ih,im,is].forEach(inp=>{ inp.style.textAlign='center'; inp.style.height='34px'; });
    inputs.append(ih,im,is);
    
    // 설정값 저장
    const saveSettings=()=>{
      const settings={h:+ih.value||0,m:+im.value||0,s:+is.value||0};
      localStorage.setItem(settingsKey,JSON.stringify(settings));
    };
    [ih,im,is].forEach(inp=>inp.addEventListener('change',saveSettings));

    const row=el('div');
    row.style.display='flex';
    row.style.justifyContent='center';
    row.style.gap='12px';
    row.style.width='100%';
    row.style.margin='8px auto 0';
    
    // 시작 버튼 (재생 아이콘)
    const bStart=document.createElement('button');
    bStart.className='timer-btn timer-btn-start';
    bStart.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
    
    // 일시정지 버튼
    const bPause=document.createElement('button');
    bPause.className='timer-btn timer-btn-pause';
    bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
    
    // 리셋 버튼
    const bReset=document.createElement('button');
    bReset.className='timer-btn timer-btn-reset';
    bReset.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="currentColor"/></svg>`;
    
    row.append(bStart,bPause,bReset);

    let totalMs=0,endPerf=0,raf=null,paused=false,remainMs=0;
    const fmt=(ms)=>{
      const s=Math.max(0,Math.ceil(ms/1000));
      const hh=String(Math.floor(s/3600)).padStart(2,'0');
      const mm=String(Math.floor((s%3600)/60)).padStart(2,'0');
      const ss=String(s%60).padStart(2,'0');
      return `${hh}:${mm}:${ss}`;
    };
    const draw=(left)=>{ 
      const p=totalMs>0?Math.min(1,Math.max(0,1-left/totalMs)):0; 
      fg.setAttribute('stroke-dashoffset',String(C*(1-p))); 
      disp.textContent=fmt(left); 
    };
    const tick=()=>{ 
      const left=Math.max(0,endPerf-performance.now()); 
      draw(left); 
      if(left<=0){ 
        cancelAnimationFrame(raf); 
        raf=null; 
        alert(`타이머 ${index} 종료`); 
        send({type:'reset'}); 
        saveState({status:'idle'}); 
        return; 
      } 
      raf=requestAnimationFrame(tick); 
    };

    function apply(msg,remote=false){
      if(msg.type==='start'){
        totalMs=msg.totalMs; 
        const dur=Math.max(0,msg.endEpoch-Date.now()); 
        endPerf=performance.now()+dur; 
        paused=false; 
        remainMs=0;
        eta.textContent=`종료 ${fmtAmPm(new Date(msg.endEpoch))}`; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); 
        draw(dur); 
        raf=requestAnimationFrame(tick);
        if(!remote) send({type:'start',totalMs,endEpoch:msg.endEpoch});
        saveState({status:'running',totalMs,endEpoch:msg.endEpoch});
      }else if(msg.type==='pause'){
        if(raf){ cancelAnimationFrame(raf); raf=null; } 
        paused=true; 
        remainMs=msg.remainMs; 
        eta.textContent='—'; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`; 
        draw(remainMs);
        if(!remote) send({type:'pause',remainMs});
        saveState({status:'paused',totalMs,remainMs});
      }else if(msg.type==='resume'){
        paused=false; 
        endPerf=performance.now()+msg.remainMs; 
        eta.textContent=`종료 ${fmtAmPm(new Date(Date.now()+msg.remainMs))}`; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/></svg>`;
        if(raf) cancelAnimationFrame(raf); 
        raf=requestAnimationFrame(tick);
        if(!remote) send({type:'resume',remainMs:msg.remainMs});
        saveState({status:'running',totalMs,endEpoch:Date.now()+msg.remainMs});
      }else if(msg.type==='reset'){
        if(raf) cancelAnimationFrame(raf); 
        raf=null; 
        paused=false; 
        totalMs=0; 
        endPerf=0; 
        remainMs=0;
        fg.setAttribute('stroke-dashoffset',String(C)); 
        disp.textContent='00:00:00'; 
        eta.textContent='—'; 
        bPause.innerHTML=`<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        if(!remote) send({type:'reset'});
        saveState({status:'idle'});
      }
    }

    bStart.onclick=()=>{ 
      saveSettings();
      const hh=+ih.value||0, mm=+im.value||0, ss=+is.value||0; 
      totalMs=((hh*3600)+(mm*60)+ss)*1000; 
      if(totalMs<=0) return;
      const duration=remainMs>0?remainMs:totalMs; 
      apply({type:'start',totalMs,endEpoch:Date.now()+duration},false); 
    };
    bPause.onclick=()=>{ 
      if(raf){
        const left=Math.max(0,endPerf-performance.now()); 
        apply({type:'pause',remainMs:left},false);
      } else if(paused&&remainMs>0){
        apply({type:'resume',remainMs},false);
      } 
    };
    bReset.onclick=()=> apply({type:'reset'},false);

    if(bc) bc.onmessage=(e)=>{ 
      if(e.data?.src===selfId) return; 
      apply(e.data,true); 
    };
    targetWin.addEventListener('storage',(e)=>{ 
      if(e.key!==key||!e.newValue) return; 
      const msg=JSON.parse(e.newValue); 
      if(msg.src===selfId) return; 
      apply(msg,true); 
    });

    // 복원
    try{
      const snap=JSON.parse(localStorage.getItem(stateKey)||'null');
      if(snap){
        if(snap.status==='running'&&snap.endEpoch){ 
          apply({type:'start',totalMs:snap.totalMs||0,endEpoch:snap.endEpoch},true); 
        }
        else if(snap.status==='paused'&&typeof snap.remainMs==='number'){ 
          totalMs=snap.totalMs||0; 
          apply({type:'pause',remainMs:snap.remainMs},true); 
        }
      }
    }catch{}

    wrap.append(ring,eta,inputs,row);
    return wrap;
  }
  return makeWidget(`타이머 ${index}`, build, 'widget--timer');
}

/* ── 메모 페이지 ── */
function initMemoPage(){
  const content=document.getElementById('memoPageContent');
  const addBtn=document.getElementById('addMemoBtn');
  if(!content) return;
  
  // 메모 추가 버튼
  if(addBtn){
    addBtn.onclick=()=> showMemoWritePage(false);
  }
  
  renderMemoPageList();
}

function initMemoWritePage(editMode=false,editItemId=null,editIdx=null,editDstr=null){
  const titleInput=document.getElementById('memoTitleInput');
  const textarea=document.getElementById('memoTextarea');
  const saveBtn=document.getElementById('saveMemoBtn');
  const titleEl=document.getElementById('memoWriteTitle');
  const memoColorBtn=document.getElementById('memoColorBtn');
  const memoEmojiBtn=document.getElementById('memoEmojiBtn');
  
  if(!titleInput || !textarea || !saveBtn) return;
  
  // 타이틀 변경
  if(titleEl){
    titleEl.textContent = editMode ? '메모 수정' : '새 메모 작성';
  }
  
  // 색상/이모티콘 상태 (저장 시 사용). 색상은 처음엔 비움 → 회색 버튼, 이후 마지막 사용 색상 사용
  let selectedMemoColor = '';
  let selectedMemoEmoji = '';
  
  // 수정 모드면 기존 내용 표시
  if(editMode && editItemId){
    const dstr = editDstr || fmtLocalDate(ST.selected);
    const list = get(kMemo(dstr)) || [];
    const editItem = list.find(m => m.id === editItemId);
    if(editItem){
      titleInput.value = editItem.title || '';
      textarea.value = editItem.text || '';
      selectedMemoColor = editItem.color || '';
      selectedMemoEmoji = editItem.emoji || '';
    } else {
      titleInput.value = '';
      textarea.value = '';
    }
  } else {
    titleInput.value = '';
    textarea.value = '';
    selectedMemoColor = get('memo2.lastMemoColor','') || '';
  }
  
  // [색상] [이모티콘] 버튼 표시 (색상 없으면 회색 버튼)
  if(memoColorBtn){
    memoColorBtn.style.display='inline-flex';
    memoColorBtn.style.justifyContent='center';
    memoColorBtn.style.alignItems='center';
    memoColorBtn.style.padding='0';
    memoColorBtn.style.width='32px';
    memoColorBtn.style.height='32px';
    memoColorBtn.style.boxSizing='border-box';
    memoColorBtn.style.lineHeight='0';
    if(selectedMemoColor==='rainbow'){
      memoColorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      memoColorBtn.style.borderColor='transparent';
    }else if(selectedMemoColor){
      memoColorBtn.style.background=selectedMemoColor;
      memoColorBtn.style.borderColor='transparent';
    }else{
      memoColorBtn.style.background='#e2e8f0';
      memoColorBtn.style.borderColor='#e2e8f0';
    }
    memoColorBtn.onclick=()=>{
      showPalette(memoColorBtn,(c)=>{
        selectedMemoColor=c||'';
        if(selectedMemoColor){
          set('memo2.lastMemoColor',selectedMemoColor);
        }
        if(selectedMemoColor==='rainbow'){
          memoColorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
          memoColorBtn.style.borderColor='transparent';
        }else if(selectedMemoColor){
          memoColorBtn.style.background=selectedMemoColor;
          memoColorBtn.style.borderColor='transparent';
        }else{
          memoColorBtn.style.background='#e2e8f0';
          memoColorBtn.style.borderColor='#e2e8f0';
        }
      });
    };
  }
  if(memoEmojiBtn){
    memoEmojiBtn.style.display='inline-flex';
    memoEmojiBtn.style.justifyContent='center';
    memoEmojiBtn.style.alignItems='center';
    memoEmojiBtn.style.padding='0';
    memoEmojiBtn.style.width='32px';
    memoEmojiBtn.style.height='32px';
    memoEmojiBtn.style.boxSizing='border-box';
    memoEmojiBtn.style.lineHeight='0';
    const memoEmojiIcon=memoEmojiBtn.querySelector('.memo-option-btn-emoji-icon');
    if(memoEmojiIcon){
      memoEmojiIcon.textContent=selectedMemoEmoji||'☺';
      memoEmojiIcon.style.display='inline-flex';
      memoEmojiIcon.style.alignItems='center';
      memoEmojiIcon.style.justifyContent='center';
      memoEmojiIcon.style.width='100%';
      memoEmojiIcon.style.height='100%';
      memoEmojiIcon.style.padding='0';
      memoEmojiIcon.style.margin='0';
      memoEmojiIcon.style.lineHeight='0';
      memoEmojiIcon.style.fontSize='26px';
      memoEmojiIcon.style.textAlign='center';
      memoEmojiIcon.style.verticalAlign='middle';
      memoEmojiIcon.style.transform='translateY(2px)';
    }
    memoEmojiBtn.onclick=()=>{
      showEmojiModal(selectedMemoEmoji,(emoji)=>{
        selectedMemoEmoji=emoji||'';
        const icon=memoEmojiBtn.querySelector('.memo-option-btn-emoji-icon');
        if(icon) icon.textContent=selectedMemoEmoji||'☺';
      });
    };
  }
  
  // 자동저장용 변수
  let savedMemoId = editMode ? editItemId : null;
  let autoSaveTimer = null;
  
  const autoSave = ()=>{
    const title = titleInput.value.trim();
    const text = textarea.value.trim();
    
    // 제목과 내용이 모두 비어있으면 저장하지 않음
    if(!title && !text) return;
    
    const dstr = editDstr || fmtLocalDate(ST.selected);
    let list = get(kMemo(dstr)) || [];
    
    if(savedMemoId){
      // 이미 저장된 메모 수정
      const memo = list.find(m => m.id === savedMemoId);
      if(memo){
        memo.title = title;
        memo.text = text;
      } else {
        // ID로 메모를 찾지 못한 경우 (삭제되었거나 다른 날짜)
        // 새 메모로 추가하지 않고 무시
        return;
      }
    } else {
      // 새 메모 추가
      savedMemoId = Date.now();
      list.push({
        id: savedMemoId,
        title,
        text,
        emoji: selectedMemoEmoji,
        color: selectedMemoColor
      });
    }
    
    set(kMemo(dstr), list);
    renderMemos();
    postApp({type:'refresh'});
  };
  
  // 입력 시 자동저장 (디바운스)
  const onInput = ()=>{
    if(autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(autoSave, 1000); // 1초 후 자동저장
  };
  
  titleInput.addEventListener('input', onInput);
  textarea.addEventListener('input', onInput);
  
  // 저장 버튼
  saveBtn.onclick = ()=>{
    const title = titleInput.value.trim();
    const text = textarea.value.trim();
    
    if(!title && !text){
      alert('제목 또는 내용을 입력하세요.');
      return;
    }
    
    // 자동저장 타이머 제거
    if(autoSaveTimer) clearTimeout(autoSaveTimer);
    
    const dstr = editDstr || fmtLocalDate(ST.selected);
    let list = get(kMemo(dstr)) || [];
    
    if(editMode && editItemId){
      // 수정 모드 - ID로 찾아서 수정
      const memo = list.find(m => m.id === editItemId);
      if(memo){
        memo.title = title;
        memo.text = text;
        memo.emoji = selectedMemoEmoji;
        memo.color = selectedMemoColor;
      }
    } else if(savedMemoId){
      // 자동저장으로 이미 추가된 메모 수정
      const memo = list.find(m => m.id === savedMemoId);
      if(memo){
        memo.title = title;
        memo.text = text;
        memo.emoji = selectedMemoEmoji;
        memo.color = selectedMemoColor;
      }
    } else {
      // 새 메모 추가
      list.push({
        id: Date.now(),
        title,
        text,
        emoji: selectedMemoEmoji,
        color: selectedMemoColor
      });
    }
    
    set(kMemo(dstr), list);
    renderMemos();
    postApp({type:'refresh'});
    
    // 저장 후 메모 목록으로 돌아가기
    showMemoPage();
  };
  
  titleInput.focus();
}

function renderMemoPageList(){
  const content=document.getElementById('memoPageContent');
  if(!content) return;
  
  // 현재 선택된 날짜의 메모 가져오기
  const dstr=fmtLocalDate(ST.selected);
  let list=get(kMemo(dstr));
  
  content.innerHTML='';
  
  if(!list || list.length===0){
    const empty=el('div','memo-empty');
    empty.style.textAlign='center';
    empty.style.padding='60px 20px';
    empty.style.color='#94a3b8';
    empty.style.fontSize='15px';
    empty.textContent='등록된 메모가 없습니다.';
    content.appendChild(empty);
    return;
  }
  
  // ID가 없는 메모에 ID 추가 (마이그레이션)
  let needsSave = false;
  list.forEach((item, idx) => {
    if(!item.id){
      item.id = Date.now() + idx;
      needsSave = true;
    }
  });
  if(needsSave){
    set(kMemo(dstr), list);
  }
  
  const grid=el('div','memo-page-grid');
  list.forEach((item,idx)=>{
    const card=createMemoCard(item,idx,list,dstr);
    grid.appendChild(card);
  });
  
  content.appendChild(grid);
}

function createMemoCard(item,idx,ref,dstr){
  const card=el('div','memo-card');
  
  // 헤더 (제목과 버튼들)
  const header=el('div','memo-card__header');
  header.style.display='flex';
  header.style.justifyContent='space-between';
  header.style.alignItems='center';
  header.style.marginBottom='12px';
  
  // 왼쪽: 제목
  const titleEl=el('div','memo-card__title',item.title||'제목 없음');
  titleEl.style.fontWeight='600';
  titleEl.style.fontSize='16px';
  titleEl.style.flex='1';
  titleEl.style.overflow='hidden';
  titleEl.style.textOverflow='ellipsis';
  titleEl.style.whiteSpace='nowrap';
  
  // 오른쪽: 버튼들
  const btnGroup=el('div');
  btnGroup.style.display='flex';
  btnGroup.style.gap='4px';
  
  const widgetBtn=el('button','memo-card__btn','↗');
  widgetBtn.title='위젯으로 열기';
  widgetBtn.onclick=(e)=>{
    e.stopPropagation();
    // 바로 팝업 위젯으로 열기
    openMemoWidgetPopup(item,idx,ref,dstr);
  };
  
  const delBtn=el('button','memo-card__btn','✕');
  delBtn.title='삭제';
  delBtn.onclick=(e)=>{
    e.stopPropagation();
    ref.splice(idx,1);
    set(kMemo(dstr),ref);
    renderMemoPageList();
    renderMemos();
    postApp({type:'refresh'});
  };
  
  btnGroup.append(widgetBtn,delBtn);
  header.append(titleEl,btnGroup);
  
  // 내용 영역
  const contentWrap=el('div','memo-card__content');
  contentWrap.style.cursor='pointer';
  contentWrap.style.minHeight='60px';
  contentWrap.style.lineHeight='1.6';
  contentWrap.style.wordBreak='break-word';
  contentWrap.style.whiteSpace='pre-wrap';
  
  // 이모티콘과 텍스트
  const emojiSpan=item.emoji?el('span','memo-card__emoji',item.emoji+' '):'';
  const textSpan=el('span','',item.text||'');
  if(emojiSpan) contentWrap.appendChild(emojiSpan);
  contentWrap.appendChild(textSpan);
  
  // 색상 적용
  const applyColor=(col)=>{
    if(col==='rainbow'){
      card.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
      contentWrap.style.color='#fff';
      titleEl.style.color='#fff';
    } else if(col){
      card.style.backgroundColor=col;
      const c=col.replace('#','');
      const r=parseInt(c.substr(0,2),16)||0,g=parseInt(c.substr(2,2),16)||0,b=parseInt(c.substr(4,2),16)||0;
      const lum=(0.299*r+0.587*g+0.114*b)/255;
      contentWrap.style.color=lum>0.6?'#111':'#fff';
      titleEl.style.color=lum>0.6?'#111':'#fff';
    } else {
      card.style.backgroundColor='#fff';
      contentWrap.style.color='#111';
      titleEl.style.color='#111';
    }
  };
  applyColor(item.color);
  
  // 내용 클릭으로 편집
  contentWrap.onclick=()=>{
    // ID를 기반으로 편집하도록 수정
    showMemoWritePage(true,item.id,idx,dstr);
  };
  
  card.append(header,contentWrap);
  return card;
}

function openMemoWidget(item,idx,ref,dstr){
  // 개별 메모를 위젯으로 여는 함수
  function build(isPopup, win){
    const doc=win.document;
    const W=doc.createElement('div');
    W.style.padding='12px';
    W.style.display='flex';
    W.style.flexDirection='column';
    W.style.height='100%';
    W.style.boxSizing='border-box';
    W.style.overflow='auto';
    
    const title=doc.createElement('div');
    title.style.fontWeight='600';
    title.style.fontSize='16px';
    title.style.marginBottom='12px';
    title.textContent=item.title||'제목 없음';
    
    const content=doc.createElement('div');
    content.style.lineHeight='1.6';
    content.style.wordBreak='break-word';
    content.style.whiteSpace='pre-wrap';
    content.textContent=(item.emoji?item.emoji+' ':'')+item.text;
    
    W.append(title,content);
    return W;
  }
  return makeWidget(item.title||'메모', build, 'widget--memo');
}

function openMemoWidgetPopup(item,idx,ref,dstr){
  // 개별 메모를 팝업 위젯으로 바로 여는 함수
  function build(isPopup, win){
    const doc=win.document;
    const W=doc.createElement('div');
    W.style.padding='12px';
    W.style.display='flex';
    W.style.flexDirection='column';
    W.style.height='100%';
    W.style.boxSizing='border-box';
    W.style.overflow='auto';
    
    const title=doc.createElement('div');
    title.style.fontWeight='600';
    title.style.fontSize='16px';
    title.style.marginBottom='12px';
    title.textContent=item.title||'제목 없음';
    
    const content=doc.createElement('div');
    content.style.lineHeight='1.6';
    content.style.wordBreak='break-word';
    content.style.whiteSpace='pre-wrap';
    content.textContent=(item.emoji?item.emoji+' ':'')+item.text;
    
    W.append(title,content);
    return W;
  }
  openWidgetPopup(item.title||'메모', build);
}

function showMemoCardMenu(anchor,item,idx,ref,dstr){
  const doc=anchor.ownerDocument||document;
  if(openPop) openPop.remove();
  const pop=doc.createElement('div');
  pop.className='event-menu-popup';
  
  const editBtn=el('button','menu-item','✏️ 편집');
  const delBtn=el('button','menu-item','🗑️ 삭제');
  
  editBtn.onclick=(e)=>{
    e.stopPropagation();
    pop.remove();
    openPop=null;
    showMemoWritePage(true,item.id,idx,dstr);
  };
  
  delBtn.onclick=(e)=>{
    e.stopPropagation();
    if(confirm('이 메모를 삭제하시겠습니까?')){
      ref.splice(idx,1);
      set(kMemo(dstr),ref);
      renderMemoPageList();
      renderMemos();
      postApp({type:'refresh'});
    }
    pop.remove();
    openPop=null;
  };
  
  pop.append(editBtn,delBtn);
  doc.body.appendChild(pop);
  openPop=pop;
  
  const rect=anchor.getBoundingClientRect();
  const left=rect.left+(window.scrollX||0);
  const top=rect.bottom+4+(window.scrollY||0);
  pop.style.left=`${left}px`;
  pop.style.top=`${top}px`;
  
  setTimeout(()=>{
    const close=(e)=>{
      if(!pop.contains(e.target) && e.target!==anchor){
        pop.remove();
        openPop=null;
        doc.removeEventListener('mousedown',close);
      }
    };
    doc.addEventListener('mousedown',close);
  },10);
}

/* ── 루틴 페이지 ── */
let isReorderMode=false; // 정렬 모드 상태

function initRoutinePage(){
  const weekCal=document.getElementById('routineWeekCalendar');
  const content=document.getElementById('routineContent');
  const addBtn=document.getElementById('addRoutineBtn');
  const toggleReorderBtn=document.getElementById('toggleReorderBtn');
  
  if(!weekCal || !content) return;
  
  // 루틴 추가 버튼
  if(addBtn){
    addBtn.onclick=()=> addNewRoutine();
  }
  
  // 정렬 모드 토글 버튼
  if(toggleReorderBtn){
    toggleReorderBtn.onclick=()=>{
      isReorderMode=!isReorderMode;
      if(isReorderMode){
        toggleReorderBtn.style.background='#3b82f6';
        toggleReorderBtn.style.borderColor='#3b82f6';
        toggleReorderBtn.querySelector('svg').setAttribute('fill','#ffffff');
      }else{
        toggleReorderBtn.style.background='var(--card)';
        toggleReorderBtn.style.borderColor='#e2e8f0';
        toggleReorderBtn.querySelector('svg').setAttribute('fill','#64748b');
      }
      renderRoutineList();
    };
  }
  
  renderRoutineWeekCalendar();
  renderRoutineList();
}

function renderRoutineWeekCalendar(){
  const weekCal=document.getElementById('routineWeekCalendar');
  if(!weekCal) return;
  
  weekCal.innerHTML='';
  
  // 현재 선택된 날짜 기준으로 일주일 계산
  const today=ST.selected;
  const dayOfWeek=today.getDay(); // 0(일) ~ 6(토)
  const startOfWeek=new Date(today);
  startOfWeek.setDate(today.getDate()-dayOfWeek); // 일요일로 이동
  
  // 연도와 월 표시 (네비게이션 버튼 포함)
  const yearMonthRow=el('div');
  yearMonthRow.style.display='flex';
  yearMonthRow.style.justifyContent='space-between';
  yearMonthRow.style.alignItems='center';
  yearMonthRow.style.marginBottom='12px';
  
  const yearMonth=el('div','routine-year-month');
  yearMonth.textContent=`${today.getFullYear()}년 ${today.getMonth()+1}월`;
  yearMonth.style.textAlign='left';
  yearMonth.style.flex='1';
  
  const navBtns=el('div');
  navBtns.style.display='flex';
  navBtns.style.gap='4px';
  
  const prevBtn=el('button');
  prevBtn.textContent='◀';
  prevBtn.style.padding='4px 8px';
  prevBtn.style.border='1px solid var(--line)';
  prevBtn.style.borderRadius='6px';
  prevBtn.style.background='var(--card)';
  prevBtn.style.cursor='pointer';
  prevBtn.style.fontSize='12px';
  prevBtn.onclick=()=>{
    const newDate=new Date(today);
    newDate.setDate(today.getDate()-7);
    ST.selected=newDate;
    renderRoutineWeekCalendar();
    renderRoutineList();
  };
  
  const nextBtn=el('button');
  nextBtn.textContent='▶';
  nextBtn.style.padding='4px 8px';
  nextBtn.style.border='1px solid var(--line)';
  nextBtn.style.borderRadius='6px';
  nextBtn.style.background='var(--card)';
  nextBtn.style.cursor='pointer';
  nextBtn.style.fontSize='12px';
  nextBtn.onclick=()=>{
    const newDate=new Date(today);
    newDate.setDate(today.getDate()+7);
    ST.selected=newDate;
    renderRoutineWeekCalendar();
    renderRoutineList();
  };
  
  navBtns.append(prevBtn,nextBtn);
  yearMonthRow.append(yearMonth,navBtns);
  weekCal.appendChild(yearMonthRow);
  
  // 일주일 그리드
  const weekGrid=el('div','routine-week-grid');
  const weekdays=['일','월','화','수','목','금','토'];
  
  for(let i=0;i<7;i++){
    const date=new Date(startOfWeek);
    date.setDate(startOfWeek.getDate()+i);
    
    const dayCell=el('div','routine-day-cell');
    const dayName=el('div','routine-day-name',weekdays[i]);
    const dayNum=el('div','routine-day-num',String(date.getDate()));
    
    // 오늘 표시
    if(date.toDateString()===new Date().toDateString()){
      dayCell.classList.add('today');
    }
    
    // 선택된 날짜 표시
    if(date.toDateString()===today.toDateString()){
      dayCell.classList.add('selected');
    }
    
    dayCell.onclick=()=>{
      // 맨 왼쪽(일요일) 클릭 시 이전 주로
      if(i===0){
        const newDate=new Date(date);
        newDate.setDate(date.getDate()-7);
        ST.selected=newDate;
      }
      // 맨 오른쪽(토요일) 클릭 시 다음 주로
      else if(i===6){
        const newDate=new Date(date);
        newDate.setDate(date.getDate()+7);
        ST.selected=newDate;
      }
      // 그 외의 날짜는 해당 날짜 선택
      else{
        ST.selected=date;
      }
      renderRoutineWeekCalendar();
      renderRoutineList();
    };
    
    dayCell.append(dayName,dayNum);
    weekGrid.appendChild(dayCell);
  }
  
  weekCal.appendChild(weekGrid);
}

function renderRoutineList(){
  const content=document.getElementById('routineContent');
  if(!content) return;
  
  // 현재 선택된 날짜
  const selectedDate=ST.selected;
  const selectedDay=selectedDate.getDay(); // 0(일)~6(토)
  
  // localStorage에서 루틴 불러오기
  let routines=[];
  try{
    const saved=localStorage.getItem('memo2.routines');
    if(saved) routines=JSON.parse(saved);
  }catch{}
  
  // 샘플 데이터가 없으면 추가
  if(routines.length===0){
    routines=[
      {id:1,text:'루틴 1',checkedDates:{},startDate:'2026-01-01',endDate:'2026-12-31',repeatDays:[1,3,5],color:'#10b981'},
      {id:2,text:'루틴 2',checkedDates:{},startDate:'2026-01-01',endDate:'2026-12-31',repeatDays:[0,2,4,6],color:'#3b82f6'},
      {id:3,text:'루틴 3',checkedDates:{},startDate:'2026-01-01',endDate:'2026-12-31',repeatDays:[1,2,3,4,5],color:'#f59e0b'}
    ];
    localStorage.setItem('memo2.routines',JSON.stringify(routines));
  }
  
  content.innerHTML='';
  
  const list=el('div','routine-list');
  
  let draggedIdx=null;
  let longPressTimer=null;
  
  routines.forEach((routine,idx)=>{
    // 날짜 필터링: 시작일~종료일 범위 체크
    if(routine.startDate && routine.endDate){
      const startDate=new Date(routine.startDate);
      const endDate=new Date(routine.endDate);
      startDate.setHours(0,0,0,0);
      endDate.setHours(23,59,59,999);
      
      const selected=new Date(selectedDate);
      selected.setHours(12,0,0,0);
      
      // 선택된 날짜가 시작일~종료일 범위 밖이면 표시하지 않음
      if(selected<startDate || selected>endDate){
        return;
      }
    }
    
    // 반복 요일 필터링
    if(routine.repeatDays && routine.repeatDays.length>0){
      // 선택된 날짜의 요일이 repeatDays에 포함되어 있지 않으면 표시하지 않음
      if(!routine.repeatDays.includes(selectedDay)){
        return;
      }
    }
    
    const item=el('div','routine-item');
    
    // 정렬 모드일 때만 드래그 가능
    if(isReorderMode){
      item.draggable=true;
      item.style.cursor='grab';
      item.style.userSelect='none';
      item.style.webkitUserSelect='none';
      item.style.touchAction='none';
      
      let touchStartY=0;
      let touchCurrentY=0;
      let isTouchDragging=false;
      let touchOverIdx=null;
      
      const clearTouchHighlights=()=>{
        list.querySelectorAll('.routine-item').forEach(other=>{
          other.style.borderTop='';
        });
      };
      
      // 컨텍스트 메뉴 방지
      item.oncontextmenu=(e)=>{
        if(isReorderMode){
          e.preventDefault();
          return false;
        }
      };
      
      // 데스크톱: 드래그 시작
      item.ondragstart=(e)=>{
        draggedIdx=idx;
        item.style.opacity='0.5';
        item.style.cursor='grabbing';
      };
      
      // 모바일: 터치 시작
      item.ontouchstart=(e)=>{
        e.preventDefault(); // 기본 동작(컨텍스트 메뉴 등) 방지
        const touch=e.touches[0];
        touchStartY=touch.clientY;
        touchCurrentY=touchStartY;
        draggedIdx=idx;
        isTouchDragging=true;
        touchOverIdx=idx;
        item.style.opacity='0.5';
        item.style.cursor='grabbing';
      };
      
      // 모바일: 터치 이동
      item.ontouchmove=(e)=>{
        if(!isTouchDragging) return;
        e.preventDefault();
        const touch=e.touches[0];
        touchCurrentY=touch.clientY;
        
        const target=document.elementFromPoint(touch.clientX,touch.clientY);
        const overItem=target?.closest('.routine-item');
        clearTouchHighlights();
        if(overItem){
          overItem.style.borderTop='3px solid #3b82f6';
          const allItems=Array.from(list.querySelectorAll('.routine-item'));
          touchOverIdx=allItems.indexOf(overItem);
        }else{
          touchOverIdx=null;
        }
      };
      
      // 모바일: 터치 종료
      item.ontouchend=(e)=>{
        if(!isTouchDragging) return;
        e.preventDefault();
        isTouchDragging=false;
        
        const dropIdx=touchOverIdx;
        clearTouchHighlights();
        touchOverIdx=null;
        
        if(dropIdx!==null && dropIdx!==draggedIdx){
          // 배열에서 위치 변경
          const draggedItem=routines[draggedIdx];
          routines.splice(draggedIdx,1);
          const newIdx=draggedIdx<dropIdx?dropIdx-1:dropIdx;
          routines.splice(newIdx,0,draggedItem);
          
          // 저장 및 재렌더링
          localStorage.setItem('memo2.routines',JSON.stringify(routines));
          renderRoutineList();
        }
        
        item.style.opacity='1';
        item.style.cursor='grab';
        draggedIdx=null;
      };
      
      // 모바일: 터치 취소
      item.ontouchcancel=()=>{
        isTouchDragging=false;
        touchOverIdx=null;
        item.style.opacity='1';
        item.style.cursor='grab';
        draggedIdx=null;
        clearTouchHighlights();
      };
      
      // 데스크톱: 드래그 오버
      item.ondragover=(e)=>{
        e.preventDefault();
        if(draggedIdx===null||draggedIdx===idx) return;
        item.style.borderTop='3px solid #3b82f6';
      };
      
      item.ondragleave=(e)=>{
        item.style.borderTop='';
      };
      
      // 데스크톱: 드롭
      item.ondrop=(e)=>{
        e.preventDefault();
        item.style.borderTop='';
        
        if(draggedIdx===null||draggedIdx===idx) return;
        
        // 배열에서 위치 변경
        const draggedItem=routines[draggedIdx];
        routines.splice(draggedIdx,1);
        const newIdx=draggedIdx<idx?idx-1:idx;
        routines.splice(newIdx,0,draggedItem);
        
        // 저장 및 재렌더링
        localStorage.setItem('memo2.routines',JSON.stringify(routines));
        renderRoutineList();
        
        draggedIdx=null;
      };
      
      // 데스크톱: 드래그 종료
      item.ondragend=()=>{
        item.style.opacity='1';
        item.style.cursor='grab';
        item.style.borderTop='';
        draggedIdx=null;
      };
      
      // 정렬 모드 시각적 표시
      const dragHandle=el('span');
      dragHandle.innerHTML='☰';
      dragHandle.style.color='#94a3b8';
      dragHandle.style.marginRight='8px';
      dragHandle.style.fontSize='18px';
    }
    
    // 색상 적용 (배경색으로)
    if(routine.color){
      item.style.backgroundColor=routine.color+'15'; // 투명도 15%
      item.style.borderLeft=`4px solid ${routine.color}`;
    }
    
    // 날짜별 체크 상태 관리
    const dateKey=selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
    if(!routine.checkedDates){
      routine.checkedDates={};
    }
    
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=routine.checkedDates[dateKey]||false;
    checkbox.className='routine-checkbox';
    checkbox.onchange=()=>{
      // 현재 날짜에 대한 체크 상태만 변경
      routine.checkedDates[dateKey]=checkbox.checked;
      // 체크 상태에 따라 스타일 변경
      if(checkbox.checked){
        label.style.textDecoration='line-through';
        label.style.opacity='0.5';
        if(repeatInfo){
          repeatInfo.style.textDecoration='line-through';
          repeatInfo.style.opacity='0.5';
        }
      }else{
        label.style.textDecoration='none';
        label.style.opacity='1';
        if(repeatInfo){
          repeatInfo.style.textDecoration='none';
          repeatInfo.style.opacity='1';
        }
      }
      localStorage.setItem('memo2.routines',JSON.stringify(routines));
    };
    
    const labelWrap=el('div');
    labelWrap.style.flex='1';
    labelWrap.style.display='flex';
    labelWrap.style.flexDirection='column';
    labelWrap.style.gap='4px';
    
    const labelText=(routine.emoji?routine.emoji+' ':'')+routine.text;
    const label=el('div','routine-label',labelText);
    
    // 체크된 상태면 초기에 취소선 적용 (날짜별로 확인)
    if(routine.checkedDates && routine.checkedDates[dateKey]){
      label.style.textDecoration='line-through';
      label.style.opacity='0.5';
    }
    
    label.ondblclick=()=>{
      showRoutineModal(true,routine,idx);
    };
    
    labelWrap.appendChild(label);
    
    // 반복 정보 표시
    let repeatInfo=null;
    if(routine.repeatDays&&routine.repeatDays.length>0){
      repeatInfo=el('div');
      repeatInfo.style.fontSize='12px';
      repeatInfo.style.color='#94a3b8';
      const dayNames=['일','월','화','수','목','금','토'];
      const selectedNames=routine.repeatDays.sort((a,b)=>a-b).map(d=>dayNames[d]);
      repeatInfo.textContent=`🔁 ${selectedNames.join(', ')}`;
      
      // 체크된 상태면 반복 정보에도 취소선 적용 (날짜별로 확인)
      if(routine.checkedDates && routine.checkedDates[dateKey]){
        repeatInfo.style.textDecoration='line-through';
        repeatInfo.style.opacity='0.5';
      }
      
      labelWrap.appendChild(repeatInfo);
    }
    
    const delBtn=el('button','routine-del-btn','✕');
    delBtn.onclick=()=>{
      routines.splice(idx,1);
      localStorage.setItem('memo2.routines',JSON.stringify(routines));
      renderRoutineList();
    };
    
    item.append(checkbox,labelWrap,delBtn);
    list.appendChild(item);
  });
  
  content.appendChild(list);
}

function addNewRoutine(){
  showRoutineModal();
}

function makeRoutineOptionRow(){
  const row=el('div','routine-option-row');
  row.style.border='1px solid #e2e8f0';
  row.style.borderRadius='8px';
  row.style.padding='12px';
  row.style.background='#fff';
  row.style.minHeight='44px';
  row.style.boxSizing='border-box';
  return row;
}

function showRoutineModal(editMode=false,routine=null,idx=null){
  const modal=el('div','modal-overlay');
  const box=el('div','modal-box routine-modal-box');
  box.style.maxWidth='420px';

  const title=el('h3','modal-title',editMode?'루틴 수정':'루틴을 등록하세요');
  title.style.textAlign='center';
  title.style.marginBottom='16px';

  const form=el('div','modal-form routine-modal-form');
  form.style.display='flex';
  form.style.flexDirection='column';
  form.style.gap='10px';

  const dayNames=['일','월','화','수','목','금','토'];
  const openDayModal=()=>{
    showRepeatDayModal(repeatDays,(newDays)=>{
      repeatDays=newDays;
      updateRepeatDisplay();
    });
  };

  // 1. 루틴 입력 + [색상] [이모티콘] 버튼. 색상은 처음엔 비움(회색), 이후 마지막 사용 색상
  let selectedColor=editMode&&routine?routine.color:((get('memo2.lastRoutineColor','')||'')+'');
  let selectedEmoji=editMode&&routine?routine.emoji:'';
  const nameRow=makeRoutineOptionRow();
  nameRow.style.display='flex';
  nameRow.style.alignItems='center';
  nameRow.style.gap='10px';
  const nameInput=document.createElement('input');
  nameInput.type='text';
  nameInput.placeholder='루틴 입력';
  nameInput.value=editMode&&routine?routine.text:'';
  nameInput.style.flex='1';
  nameInput.style.minWidth='0';
  nameInput.style.border='none';
  nameInput.style.outline='none';
  nameInput.style.fontSize='14px';
  nameInput.style.fontFamily='inherit';
  nameInput.style.background='transparent';
  nameRow.appendChild(nameInput);

  const routineColorBtn=document.createElement('button');
  routineColorBtn.type='button';
  routineColorBtn.className='routine-option-btn routine-option-btn--color';
  routineColorBtn.title='색상';
  routineColorBtn.setAttribute('aria-label','색상 선택');
  routineColorBtn.style.display='inline-flex';
  routineColorBtn.style.justifyContent='center';
  routineColorBtn.style.alignItems='center';
  routineColorBtn.style.padding='0';
  routineColorBtn.style.width='32px';
  routineColorBtn.style.height='32px';
  routineColorBtn.style.boxSizing='border-box';
  routineColorBtn.style.lineHeight='0';
  routineColorBtn.style.background=selectedColor||'#e2e8f0';
  routineColorBtn.onclick=(e)=>{
    e.stopPropagation();
    showPalette(routineColorBtn,(c)=>{
      selectedColor=c||'';
      if(selectedColor){
        set('memo2.lastRoutineColor',selectedColor);
      }
      if(selectedColor==='rainbow'){
        routineColorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
        routineColorBtn.style.borderColor='transparent';
      }else if(selectedColor){
        routineColorBtn.style.background=selectedColor;
        routineColorBtn.style.borderColor='transparent';
      }else{
        routineColorBtn.style.background='#e2e8f0';
        routineColorBtn.style.borderColor='#e2e8f0';
      }
    });
  };
  if(selectedColor==='rainbow'){
    routineColorBtn.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';
    routineColorBtn.style.borderColor='transparent';
  }else if(!selectedColor){
    routineColorBtn.style.background='#e2e8f0';
    routineColorBtn.style.borderColor='#e2e8f0';
  }

  const routineEmojiBtn=document.createElement('button');
  routineEmojiBtn.type='button';
  routineEmojiBtn.className='routine-option-btn routine-option-btn--emoji';
  routineEmojiBtn.title='이모티콘';
  routineEmojiBtn.setAttribute('aria-label','이모티콘 선택');
  routineEmojiBtn.style.display='inline-flex';
  routineEmojiBtn.style.justifyContent='center';
  routineEmojiBtn.style.alignItems='center';
  routineEmojiBtn.style.padding='0';
  routineEmojiBtn.style.width='32px';
  routineEmojiBtn.style.height='32px';
  routineEmojiBtn.style.boxSizing='border-box';
  routineEmojiBtn.style.lineHeight='0';
  const routineEmojiIcon=document.createElement('span');
  routineEmojiIcon.className='routine-option-btn-emoji-icon';
  routineEmojiIcon.setAttribute('aria-hidden','true');
  routineEmojiIcon.textContent=selectedEmoji||'☺';
  routineEmojiIcon.style.display='inline-flex';
  routineEmojiIcon.style.alignItems='center';
  routineEmojiIcon.style.justifyContent='center';
  routineEmojiIcon.style.width='100%';
  routineEmojiIcon.style.height='100%';
  routineEmojiIcon.style.padding='0';
  routineEmojiIcon.style.margin='0';
  routineEmojiIcon.style.lineHeight='0';
  routineEmojiIcon.style.fontSize='28px';
  routineEmojiIcon.style.textAlign='center';
  routineEmojiIcon.style.verticalAlign='middle';
  routineEmojiBtn.appendChild(routineEmojiIcon);
  routineEmojiBtn.onclick=(e)=>{
    e.stopPropagation();
    showEmojiModal(selectedEmoji,(emoji)=>{
      selectedEmoji=emoji||'';
      routineEmojiIcon.textContent=selectedEmoji||'☺';
    });
  };

  nameRow.append(routineColorBtn,routineEmojiBtn);

  // 2. 반복 (클릭 → 요일 선택 창)
  let repeatDays=editMode&&routine&&routine.repeatDays?routine.repeatDays:[];
  const repeatRow=makeRoutineOptionRow();
  repeatRow.style.cursor='pointer';
  repeatRow.style.display='flex';
  repeatRow.style.alignItems='center';
  repeatRow.style.justifyContent='space-between';
  const repeatLabel=el('span',null,'반복');
  repeatLabel.style.fontSize='14px';
  const repeatValue=el('span');
  repeatValue.style.fontSize='13px';
  repeatValue.style.color='#64748b';
  const dayRowValue=el('span');
  dayRowValue.style.fontSize='13px';
  dayRowValue.style.color='#64748b';
  const updateRepeatDisplay=()=>{
    if(repeatDays.length===0){
      repeatValue.textContent='반복 안함';
      repeatValue.style.color='#64748b';
      dayRowValue.textContent='요일선택';
      dayRowValue.style.color='#64748b';
    }else{
      const names=repeatDays.sort((a,b)=>a-b).map(d=>dayNames[d]);
      const str=names.join(',')+' 주 '+repeatDays.length+'일';
      repeatValue.textContent=str;
      repeatValue.style.color='#2563eb';
      dayRowValue.textContent=str;
      dayRowValue.style.color='#2563eb';
    }
  };
  updateRepeatDisplay();
  repeatRow.append(repeatLabel,repeatValue);
  repeatRow.onclick=(e)=>{ e.stopPropagation(); openDayModal(); };

  // 3. 요일선택 (클릭 → 같은 요일 선택 창)
  const dayRow=makeRoutineOptionRow();
  dayRow.style.cursor='pointer';
  dayRow.style.display='flex';
  dayRow.style.alignItems='center';
  dayRow.style.justifyContent='space-between';
  const dayRowLabel=el('span',null,'요일선택');
  dayRowLabel.style.fontSize='14px';
  dayRow.append(dayRowLabel,dayRowValue);
  dayRow.onclick=(e)=>{ e.stopPropagation(); openDayModal(); };

  // 4. _ 주 마다 반복
  const weekRow=makeRoutineOptionRow();
  weekRow.style.display='flex';
  weekRow.style.alignItems='center';
  weekRow.style.gap='8px';
  const weekNum=document.createElement('input');
  weekNum.type='number';
  weekNum.min='1';
  weekNum.max='52';
  weekNum.value=editMode&&routine&&routine.repeatIntervalWeeks?String(routine.repeatIntervalWeeks):'1';
  weekNum.style.width='48px';
  weekNum.style.padding='6px 8px';
  weekNum.style.border='1px solid #e2e8f0';
  weekNum.style.borderRadius='6px';
  weekNum.style.fontSize='14px';
  weekNum.style.textAlign='center';
  const weekText=el('span',null,'주 마다 반복');
  weekText.style.fontSize='14px';
  weekText.style.color='#374151';
  weekRow.append(weekNum,weekText);

  // 5. _ 개월 마다 반복
  const monthRow=makeRoutineOptionRow();
  monthRow.style.display='flex';
  monthRow.style.alignItems='center';
  monthRow.style.gap='8px';
  const monthNum=document.createElement('input');
  monthNum.type='number';
  monthNum.min='1';
  monthNum.max='12';
  monthNum.value=editMode&&routine&&routine.repeatIntervalMonths?String(routine.repeatIntervalMonths):'1';
  monthNum.style.width='48px';
  monthNum.style.padding='6px 8px';
  monthNum.style.border='1px solid #e2e8f0';
  monthNum.style.borderRadius='6px';
  monthNum.style.fontSize='14px';
  monthNum.style.textAlign='center';
  const monthText=el('span',null,'개월 마다 반복');
  monthText.style.fontSize='14px';
  monthText.style.color='#374151';
  monthRow.append(monthNum,monthText);

  // 6. 계속 반복
  let repeatEndless=editMode&&routine?!!routine.repeatEndless:false;
  const endlessRow=makeRoutineOptionRow();
  endlessRow.style.cursor='pointer';
  endlessRow.style.display='flex';
  endlessRow.style.alignItems='center';
  endlessRow.style.justifyContent='space-between';
  const endlessLabel=el('span',null,'계속 반복');
  endlessLabel.style.fontSize='14px';
  const endlessChk=document.createElement('input');
  endlessChk.type='checkbox';
  endlessChk.checked=repeatEndless;
  endlessChk.onchange=()=>{ repeatEndless=endlessChk.checked; if(repeatEndless) endInput.value=''; };
  endlessRow.append(endlessLabel,endlessChk);
  endlessRow.onclick=(e)=>{ if(e.target!==endlessChk){ endlessChk.checked=!endlessChk.checked; repeatEndless=endlessChk.checked; if(repeatEndless) endInput.value=''; } };

  // 7. 종료 날짜
  const endRow=makeRoutineOptionRow();
  endRow.style.display='flex';
  endRow.style.alignItems='center';
  endRow.style.gap='8px';
  const endLabel=el('span',null,'종료 날짜');
  endLabel.style.fontSize='14px';
  endLabel.style.flexShrink='0';
  const endInput=document.createElement('input');
  endInput.type='date';
  endInput.value=editMode&&routine&&routine.endDate?routine.endDate:'';
  endInput.placeholder='연도. 월. 일.';
  endInput.style.flex='1';
  endInput.style.border='none';
  endInput.style.outline='none';
  endInput.style.fontSize='14px';
  endInput.style.background='transparent';
  endRow.append(endLabel,endInput);

  form.append(nameRow,repeatRow,dayRow,weekRow,monthRow,endlessRow,endRow);

  const footer=el('div','modal-footer');
  footer.style.display='flex';
  footer.style.gap='8px';
  footer.style.justifyContent='flex-end';
  footer.style.marginTop='20px';

  const cancelBtn=el('button','btn','취소');
  cancelBtn.onclick=()=> modal.remove();

  const saveBtn=el('button','btn-confirm','저장');
  saveBtn.onclick=()=>{
    const text=nameInput.value.trim();
    if(!text){
      alert('루틴 이름을 입력하세요.');
      return;
    }
    const startDate=editMode&&routine&&routine.startDate?routine.startDate:fmtLocalDate(new Date());
    const endDate=repeatEndless?'':endInput.value;
    const repeatIntervalWeeks=Math.max(1,parseInt(weekNum.value,10)||1);
    const repeatIntervalMonths=Math.max(1,parseInt(monthNum.value,10)||1);
    const color=selectedColor||'#10b981';
    const emoji=selectedEmoji||'';

    let routines=[];
    try{
      const saved=localStorage.getItem('memo2.routines');
      if(saved) routines=JSON.parse(saved);
    }catch{}
    if(editMode&&routine){
      const targetIdx=routines.findIndex(r=>r.id===routine.id);
      if(targetIdx!==-1){
        routines[targetIdx].text=text;
        routines[targetIdx].startDate=startDate;
        routines[targetIdx].endDate=endDate;
        routines[targetIdx].repeatDays=repeatDays;
        routines[targetIdx].repeatIntervalWeeks=repeatIntervalWeeks;
        routines[targetIdx].repeatIntervalMonths=repeatIntervalMonths;
        routines[targetIdx].repeatEndless=!!repeatEndless;
        routines[targetIdx].color=color;
        routines[targetIdx].emoji=emoji;
      }
    }else{
      const newId=(routines.length>0?Math.max(...routines.map(r=>r.id))+1:1);
      routines.push({
        id:newId,
        text,
        checked:false,
        startDate,
        endDate,
        repeatDays,
        repeatIntervalWeeks,
        repeatIntervalMonths,
        repeatEndless:!!repeatEndless,
        color,
        emoji
      });
    }
    localStorage.setItem('memo2.routines',JSON.stringify(routines));
    renderRoutineList();
    modal.remove();
  };

  footer.append(cancelBtn,saveBtn);
  box.append(title,form,footer);
  modal.appendChild(box);
  document.body.appendChild(modal);

  nameInput.focus();

  modal.onclick=(e)=>{
    if(e.target===modal) modal.remove();
  };
}

function showRepeatDayModal(currentDays,onSave){
  const modal=el('div','modal-overlay');
  modal.style.zIndex='10001';
  
  const box=el('div','modal-box');
  box.style.maxWidth='360px';
  box.style.padding='20px';
  
  const title=el('h3','modal-title','반복');
  title.style.fontSize='16px';
  title.style.marginBottom='16px';
  
  const subtitle=el('div');
  subtitle.textContent='요일 선택';
  subtitle.style.fontSize='13px';
  subtitle.style.color='#64748b';
  subtitle.style.marginBottom='12px';
  
  const dayButtons=el('div');
  dayButtons.style.display='flex';
  dayButtons.style.gap='8px';
  dayButtons.style.justifyContent='center';
  dayButtons.style.flexWrap='nowrap';
  
  const dayNames=['일','월','화','수','목','금','토'];
  const selectedDays=[...currentDays];
  
  dayNames.forEach((name,idx)=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.textContent=name;
    btn.style.width='44px';
    btn.style.height='44px';
    btn.style.borderRadius='50%';
    btn.style.border='2px solid #e2e8f0';
    btn.style.background='#fff';
    btn.style.fontSize='14px';
    btn.style.fontWeight='600';
    btn.style.cursor='pointer';
    btn.style.transition='all 0.2s';
    
    const updateStyle=()=>{
      if(selectedDays.includes(idx)){
        btn.style.background='#10b981';
        btn.style.borderColor='#10b981';
        btn.style.color='#fff';
      }else{
        btn.style.background='#fff';
        btn.style.borderColor='#e2e8f0';
        btn.style.color='#111';
      }
    };
    updateStyle();
    
    btn.onclick=()=>{
      const dayIdx=selectedDays.indexOf(idx);
      if(dayIdx>-1){
        selectedDays.splice(dayIdx,1);
      }else{
        selectedDays.push(idx);
      }
      updateStyle();
      updateSummary();
    };
    
    dayButtons.appendChild(btn);
  });
  
  const summary=el('div');
  summary.style.marginTop='16px';
  summary.style.padding='12px';
  summary.style.background='#f8fafc';
  summary.style.borderRadius='8px';
  summary.style.fontSize='13px';
  summary.style.textAlign='center';
  summary.style.color='#64748b';
  
  const updateSummary=()=>{
    if(selectedDays.length===0){
      summary.textContent='반복 수행 주기';
    }else{
      const names=selectedDays.sort((a,b)=>a-b).map(d=>dayNames[d]);
      summary.textContent=`${names.join(',')} 주 ${selectedDays.length}일`;
    }
  };
  updateSummary();
  
  const footer=el('div');
  footer.style.display='flex';
  footer.style.gap='8px';
  footer.style.justifyContent='flex-end';
  footer.style.marginTop='20px';
  
  const cancelBtn=el('button','btn','취소');
  cancelBtn.onclick=()=> modal.remove();
  
  const saveBtn=el('button','btn-confirm','확인');
  saveBtn.onclick=()=>{
    onSave(selectedDays);
    modal.remove();
  };
  
  footer.append(cancelBtn,saveBtn);
  box.append(title,subtitle,dayButtons,summary,footer);
  modal.appendChild(box);
  document.body.appendChild(modal);
  
  modal.onclick=(e)=>{
    if(e.target===modal) modal.remove();
  };
}

function showEmojiModal(currentEmoji,onSave){
  const modal=el('div','modal-overlay');
  modal.style.zIndex='10001';

  const box=el('div','modal-box emoji-picker-modal');
  box.style.maxWidth='360px';
  box.style.maxHeight='520px';
  box.style.padding='16px';
  box.style.display='flex';
  box.style.flexDirection='column';
  box.style.overflow='hidden';

  const emojis=[
    '😀','😊','😎','🤗','😍','🥰','😘','😜','🤔','😴','😇','🤩','🥳','😤','😱','🤯','😂','🤣','😁','😅','😆','🙂','🥲','😋','😛','🤪','😝','🤑','🤭','🤫','🤐','😐','😑','😶','🙄','😬','😌','😔','😪','🤤','😷','🤒','🤕','🥴','😵','🤠','🥳','🤓','🧐',
    '👍','👎','👏','🙌','👐','🤲','🤝','🙏','✌️','🤞','🤟','🤘','🤙','👌','🤌','🤏','✊','👊','🤛','🤜','👋','🤚','🖐️','✋','🖖','👈','👉','👆','👇','☝️','🫵','👍','💪','🦾',
    '❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','💗','💖','💕','💞','💓','💝','❣️','💟','💌',
    '✨','⭐','🌟','💫','✴️','🔥','💥','💢','💯','✅','❌','⭕','❓','❗','🔔','🔕','🎵','🎶','💤','💬','💭','🗯️',
    '⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏒','🏑','🥍','🏏','🪃','🥅','⛳','🪁','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛼','🏆','🥇','🥈','🥉','🏅','🎖️',
    '🍎','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶️','🫑','🌽','🥕','🫒','🧄','🧅','🍄','🥜','🫘','🌰','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🫗','🥤','🧋','🧃','🧉','🧊',
    '🏠','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌','🛕','🕍','⛩️','🕋','⛲','⛺','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','♨️','🎠','🎡','🎢','💈','🎪',
    '🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🦯','🦽','🦼','🛴','🚲','🛵','🏍️','🛺','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩️','💺','🛰️','🚀','🛸','🚁','🛶','⛵','🚤','🛥️','🛳️','⛴️','🚢','⚓','🪝','⛽','🚧','🚦','🚥',
    '🌍','🌎','🌏','🌐','🗺️','🗾','🧭','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏞️','☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️','🌨️','❄️','☃️','⛄','🌬️','💨','💧','💦','☔','☂️','🌊','🌫️','🌈','⚡','🔥',
    '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🪱','🐛','🦋','🐌','🐞','🐜','🪰','🪲','🪳','🦟','🦗','🕷️','🕸️','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🦣','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🪶','🐓','🦃','🦤','🦚','🦜','🦢','🦩','🕊️','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿️','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🪵','🌱','🌿','☘️','🍀','🎍','🪴','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🪷','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','🪐','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪️','🌈','☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️','🌨️','❄️','☃️','⛄','🌬️','💨','💧','💦','☔','☂️','🌊','🌫️',
    '⌚','📱','📲','💻','⌨️','🖥️','🖨️','🖱️','🖲️','🕹️','🗜️','💾','💿','📀','📼','📷','📸','📹','🎥','📽️','🎞️','📞','☎️','📟','📠','📺','📻','🎙️','🎚️','🎛️','🧭','⏱️','⏲️','⏰','🕰️','⌛','⏳','📡','🔋','🪫','🔌','💡','🔦','🕯️','🪔','🧯','🛢️','💸','💵','💴','💶','💷','🪙','💰','💳','🪪','💎','⚖️','🪜','🧰','🪛','🔧','🔨','⚒️','🛠️','⛏️','🪚','🔩','⚙️','🪤','🧱','⛓️','🧲','🔫','💣','🧨','🪓','🔪','🗡️','⚔️','🛡️','🚬','⚰️','🪦','⚱️','🏺','🔮','📿','🧿','🪬','💈','⚗️','🔭','🔬','🕳️','🩹','🩺','🩻','🩼','💊','💉','🩸','🧬','🦠','🧫','🧪','🌡️','🧹','🪠','🧺','🧻','🚽','🚰','🚿','🛁','🛀','🧼','🪥','🪒','🧽','🪣','🧴','🛎️','🔑','🗝️','🚪','🪑','🛋️','🛏️','🛌','🧸','🪆','🖼️','🪞','🪟','🛍️','🛒','🎁','🎈','🎏','🎀','🪄','🪅','🎊','🎉','🎎','🏮','🎐','🧧','✉️','📩','📨','📧','💌','📥','📤','📦','🏷️','🪧','📪','📫','📬','📭','📮','📯','📜','📃','📄','📑','🧾','📊','📈','📉','🗒️','🗓️','📆','📅','🗑️','📇','🗃️','🗳️','🗄️','📋','📁','📂','🗂️','🗞️','📰','📓','📔','📒','📕','📗','📘','📙','📚','📖','🔖','🧷','🔗','📎','🖇️','📐','📏','🧮','📌','📍','✂️','🖊️','🖋️','✒️','🖌️','🖍️','📝','✏️','🔍','🔎','🔏','🔐','🔒','🔓',
    '🎯','🎨','🎭','🩰','🎪','🎤','🎧','🎼','🎹','🥁','🪘','🎷','🎺','🪗','🎸','🪕','🎻','🎲','♟️','🎳','🎮','🎰','🧩','🎪',
    '🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫','⚪','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛','⬜','◼️','◻️','◾','◽','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲'
  ];
  const EMOJI_CAT=[{label:'이모티콘',icon:'😀',start:0,end:49},{label:'손·제스처',icon:'👍',start:49,end:83},{label:'하트',icon:'❤️',start:83,end:101},{label:'기호',icon:'✨',start:101,end:123},{label:'스포츠',icon:'⚽',start:123,end:159},{label:'음식',icon:'🍎',start:159,end:248},{label:'여행',icon:'🏠',start:248,end:287},{label:'교통',icon:'🚗',start:287,end:346},{label:'자연',icon:'🌍',start:346,end:386},{label:'동물',icon:'🐶',start:386,end:457},{label:'사물',icon:'⌚',start:457,end:591},{label:'활동',icon:'🎯',start:591,end:615},{label:'기타',icon:'🔴',start:615,end:9999}];
  const EMOJI_SEARCH_KEYWORDS={
    '😀':'웃음 스마일 smile','😊':'미소 smile','😎':'썬글라스 cool','❤️':'하트 heart 사랑 love','👍':'좋아 good thumbs','👏':'박수 clap','✨':'반짝 sparkle','🔥':'불 fire','⚽':'축구 soccer','🍎':'사과 apple','🍕':'피자 pizza','☕':'커피 coffee','🏠':'집 house 홈','🚗':'자동차 car','✈️':'비행기 airplane','🐶':'강아지 dog','🐱':'고양이 cat','🌙':'달 moon','☀️':'해 sun'
  };

  let selectedEmoji=currentEmoji||'';
  let catIndex=0;
  let searchText='';

  const searchInput=document.createElement('input');
  searchInput.type='text';
  searchInput.placeholder='검색';
  searchInput.style.width='100%';
  searchInput.style.padding='10px 12px';
  searchInput.style.marginBottom='12px';
  searchInput.style.border='1px solid #e2e8f0';
  searchInput.style.borderRadius='8px';
  searchInput.style.fontSize='14px';
  searchInput.style.boxSizing='border-box';
  searchInput.oninput=()=>{ searchText=searchInput.value.trim(); renderGrid(); };

  const categoryTitle=el('div','emoji-category-title');
  categoryTitle.textContent=EMOJI_CAT[0].label;
  categoryTitle.style.marginBottom='8px';
  categoryTitle.style.fontSize='13px';
  categoryTitle.style.color='#64748b';
  categoryTitle.style.fontWeight='600';

  const emojiGrid=el('div');
  emojiGrid.style.display='grid';
  emojiGrid.style.gridTemplateColumns='repeat(6, 1fr)';
  emojiGrid.style.gap='6px';
  emojiGrid.style.flex='1';
  emojiGrid.style.minHeight='0';
  emojiGrid.style.overflowY='auto';
  emojiGrid.style.maxHeight='360px';
  emojiGrid.style.paddingRight='4px';

  function getList(){
    if(searchText){
      const q=searchText.toLowerCase().trim();
      return emojis.filter((e,idx)=>{
        const cat=EMOJI_CAT.find(c=>idx>=c.start&&idx<c.end);
        const catLabel=(cat?cat.label:'').toLowerCase();
        if(catLabel&&catLabel.includes(q)) return true;
        const kw=(EMOJI_SEARCH_KEYWORDS[e]||'').toLowerCase();
        return kw&&kw.includes(q);
      });
    }
    const c=EMOJI_CAT[catIndex];
    return emojis.slice(c.start,Math.min(c.end,emojis.length));
  }

  function renderGrid(){
    const list=getList();
    if(!searchText) categoryTitle.textContent=EMOJI_CAT[catIndex].label;
    else categoryTitle.textContent='검색 결과';
    emojiGrid.innerHTML='';
    list.forEach(emoji=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.textContent=emoji;
      btn.style.fontSize='22px';
      btn.style.padding='6px';
      btn.style.border='2px solid transparent';
      btn.style.borderRadius='8px';
      btn.style.background='var(--card)';
      btn.style.cursor='pointer';
      btn.style.transition='all 0.2s';
      if(emoji===selectedEmoji){ btn.style.borderColor='#3b82f6'; btn.style.background='#dbeafe'; }
      btn.onclick=()=>{
        selectedEmoji=emoji;
        emojiGrid.querySelectorAll('button').forEach(b=>{ b.style.borderColor='transparent'; b.style.background='var(--card)'; });
        btn.style.borderColor='#3b82f6'; btn.style.background='#dbeafe';
      };
      emojiGrid.appendChild(btn);
    });
  }
  renderGrid();

  const catBar=el('div');
  catBar.style.display='flex';
  catBar.style.gap='6px';
  catBar.style.justifyContent='center';
  catBar.style.flexWrap='wrap';
  catBar.style.padding='10px 0';
  catBar.style.borderTop='1px solid #e2e8f0';
  catBar.style.marginTop='8px';
  EMOJI_CAT.forEach((c,i)=>{
    const b=document.createElement('button');
    b.type='button';
    b.textContent=c.icon;
    b.title=c.label;
    b.style.width='36px';
    b.style.height='36px';
    b.style.borderRadius='8px';
    b.style.border='1px solid #e2e8f0';
    b.style.background=catIndex===i?'#e0ecff':'#fff';
    b.style.fontSize='18px';
    b.style.cursor='pointer';
    b.style.display='flex';
    b.style.alignItems='center';
    b.style.justifyContent='center';
    b.onclick=()=>{ catIndex=i; searchInput.value=''; searchText=''; renderGrid(); catBar.querySelectorAll('button').forEach((bb,j)=>{ bb.style.background=j===i?'#e0ecff':'#fff'; }); };
    catBar.appendChild(b);
  });

  const footer=el('div');
  footer.style.display='flex';
  footer.style.gap='8px';
  footer.style.justifyContent='flex-end';
  footer.style.marginTop='8px';
  footer.style.flexShrink='0';
  const clearBtn=el('button','btn','지우기');
  clearBtn.onclick=()=>{ onSave(''); modal.remove(); };
  const cancelBtn=el('button','btn','취소');
  cancelBtn.onclick=()=> modal.remove();
  const saveBtn=el('button','btn-confirm','확인');
  saveBtn.onclick=()=>{ onSave(selectedEmoji); modal.remove(); };
  footer.append(clearBtn,cancelBtn,saveBtn);

  box.append(searchInput,categoryTitle,emojiGrid,catBar,footer);
  modal.appendChild(box);
  document.body.appendChild(modal);

  modal.onclick=(e)=>{ if(e.target===modal) modal.remove(); };
}

function showColorPickerModal(currentColor,onSave){
  const modal=el('div','modal-overlay');
  modal.style.zIndex='10001';
  
  const box=el('div','modal-box');
  box.style.maxWidth='360px';
  box.style.padding='20px';
  
  const title=el('h3','modal-title','색상 선택');
  title.style.fontSize='16px';
  title.style.marginBottom='16px';
  
  // 색상 그리드
  const colorGrid=el('div');
  colorGrid.style.display='grid';
  colorGrid.style.gridTemplateColumns='repeat(6, 1fr)';
  colorGrid.style.gap='12px';
  colorGrid.style.marginBottom='16px';
  
  const colors=[
    '#10b981','#22c55e','#84cc16','#eab308','#f59e0b','#f97316',
    '#ef4444','#ec4899','#d946ef','#a855f7','#8b5cf6','#6366f1',
    '#3b82f6','#0ea5e9','#06b6d4','#14b8a6','#64748b','#475569'
  ];
  
  let selectedColor=currentColor||'#10b981';
  
  colors.forEach(color=>{
    const btn=el('button');
    btn.style.width='100%';
    btn.style.height='40px';
    btn.style.backgroundColor=color;
    btn.style.border='3px solid transparent';
    btn.style.borderRadius='8px';
    btn.style.cursor='pointer';
    btn.style.transition='all 0.2s';
    
    if(color===selectedColor){
      btn.style.borderColor='#fff';
      btn.style.boxShadow='0 0 0 2px #3b82f6';
    }
    
    btn.onclick=()=>{
      selectedColor=color;
      // 모든 버튼 초기화
      colorGrid.querySelectorAll('button').forEach(b=>{
        b.style.borderColor='transparent';
        b.style.boxShadow='none';
      });
      // 선택된 버튼 강조
      btn.style.borderColor='#fff';
      btn.style.boxShadow='0 0 0 2px #3b82f6';
    };
    
    colorGrid.appendChild(btn);
  });
  
  const footer=el('div');
  footer.style.display='flex';
  footer.style.gap='8px';
  footer.style.justifyContent='flex-end';
  
  const cancelBtn=el('button','btn','취소');
  cancelBtn.onclick=()=> modal.remove();
  
  const saveBtn=el('button','btn-confirm','확인');
  saveBtn.onclick=()=>{
    onSave(selectedColor);
    modal.remove();
  };
  
  footer.append(cancelBtn,saveBtn);
  box.append(title,colorGrid,footer);
  modal.appendChild(box);
  document.body.appendChild(modal);
  
  modal.onclick=(e)=>{
    if(e.target===modal) modal.remove();
  };
}

function widgetAlarm(){
  const sounds=[
    {label:'Beep',src:'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAAA'},
    {label:'Bell',src:'data:audio/wav;base64,UklGRoQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YRgAAAAA'}
  ];
  return makeWidget('알람', (isPopup, win)=>{
    ensureTimeStyles(win);
    const doc=win.document;
    const card=doc.createElement('div'); card.className='time-card';
    const circle=doc.createElement('div'); circle.className='time-circle';
    const label=doc.createElement('div'); label.className='time-circle__label'; label.textContent='--:--';
    circle.appendChild(label);
    const sub=doc.createElement('div'); sub.className='time-sub'; sub.textContent='알람 꺼짐';

    const grid=doc.createElement('div'); grid.className='time-grid';
    const ih=doc.createElement('input'); ih.type='number'; ih.placeholder='시'; ih.min=0; ih.max=23;
    const im=doc.createElement('input'); im.type='number'; im.placeholder='분'; im.min=0; im.max=59;
    const sound=doc.createElement('select'); sounds.forEach(s=>{ const o=doc.createElement('option'); o.value=s.src; o.textContent=s.label; sound.appendChild(o); });
    grid.append(ih,im,sound);

    const actions=doc.createElement('div'); actions.className='time-actions';
    const onBtn=el('button','btn','켜기'); const offBtn=el('button','btn','끄기'); const testBtn=el('button','btn','소리 테스트');
    actions.append(onBtn,offBtn,testBtn);

    card.append(circle,sub,grid,actions);

    let alarmTimer=null, alarmAudio=null, targetTs=null;
    const stopSound=()=>{ if(alarmAudio){ alarmAudio.pause?.(); alarmAudio.currentTime=0; alarmAudio=null; } };
    const fallbackTone=(once)=>{
      const ctx=new (win.AudioContext||win.webkitAudioContext)();
      const osc=ctx.createOscillator(); osc.type='sine'; osc.frequency.value=880;
      const gain=ctx.createGain(); gain.gain.value=0.12; osc.connect(gain).connect(ctx.destination);
      osc.start();
      if(once){ win.setTimeout(()=>{osc.stop(); ctx.close();}, 800);} else { alarmAudio={pause:()=>{osc.stop(); ctx.close();}, currentTime:0}; }
    };
    const playSound=(once=false)=>{
      stopSound();
      try{
        alarmAudio=new win.Audio(sound.value||sounds[0].src); alarmAudio.loop=!once;
        const p=alarmAudio.play();
        if(p?.catch) p.catch(()=>fallbackTone(once));
      }catch(err){ fallbackTone(once); }
    };
    const clearTimer=()=>{ if(alarmTimer){ win.clearInterval(alarmTimer); alarmTimer=null; } targetTs=null; };
    const schedule=()=>{
      stopSound(); clearTimer();
      const hRaw=Number(ih.value); const mRaw=Number(im.value);
      if(Number.isNaN(hRaw)||Number.isNaN(mRaw)){ sub.textContent='시간을 입력하세요'; label.textContent='--:--'; return; }
      const h=Math.min(23,Math.max(0,Math.floor(hRaw))); const m=Math.min(59,Math.max(0,Math.floor(mRaw)));
      ih.value=h; im.value=m;
      const now=new Date(); const target=new Date(); target.setHours(h,m,0,0); if(target<=now) target.setDate(target.getDate()+1);
      targetTs=target.getTime();
      label.textContent=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
      sub.textContent=`다음 알람 ${target.toLocaleTimeString()}`;
      alarmTimer=win.setInterval(()=>{
        if(targetTs && Date.now()>=targetTs){ clearTimer(); playSound(false); sub.textContent='알람 울림!'; }
      }, 500);
    };

    onBtn.onclick=schedule;
    offBtn.onclick=()=>{ clearTimer(); stopSound(); sub.textContent='알람 꺼짐'; label.textContent='--:--'; };
    testBtn.onclick=()=>{ playSound(true); sub.textContent='소리 미리듣기'; };

    return card;
  }, 'widget--alarm');
}

function widgetStopwatch(){
  return makeWidget('스탑워치',(isPopup, win)=>{
    ensureTimeStyles(win);
    const doc=win.document;
    const card=doc.createElement('div'); card.className='time-card';
    const wrap=doc.createElement('div'); wrap.className='stopwatch__wrap';
    const label=doc.createElement('div'); label.className='stopwatch__display'; label.textContent='00:00.00'; wrap.appendChild(label);
    const sub=doc.createElement('div'); sub.className='time-sub'; sub.textContent='대기';

    const actions=doc.createElement('div'); actions.className='time-actions';
    const startBtn=el('button','btn','시작'); const pauseBtn=el('button','btn','일시정지'); const resetBtn=el('button','btn','리셋');
    actions.append(startBtn,pauseBtn,resetBtn);

    card.append(wrap,sub,actions);

    const applyLayout=()=>{
      card.style.display='flex';
      card.style.flexDirection='column';
      card.style.alignItems='center';
      card.style.justifyContent=isPopup?'center':'flex-start';
      card.style.gap=isPopup?'14px':'8px';
      card.style.width='100%';
      card.style.boxSizing='border-box';
      if(isPopup){
        card.style.height='100%';
        card.style.padding='50px';
      }else{
        card.style.padding='10px';
      }
      wrap.style.width='100%';
      wrap.style.display='flex';
      wrap.style.alignItems='center';
      wrap.style.justifyContent='center';
      wrap.style.margin='0 auto';
    };
    applyLayout();

    const resize=()=>{
      const rect=card.getBoundingClientRect();
      if(isPopup){
        const usableW=Math.max(120, rect.width - 100); // 50px padding per side
        const subH=sub.offsetHeight||28;
        const actH=actions.offsetHeight||42;
        const remainH=Math.max(140, rect.height - 100 - subH - actH - 16);
        const chars=Math.max(1, label.textContent.length);
        const widthFactor=0.58; // rough width per char vs font-size
        const size=Math.max(36, Math.min(remainH, usableW/(chars*widthFactor)));
        label.style.fontSize=`${size}px`;
      }else{
        const pad=24;
        const usableW=Math.max(140, rect.width - pad);
        const usableH=Math.max(140, rect.height - 120);
        const size=Math.max(32, Math.min(usableW/4.5, usableH/2.4, 220));
        label.style.fontSize=`${size}px`;
      }
    };

    let startTs=0, accMs=0, raf=null, running=false;
    const fmt=(ms)=>{
      const cs=Math.floor(ms/10)%100; const s=Math.floor(ms/1000)%60; const m=Math.floor(ms/60000);
      return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(cs).padStart(2,'0')}`;
    };
    const tick=()=>{
      if(!running) return;
      const now=performance.now(); const ms=accMs+(now-startTs);
      label.textContent=fmt(ms);
      raf=win.requestAnimationFrame(tick);
    };

    startBtn.onclick=()=>{
      if(running) return;
      running=true; startTs=performance.now(); sub.textContent='측정 중';
      raf=win.requestAnimationFrame(tick);
    };
    pauseBtn.onclick=()=>{
      if(!running){ running=true; startTs=performance.now(); sub.textContent='측정 중'; raf=win.requestAnimationFrame(tick); return; }
      running=false; accMs+=performance.now()-startTs; sub.textContent='일시정지';
      if(raf){ win.cancelAnimationFrame(raf); raf=null; }
    };
    resetBtn.onclick=()=>{
      running=false; accMs=0; startTs=0; label.textContent='00:00.00'; sub.textContent='대기';
      if(raf){ win.cancelAnimationFrame(raf); raf=null; }
    };

    if(win.ResizeObserver){
      const ro=new win.ResizeObserver(()=>resize());
      ro.observe(card);
    }
    win.addEventListener('resize', resize);
    win.setTimeout(resize, 0);
    win.setTimeout(resize, 100);

    return card;
  }, 'widget--stopwatch');
}

/* ── 동기화 미니 달력/메모/투두 위젯 ── */
function widgetCalendar(options){
  const opts=options||{};
  const popupOnly=!!opts.popupOnly;
  function build(isPopup, win){
    const doc=win.document;
    const W=doc.createElement('div');
    W.style.display='flex';
    W.style.flexDirection='column';
    W.style.height='100%';
    W.style.boxSizing='border-box';
    const head=doc.createElement('div'); head.className='mini-cal__head';
    const prev=doc.createElement('button'); prev.className='btn'; prev.textContent='◀';
    const title=doc.createElement('span'); const next=doc.createElement('button'); next.className='btn'; next.textContent='▶';
    const today=doc.createElement('button'); today.className='btn'; today.textContent='오늘';
    head.append(prev,title,next,today);
    const days=doc.createElement('div'); days.className='mini-cal__days';
    const grid=doc.createElement('div'); grid.className='mini-cal__grid';
    grid.style.flex='1';
    grid.style.minHeight='0';
    grid.style.height='100%';
    grid.style.display='grid';
    grid.style.gridTemplateColumns='repeat(7, minmax(0,1fr))';
    grid.style.width='100%';
    grid.style.minWidth='0';
    W.append(head,days,grid);

    ['일','월','화','수','목','금','토'].forEach(k=>{const s=doc.createElement('span'); s.textContent=k; days.appendChild(s);});

    let view=new Date(localStorage.getItem('memo2.selected')||fmtLocalDate(new Date())); view.setDate(1);
    const rows=6; // always show full 6 weeks
    const LINE_UNIT=17;
    const PADDING_RESERVE=26;
    const RAINBOW_GRAD='linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)';

    const getVisibleCount=(cell)=>{
      let height=cell?.getBoundingClientRect().height;
      if(!height || !Number.isFinite(height) || height<=40){
        const rect=grid.getBoundingClientRect();
        if(rect.height>0) height=rect.height/rows;
      }
      if(!height || !Number.isFinite(height) || height<=40) height=90;
      const usable=height-PADDING_RESERVE;
      const raw=Math.floor(usable/LINE_UNIT);
      return Math.max(1, Math.min(12, raw));
    };

    const applyMiniColor=(node,item)=>{
      node.style.background='transparent';
      node.style.backgroundColor='transparent';
       node.style.borderRadius='0';
       node.style.padding='0';
      node.style.color=item.done?'#94a3b8':'#1f2937';
      if(item.done) return;
      if(item.color==='rainbow'){
        node.style.background=RAINBOW_GRAD;
        node.style.color='#fff';
        return;
      }
      if(item.color){
        node.style.backgroundColor=item.color;
        try{
          let hex=item.color.replace('#','');
          if(hex.length===3){ hex=[hex[0],hex[0],hex[1],hex[1],hex[2],hex[2]].join(''); }
          const r=parseInt(hex.slice(0,2),16);
          const g=parseInt(hex.slice(2,4),16);
          const b=parseInt(hex.slice(4,6),16);
          const lum=(0.299*r+0.587*g+0.114*b)/255;
          node.style.color=lum>0.6?'#111827':'#ffffff';
        }catch{}
      }
    };

    function r(){
      title.textContent=ymLabel(view.getFullYear(), view.getMonth());
      grid.innerHTML='';
      const y=view.getFullYear(), m=view.getMonth();
      const first=new Date(y,m,1), start=first.getDay(), total=dim(y,m);
      const prevTotal=new Date(y,m,0).getDate(), cells=rows*7;
      grid.style.gridTemplateRows=`repeat(${rows}, minmax(0,1fr))`;
      const selectedKey=localStorage.getItem('memo2.selected');

      for(let i=0;i<cells;i++){
        const cell=doc.createElement('div'); cell.className='mini-day';
        cell.style.minHeight='0';
        cell.style.minWidth='0';
        grid.append(cell);
        let n,d,out=false;
        if(i<start){n=prevTotal-start+1+i; d=new Date(y,m-1,n); out=true;}
        else if(i>=start+total){n=i-(start+total)+1; d=new Date(y,m+1,n); out=true;}
        else{n=i-start+1; d=new Date(y,m,n);}
        const num=doc.createElement('div'); num.className='mini-day__num'; num.textContent=n;
        if(out) cell.classList.add('mini-day--out');
        if(fmtLocalDate(d)===selectedKey) cell.classList.add('mini-day--sel');
        cell.append(num);

        const dstr=fmtLocalDate(d);
        const todos=get(kTodo(dstr));
        if(todos.length){
          const labels=doc.createElement('div'); labels.className='mini-labels';
          labels.style.gap='0';
          labels.style.width='100%';
          const visibleCount=getVisibleCount(cell);
          const visible=todos.slice(0,visibleCount);
          visible.forEach(t=>{
            const row=doc.createElement('div'); row.className='mini-label';
            row.style.margin='0';
            row.style.padding='0';
            row.style.width='100%';
            row.style.display='flex';
            row.style.alignItems='center';
            row.style.gap='3px';
            row.style.cursor='pointer';
            row.style.userSelect='none';
            row.tabIndex=0;
            row.setAttribute('role','checkbox');
            row.setAttribute('aria-checked', t.done?'true':'false');
            if(t.done) row.classList.add('done');

            const text=doc.createElement('span');
            text.textContent=t.text;
            text.style.flex='1';
            text.style.overflow='hidden';
            text.style.textOverflow='ellipsis';
            text.style.whiteSpace='nowrap';
            row.textContent='';
            row.append(text);
            applyMiniColor(row,t);

            const toggleDone=(e)=>{
              e.stopPropagation();
              const idx=todos.indexOf(t);
              if(idx===-1) return;
              todos[idx].done=!todos[idx].done;
              set(kTodo(dstr),todos);
              row.setAttribute('aria-checked', todos[idx].done?'true':'false');
              postApp({type:'refresh'});
              r();
            };
            row.addEventListener('click',toggleDone);
            row.addEventListener('keydown',(e)=>{
              if(e.key==='Enter'||e.key===' '){
                e.preventDefault();
                toggleDone(e);
              }
            });

            labels.append(row);
          });
          if(todos.length>visible.length){
            const more=doc.createElement('div'); more.className='mini-more';
            more.style.margin='0';
            more.style.padding='0';
            more.style.textAlign='right';
            more.textContent=`+${todos.length-visible.length}`;
            labels.append(more);
          }
          cell.append(labels);
        }

        cell.onclick=()=>{ localStorage.setItem('memo2.selected', fmtLocalDate(d)); postApp({type:'select',date:fmtLocalDate(d)}); };
      }
    }
    prev.onclick=()=>{ view=new Date(view.getFullYear(), view.getMonth()-1, 1); r();};
    next.onclick=()=>{ view=new Date(view.getFullYear(), view.getMonth()+1, 1); r();};
    today.onclick=()=>{ view=new Date(); view.setDate(1); localStorage.setItem('memo2.selected', fmtLocalDate(new Date())); postApp({type:'select',date:fmtLocalDate(new Date())}); r();};
    win.addEventListener('storage',(e)=>{ if(e.key==='memo2.selected'||e.key?.startsWith('memo2.todos.')) r(); });
    if('BroadcastChannel' in win){ const bc=new win.BroadcastChannel(APP_CH); bc.onmessage=(m)=>{ if(m.data?.type==='select'||m.data?.type==='refresh') r(); }; }
    if(win.ResizeObserver){
      const ro=new win.ResizeObserver(()=>r());
      ro.observe(W);
      win.addEventListener('unload',()=>ro.disconnect(),{once:true});
    }
    r();
    return W;
  }
  if(popupOnly) return openWidgetPopup('달력', build);
  return makeWidget('달력', build, 'widget--calendar');
}
function widgetMemo(){
  function build(isPopup, win){
    const doc=win.document;
    const W=doc.createElement('div');
    W.style.padding='10px 12px 12px';
    W.style.display='flex';
    W.style.flexDirection='column';
    W.style.height='100%';
    W.style.boxSizing='border-box';

    const notice=doc.createElement('div');
    notice.style.fontSize='12px';
    notice.style.color='#64748b';
    notice.style.textAlign='center';
    notice.style.marginBottom='8px';

    const ul=doc.createElement('ul');
    ul.style.listStyle='none';
    ul.style.padding='0';
    ul.style.margin='0';
    ul.style.display='flex';
    ul.style.flexDirection='column';
    ul.style.gap='8px';
    ul.style.flex='1';
    ul.style.overflowY='auto';
    ul.style.paddingBottom='4px';
    W.append(notice,ul);

    const getSel=()=> win.localStorage.getItem('memo2.selected')||fmtLocalDate(new Date());
    const load=()=> JSON.parse(win.localStorage.getItem(kMemo(getSel()))||'[]');

    function render(){
      ul.innerHTML='';
      const items=load();
      if(!items.length){
        const empty=doc.createElement('li');
        empty.textContent='등록된 메모가 없습니다.';
        empty.style.fontSize='13px';
        empty.style.color='#94a3b8';
        empty.style.textAlign='center';
        empty.style.padding='16px 0';
        ul.append(empty);
        return;
      }
      items.forEach((it)=>{
        const li=doc.createElement('li');
        li.style.display='block';
        const tx=doc.createElement('span');
        tx.textContent=(it.emoji?`${it.emoji} `:'')+it.text;
        tx.style.display='block';
        tx.style.padding='8px 10px';
        tx.style.borderRadius='10px';
        tx.style.wordBreak='break-word';
        const applyColor=(clr)=>{
          if(!clr){ tx.style.backgroundColor='#f8fafc'; tx.style.color='#0f172a'; return; }
          if(clr==='rainbow'){ tx.style.background='linear-gradient(135deg,#667eea 0%,#764ba2 25%,#f093fb 50%,#4facfe 75%,#00f2fe 100%)'; tx.style.color='#fff'; return; }
          tx.style.background='transparent';
          tx.style.backgroundColor=clr;
          try{
            const hex=clr.replace('#','');
            const r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
            const lum=(0.299*r+0.587*g+0.114*b)/255;
            tx.style.color=lum>0.6?'#0f172a':'#fff';
          }catch{ tx.style.color='#0f172a'; }
        };
        applyColor(it.color);
        li.append(tx);
        ul.append(li);
      });
    }
    win.addEventListener('storage',(e)=>{ if(e.key==='memo2.selected'||e.key?.startsWith('memo2.memos.')) render(); });
    if('BroadcastChannel' in win){ const bc=new win.BroadcastChannel(APP_CH); bc.onmessage=(m)=>{ if(m.data?.type) render(); }; }
    render(); return W;
  }
  return makeWidget('메모', build, 'widget--memo');
}
function widgetTodo(){
  function build(isPopup, win){
    const doc=win.document;
    const W=doc.createElement('div');
    W.style.display='flex';
    W.style.flexDirection='column';
    W.style.height='100%';
    W.style.boxSizing='border-box';
    W.style.padding='8px 12px 12px';

    const header=doc.createElement('div');
    header.style.display='flex';
    header.style.alignItems='center';
    header.style.justifyContent='space-between';
    header.style.marginBottom='8px';

    const title=doc.createElement('span');
    title.textContent='✅ TODO';
    title.style.fontWeight='700';
    title.style.fontSize='14px';
    title.style.color='#15803d';
    header.append(title);

    const nav=doc.createElement('div');
    nav.style.display='flex';
    nav.style.alignItems='center';
    nav.style.gap='6px';

    const prev=doc.createElement('button');
    prev.className='btn';
    prev.textContent='◀';
    prev.style.padding='4px 8px';
    prev.style.fontSize='12px';

    const dateLabel=doc.createElement('span');
    dateLabel.style.fontWeight='600';
    dateLabel.style.fontSize='13px';
    dateLabel.style.minWidth='96px';
    dateLabel.style.textAlign='center';

    const next=doc.createElement('button');
    next.className='btn';
    next.textContent='▶';
    next.style.padding='4px 8px';
    next.style.fontSize='12px';

    nav.append(prev,dateLabel,next);
    header.append(nav);
    W.append(header);

    const listWrap=doc.createElement('div');
    listWrap.style.flex='1';
    listWrap.style.minHeight='0';
    listWrap.style.overflow='auto';

    const ul=doc.createElement('ul');
    ul.style.listStyle='none';
    ul.style.padding='0';
    ul.style.margin='0';
    ul.style.display='flex';
    ul.style.flexDirection='column';
    ul.style.gap='6px';
    listWrap.append(ul);
    W.append(listWrap);

    const channel=('BroadcastChannel' in win)? new win.BroadcastChannel(APP_CH):null;
    const notify=(msg)=>{ channel?.postMessage(msg); };
    if(channel){ win.addEventListener('unload',()=>channel.close(),{once:true}); }

    function clampDate(d){
      const base=new Date(d.getFullYear(), d.getMonth(), d.getDate());
      base.setHours(0,0,0,0);
      return base;
    }

    let viewDate=(()=>{ const stored=win.localStorage.getItem('memo2.selected'); return clampDate(stored?parseLocalDate(stored):new Date()); })();

    const key=()=>kTodo(fmtLocalDate(viewDate));
    const load=()=>{
      try{ return JSON.parse(win.localStorage.getItem(key())||'[]'); }
      catch{ return []; }
    };
    const save=(arr)=>{
      win.localStorage.setItem(key(), JSON.stringify(arr));
      notify({type:'refresh'});
      postApp({type:'refresh'});
    };

    const updateLabel=()=>{ dateLabel.textContent=fmtLocalDate(viewDate); };

    function render(){
      updateLabel();
      ul.innerHTML='';
      const todos=load();
      if(!todos.length){
        const empty=doc.createElement('li');
        empty.textContent='할 일이 없습니다';
        empty.style.listStyle='none';
        empty.style.fontSize='12px';
        empty.style.color='#9ca3af';
        empty.style.textAlign='center';
        empty.style.padding='8px 0';
        ul.append(empty);
        return;
      }
      todos.forEach((it,i)=>{
        const li=doc.createElement('li');
        li.style.display='flex';
        li.style.alignItems='center';
        li.style.gap='8px';

        const chk=doc.createElement('input');
        chk.type='checkbox';
        chk.checked=!!it.done;
        const applyToggle=(checked)=>{
          const arr=load();
          if(arr[i]) arr[i].done=checked;
          save(arr);
          render();
        };
        chk.onclick=(e)=>{ e.stopPropagation(); applyToggle(chk.checked); };

        const label=doc.createElement('span');
        label.style.flex='1';
        label.style.fontSize='13px';
        label.style.display='flex';
        label.style.alignItems='center';
        label.style.gap='6px';
        label.style.whiteSpace='nowrap';
        label.style.overflow='hidden';
        label.style.textOverflow='ellipsis';

        if(it.emoji){
          const emoji=doc.createElement('span');
          emoji.textContent=it.emoji;
          label.append(emoji);
        }

        const text=doc.createElement('span');
        text.textContent=it.text;
        text.style.flex='1';
        text.style.fontSize='16px';
        text.style.overflow='hidden';
        text.style.textOverflow='ellipsis';
        text.style.whiteSpace='nowrap';
        if(it.done){
          text.style.color='#9aa5b1';
          text.style.textDecoration='line-through';
        }else{
          if(it.color==='rainbow'){
            text.style.color='#2563eb';
          }else if(it.color){
            text.style.color=it.color;
          }else{
            text.style.color='#111827';
          }
          text.style.textDecoration='none';
        }
        label.onclick=()=>{
          chk.checked=!chk.checked;
          applyToggle(chk.checked);
        };

        label.append(text);
        li.append(chk,label);
        ul.append(li);
      });
    }

    const setViewDate=(date,broadcast)=>{
      viewDate=clampDate(date);
      if(broadcast){
        const str=fmtLocalDate(viewDate);
        win.localStorage.setItem('memo2.selected',str);
        notify({type:'select',date:str});
        postApp({type:'select',date:str});
      }
    };
    const shiftDay=(delta)=>{
      const next=new Date(viewDate);
      next.setDate(next.getDate()+delta);
      setViewDate(next,true);
      render();
    };

    prev.onclick=()=>shiftDay(-1);
    next.onclick=()=>shiftDay(1);

    const handleStorage=(e)=>{
      if(e.key==='memo2.selected' && e.newValue){
        const incoming=clampDate(parseLocalDate(e.newValue));
        if(fmtLocalDate(incoming)!==fmtLocalDate(viewDate)){
          setViewDate(incoming,false);
          render();
        }
      }
      if(e.key?.startsWith('memo2.todos.')){
        if(e.key===key()) render();
      }
    };
    win.addEventListener('storage',handleStorage);

    if(channel){
      channel.onmessage=(ev)=>{
        const data=ev.data||ev;
        if(data?.type==='select' && data.date){
          const incoming=clampDate(parseLocalDate(data.date));
          if(fmtLocalDate(incoming)!==fmtLocalDate(viewDate)){
            setViewDate(incoming,false);
            render();
          }
        }else if(data?.type==='refresh'){
          render();
        }
      };
    }

    render();
    return W;
  }
  return makeWidget('ToDo', build, 'widget--todo');
}

/* ── 사용법 표시 ── */
const usageTexts = {
  calendar: {
    intro: `
      <p><strong>달력 기능</strong>은 Jay 캘린더의 핵심 기능으로, 월간 일정을 한눈에 볼 수 있는 직관적인 인터페이스를 제공합니다. 구글 캘린더와 유사한 디자인으로 누구나 쉽게 사용할 수 있으며, 일정과 할 일을 체계적으로 관리할 수 있습니다.</p>
      <p>달력은 메인 화면에 항상 표시되어 있어 별도로 열 필요가 없습니다. 각 날짜 칸에는 해당 날짜의 일정과 할 일이 표시되며, 색상과 이모티콘으로 시각적으로 구분할 수 있습니다.</p>
      <p>이달의 목표 기능을 통해 매달 달성하고자 하는 목표를 설정하고, 달력을 통해 진행 상황을 확인할 수 있습니다.</p>
    `,
    method: `
      <p><strong>달력 사용 방법:</strong></p>
      <ul>
        <li><strong>날짜 선택:</strong> 달력에서 원하는 날짜를 클릭하면 우측 패널에 해당 날짜의 상세 정보가 표시됩니다</li>
        <li><strong>월 이동:</strong> ◀ ▶ 버튼을 클릭하여 이전 달, 다음 달로 이동할 수 있습니다</li>
        <li><strong>오늘로 이동:</strong> 화면 상단의 "7" 버튼(오늘 날짜)을 클릭하면 현재 날짜로 바로 이동합니다</li>
        <li><strong>이달의 목표 설정:</strong> 상단의 입력창에 이달의 목표를 입력하고 Enter를 누르면 저장됩니다</li>
        <li><strong>일정 확인:</strong> 각 날짜 칸에는 최대 6줄의 일정이 표시되며, 체크박스로 완료 여부를 표시할 수 있습니다</li>
        <li><strong>색상 구분:</strong> 일정마다 다른 색상을 지정하여 업무, 개인 일정 등을 구분할 수 있습니다</li>
        <li><strong>이모티콘 활용:</strong> 각 일정에 이모티콘을 추가하여 내용을 더 직관적으로 표현할 수 있습니다</li>
      </ul>
    `,
    widget: `
      <p><strong>달력 위젯</strong>은 별도의 팝업 창으로 달력을 표시하는 기능입니다. 왼쪽 사이드바의 "🗓 달력" 버튼을 클릭하면 위젯이 열립니다.</p>
      <ul>
        <li><strong>위젯 열기:</strong> 사이드바에서 "🗓 달력" 버튼 클릭</li>
        <li><strong>위젯 이동:</strong> 위젯 상단의 제목 부분을 마우스로 드래그하여 원하는 위치로 이동</li>
        <li><strong>크기 조절:</strong> 위젯 오른쪽 하단 모서리를 드래그하여 크기를 자유롭게 조절</li>
        <li><strong>위젯 닫기:</strong> 위젯 상단의 X 버튼을 클릭하여 닫기</li>
        <li><strong>다중 위젯:</strong> 여러 개의 위젯을 동시에 열어 비교하며 사용 가능</li>
        <li><strong>미니 달력:</strong> 위젯의 달력은 메인 화면과 동기화되어 같은 데이터를 공유합니다</li>
      </ul>
    `
  },
  memo: {
    intro: `
      <p><strong>메모 기능</strong>은 날짜별로 간단한 메모를 저장하고 관리할 수 있는 기능입니다. 일정과 별도로 자유로운 형식의 텍스트를 기록할 수 있어, 일기, 아이디어, 메모 등 다양한 용도로 활용할 수 있습니다.</p>
      <p>메모는 브라우저의 로컬 스토리지에 저장되어 별도의 로그인 없이도 안전하게 보관됩니다. 각 메모에는 이모티콘과 색상을 지정하여 시각적으로 구분할 수 있습니다.</p>
      <p>메모 기능은 우측 패널의 "⎙ 메모" 섹션에서 사용할 수 있으며, 날짜별로 여러 개의 메모를 작성할 수 있습니다.</p>
    `,
    method: `
      <p><strong>메모 사용 방법:</strong></p>
      <ul>
        <li><strong>메모 작성:</strong> 우측 패널 하단의 메모 입력창에 내용을 입력하고 "저장" 버튼을 클릭하거나 Enter를 누릅니다</li>
        <li><strong>날짜 선택:</strong> 메모를 작성하고 싶은 날짜를 먼저 선택한 후 입력합니다</li>
        <li><strong>여러 줄 입력:</strong> Shift+Enter를 눌러 여러 줄의 메모를 작성할 수 있습니다</li>
        <li><strong>메모 수정:</strong> 저장된 메모를 더블클릭하면 수정 모드로 전환됩니다</li>
        <li><strong>메모 삭제:</strong> 메모 우측의 ⋮ 버튼을 클릭하고 "🗑 삭제"를 선택합니다</li>
        <li><strong>이모티콘 추가:</strong> ⋮ 버튼 → "💬 이모티콘 변경"을 클릭하여 다양한 이모티콘 선택</li>
        <li><strong>색상 지정:</strong> ⋮ 버튼 → "🎨 색상 변경"을 클릭하여 원하는 색상 선택</li>
        <li><strong>메모 정렬:</strong> 메모를 드래그하여 순서를 변경할 수 있습니다</li>
      </ul>
    `,
    widget: `
      <p><strong>메모 위젯</strong>을 사용하면 별도의 창에서 메모를 관리할 수 있습니다. 왼쪽 사이드바의 "⎙ 메모" 버튼을 클릭하면 위젯이 열립니다.</p>
      <ul>
        <li><strong>위젯 활용:</strong> 메인 화면과 별개로 메모만 집중해서 작성하고 관리할 수 있습니다</li>
        <li><strong>날짜 전환:</strong> 위젯 내에서 날짜를 변경하며 여러 날짜의 메모를 빠르게 확인</li>
        <li><strong>자동 저장:</strong> 메모는 입력 즉시 브라우저에 자동으로 저장됩니다</li>
        <li><strong>데이터 동기화:</strong> 메인 화면과 위젯의 메모는 실시간으로 동기화됩니다</li>
        <li><strong>검색 기능:</strong> 향후 업데이트에서 메모 검색 기능이 추가될 예정입니다</li>
      </ul>
    `
  },
  todo: {
    intro: `
      <p><strong>할 일(To-Do) 기능</strong>은 업무와 일상의 작은 과제들을 체계적으로 관리할 수 있도록 도와주는 기능입니다. 간단한 체크리스트부터 시작 날짜와 종료 날짜가 있는 프로젝트성 업무까지 모두 관리할 수 있습니다.</p>
      <p>To-Do는 일정 등록 기능과 통합되어 있어, 시간이 지정된 일정과 시간 없는 할 일을 함께 관리할 수 있습니다. 각 항목에는 체크박스가 있어 완료 여부를 즉시 표시할 수 있습니다.</p>
      <p>색상과 이모티콘을 활용하여 우선순위나 카테고리를 시각적으로 구분할 수 있으며, 드래그 앤 드롭으로 순서를 쉽게 변경할 수 있습니다.</p>
    `,
    method: `
      <p><strong>할 일 사용 방법:</strong></p>
      <ul>
        <li><strong>할 일 추가:</strong> "할 일을 입력하고 Enter" 입력창에 내용을 입력하고 Enter를 누르거나 "저장" 버튼 클릭</li>
        <li><strong>날짜 지정:</strong> 시작 날짜와 종료 날짜를 설정하여 기간이 있는 작업을 관리</li>
        <li><strong>시간 지정:</strong> 시간을 입력하면 일정으로 등록되고, 비워두면 할 일로 등록됩니다</li>
        <li><strong>완료 체크:</strong> 체크박스를 클릭하여 완료 표시, 다시 클릭하면 완료 취소</li>
        <li><strong>순서 변경:</strong> 항목을 드래그하여 위아래로 이동하며 우선순위 조정</li>
        <li><strong>내용 수정:</strong> 항목을 더블클릭하면 수정 모드로 전환되어 내용을 변경할 수 있습니다</li>
        <li><strong>색상 변경:</strong> 우측 ⋮ 버튼 → "🎨 색상 변경"으로 배경색 지정</li>
        <li><strong>이모티콘 추가:</strong> ⋮ 버튼 → "💬 이모티콘 변경"으로 항목에 이모티콘 표시</li>
        <li><strong>항목 삭제:</strong> ⋮ 버튼 → "🗑 삭제"로 항목 제거</li>
      </ul>
    `,
    widget: `
      <p><strong>To-Do 위젯</strong>은 별도의 창에서 할 일 목록만 집중해서 관리할 수 있는 기능입니다. 사이드바의 "☑ ToDo" 버튼을 클릭하여 열 수 있습니다.</p>
      <ul>
        <li><strong>위젯 장점:</strong> 메인 화면과 독립적으로 할 일만 보면서 작업할 수 있습니다</li>
        <li><strong>멀티 윈도우:</strong> 여러 날짜의 할 일 위젯을 동시에 열어 비교 가능</li>
        <li><strong>빠른 확인:</strong> 위젯을 작게 만들어 화면 구석에 배치하고 항상 확인</li>
        <li><strong>드래그 정렬:</strong> 위젯 내에서도 항목을 드래그하여 순서 변경 가능</li>
        <li><strong>실시간 동기화:</strong> 메인 화면과 위젯의 데이터는 실시간으로 동기화됩니다</li>
        <li><strong>완료 항목 숨김:</strong> 향후 업데이트에서 완료된 항목을 숨기는 옵션이 추가될 예정입니다</li>
      </ul>
    `
  },
  timer: {
    intro: `
      <p><strong>타이머 기능</strong>은 시간을 측정하고 관리하는 데 유용한 카운트다운 타이머입니다. 공부 시간 측정, 요리 시간 관리, 프레젠테이션 시간 체크 등 다양한 상황에서 활용할 수 있습니다.</p>
      <p>타이머는 시, 분, 초 단위로 설정할 수 있으며, 시각적인 원형 게이지로 남은 시간을 직관적으로 보여줍니다. 타이머가 종료되면 알림이 표시되어 놓치지 않도록 도와줍니다.</p>
      <p>일시정지와 재개 기능을 제공하여 유연하게 시간을 관리할 수 있으며, 리셋 버튼으로 언제든지 처음부터 다시 시작할 수 있습니다.</p>
    `,
    method: `
      <p><strong>타이머 사용 방법:</strong></p>
      <ul>
        <li><strong>시간 설정:</strong> 시, 분, 초 입력 필드에 원하는 시간을 입력합니다</li>
        <li><strong>타이머 시작:</strong> "시작" 버튼을 클릭하면 카운트다운이 시작됩니다</li>
        <li><strong>일시정지:</strong> 진행 중인 타이머를 잠시 멈추려면 "일시정지" 버튼 클릭</li>
        <li><strong>재개:</strong> 일시정지된 타이머를 다시 시작하려면 "재개" 버튼 클릭</li>
        <li><strong>리셋:</strong> "리셋" 버튼을 클릭하면 타이머가 초기화되고 처음 설정한 시간으로 돌아갑니다</li>
        <li><strong>종료 알림:</strong> 타이머가 00:00:00에 도달하면 알림이 표시되고 소리가 울립니다</li>
        <li><strong>빠른 설정:</strong> 자주 사용하는 시간은 프리셋으로 저장하여 빠르게 시작할 수 있습니다</li>
      </ul>
    `,
    widget: `
      <p><strong>타이머 위젯</strong>을 사용하면 작업 중에도 별도의 창에서 시간을 확인할 수 있습니다. 사이드바의 "◷ 타이머" 버튼을 클릭하여 위젯을 엽니다.</p>
      <ul>
        <li><strong>화면 배치:</strong> 위젯을 화면 구석에 작게 배치하여 작업하면서 시간 확인</li>
        <li><strong>여러 타이머:</strong> 여러 개의 타이머 위젯을 동시에 열어 다양한 작업 시간을 동시에 측정</li>
        <li><strong>포커스 모드:</strong> 타이머 위젯만 크게 띄워 집중력을 높이는 용도로 활용</li>
        <li><strong>프리셋 기능:</strong> 자주 사용하는 시간을 저장해두고 버튼 한 번으로 시작</li>
        <li><strong>완료 예정 시각:</strong> 타이머 아래에 종료 예정 시각이 표시되어 계획을 세우기 쉽습니다</li>
        <li><strong>배경 작동:</strong> 다른 탭이나 프로그램을 사용 중에도 타이머는 계속 작동합니다</li>
      </ul>
    `
  },
  alarm: {
    intro: `
      <p><strong>알람 기능</strong>은 특정 시간에 알림을 받을 수 있는 기능으로, 현재 개발 중입니다. 중요한 회의, 약속, 복약 시간 등을 놓치지 않도록 도와주는 기능이 곧 추가될 예정입니다.</p>
      <p>알람은 반복 설정이 가능하여 매일, 매주 특정 요일, 매월 특정 날짜에 알림을 받을 수 있습니다. 각 알람에는 이름과 메모를 추가하여 무엇을 위한 알람인지 명확하게 표시할 수 있습니다.</p>
      <p>알람은 브라우저가 백그라운드에서 실행 중일 때도 작동하며, 시스템 알림으로 표시되어 다른 작업을 하고 있어도 놓치지 않습니다.</p>
    `,
    method: `
      <p><strong>알람 사용 방법 (개발 예정):</strong></p>
      <ul>
        <li><strong>알람 추가:</strong> 시간, 날짜, 반복 설정을 입력하고 알람 이름을 지정합니다</li>
        <li><strong>반복 설정:</strong> 매일, 평일, 주말, 특정 요일 등 다양한 반복 옵션을 선택할 수 있습니다</li>
        <li><strong>알람음 선택:</strong> 여러 가지 알람음 중에서 선택하거나 무음으로 설정할 수 있습니다</li>
        <li><strong>스누즈 기능:</strong> 알람이 울릴 때 스누즈 버튼을 눌러 5분 후 다시 알림을 받을 수 있습니다</li>
        <li><strong>알람 끄기:</strong> 알람 목록에서 토글 스위치를 눌러 일시적으로 비활성화할 수 있습니다</li>
        <li><strong>알람 삭제:</strong> 더 이상 필요 없는 알람은 삭제 버튼으로 제거할 수 있습니다</li>
      </ul>
    `,
    widget: `
      <p><strong>알람 위젯 (개발 예정)</strong>은 설정된 모든 알람을 한눈에 보고 관리할 수 있는 기능입니다.</p>
      <ul>
        <li><strong>알람 목록:</strong> 설정된 모든 알람이 시간 순서대로 표시됩니다</li>
        <li><strong>빠른 토글:</strong> 위젯에서 바로 알람을 켜고 끌 수 있습니다</li>
        <li><strong>다음 알람:</strong> 가장 가까운 시간의 알람이 강조 표시되어 쉽게 확인할 수 있습니다</li>
        <li><strong>알람 그룹:</strong> 업무용, 개인용 등으로 알람을 그룹화하여 관리할 수 있습니다</li>
        <li><strong>통계 기능:</strong> 알람을 얼마나 잘 지키는지 통계를 확인할 수 있습니다</li>
      </ul>
    `
  },
  stopwatch: {
    intro: `
      <p><strong>스탑워치 기능</strong>은 정확한 시간 측정이 필요한 상황에서 사용하는 기능으로, 현재 개발 중입니다. 운동 시간 측정, 작업 시간 기록, 경과 시간 체크 등 다양한 용도로 활용할 수 있습니다.</p>
      <p>스탑워치는 밀리초 단위까지 정확하게 시간을 측정하며, 랩타임 기능을 통해 구간별 시간도 기록할 수 있습니다. 여러 개의 스탑워치를 동시에 실행하여 여러 작업의 시간을 동시에 측정할 수도 있습니다.</p>
      <p>측정된 시간은 기록으로 저장되어 나중에 다시 확인할 수 있으며, CSV 파일로 내보내기 기능도 제공될 예정입니다.</p>
    `,
    method: `
      <p><strong>스탑워치 사용 방법 (개발 예정):</strong></p>
      <ul>
        <li><strong>측정 시작:</strong> "시작" 버튼을 클릭하면 스탑워치가 작동하기 시작합니다</li>
        <li><strong>일시정지:</strong> "일시정지" 버튼으로 시간 측정을 잠시 멈출 수 있습니다</li>
        <li><strong>재개:</strong> 일시정지된 스탑워치를 다시 시작하려면 "재개" 버튼을 클릭합니다</li>
        <li><strong>랩타임 기록:</strong> "랩" 버튼을 눌러 구간별 시간을 기록할 수 있습니다</li>
        <li><strong>리셋:</strong> "리셋" 버튼으로 스탑워치를 00:00:00으로 초기화합니다</li>
        <li><strong>기록 저장:</strong> 측정이 끝나면 자동으로 기록이 저장되어 나중에 확인할 수 있습니다</li>
        <li><strong>기록 비교:</strong> 이전 기록들과 비교하여 향상도를 확인할 수 있습니다</li>
      </ul>
    `,
    widget: `
      <p><strong>스탑워치 위젯 (개발 예정)</strong>은 화면 위에 띄워놓고 작업하면서 시간을 측정할 수 있는 기능입니다.</p>
      <ul>
        <li><strong>플로팅 윈도우:</strong> 항상 위에 표시되는 작은 창으로 다른 작업 중에도 시간을 확인할 수 있습니다</li>
        <li><strong>멀티 스탑워치:</strong> 여러 개의 스탑워치 위젯을 동시에 실행하여 여러 작업을 동시에 측정</li>
        <li><strong>랩타임 목록:</strong> 기록된 랩타임이 위젯 내에서 스크롤 가능한 목록으로 표시됩니다</li>
        <li><strong>최소화 모드:</strong> 위젯을 아주 작게 만들어 시간만 표시하도록 할 수 있습니다</li>
        <li><strong>내보내기:</strong> 측정된 시간을 CSV나 엑셀 파일로 내보낼 수 있습니다</li>
        <li><strong>통계 차트:</strong> 누적 시간과 평균 시간을 차트로 시각화하여 확인할 수 있습니다</li>
      </ul>
    `
  }
};

function showUsage(type) {
  const section = document.getElementById('usageSection');
  const introDiv = document.getElementById('usageIntro');
  const methodDiv = document.getElementById('usageMethod');
  const widgetDiv = document.getElementById('usageWidget');
  const siteIntro = document.getElementById('siteIntro');
  if (section && introDiv && methodDiv && widgetDiv && usageTexts[type]) {
    introDiv.innerHTML = usageTexts[type].intro;
    methodDiv.innerHTML = usageTexts[type].method;
    widgetDiv.innerHTML = usageTexts[type].widget;
    section.style.display = 'block';
    if(siteIntro) siteIntro.style.display = 'none';
  }
}

function hideUsage() {
  const section = document.getElementById('usageSection');
  const siteIntro = document.getElementById('siteIntro');
  if (section) section.style.display = 'none';
  if (siteIntro) siteIntro.style.display = 'block';
}

/* ── 네비 ── */
if($.todayBtn){
  const updateTodayBtn=()=>{
    const t=new Date();
    $.todayBtn.textContent=`${t.getDate()}`;
  };
  updateTodayBtn();
    $.todayBtn.onclick=()=>{const t=new Date(); ST.viewYear=t.getFullYear(); ST.viewMonth=t.getMonth(); ST.selected=t; setGlobalSelected(t); renderCalendar(); renderRight(); renderMonthlyGoals(); trackMenuPV('nav:today');};
}
  if($.prev) $.prev.onclick=()=>{const d=new Date(ST.viewYear,ST.viewMonth-1,1); ST.viewYear=d.getFullYear(); ST.viewMonth=d.getMonth(); renderCalendar(); renderMonthlyGoals(); trackMenuPV('nav:prevMonth');};
  if($.next) $.next.onclick=()=>{const d=new Date(ST.viewYear,ST.viewMonth+1,1); ST.viewYear=d.getFullYear(); ST.viewMonth=d.getMonth(); renderCalendar(); renderMonthlyGoals(); trackMenuPV('nav:nextMonth');};
if($.ym) $.ym.onclick=()=>{ showDatePicker(); };

function showDatePicker(){
  if(openPop) openPop.remove();
  const pop=document.createElement('div');
  pop.className='date-picker';
  
  const header=document.createElement('div');
  header.className='date-picker-header';
  header.innerHTML=`<div class="date-picker-title">${ST.viewYear}년 ${ST.viewMonth+1}월 ▲</div>`;
  
  const body=document.createElement('div');
  body.className='date-picker-body';
  
  const yearCol=document.createElement('div');
  yearCol.className='date-picker-col';
  const monthCol=document.createElement('div');
  monthCol.className='date-picker-col';
  
  for(let y=ST.viewYear-5; y<=ST.viewYear+5; y++){
    const item=document.createElement('div');
    item.className='date-picker-item';
    if(y===ST.viewYear) item.classList.add('selected');
    item.textContent=`${y}년`;
    item.onclick=()=>{
      ST.viewYear=y;
      pop.remove();
      openPop=null;
      renderCalendar();
    };
    yearCol.appendChild(item);
  }
  
  for(let m=1; m<=12; m++){
    const item=document.createElement('div');
    item.className='date-picker-item';
    if(m-1===ST.viewMonth) item.classList.add('selected');
    item.textContent=`${m}월`;
    item.onclick=()=>{
      ST.viewMonth=m-1;
      pop.remove();
      openPop=null;
      renderCalendar();
    };
    monthCol.appendChild(item);
  }
  
  body.append(yearCol,monthCol);
  pop.append(header,body);
  
  const closeBtn=document.createElement('div');
  closeBtn.className='date-picker-close';
  closeBtn.innerHTML='<button class="btn">완료</button>';
  closeBtn.onclick=()=>{pop.remove(); openPop=null;};
  pop.appendChild(closeBtn);
  
  document.body.appendChild(pop);
  openPop=pop;
  
  setTimeout(()=>{
    yearCol.querySelector('.selected')?.scrollIntoView({block:'center'});
    monthCol.querySelector('.selected')?.scrollIntoView({block:'center'});
  },0);
}

/* ── 달력 사이즈 조절 (모서리 드래그) ── */
const calWrapper=document.getElementById('calendarWrapper');
const resizeHandle=document.querySelector('.calendar-resize-handle');
if(calWrapper && resizeHandle){
  let isResizing=false;
  let startY=0;
  let startHeight=0;
  
  resizeHandle.addEventListener('mousedown',(e)=>{
    isResizing=true;
    startY=e.clientY;
    startHeight=calWrapper.offsetHeight;
    document.body.style.cursor='nwse-resize';
    e.preventDefault();
  });
  
  document.addEventListener('mousemove',(e)=>{
    if(!isResizing) return;
    const deltaY=e.clientY-startY;
    const newHeight=Math.max(400, Math.min(1000, startHeight+deltaY));
    calWrapper.style.height=newHeight+'px';
    
    // 셀 높이도 자동 조정
    const rows=6;
    const weekdaysHeight=30;
    const gap=10;
    const cellHeight=Math.floor((newHeight-weekdaysHeight-gap*(rows-1))/rows);
    ST.cellHeight=Math.max(80, Math.min(200, cellHeight));
    renderCalendar();
  });
  
  document.addEventListener('mouseup',()=>{
    if(isResizing){
      isResizing=false;
      document.body.style.cursor='';
    }
  });
}

/* ── 이달의 목표 (1줄 형태) ── */
const kMonthlyGoal=(y,m)=>`memo2.monthlyGoal.${y}-${m}`;
const kMonthlyGoalStyle='memo2.monthlyGoal.style';

function getGoalStyle(){
  const def={color:'#1f2937',emoji:'',fontSize:'14',fontWeight:'600'};
  try{ const v=JSON.parse(localStorage.getItem(kMonthlyGoalStyle)||'null'); return {...def,...v}; }catch{return def;}
}
function saveGoalStyle(s){ try{ localStorage.setItem(kMonthlyGoalStyle, JSON.stringify(s)); }catch{} }

function applyGoalStyle(input){
  if(!input) return;
  const badge=document.getElementById('goalEmojiBadge');
  const st=getGoalStyle();
  input.style.color=st.color||'#1f2937';
  input.style.fontSize=(st.fontSize||'14')+'px';
  input.style.fontWeight=st.fontWeight||'600';
  if(badge) badge.textContent=st.emoji||'';
  input.style.paddingLeft=st.emoji? '32px':'10px';
}

function showGoalStyleMenu(anchor){
  if(!anchor) return;
  const existing=document.querySelector('.goal-style-menu');
  if(existing) existing.remove();
  const st=getGoalStyle();
  const menu=document.createElement('div'); menu.className='goal-style-menu';

  const rowColor=document.createElement('div'); rowColor.className='row';
  const lblColor=document.createElement('span'); lblColor.className='label'; lblColor.textContent='색상';
  const colorBtn=document.createElement('button'); colorBtn.type='button'; colorBtn.className='swatch-btn';
  const swatch=document.createElement('span'); swatch.className='swatch'; swatch.style.background=st.color||'#1f2937';
  const colorTxt=document.createElement('span'); colorTxt.textContent='변경';
  colorBtn.append(swatch,colorTxt); rowColor.append(lblColor,colorBtn);

  const rowEmoji=document.createElement('div'); rowEmoji.className='row';
  const lblEmoji=document.createElement('span'); lblEmoji.className='label'; lblEmoji.textContent='이모티콘';
  const emojiBtn=document.createElement('button'); emojiBtn.type='button'; emojiBtn.className='emoji-btn-small'; emojiBtn.textContent=st.emoji||'선택';
  rowEmoji.append(lblEmoji,emojiBtn);

  const rowSize=document.createElement('div'); rowSize.className='row';
  const lblSize=document.createElement('span'); lblSize.className='label'; lblSize.textContent='글자크기';
  const size=document.createElement('select'); ['14','16','18','20','24'].forEach(v=>{ const o=document.createElement('option'); o.value=v; o.textContent=`${v}px`; if(v===String(st.fontSize||'14')) o.selected=true; size.appendChild(o); });
  rowSize.append(lblSize,size);

  const rowWeight=document.createElement('div'); rowWeight.className='row';
  const lblWeight=document.createElement('span'); lblWeight.className='label'; lblWeight.textContent='굵기';
  const weight=document.createElement('select'); [['500','보통'],['700','굵게']].forEach(([v,l])=>{ const o=document.createElement('option'); o.value=v; o.textContent=l; if(v===String(st.fontWeight||'600')) o.selected=true; weight.appendChild(o); });
  rowWeight.append(lblWeight,weight);

  const actions=document.createElement('div'); actions.className='menu-actions';
  const save=document.createElement('button'); save.className='menu-btn primary'; save.textContent='적용';
  const cancel=document.createElement('button'); cancel.className='menu-btn'; cancel.textContent='닫기';
  actions.append(cancel,save);

  [rowColor,rowEmoji,rowSize,rowWeight,actions].forEach(el=>menu.appendChild(el));
  document.body.appendChild(menu);
  const rect=anchor.getBoundingClientRect();
  menu.style.left=`${rect.right - (menu.offsetWidth||220) + (window.scrollX||0)}px`;
  menu.style.top=`${rect.bottom + 8 + (window.scrollY||0)}px`;

  const close=()=>menu.remove();
  cancel.onclick=(e)=>{e.stopPropagation(); close();};
  colorBtn.onclick=(e)=>{ e.stopPropagation(); showPalette(colorBtn,(c)=>{ swatch.style.background=c; swatch.dataset.val=c; }); };
  emojiBtn.onclick=(e)=>{ e.stopPropagation(); showEmojiPicker(emojiBtn,(emo)=>{ emojiBtn.textContent=emo||'선택'; emojiBtn.dataset.val=emo||''; }); };

  save.onclick=(e)=>{
    e.stopPropagation();
    const next={
      color:swatch.dataset.val||swatch.style.background||'#1f2937',
      emoji:emojiBtn.dataset.val||'',
      fontSize:size.value||'14',
      fontWeight:weight.value||'700'
    };
    saveGoalStyle(next); applyGoalStyle(document.getElementById('monthlyGoalInput')); close();
  };
  setTimeout(()=>{
    const handler=(e)=>{
      const t=e.target;
      if(menu.contains(t) || t===anchor || t.closest('.color-pop-advanced') || t.closest('.emoji-picker')) return;
      close(); document.removeEventListener('mousedown',handler);
    };
    document.addEventListener('mousedown',handler);
  },10);
}

function renderMonthlyGoals(){
  const input=document.getElementById('monthlyGoalInput');
  if(!input) return;
  
  const key=kMonthlyGoal(ST.viewYear,ST.viewMonth);
  const goalText=get(key,'');
  input.value=goalText;
  applyGoalStyle(input);
  
  input.onkeydown=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      const txt=input.value.trim();
      set(key,txt);
      input.blur();
    }
  };
  
  input.onblur=()=>{
    const txt=input.value.trim();
    set(key,txt);
  };
}

/* ── 테마 토글 기능 ── */
function updateThemeButton(){
  const themeBtn=document.getElementById('themeToggle');
  if(!themeBtn)return;
  const current=document.documentElement.getAttribute('data-theme')||'light';
  themeBtn.textContent=current==='light'?'◑ 다크':'◑ 라이트';
}
function loadTheme(){
  const saved=localStorage.getItem('memo2.theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  updateThemeButton();
}
function toggleTheme(){
  const current=document.documentElement.getAttribute('data-theme')||'light';
  const newTheme=current==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',newTheme);
  localStorage.setItem('memo2.theme',newTheme);
  updateThemeButton();
}
const themeBtn=document.getElementById('themeToggle');
if(themeBtn){
  themeBtn.addEventListener('click',toggleTheme);
}

const goalStyleBtn=document.getElementById('goalStyleBtn');
if(goalStyleBtn){
  goalStyleBtn.addEventListener('click',(e)=>{ e.stopPropagation(); showGoalStyleMenu(goalStyleBtn); });
}

/* ── (+) 버튼 클릭 이벤트 ── */
const monthlyGoalAddIcon=document.getElementById('monthlyGoalAddIcon');
if(monthlyGoalAddIcon){
  monthlyGoalAddIcon.addEventListener('click',()=>{
    const wrapper=document.getElementById('monthlyGoalInputWrapper');
    if(wrapper){
      wrapper.classList.add('active');
      const input=wrapper.querySelector('.monthly-goal-input');
      if(input) input.focus();
    }
  });
}

const homeReminderAddIcon=document.getElementById('homeReminderAddIcon');
if(homeReminderAddIcon){
  homeReminderAddIcon.addEventListener('click',()=>{
    const wrapper=document.getElementById('homeReminderInputWrapper');
    if(wrapper){
      wrapper.classList.add('active');
      const input=wrapper.querySelector('.home-reminder-input');
      if(input) input.focus();
    }
  });
}

/* ── 초기 렌더 + 동기화 리스너 ── */
/* ── 개인정보 보호정책 & 문의하기 팝업 ── */
function showModal(title, content) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'modal-content';
  
  modal.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${title}</h2>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">${content}</div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.onclick = () => overlay.remove();
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.remove();
  };
}

const privacyContent = `
  <h3>1. 수집하는 정보</h3>
  <p>Jay Calendar는 사용자의 개인정보를 수집하지 않습니다. 모든 데이터(일정, 메모, 할 일 등)는 사용자의 브라우저 로컬 스토리지에만 저장되며, 외부 서버로 전송되지 않습니다.</p>
  
  <h3>2. 쿠키 및 로컬 스토리지</h3>
  <p>본 서비스는 사용자 경험 향상을 위해 브라우저의 로컬 스토리지를 사용합니다. 저장되는 정보는 다음과 같습니다:</p>
  <ul>
    <li>일정, 메모, 할 일 데이터</li>
    <li>테마 설정 (다크모드/라이트모드)</li>
    <li>사용자 인터페이스 설정</li>
  </ul>
  <p>이러한 정보는 사용자의 기기에만 저장되며, 외부로 전송되지 않습니다.</p>
  
  <h3>3. Google AdSense</h3>
  <p>본 사이트는 Google AdSense를 사용하여 광고를 게재합니다. Google은 사용자의 관심사에 맞는 광고를 표시하기 위해 쿠키를 사용할 수 있습니다. Google의 개인정보 보호정책은 <a href="https://policies.google.com/privacy" target="_blank" style="color:var(--primary);">여기</a>에서 확인할 수 있습니다.</p>
  
  <h3>4. 제3자 서비스</h3>
  <p>본 서비스는 Google Analytics 등의 제3자 분석 도구를 사용할 수 있습니다. 이러한 도구는 익명화된 사용 통계를 수집하여 서비스 개선에 활용됩니다.</p>
  
  <h3>5. 데이터 보안</h3>
  <p>사용자의 모든 데이터는 브라우저 로컬 스토리지에 저장되며, 데이터 보안은 사용자의 브라우저 및 기기 보안에 의존합니다. 정기적으로 브라우저 데이터를 백업하시는 것을 권장합니다.</p>
  
  <h3>6. 아동의 개인정보</h3>
  <p>본 서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 의도적으로 아동의 개인정보를 수집하지 않습니다.</p>
  
  <h3>7. 개인정보 보호정책 변경</h3>
  <p>본 개인정보 보호정책은 필요에 따라 업데이트될 수 있습니다. 중요한 변경 사항이 있을 경우 웹사이트를 통해 공지됩니다.</p>
  
  <h3>8. 문의</h3>
  <p>개인정보 보호와 관련된 문의사항이 있으시면 아래 연락처로 문의해주세요.</p>
  <p><strong>최종 업데이트:</strong> 2025년 12월 7일</p>
`;

const contactContent = `
  <h3>문의하기</h3>
  <p>Jay Calendar 사용 중 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요.</p>
  
  <h3>이메일 문의</h3>
  <p><strong>이메일:</strong> <a href="mailto:support@jaycalendar.com" style="color:var(--primary);">support@jaycalendar.com</a></p>
  <p>영업일 기준 1-2일 내에 답변드리겠습니다.</p>
  
  <h3>자주 묻는 질문</h3>
  <ul>
    <li><strong>데이터가 삭제되었어요!</strong> - 브라우저 캐시를 삭제하면 로컬 스토리지 데이터도 함께 삭제됩니다. 정기적으로 백업하시는 것을 권장합니다.</li>
    <li><strong>다른 기기에서도 사용할 수 있나요?</strong> - 현재는 로컬 스토리지를 사용하므로 기기 간 동기화는 지원되지 않습니다. 향후 업데이트에서 추가될 예정입니다.</li>
    <li><strong>모바일에서도 사용할 수 있나요?</strong> - 네, 모바일 브라우저에서도 사용 가능합니다.</li>
    <li><strong>버그를 발견했어요!</strong> - 위 이메일로 상세한 내용을 보내주시면 빠르게 수정하겠습니다.</li>
  </ul>
  
  <h3>기능 제안</h3>
  <p>새로운 기능에 대한 아이디어가 있으시면 언제든지 제안해주세요. 사용자 여러분의 의견은 Jay Calendar 개선에 큰 도움이 됩니다.</p>
`;

if(document.getElementById('privacyLink')) {
  document.getElementById('privacyLink').onclick = (e) => {
    e.preventDefault();
    showModal('개인정보 보호정책', privacyContent);
  };
}

if(document.getElementById('contactLink')) {
  document.getElementById('contactLink').onclick = (e) => {
    e.preventDefault();
    showModal('문의하기', contactContent);
  };
}

loadTheme();
renderCalendar(); renderRight(); renderReminders(); renderMonthlyGoals();
if(window.ResizeObserver && $.calWrap){
  new ResizeObserver(()=>{ const n=calcMaxLines(); if(n!==ST.linesHint){ ST.linesHint=n; renderCalendar(); } }).observe($.calWrap);
}
if(appBC){
  appBC.onmessage=(e)=>{
    const m=e.data||{};
    if(m.type==='select' && m.date){ ST.selected=new Date(m.date); renderCalendar(); renderRight(); }
    if(m.type==='refresh'){ renderCalendar(); renderRight(); }
  };
}
window.addEventListener('storage',(e)=>{
  if(e.key==='memo2.selected' && e.newValue){ ST.selected=new Date(e.newValue); renderCalendar(); renderRight(); }
  if(e.key && (e.key.startsWith('memo2.todos.')||e.key.startsWith('memo2.memos.'))){ renderCalendar(); renderRight(); }
});
