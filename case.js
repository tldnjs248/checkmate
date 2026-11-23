/* ══════════════════════════════════════════════════════════════
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
(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOB=matchMedia('(max-width:640px)'),COARSE=matchMedia('(any-pointer:coarse)');
var SPR='cubic-bezier(.34,1.56,.64,1)',EO='cubic-bezier(.22,1,.36,1)';
document.addEventListener('touchstart',function(){},{passive:true});   
function tw_(el,prop,to,dur,ease,delay){el._a=el._a||{};var from=getComputedStyle(el)[prop];if(el._a[prop])el._a[prop].cancel();el.style[prop]=from;
  if(!el.animate||dur<=1){el.style[prop]=to;return Promise.resolve()}
  var k1={},k2={};k1[prop]=from;k2[prop]=to;var a=el.animate([k1,k2],{duration:dur,easing:ease,delay:delay||0,fill:'both'});el._a[prop]=a;
  return a.finished.then(function(){if(el._a[prop]===a){el.style[prop]=to;a.cancel();el._a[prop]=null}},function(){})}
function commit(el){var cs=getComputedStyle(el),t=cs.transform,o=cs.opacity,c=cs.clipPath;el.getAnimations().forEach(function(a){a.cancel()});el._a={};el.style.transform=t;el.style.opacity=o;if(c&&c!=='none')el.style.clipPath=c}
var SIB=['.site-header','#detail-main','.footer'];window.__lock=function(on){lockPage(on)};window.__trap=function(r){trap(r)};
function lockPage(on){var de=document.documentElement;if(on){var sw=innerWidth-de.clientWidth;de.style.overflow='hidden';if(sw>0)document.body.style.paddingRight=sw+'px'}else{de.style.overflow='';document.body.style.paddingRight=''}
  SIB.forEach(function(s){var e=$(s);if(e)e.inert=on})}
function trap(root){root.addEventListener('keydown',function(e){if(e.key!=='Tab')return;var f=$$('button,a[href],[tabindex="0"]',root).filter(function(x){return !x.disabled&&x.offsetParent!==null&&!x.closest('[hidden]')});
  if(!f.length)return;var i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&(i===f.length-1||i<0)){e.preventDefault();f[0].focus()}})}
function say(t){var l=$('#sr-live');if(!l)return;l.textContent='';setTimeout(function(){l.textContent=t},30)}
$$('.cd-mb').forEach(function(b){var p=document.getElementById(b.getAttribute('aria-controls')),t=$('span',b);
  b.addEventListener('click',function(){var on=!p.classList.contains('on');p.classList.toggle('on',on);b.setAttribute('aria-expanded',on);t.textContent=on?'접기':'자세히'})});
if(!RM&&'IntersectionObserver' in window){document.documentElement.classList.add('rv-js');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,k=+(getComputedStyle(el).getPropertyValue('--k')||0);
    el.classList.add('in');setTimeout(function(){el.classList.add('done')},420+k*40+60)})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  $$('.rv').forEach(function(el){io.observe(el)})}
function dotsFill(box,n){box.innerHTML='';for(var k=0;k<n;k++){var d=document.createElement('button');d.type='button';d.setAttribute('role','tab');d.setAttribute('aria-label',(k+1)+'번째 이미지');box.appendChild(d)}return $$('button',box)}
var LB={el:$('#lb'),img:$('#lb .lb-img'),s:$('#lb .lb-scrim'),ui:$('#lb .lb-ui'),t:$('#lb .lb-t'),open:false,items:[],i:0,dots:[],seq:0,nseq:0,hid:null};
function lbItems(b){var h=b.closest('.hs');if(h)return $$('[data-lb]',h);var g=b.closest('.st,.hd');return g?$$('[data-lb]',g).filter(function(x){return !x.closest('.hs')}):[b]}   
function lbFit(iw,ih){var m=MOB.matches,px=m?12:72,pt=m?72:80,pb=m?104:112,W=innerWidth-px*2,H=innerHeight-pt-pb,s=Math.min(W/iw,H/ih,m?3:1.4),w=iw*s,h=ih*s;return {x:(innerWidth-w)/2,y:pt+(H-h)/2,w:w,h:h}}
function lbPlace(T){var s=LB.img.style;s.left=T.x+'px';s.top=T.y+'px';s.width=T.w+'px';s.height=T.h+'px';LB.T=T}
function lbFrom(im,T){var r=im.getBoundingClientRect(),iw=im.naturalWidth||T.w,ih=im.naturalHeight||T.h,cs=getComputedStyle(im),op=cs.objectPosition.split(' ').map(parseFloat),fit=cs.objectFit;
  var sc=fit==='cover'?Math.max(r.width/iw,r.height/ih):Math.min(r.width/iw,r.height/ih),w=iw*sc,h=ih*sc,L=r.left+(r.width-w)*((isNaN(op[0])?50:op[0])/100),Tp=r.top+(r.height-h)*((isNaN(op[1])?50:op[1])/100),sx=w/T.w,sy=h/T.h;
  var box=im.closest('[data-lb]')||im,rad=parseFloat(getComputedStyle(box.closest('.cd')||box).borderTopLeftRadius)||0;
  var it=Math.max(0,(r.top-Tp)/sy),il=Math.max(0,(r.left-L)/sx),ib=Math.max(0,(Tp+h-r.bottom)/sy),ir=Math.max(0,(L+w-r.right)/sx);
  return {tf:'translate('+(L-T.x)+'px,'+(Tp-T.y)+'px) scale('+sx+','+sy+')',clip:'inset('+it+'px '+ir+'px '+ib+'px '+il+'px round '+(rad/sx)+'px)'}}
var LB_CLIP='inset(0px 0px 0px 0px round 18px)';
function lbHide(im){if(LB.hid&&LB.hid!==im)LB.hid.style.visibility='';LB.hid=im;if(im)im.style.visibility='hidden'}
function lbMeta(){var n=LB.items.length,i=LB.i,im=$('img',LB.items[i]);LB.t.textContent=im.alt+(n>1?' · '+(i+1)+' / '+n:'');
  if(n>1)LB.ui.removeAttribute('data-one');else LB.ui.setAttribute('data-one','');
  LB.dots.forEach(function(d,k){d.setAttribute('aria-selected',k===i);d.tabIndex=k===i?0:-1});$('.lb-nav.prev',LB.el).disabled=i===0;$('.lb-nav.next',LB.el).disabled=i===n-1}
function lbOpen(b){var items=lbItems(b),i=items.indexOf(b),im=$('img',b),same=!LB.el.hidden&&LB.items[LB.i]===b;
  LB.items=items;LB.i=i;LB.seq++;LB.open=true;LB.el.classList.remove('closing');
  LB.dots=dotsFill($('.gal-dots',LB.el),items.length);LB.dots.forEach(function(d,k){d.addEventListener('click',function(){lbGo(k)})});
  var fresh=LB.el.hidden||!same;LB.el.hidden=false;lockPage(true);
  if(fresh){commit(LB.img);LB.img.src=im.currentSrc||im.src;LB.img.alt=im.alt;var T=lbFit(im.naturalWidth||1100,im.naturalHeight||619);lbPlace(T);var c=lbFrom(im,T);
    if(RM){LB.img.style.transform='none';LB.img.style.clipPath=LB_CLIP;LB.img.style.opacity='0'}else{LB.img.style.transform=c.tf;LB.img.style.clipPath=c.clip;LB.img.style.opacity='1'}
    if(LB.s.style.opacity==='')LB.s.style.opacity='0';if(LB.ui.style.opacity==='')LB.ui.style.opacity='0'}
  lbMeta();lbHide(RM?null:im);
  $('.x',LB.el).focus({preventScroll:true});
  tw_(LB.s,'opacity','1',RM?200:280,EO);tw_(LB.ui,'opacity','1',220,EO,RM?0:160);
  if(RM){tw_(LB.img,'opacity','1',200,EO);return}
  tw_(LB.img,'transform','none',480,SPR);tw_(LB.img,'clipPath',LB_CLIP,380,EO)}
function lbClose(){if(!LB.open)return;LB.open=false;var seq=++LB.seq,b=LB.items[LB.i];LB.el.classList.add('closing');LB.nseq++;
  var im=$('img',b);lockPage(false);b.focus({preventScroll:true});commit(LB.img);
  var done=function(){if(seq!==LB.seq)return;LB.el.hidden=true;LB.el.classList.remove('closing');lbHide(null);['transform','clipPath','opacity'].forEach(function(p){LB.img.style[p]=''});LB.s.style.opacity='';LB.ui.style.opacity='';LB.img.removeAttribute('src')};
  tw_(LB.s,'opacity','0',RM?200:320,EO);tw_(LB.ui,'opacity','0',120,EO);
  if(RM){tw_(LB.img,'opacity','0',200,EO).then(done);return}
  lbHide(im);var c=lbFrom(im,LB.T);LB.img.style.opacity='1';tw_(LB.img,'clipPath',c.clip,380,EO);tw_(LB.img,'transform',c.tf,420,EO).then(done)}
function lbBump(d){if(RM)return;commit(LB.img);LB.img.animate([{transform:'none'},{transform:'translateX('+(-d*18)+'px)'},{transform:'none'}],{duration:380,easing:EO})}
function lbGo(n,fromDrag){if(!LB.open)return;if(n===LB.i){if(fromDrag){tw_(LB.img,'transform','none',420,SPR)}return}if(n<0||n>=LB.items.length){lbBump(n<LB.i?-1:1);if(fromDrag)tw_(LB.img,'transform','none',420,SPR);return}
  var d=n>LB.i?1:-1,seq=++LB.nseq,img=LB.img,b=LB.items[n],im=$('img',b);LB.i=n;lbMeta();lbHide(im);say(im.alt);
  commit(img);var cur0=img.style.transform==='none'||!img.style.transform?'translateX(0px)':img.style.transform;
  var out=RM?null:img.animate([{transform:cur0,opacity:1},{transform:'translateX('+(-d*56)+'px)',opacity:0}],{duration:150,easing:EO,fill:'forwards'});
  (out?out.finished:Promise.resolve()).then(function(){if(seq!==LB.nseq||!LB.open)return;img.src=im.currentSrc||im.src;img.alt=im.alt;lbPlace(lbFit(im.naturalWidth||1100,im.naturalHeight||619));
    img.getAnimations().forEach(function(a){a.cancel()});img._a={};img.style.transform='none';img.style.opacity='1';img.style.clipPath=LB_CLIP;
    if(!RM)img.animate([{transform:'translateX('+(d*56)+'px)',opacity:0},{transform:'none',opacity:1}],{duration:440,easing:SPR})},function(){})}
$$('[data-lb]').forEach(function(b){b.addEventListener('click',function(){lbOpen(b)})});
$('.x',LB.el).addEventListener('click',lbClose);LB.s.addEventListener('click',lbClose);
$('.lb-nav.prev',LB.el).addEventListener('click',function(){lbGo(LB.i-1)});$('.lb-nav.next',LB.el).addEventListener('click',function(){lbGo(LB.i+1)});
trap(LB.el);
addEventListener('resize',function(){if(!LB.open)return;var im=$('img',LB.items[LB.i]);lbPlace(lbFit(im.naturalWidth||1100,im.naturalHeight||619))});
(function(){var on=false,x0=0,y0=0,t0=0,ax=null,dx=0,dy=0;
  LB.img.addEventListener('pointerdown',function(e){if(!LB.open||RM||e.button>0)return;on=true;ax=null;dx=dy=0;x0=e.clientX;y0=e.clientY;t0=performance.now();commit(LB.img);LB.nseq++;LB.img.style.opacity='1';LB.img.classList.add('drag');try{LB.img.setPointerCapture(e.pointerId)}catch(_){}});
  LB.img.addEventListener('pointermove',function(e){if(!on)return;dx=e.clientX-x0;dy=e.clientY-y0;if(!ax&&Math.hypot(dx,dy)>6)ax=(Math.abs(dy)>Math.abs(dx)||LB.items.length<2)?'y':'x';
    if(ax==='y'){var k=Math.max(0,dy)/innerHeight;LB.img.style.transform='translate('+(dx*.35)+'px,'+(dy>0?dy:dy*.3)+'px) scale('+(1-Math.min(.22,k*.6))+')';LB.s.style.opacity=String(Math.max(.25,1-k*1.6));LB.ui.style.opacity=String(Math.max(0,1-k*4))}
    else if(ax==='x'){var edge=(LB.i===0&&dx>0)||(LB.i===LB.items.length-1&&dx<0);LB.img.style.transform='translateX('+(edge?dx*.3:dx)+'px)'}});
  function up(){if(!on)return;on=false;LB.img.classList.remove('drag');var dt=Math.max(1,performance.now()-t0);
    if(ax==='y'){if(dy>120||dy/dt>.6)lbClose();else{tw_(LB.img,'transform','none',440,SPR);tw_(LB.s,'opacity','1',240,EO);tw_(LB.ui,'opacity','1',240,EO)}}
    else if(ax==='x'){if(dx<-70||dx/dt<-.5)lbGo(LB.i+1,true);else if(dx>70||dx/dt>.5)lbGo(LB.i-1,true);else tw_(LB.img,'transform','none',440,SPR)}}
  LB.img.addEventListener('pointerup',up);LB.img.addEventListener('pointercancel',up)})();
$$('.vb[data-title]').forEach(function(b){b.addEventListener('click',function(){var t=$('#vlb .vlb-t');if(t)t.textContent=b.dataset.title},true)});
addEventListener('keydown',function(e){if(LB.open&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();lbGo(LB.i+(e.key==='ArrowRight'?1:-1));return}if(e.key==='Escape'&&LB.open)lbClose()});
})();

(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
(function(){var de=document.documentElement;function v(){de.style.setProperty('--vw',de.clientWidth+'px')}v();addEventListener('resize',v);if('ResizeObserver' in window)new ResizeObserver(v).observe(de)})();
function seen(el,fn,th){if(!('IntersectionObserver' in window)){fn();return}var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){o.disconnect();fn()}})},{threshold:th||.35});o.observe(el)}
function roll(el){var to=parseFloat(el.dataset.count),from=parseFloat(el.dataset.from||0),dp=(el.dataset.count.split('.')[1]||'').length,t0=0,Dd=1200;
  if(RM){el.textContent=el.dataset.count;return}
  function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/Dd),e=1-Math.pow(1-k,3);el.textContent=(from+(to-from)*e).toFixed(dp);if(k<1)requestAnimationFrame(f);else el.textContent=el.dataset.count}
  el.textContent=from.toFixed(dp);requestAnimationFrame(f)}
$$('[data-count]').forEach(function(el){seen(el,function(){setTimeout(function(){roll(el)},250)},.6)});
function seg(sg,onSet,start){var bs=$$('button',sg),ink=document.createElement('i'),cur=start||0;ink.className='sg-ink';ink.setAttribute('aria-hidden','true');sg.insertBefore(ink,sg.firstChild);
  function place(){var b=bs[cur];if(!b||!b.offsetWidth)return;ink.style.width=b.offsetWidth+'px';ink.style.transform='translateX('+b.offsetLeft+'px)'}
  function set(i,first){var d=i>cur?1:-1;cur=i;bs.forEach(function(b,k){b.setAttribute('aria-pressed',k===i);if(k===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});place();onSet(i,d,first)}
  bs.forEach(function(b,i){b.addEventListener('click',function(){if(i!==cur)set(i)});b.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();var n=(i+(e.key==='ArrowRight'?1:-1)+bs.length)%bs.length;bs[n].focus();set(n)}})});
  ink.style.transition='none';set(cur,true);requestAnimationFrame(function(){place();requestAnimationFrame(function(){ink.style.transition=''})});
  addEventListener('resize',place);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(place);if('ResizeObserver' in window)new ResizeObserver(place).observe(sg);
  return {set:function(i){if(i!==cur)set(i)}}}
var SY_TOP=96;
function scrolly(wrap,n,onStep){var inn=$('.sy-in',wrap),cur=-1,act=false,r=0,dots=null,top=SY_TOP;
  if(n>1){dots=document.createElement('div');dots.className='sy-p';dots.setAttribute('aria-hidden','true');for(var i=0;i<n;i++)dots.appendChild(document.createElement('i'));inn.appendChild(dots)}
  function ok(){return matchMedia('(min-width:861px)').matches&&inn.offsetHeight+SY_TOP+24<innerHeight}
  function lay(){act=ok();wrap.classList.toggle('on',act);top=act?Math.max(SY_TOP,Math.round((innerHeight-inn.offsetHeight)/2)):SY_TOP;inn.style.top=act?top+'px':'';wrap.style.height=act?Math.round(inn.offsetHeight+n*innerHeight*.55)+'px':'';upd()}
  function upd(){if(!act)return;var R=wrap.getBoundingClientRect(),span=wrap.offsetHeight-inn.offsetHeight,p=(top-R.top)/Math.max(1,span),i=Math.max(0,Math.min(n-1,Math.floor(p*n)));
    if(i!==cur){cur=i;if(dots)$$('i',dots).forEach(function(d,k){d.classList.toggle('on',k===i)});onStep(i)}}
  addEventListener('scroll',function(){if(!r)r=requestAnimationFrame(function(){r=0;upd()})},{passive:true});
  var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(lay,150)});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(lay);lay();
  return {active:function(){return act},go:function(i){var span=wrap.offsetHeight-inn.offsetHeight,y=wrap.getBoundingClientRect().top+scrollY-top+span*(i+.5)/n;scrollTo({top:y,behavior:RM?'auto':'smooth'})}}}
function fit(pin){var kp=$('.kp',pin);if(!kp)return;var k=pin.clientWidth/375;kp.style.setProperty('--k',k);pin._k=k}
var pins=$$('.pf-in');pins.forEach(fit);
if('ResizeObserver' in window){var ro=new ResizeObserver(function(es){es.forEach(function(e){fit(e.target)})});pins.forEach(function(p){ro.observe(p)})}else addEventListener('resize',function(){pins.forEach(fit)});
function rings(){$$('.kp').forEach(function(kp){$$('.hot',kp).forEach(function(h){h.remove()});var pin=kp.parentNode,k=pin._k||(pin.clientWidth/375)||1,R=kp.getBoundingClientRect(),bw=3/k,G=bw*2+4,L=[];
  $$('[data-hot]',kp).forEach(function(el){var r=el.getBoundingClientRect();if(!r.width)return;var pad=5;
    L.push({key:el.dataset.hot,x0:Math.max((r.left-R.left)/k-pad,bw+3),y0:Math.max((r.top-R.top)/k-pad,bw+3),x1:Math.min((r.right-R.left)/k+pad,372-bw),y1:Math.min((r.bottom-R.top)/k+pad,809-bw)})});
  for(var it=0;it<3;it++)for(var i=0;i<L.length;i++)for(var j=i+1;j<L.length;j++){var a=L[i],c=L[j],ox=Math.min(a.x1,c.x1)-Math.max(a.x0,c.x0)+G,oy=Math.min(a.y1,c.y1)-Math.max(a.y0,c.y0)+G;if(ox<=0||oy<=0)continue;
    if(oy<=ox){var t=a.y0+a.y1<c.y0+c.y1?a:c,u=t===a?c:a,m=(t.y1+u.y0)/2;t.y1=m-G/2;u.y0=m+G/2}
    else{var l=a.x0+a.x1<c.x0+c.x1?a:c,q=l===a?c:a,m2=(l.x1+q.x0)/2;l.x1=m2-G/2;q.x0=m2+G/2}}
  L.forEach(function(b){var h=document.createElement('i');h.className='hot';h.dataset.key=b.key;h.style.left=b.x0+'px';h.style.top=b.y0+'px';h.style.width=Math.max(10,b.x1-b.x0)+'px';h.style.height=Math.max(10,b.y1-b.y0)+'px';kp.appendChild(h)})})}
function showRings(scope,test,stagger){$$('.hot',scope).forEach(function(h,i){var on=test?test(h):true;clearTimeout(h._t);if(on&&stagger&&!RM)h._t=setTimeout(function(){h.classList.add('on')},i*stagger);else h.classList.toggle('on',on)})}
function relayout(){var st=$$('.hot.on').map(function(h){return h.parentNode.closest('.pf')});rings();st.forEach(function(pf){if(pf)$$('.hot',pf).forEach(function(h){h.classList.add('on')})})}
rings();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(relayout);var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(relayout,150)});
var f5=$('#flow5');
if(f5){var phs5=$$('.ph',f5);seen(f5,function(){showRings(f5,null,220)},.3);
  function pick(ph){var on=!ph.classList.contains('sel');phs5.forEach(function(p){p.classList.toggle('sel',on&&p===ph);p.setAttribute('aria-pressed',on&&p===ph)});f5.classList.toggle('pick',on);
    if(on)$$('.hot',ph).forEach(function(h){h.classList.remove('on');void h.offsetWidth;h.classList.add('on')})}
  phs5.forEach(function(ph){ph.addEventListener('click',function(){pick(ph)});ph.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick(ph)}})})}
var t6=$('#task6'),pk=$('#pk8 .sg'),pkd=$('#pk8d'),sy6=$('#sy6');
if(t6&&pk){var keys=['all','p1','p2','p3'],cur6='all',vis=false,quiet=false,S6=null;
  var DESC=['세 가지 원칙으로 나눈 문제가 과업 화면 어디에서 생겼는지 표시했다'].concat($$('.maps .mp-p').map(function(p){return p.textContent}));
  function apply(st){var all=cur6==='all';showRings(t6,function(h){return vis&&(all||h.dataset.key===cur6)},st);
    $$('.ph',t6).forEach(function(ph){ph.classList.toggle('has',all||!!$('[data-hot="'+cur6+'"]',ph))});t6.classList.toggle('dim',!all);
    if(pkd)pkd.textContent=DESC[keys.indexOf(cur6)]||'';
    if(!all&&t6.scrollWidth>t6.clientWidth+4){var ph=$('.ph.has',t6);if(ph)t6.scrollTo({left:Math.max(0,ph.offsetLeft-t6.offsetLeft-(t6.clientWidth-ph.offsetWidth)/2),behavior:RM?'auto':'smooth'})}}
  var ctl=seg(pk,function(i,d,first){cur6=keys[i];if(first){apply(0);return}
    if(!quiet&&S6&&S6.active()&&i>0){S6.go(i-1);return}
    showRings(t6,function(){return false});setTimeout(function(){apply(90)},120)});
  if(sy6)S6=scrolly(sy6,3,function(i){quiet=true;ctl.set(i+1);quiet=false;if(vis){showRings(t6,function(){return false});setTimeout(function(){apply(90)},120)}});
  seen(t6,function(){vis=true;apply(140)},.3)}
$$('.ab').forEach(function(ab){var its=$$('.ab-it',ab),scs=$$('.ab-sc',ab),up=$('.ab-up',ab),dn=$('.ab-dn',ab),cur=0,vis=false;
  function hot(){scs.forEach(function(s,k){showRings(s,function(){return vis&&k===cur},k===cur?160:0)})}
  function nav(){if(up)up.disabled=cur===0;if(dn)dn.disabled=cur===its.length-1}
  function grow(el,a){if(RM||!el.animate)return;var b=el.getBoundingClientRect();el.animate([{width:a.width+'px',height:a.height+'px'},{width:b.width+'px',height:b.height+'px'}],{duration:520,easing:'cubic-bezier(.16,1,.3,1)'})}
  function go(i,focus){if(i===cur||i<0||i>=its.length)return;var o=its[cur],nw=its[i],ra=o.getBoundingClientRect(),rb=nw.getBoundingClientRect();cur=i;
    its.forEach(function(it,k){var on=k===i;it.classList.toggle('on',on);$('.ab-b',it).setAttribute('aria-expanded',on)});grow(o,ra);grow(nw,rb);
    scs.forEach(function(s,k){var on=k===i;s.classList.toggle('on',on);if(on){s.removeAttribute('aria-hidden');s.inert=false}else{s.setAttribute('aria-hidden','true');s.inert=true}});
    showRings(ab,function(){return false});setTimeout(hot,RM?0:620);nav();if(focus)$('.ab-d',nw).focus({preventScroll:true})}
  its.forEach(function(it,k){$('.ab-b',it).addEventListener('click',function(){go(k,true)})});
  if(up)up.addEventListener('click',function(){go(cur-1)});if(dn)dn.addEventListener('click',function(){go(cur+1)});nav();
  seen(ab,function(){vis=true;hot()},.3)});
var cr=$('#crit');
if(cr){var cards=$$('.crit-c',cr);seg($('.sg',cr),function(i,d,first){if(first)return;cards.forEach(function(c,k){var rows=JSON.parse(c.dataset.c),r=rows[i];
    setTimeout(function(){c.classList.add('sw');setTimeout(function(){$('.q',c).textContent=r[0];var sp=$$('li span',c);sp[0].textContent=r[1];sp[1].textContent=r[2];sp[2].textContent=r[3];c.classList.remove('sw')},RM?0:200)},RM?0:k*50)})})}
$$('.hs').forEach(function(h){var sc=$('.hs-sc',h),its=$$('.hs-it',sc),pv=$('.pd.prev',h),nx=$('.pd.next',h),dots=$('.hs-dots',h);if(!sc||!its.length)return;
  var ds=[];if(dots){its.forEach(function(){var i=document.createElement('i');dots.appendChild(i);ds.push(i)})}
  function padL(){return parseFloat(getComputedStyle(sc).paddingLeft)||0}
  function idx(){var x=sc.scrollLeft,k=0,best=1e9;its.forEach(function(it,i){var d=Math.abs(it.offsetLeft-padL()-x);if(d<best){best=d;k=i}});return k}
  function upd(){var k=idx();its.forEach(function(it,i){it.classList.toggle('cur',i===k)});ds.forEach(function(d,i){d.classList.toggle('on',i===k)});
    if(pv)pv.disabled=sc.scrollLeft<4&&!anim;if(nx)nx.disabled=sc.scrollLeft>=sc.scrollWidth-sc.clientWidth-4&&!anim}
  var anim=0,vel=0;
  function spring(target){cancelAnimationFrame(anim);var max=sc.scrollWidth-sc.clientWidth;target=Math.max(0,Math.min(max,target));if(RM){sc.scrollLeft=target;upd();return}
    sc.classList.add('free');var x=sc.scrollLeft,v=vel,last=0;
    function step(t){var dt=last?Math.min(32,t-last)/1000:1/60;last=t;var a=-260*(x-target)-33*v;v+=a*dt;x+=v*dt;sc.scrollLeft=x;
      if(Math.abs(x-target)<.5&&Math.abs(v)<8){sc.scrollLeft=target;anim=0;vel=0;sc.classList.remove('free');upd();return}anim=requestAnimationFrame(step)}
    anim=requestAnimationFrame(step)}
  function to(k){k=Math.max(0,Math.min(its.length-1,k));vel=0;spring(its[k].offsetLeft-padL())}
  if(pv)pv.addEventListener('click',function(){to(idx()-1)});if(nx)nx.addEventListener('click',function(){to(idx()+1)});
  sc.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();to(idx()+1)}else if(e.key==='ArrowLeft'){e.preventDefault();to(idx()-1)}});
  var dn=null,moved=false;
  sc.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.button)return;cancelAnimationFrame(anim);anim=0;dn={x:e.clientX,s:sc.scrollLeft,t:performance.now(),px:e.clientX,pt:performance.now()};moved=false;vel=0});
  addEventListener('pointermove',function(e){if(!dn)return;var dx=e.clientX-dn.x;if(!moved&&Math.abs(dx)>5){moved=true;sc.classList.add('free','drag')}if(!moved)return;
    var now=performance.now();vel=-(e.clientX-dn.px)/Math.max(1,now-dn.pt)*1000;dn.px=e.clientX;dn.pt=now;sc.scrollLeft=dn.s-dx});
  addEventListener('pointerup',function(){if(!dn)return;var was=moved;dn=null;sc.classList.remove('drag');if(!was)return;
    var proj=sc.scrollLeft+vel*.18,k=0,best=1e9;its.forEach(function(it,i){var d=Math.abs(it.offsetLeft-padL()-proj);if(d<best){best=d;k=i}});vel=Math.max(-3000,Math.min(3000,vel));spring(its[k].offsetLeft-padL())});
  sc.addEventListener('click',function(e){if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
  var r=0;sc.addEventListener('scroll',function(){if(!r)r=requestAnimationFrame(function(){r=0;upd()})},{passive:true});addEventListener('resize',upd);upd()});
var LK=window.CASE_LINKS||[],lk=$('#lk');
if(lk){var svg=$('svg',lk),nodes={};$$('.lk-n',lk).forEach(function(n){nodes[n.dataset.id]=n});
  var NAME={};Object.keys(nodes).forEach(function(k){var b=$('b',nodes[k]);NAME[k]=k.charAt(0)==='i'?'':(b?b.textContent:'')});
  $$('.lk-n.mid',lk).forEach(function(n){var id=n.dataset.id,fr=LK.filter(function(e){return e[1]===id}).map(function(e){return NAME[e[0]]}),to2=LK.filter(function(e){return e[0]===id}).map(function(e){return NAME[e[1]]});
    var t=$('.lk-to',n);if(t)t.textContent='근거 '+fr.join(' · ')+'  →  목표 '+to2.join(' · ')});
  function draw(){svg.innerHTML='';if(getComputedStyle(svg).display==='none')return;var R=lk.getBoundingClientRect();
    LK.forEach(function(e){var a=nodes[e[0]].getBoundingClientRect(),b=nodes[e[1]].getBoundingClientRect(),x1=a.right-R.left,y1=a.top+a.height/2-R.top,x2=b.left-R.left,y2=b.top+b.height/2-R.top,mx=(x1+x2)/2;
      var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M'+x1+' '+y1+' C'+mx+' '+y1+' '+mx+' '+y2+' '+x2+' '+y2);p.dataset.a=e[0];p.dataset.b=e[1];svg.appendChild(p)})}
  function near(id){var s={};s[id]=1;var c=id.charAt(0);LK.forEach(function(e){if(e[0]===id||e[1]===id){s[e[0]]=1;s[e[1]]=1}});
    if(c!=='i')Object.keys(s).forEach(function(k){if(k.charAt(0)==='i')LK.forEach(function(e){if(e[0]===k||e[1]===k){if(e[0].charAt(0)!==c)s[e[0]]=1;if(e[1].charAt(0)!==c)s[e[1]]=1}})});return s}
  var on=null;function focus(id){on=id;lk.classList.toggle('focus',!!id);var s=id?near(id):{};
    Object.keys(nodes).forEach(function(k){nodes[k].classList.toggle('hot2',!!s[k]);nodes[k].setAttribute('aria-pressed',k===id)});
    $$('path',svg).forEach(function(p){p.classList.toggle('hot2',!!(s[p.dataset.a]&&s[p.dataset.b]))})}
  Object.keys(nodes).forEach(function(k){nodes[k].addEventListener('click',function(){focus(on===k?null:k)})});
  draw();addEventListener('resize',function(){draw();focus(on)});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){draw();focus(on)});
  if('ResizeObserver' in window)new ResizeObserver(function(){draw();if(on)focus(on)}).observe(lk);
  var sylk=$('#sylk');if(sylk)scrolly(sylk,4,function(i){focus('i'+(i+1))})}
var RD=window.CASE_RADAR,rd=$('#radar .rd');
if(rd&&RD&&RD.series&&RD.series.length){var sv=$('svg',rd),tg=$('.rd-tg',rd),rs=$('.rd-s',rd),rf=$('#radar .rd-f'),ax=RD.axes,n=ax.length,R0=118,mx=RD.max||5,NS='http://www.w3.org/2000/svg';
  function pt(i,v){var a=-Math.PI/2+i*2*Math.PI/n,r=R0*v/mx;return [Math.cos(a)*r,Math.sin(a)*r]}
  function el(t,at){var e=document.createElementNS(NS,t);for(var k in at)e.setAttribute(k,at[k]);return e}
  function pts(vs){return vs.map(function(v,i){return pt(i,v).join(',')}).join(' ')}
  [.2,.4,.6,.8,1].forEach(function(f){sv.appendChild(el('polygon',{class:'ax',points:ax.map(function(_,i){return pt(i,mx*f).join(',')}).join(' ')}))});
  ax.forEach(function(a,i){var p=pt(i,mx),q=pt(i,mx*1.16);sv.appendChild(el('line',{class:'ax',x1:0,y1:0,x2:p[0],y2:p[1]}));
    var t=el('text',{class:'lb2',x:q[0],y:q[1]+4,'text-anchor':Math.abs(q[0])<8?'middle':(q[0]>0?'start':'end')});t.textContent=a;sv.appendChild(t)});
  RD.series.forEach(function(s){sv.appendChild(el('polygon',{class:'sh',points:pts(s.values)}))});
  var ref=el('polygon',{class:'ref',points:pts(RD.series[0].values)});sv.appendChild(ref);
  var zero=ax.map(function(){return 0}),now=zero.slice(),act=el('polygon',{class:'act',points:pts(now)});sv.appendChild(act);
  var dts=ax.map(function(){var c=el('circle',{class:'dt',r:3.5,cx:0,cy:0});sv.appendChild(c);return c});
  var vts=ax.map(function(){var t=el('text',{class:'vt','text-anchor':'middle'});sv.appendChild(t);return t});
  function draw(vs,lab){act.setAttribute('points',pts(vs));vs.forEach(function(v,i){var p=pt(i,v),q=pt(i,v>=1.6?v-.78:v+.62);dts[i].setAttribute('cx',p[0]);dts[i].setAttribute('cy',p[1]);vts[i].setAttribute('x',q[0]);vts[i].setAttribute('y',q[1]+4);if(lab)vts[i].textContent=lab[i]})}
  var an=0;function morph(to){cancelAnimationFrame(an);var from=now.slice(),t0=0,D=RM?0:720;vts.forEach(function(t){t.style.opacity=0});
    function f(t){if(!t0)t0=t;var k=D?Math.min(1,(t-t0)/D):1,e=1-Math.pow(1-k,4);now=from.map(function(v,i){return v+(to[i]-v)*e});draw(now);
      if(k<1)an=requestAnimationFrame(f);else{draw(to,to.map(String));vts.forEach(function(t){t.style.transition='opacity 280ms';t.style.opacity=1})}}an=requestAnimationFrame(f)}
  function avg(vs){return vs.reduce(function(a,b){return a+b},0)/vs.length}
  var bs=[],sel=0;
  function pick(k){sel=k;bs.forEach(function(b,i){b.setAttribute('aria-pressed',i===k?'true':'false')});rd.classList.toggle('pick',k!==0);morph(RD.series[k].values);
    var a=avg(RD.series[k].values),a0=avg(RD.series[0].values);
    rs.innerHTML=k===0?'코레일톡 평균 <em>'+a0.toFixed(1)+'점</em> · 다섯 서비스 중 가장 낮음':RD.series[k].name+' 평균 <em>'+a.toFixed(1)+'점</em> · 코레일톡보다 '+(a-a0>=0?'+':'')+(a-a0).toFixed(1)+'점';
    if(rf){var hit=false;$$('[data-s]',rf).forEach(function(d){var on=+d.dataset.s===k;d.classList.toggle('on',on);if(on)hit=true});rf.classList.toggle('pick',hit)}}
  RD.series.forEach(function(s,k){var b=document.createElement('button');b.type='button';b.textContent=s.name;b.setAttribute('aria-pressed',k===0?'true':'false');tg.appendChild(b);bs.push(b);
    b.addEventListener('click',function(){touched=true;if(k!==sel||!shown)pick(k);shown=true})});
  var touched=false,shown=false;draw(zero);seen(rd,function(){if(!touched){pick(0);shown=true}},.35)}
var SD=window.CASE_SD||[],V=$('#sdv');
if(V&&SD.length){var pg=$('.sdv-pg',V),im=$('img',pg),rail=$('.sdv-rail',V),cnt=$('.cnt',V),ttl=$('h2',V),i0=0,from=null,open=false;
  SD.forEach(function(s,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',(k+1)+'쪽 '+s.title);var m=document.createElement('img');m.alt='';m.loading='lazy';m.src=s.src;b.appendChild(m);b.addEventListener('click',function(){go(k)});rail.appendChild(b)});
  var rb=$$('button',rail);
  function go(k,instant){k=Math.max(0,Math.min(SD.length-1,k));var same=k===i0&&im.getAttribute('src');i0=k;cnt.textContent=(k+1)+' / '+SD.length;ttl.textContent='화면설계서 · '+SD[k].title;
    rb.forEach(function(b,j){if(j===k)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});
    var b=rb[k];rail.scrollTo({left:b.offsetLeft-(rail.clientWidth-b.offsetWidth)/2,behavior:instant||RM?'auto':'smooth'});
    $('.pd.prev',V).disabled=k===0;$('.pd.next',V).disabled=k===SD.length-1;
    if(same)return;if(instant||RM){im.src=SD[k].src;im.alt=SD[k].title;return}
    pg.classList.add('sw');setTimeout(function(){im.src=SD[k].src;im.alt=SD[k].title;pg.classList.remove('sw')},150)}
  function show(k){from=document.activeElement;V.hidden=false;open=true;window.__lock&&window.__lock(true);go(k||0,true);requestAnimationFrame(function(){V.classList.add('on')});$('.sdv-x',V).focus({preventScroll:true})}
  function hide(){if(!open)return;open=false;V.classList.remove('on');window.__lock&&window.__lock(false);setTimeout(function(){if(!open)V.hidden=true},280);if(from&&from.focus)from.focus({preventScroll:true})}
  $$('[data-sd]').forEach(function(b){b.addEventListener('click',function(){show(+b.dataset.sd||0)})});
  $('.sdv-x',V).addEventListener('click',hide);$('.pd.prev',V).addEventListener('click',function(){go(i0-1)});$('.pd.next',V).addEventListener('click',function(){go(i0+1)});
  addEventListener('keydown',function(e){if(!open)return;if(e.key==='Escape'){e.stopImmediatePropagation();hide()}else if(e.key==='ArrowRight'){e.preventDefault();go(i0+1)}else if(e.key==='ArrowLeft'){e.preventDefault();go(i0-1)}},true);
  if(window.__trap)window.__trap(V);
  (function(){var x0=0,y0=0,on2=false;pg.addEventListener('pointerdown',function(e){on2=true;x0=e.clientX;y0=e.clientY});
    pg.addEventListener('pointerup',function(e){if(!on2)return;on2=false;var dx=e.clientX-x0,dy=e.clientY-y0;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))go(i0+(dx<0?1:-1));else if(dy>90)hide()});
    pg.addEventListener('pointercancel',function(){on2=false})})()}
})();

(function(){
  var q=function(sel,root){return [].slice.call((root||document).querySelectorAll(sel))};

  /* ── 점·선 네트워크 ── */
  q('[data-net] svg').forEach(function(svg){
    var W=1200,H=525,N=113,seed=20261122;
    function rnd(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296}
    var pts=[],i,j;
    for(i=0;i<N;i++)pts.push({x:rnd()*W,y:rnd()*H,r:1.6+rnd()*3.4});
    var ns='http://www.w3.org/2000/svg';
    var gl=document.createElementNS(ns,"g"),gd=document.createElementNS(ns,"g");
    /* 가까운 점끼리만 잇는다 — 당겨지는 관계만 보이게 */
    for(i=0;i<N;i++)for(j=i+1;j<N;j++){
      var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d>138)continue;
      var ln=document.createElementNS(ns,"line");ln.setAttribute("class","ln");
      ln.setAttribute("x1",pts[i].x.toFixed(1));ln.setAttribute("y1",pts[i].y.toFixed(1));
      ln.setAttribute("x2",pts[j].x.toFixed(1));ln.setAttribute("y2",pts[j].y.toFixed(1));
      gl.appendChild(ln)}
    for(i=0;i<N;i++){
      var c=document.createElementNS(ns,"circle");
      c.setAttribute("class",i%9===0?"dt on":"dt");
      c.setAttribute("cx",pts[i].x.toFixed(1));c.setAttribute("cy",pts[i].y.toFixed(1));
      c.setAttribute("r",pts[i].r.toFixed(1));c.style.setProperty("--i",i%26);
      gd.appendChild(c)}
    svg.appendChild(gl);svg.appendChild(gd)});

  /* ── 짝지어 올리기 (포지셔닝 맵 · 전시 도면) ── */
  function pair(rootSel,aSel,aKey,bSel,bKey){
    q(rootSel).forEach(function(root){
      var A=q(aSel,root),B=q(bSel,root);
      function mark(k){
        A.forEach(function(e){e.classList.toggle("on",!!k&&e.dataset[aKey]===k)});
        B.forEach(function(e){e.classList.toggle("on",!!k&&e.dataset[bKey]===k)})}
      A.forEach(function(e){
        ["mouseenter","focus"].forEach(function(t){e.addEventListener(t,function(){mark(e.dataset[aKey])})});
        ["mouseleave","blur"].forEach(function(t){e.addEventListener(t,function(){mark(null)})});
        e.addEventListener("click",function(){mark(e.classList.contains("on")?null:e.dataset[aKey])})})})}
  pair("[data-pmap]",".pm-b","pm","[data-pmb]","pmb");
  pair("[data-plan]",".plan-c","pc",".plan-p","pin");
})();

}catch(err){
  /* 어딘가 멈췄다 — 숨겨 둔 글을 전부 드러내고 조용히 끝낸다 */
  var de=document.documentElement;
  de.classList.remove('rv-js'); de.classList.remove('js-motion');
  [].slice.call(document.querySelectorAll('.kc .rv')).forEach(function(el){el.classList.add('in','done')});
  if(window.console&&console.warn)console.warn('[case] 멈춤:',err);
}
})();
