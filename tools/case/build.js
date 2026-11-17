/* ══════════════════════════════════════════════════════════════
   코레일톡 보고서 페이지 → 주시원 디자인 시스템 변환기 (2026-11-18)

   쓰는 법   node tools/case/build.js  [원본 index.html 경로]
   만드는 것 case.css · case.js · case-korail.js (저장소 뿌리에)

   원본은 팀이 만든 보고서 페이지 한 장(index.html)이다. 이 변환기가
     1. CSS 705 규칙의 선택자를 전부 `.kc` 아래로 가두고
        (내 페이지로 새지 않게) 값 이름이 겹치는 것은 바꿔 단다
     2. 디자인 토큰 블록을 버리고 case-head.css 의 내 값으로 갈아끼우고
     3. 다크 모드 · 알약 모서리 · 그림자를 걷어 내고
     4. 페이지 머리 띠 · 자체 목차 · 맨 위로 단추를 떼어 내고
        (내 상세 페이지가 이미 같은 일을 한다)
     5. 그림 경로를 images/korail/ 로 옮긴다

   값을 고치려면 case-head.css, 배치를 고치려면 case-tail.css 를
   고치고 다시 돌린다. 만들어진 세 파일은 손으로 고치지 않는다.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const SRC = __dirname;
const OUT = path.resolve(__dirname, '..', '..');
const INDEX = process.argv[2]
  || 'C:/Users/tldnj/Downloads/코레일톡_세부페이지/1_세부페이지/index.html';

/* 원본 한 장에서 토막을 꺼낸다 — 줄 번호는 내보낸 파일의 구조 그대로다 */
const IDX = fs.readFileSync(INDEX, 'utf8').split(/\r?\n/);
const RAW_CSS = IDX.slice(7, 789).join('\n');     /*   8~789  글꼴 base64(7줄) 뒤부터 */
const SPRITE = IDX.slice(790, 802).join('\n');    /* 791~802  아이콘 모음 */
const RAW_HTML = IDX.slice(802, 1728).join('\n'); /* 803~1728 본문 */

/* ─────────────────────────────────────────────────────────────
   1. CSS — 규칙 단위로 잘라 선택자를 .kc 아래로 넣는다
   ───────────────────────────────────────────────────────────── */
function splitRules(css) {
  const out = [];
  let i = 0, start = 0, depth = 0, inStr = null;
  while (i < css.length) {
    const c = css[i];
    if (inStr) { if (c === inStr && css[i - 1] !== '\\') inStr = null; i++; continue; }
    if (c === '"' || c === "'") { inStr = c; i++; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) { out.push(css.slice(start, i + 1)); start = i + 1; } }
    i++;
  }
  if (start < css.length && css.slice(start).trim()) out.push(css.slice(start));
  return out;
}

const DROP_SEL = [/^html$/, /^body\.spec/, /\[data-spec\]/];

function scopeSel(sel) {
  sel = sel.trim();
  if (!sel) return null;
  if (/\[data-theme="dark"\]/.test(sel)) return null;
  for (const re of DROP_SEL) if (re.test(sel)) return null;
  if (sel.startsWith('html.rv-js')) return sel.replace(/^html\.rv-js\s*/, 'html.rv-js .kc ').replace(/\s+/g, ' ').trim();
  if (sel === ':root') return '.kc';
  if (sel.startsWith(':root')) return '.kc' + sel.slice(5);
  if (sel === '*') return '.kc *';
  if (sel === 'body') return '.kc';
  if (/^body\s/.test(sel)) return '.kc ' + sel.slice(5).trim();
  if (sel.startsWith('::-webkit-scrollbar')) return '.kc ' + sel;
  return '.kc ' + sel;
}

/* 알약(999px) → 네모(4px) 로 바꿀 선택자. 동그라미(점 · 번호)는 그대로 둔다 */
const SQUARE = ['.sg', '.sg-ink', '.ctl button', '.st-m span', '.chips span', '.ph-tag',
  '.rd-tg button', '.tg', '.pd', '.go', '.hb-t', '.tm-dn', '.sdv-x', '.chip', '.cd-mb', '.hbtn'];

function fixBody(sel, body) {
  const squarish = SQUARE.some((s) => sel.split(',').some((x) => x.trim().endsWith(s) || x.trim().includes(s + ':') || x.trim().includes(s + '::')));
  if (squarish) body = body.replace(/border-radius:\s*99+px/g, 'border-radius:var(--r-outer)');
  return body;
}

function transform(css, depthTop) {
  return splitRules(css).map((rule) => {
    const m = rule.match(/^([\s\S]*?)\{([\s\S]*)\}\s*$/);
    if (!m) return rule.trim() ? rule : '';
    let head = m[1].trim(), body = m[2];

    if (head.startsWith('@')) {
      if (/prefers-color-scheme\s*:\s*dark/.test(head)) return '';
      if (/^@keyframes/.test(head)) return head.replace(/^@keyframes\s+/, '@keyframes kc-') + '{' + body + '}';
      if (/^@(media|supports|container)/.test(head)) {
        head = head
          .replace(/max-width:\s*640px/g, 'max-width:760px')
          .replace(/min-width:\s*641px/g, 'min-width:761px')
          .replace(/min-width:\s*1081px/g, 'min-width:1101px')
          .replace(/max-width:\s*1080px/g, 'max-width:1100px');
        const inner = transform(body);
        return inner.trim() ? head + '{' + inner + '}' : '';
      }
      return head + '{' + body + '}';
    }

    const sels = head.split(',').map(scopeSel).filter(Boolean);
    if (!sels.length) return '';
    /* :root 에서 온 값 블록은 통째로 버린다 — 같은 값을 case-head.css 가
       내 디자인 시스템으로 다시 정해 두었는데, 뒤에 오면 그게 덮인다 */
    if (sels.length === 1 && sels[0] === '.kc' && !/[a-z-]+\s*:/.test(body.replace(/--[a-z0-9-]+\s*:[^;}]*/g, ''))) return '';
    return sels.join(',') + '{' + fixBody(head, body) + '}';
  }).filter(Boolean).join('\n');
}

/* 1~116줄은 원본의 디자인 토큰이다 — 통째로 버리고 case-head.css 로 갈아끼운다 */
let comp = transform(RAW_CSS.split(/\r?\n/).slice(116).join('\n'));

/* 애니메이션 이름 맞추기 */
comp = comp.replace(/animation:([^;}]*?)\b(abIn|hbTalk|hbListen|hbThink)\b/g, (s, a, n) => 'animation:' + a + 'kc-' + n);

/* 변수 이름 겹침 풀기 — 내 tokens.css 가 쓰는 이름과 부딪히면 순환 참조가 된다 */
comp = comp
  .replace(/--t-/g, '--kt-').replace(/--ls-/g, '--kls-')
  .replace(/--on-ink\b/g, '--kon-fill')
  .replace(/--ink\b/g, '--kfill')
  .replace(/--surface\b/g, '--kcard');


console.log('부품 CSS', (comp.length / 1024).toFixed(0) + 'KB');

/* 머리(값) + 부품 + 마무리(배치) 를 한 파일로 */
const css = fs.readFileSync(path.join(SRC, 'case-head.css'), 'utf8')
  + '\n\n/* ══ 여기서부터 원본 부품 CSS — 기계로 옮긴 것이라 손대지 않는다 ══ */\n'
  + comp + '\n'
  + fs.readFileSync(path.join(SRC, 'case-tail.css'), 'utf8');
fs.writeFileSync(path.join(OUT, 'case.css'), css);
console.log('case.css', (css.length / 1024).toFixed(0) + 'KB');

/* ─────────────────────────────────────────────────────────────
   2. JS — 페이지 머리 · 꼬리(고정 바 · 자체 목차)를 걷어낸다
   ───────────────────────────────────────────────────────────── */
let js1 = IDX.slice(1729, 1838).join('\n').replace(/<\/script>\s*$/, '');        /* 1730~1838 */
let js2 = IDX.slice(1839, 2002).join('\n').replace(/<\/script>[\s\S]*$/, '');    /* 1840~2002 */
let dat = IDX[1838].replace(/^\s*<script>/, '');                                  /* 1839 — 자료 */
dat = dat.replace(/"src": "sd\//g, '"src": "images/korail/sd/');

const cutRange = (s, from, to) => {
  const a = s.indexOf(from); if (a < 0) throw new Error('못 찾음: ' + from.slice(0, 40));
  const b = s.indexOf(to, a); if (b < 0) throw new Error('못 찾음: ' + to.slice(0, 40));
  return s.slice(0, a) + s.slice(b);
};
/* 고정 바 · 자체 목차 · 스크롤 추적 통째로 */
js1 = cutRange(js1, "var bar=$('#dbar')", "$$('.cd-mb')");
/* 맨 위로 · 토스트 */
js1 = cutRange(js1, 'var HB=null,HT=[]', "function dotsFill");
js1 = js1.replace(/var SIB=\[[^\]]*\];/, "var SIB=['.site-header','#detail-main','.footer'];");
/* 스크롤로 넘기는 칸이 붙는 자리 — 내 고정 머리말(80px) 아래로 내린다 */
js2 = js2.replace('var SY_TOP=24;', 'var SY_TOP=96;');

const JS_HEAD = `/* ══════════════════════════════════════════════════════════════
   코레일톡 보고서 페이지 — 움직임 · 조작 (2026-11-18)

   팀이 만든 보고서 페이지의 자바스크립트를 그대로 옮긴 것이다.
   걷어낸 것: 그 페이지가 가지고 있던 고정 머리 띠 · 자체 목차 ·
   맨 위로 단추 — 내 상세 페이지가 이미 같은 일을 한다.

   들어 있는 것
     나타나기(.rv)      화면에 들어오면 떠오른다. 숨기는 일은 case.css 가 한다
     그림 크게 보기      가로 갤러리 · 장표를 눌러 전체 화면으로
     화면설계서 뷰어      28장 · 좌우 키 · 아래 띠에서 고르기
     폰 목업 강조 테두리   화면 속 요소 자리를 재서 빨간 테두리를 그린다
     가로 갤러리         튕기면 관성으로 미끄러지고 가장 가까운 장에 선다
     레이더 · 도넛 · 막대  보이면 그려진다
     근거→개선안→목표 선  누르면 이어진 것만 남는다

   ※ 통째로 try 로 감싼 이유: 중간에 멈추면 .rv 가 숨은 채로 남아
     글이 안 보인다. 그래서 멈추면 js-motion · rv-js 표시를 떼어 낸다.
   ══════════════════════════════════════════════════════════════ */
(function(){
'use strict';
/* project-detail.js 의 3초 안전장치에게 "나 살아 있다"고 알린다 */
window.__case = true;
try{
`;
const JS_TAIL = `
}catch(err){
  /* 어딘가 멈췄다 — 숨겨 둔 글을 전부 드러내고 조용히 끝낸다 */
  var de=document.documentElement;
  de.classList.remove('rv-js'); de.classList.remove('js-motion');
  [].slice.call(document.querySelectorAll('.kc .rv')).forEach(function(el){el.classList.add('in','done')});
  if(window.console&&console.warn)console.warn('[case] 멈춤:',err);
}
})();
`;
fs.writeFileSync(path.join(OUT, 'case.js'), JS_HEAD + js1 + '\n' + js2 + JS_TAIL);
console.log('case.js', ((JS_HEAD + js1 + js2 + JS_TAIL).length / 1024).toFixed(0) + 'KB');

/* ─────────────────────────────────────────────────────────────
   3. 마크업 — 내 상세 틀에 들어갈 부분만 남긴다
   ───────────────────────────────────────────────────────────── */
let html = RAW_HTML;

/* 히어로 커버(base64) 는 내 .detail-cover 가 대신한다 */
const b64 = html.match(/<button class="hd-art[\s\S]*?<\/button>/);
if (b64) {
  const d = b64[0].match(/base64,([A-Za-z0-9+/=]+)/);
  html = html.replace(b64[0], '');
}
/* 제목 · 부제 · 고정 바 · 자체 목차 · 맨 위로 — 내 페이지가 이미 가지고 있다 */
html = html.replace(/<h1 class="hd-n[\s\S]*?<\/h1>/, '');
html = html.replace(/<p class="hd-l[\s\S]*?<\/p>/, '');
html = html.replace(/<div class="dbar" id="dbar">[\s\S]*?<\/div><\/div><\/div><\/div>/, '');
html = html.replace(/<nav class="toc" id="toc"[\s\S]*?<\/nav>/, '');
html = html.replace(/<div class="end">[\s\S]*?<\/div>/, '');
/* 바깥 껍데기 벗기기 — <main>·<div class="wrap"> 한 쌍만 정확히 떼어 낸다 */
html = html.replace(/^\s*<main id="thread">\s*/, '');
html = html.replace(/<div class="wrap">\s*/, '');
{
  const mi = html.indexOf('</main>');
  if (mi < 0) throw new Error('</main> 못 찾음');
  let inner = html.slice(0, mi), rest = html.slice(mi + '</main>'.length);
  const li = inner.lastIndexOf('</div>');        /* wrap 을 닫던 마지막 한 개 */
  if (li < 0) throw new Error('wrap 닫는 태그 못 찾음');
  html = inner.slice(0, li) + inner.slice(li + '</div>'.length) + rest;
}

/* 그림 경로 */
html = html.replace(/(src|data-src)="(gal|sd|scr)\//g, '$1="images/korail/$2/');

/* 비어 있던 기간 · 내 역할 — project-detail.js 가 이미 들고 있는 값으로 채운다.
   회고 세 칸은 사용자가 따로 보내 주기로 해서 [빈칸] 그대로 둔다 */
html = html.replace(
  '<dt>기간</dt><dd><span class="bk">[빈칸]</span></dd><dt>내 역할</dt><dd><span class="bk">[빈칸]</span></dd>',
  '<dt>기간</dt><dd>2026.03 — 07</dd><dt>내 역할</dt><dd>문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 개선 범위 전환 제안</dd>');

/* 화면설계서 뷰어 — 내보낸 파일에 틀이 빠져 있어 새로 만든다 */
const SDV = `
<div class="sdv" id="sdv" hidden role="dialog" aria-modal="true" aria-label="화면설계서 크게 보기">
  <div class="sdv-top">
    <h2>화면설계서</h2>
    <span class="cnt">1 / 28</span>
    <button class="sdv-x press" type="button" aria-label="닫기"><svg class="i"><use href="#i-x"/></svg></button>
  </div>
  <div class="sdv-mid">
    <button class="pd prev press" type="button" aria-label="이전 장"><svg class="i"><use href="#i-left"/></svg></button>
    <div class="sdv-pg"><img alt="" decoding="async"></div>
    <button class="pd next press" type="button" aria-label="다음 장"><svg class="i"><use href="#i-right"/></svg></button>
  </div>
  <div class="sdv-rail" aria-label="화면설계서 장 고르기"></div>
</div>`;

const sprite = SPRITE;
const lb = html.match(/<div class="lb" id="lb"[\s\S]*$/);
let tail = '';
if (lb) { tail = lb[0]; html = html.replace(lb[0], ''); }

const body = (sprite + '\n' + html.trim() + '\n' + tail.trim() + '\n' + SDV).trim();

const lines = body.split(/\r?\n/).map((l) => JSON.stringify(l)).join(',\n');
const DOC = `/* ══════════════════════════════════════════════════════════════
   코레일톡 보고서 페이지 — 내용 (2026-11-18)

   팀이 만든 보고서 페이지의 본문을 그대로 옮긴 것이다. 손으로 고치지 않는다.
   글을 고칠 일이 생기면 원본(다운로드 폴더 1_세부페이지/index.html)을 고치고
   변환기를 다시 돌린다.

   뺀 것: 제목 · 부제 · 커버 그림 · 고정 머리 띠 · 자체 목차 · 맨 위로 단추
          — 내 상세 페이지가 이미 가지고 있다
   더한 것: 화면설계서 뷰어 틀(#sdv) — 원본 내보내기에 빠져 있었다
   그림 경로: gal/ · sd/ · scr/ → images/korail/ 아래로 옮겼다

   아직 비어 있는 곳: 06 프로젝트 회고 세 칸 ([빈칸] 표시 · 사용자가 따로 보내기로 함)
   ══════════════════════════════════════════════════════════════ */
${dat}
window.CASE_KORAIL = [
${lines}
].join("\\n");
`;
fs.writeFileSync(path.join(OUT, 'case-korail.js'), DOC);
console.log('case-korail.js', (DOC.length / 1024).toFixed(0) + 'KB ·', body.split('\n').length, '줄');
