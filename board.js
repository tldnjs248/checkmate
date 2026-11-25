/* ══════════════════════════════════════════════════════════════════════
   MY BOARD — 판 움직이기 · 미니 판 그리기 (2026-11-24)

   이 파일이 죽어도 페이지는 그대로 쓸 수 있다.
     · 판은 overflow:auto 라 손가락 · 휠 · 방향키로 움직인다
     · 색이 차오르는 것은 전부 CSS (:hover · :focus-within)
   여기서 더해 주는 것은 네 가지다.
     1 미니 판 — 그 말이 갈 수 있는 칸
     2 끌어서 움직이기 · 말로 바로 가기 · 지금 보는 자리
     3 마우스 탐색 — 가장자리로 가면 판이 그쪽으로 흐른다
     4 손가락만 쓰는 기기에서 눌러 색 채우기
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var view = document.getElementById('bd-view');
  var canvas = document.getElementById('bd-canvas');
  if (!view || !canvas) return;

  var CW = 2880, CH = 1800;               /* 판 크기 — board.css 와 같은 값 */
  var pieces = [].slice.call(canvas.querySelectorAll('.bd-piece'));

  /* ── 1 · 미니 판 ────────────────────────────────────────────────
     2026-11-25 사용자 지정 — 판을 8×8 에서 5×5 로 줄이고 말을 한가운데 세운다.
     십자(ROOK) · ㄱ자(KNIGHT) · 대각선(BISHOP) 이 모두 다섯 칸 안에 꼭 들어차서,
     96px 자리를 그대로 둔 채 칸만 12px → 18.8px 로 커진다.
     d 는 차는 차례다 — 가까운 칸부터 켜진다. */
  var N = 5, AT = { c: 2, r: 2 };
  /* 말 그림은 board.html 맨 위 숨은 묶음(<symbol id="pc-…">)에서 가져다 쓴다.
     글꼴 기호(♜ ♞ ♝)는 기기마다 굵기 · 밑선이 달라 칸 안에서 제각각 어긋났다.
     직접 그린 그림이라 세 말이 같은 꼭대기 · 같은 받침에 선다 (2026-11-25 사용자 지정). */
  function pcIcon(kind) {
    return '<svg class="bd-pc" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
           '<use href="#pc-' + kind + '"></use></svg>';
  }

  function movesOf(kind) {
    var out = {}, i, c, r;
    function put(c, r, d) {
      if (c < 0 || c > N - 1 || r < 0 || r > N - 1) return;
      var k = c + ',' + r;
      if (out[k] === undefined || out[k] > d) out[k] = d;
    }
    if (kind === 'rook') {
      for (i = 1; i < N; i++) {
        put(AT.c + i, AT.r, i); put(AT.c - i, AT.r, i);
        put(AT.c, AT.r + i, i); put(AT.c, AT.r - i, i);
      }
    } else if (kind === 'bishop') {
      for (i = 1; i < N; i++) {
        put(AT.c + i, AT.r + i, i); put(AT.c - i, AT.r - i, i);
        put(AT.c + i, AT.r - i, i); put(AT.c - i, AT.r + i, i);
      }
    } else {                                   /* knight — 여덟 칸을 시계 방향으로 */
      var L = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]];
      for (i = 0; i < L.length; i++) put(AT.c + L[i][0], AT.r + L[i][1], i + 1);
    }
    return out;
  }

  [].slice.call(document.querySelectorAll('.bd-mini')).forEach(function (mini) {
    var kind = mini.getAttribute('data-piece');
    var mv = movesOf(kind), r, c, cell, key;
    for (r = 0; r < N; r++) {
      for (c = 0; c < N; c++) {
        cell = document.createElement('i');
        if ((r + c) % 2) cell.className = 'dk';
        key = c + ',' + r;
        if (c === AT.c && r === AT.r) {
          cell.className = 'pc';
          cell.innerHTML = pcIcon(kind);
        } else if (mv[key] !== undefined) {
          cell.className += (cell.className ? ' ' : '') + 'mv';
          cell.style.setProperty('--d', mv[key]);
        }
        mini.appendChild(cell);
      }
    }
  });

  /* 좁은 화면에서는 판을 세로로 펴기 때문에 아래 기능이 모두 뜻을 잃는다 */
  function isCanvas() {
    return view.scrollWidth - view.clientWidth > 4;
  }

  /* 말 하나하나의 offset 값은 줄이기 전(2880×1800) 자리다.
     스크롤 값은 줄인 뒤 자리라서, 둘을 섞어 쓸 때는 늘 k 를 곱해 준다. */
  var k = 1;
  function readK() {
    var v = parseFloat(getComputedStyle(view).getPropertyValue('--k'));
    k = v > 0 ? v : 1;
  }
  readK();

  /* 판 높이 — 머리말이 차지한 높이를 실제로 재서 창 바닥에 딱 붙인다.
     css 의 calc() 는 머리말 길이를 모르니 늘 조금 모자라거나 넘친다.
     아래를 비워 두지 않는다 — 머리말 아래는 전부 판이다 (2026-11-25 사용자 지정). */
  function fitHeight() {
    if (window.innerWidth <= 900) { view.style.height = ''; return; }
    var y = 0, el = view;
    while (el) { y += el.offsetTop; el = el.offsetParent; }
    view.style.height = Math.max(440, window.innerHeight - y) + 'px';
  }
  fitHeight();

  /* 움직임을 줄여 달라고 한 사람에게는 따라 흐르는 것도, 부드러운 이동도 끈다 */
  var slow = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 2 · 끌어서 움직이기 ───────────────────────────────────────
     손가락은 브라우저가 이미 잘 굴려 주니 쥐 · 펜만 받는다. */
  var drag = null;
  view.addEventListener('pointerdown', function (e) {
    if (e.button !== 0 || e.pointerType === 'touch' || !isCanvas()) return;
    if (e.target.closest('a,button')) return;
    drag = { x: e.clientX, y: e.clientY, sl: view.scrollLeft, st: view.scrollTop, id: e.pointerId, on: false };
  });
  view.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.on) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;   /* 누르기와 끌기를 가른다 */
      drag.on = true;
      view.classList.add('is-drag');
      try { view.setPointerCapture(drag.id); } catch (err) {}
    }
    view.scrollLeft = drag.sl - dx;
    view.scrollTop = drag.st - dy;
    e.preventDefault();
  });
  function endDrag(e) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.on) {
      view.classList.remove('is-drag');
      try { view.releasePointerCapture(drag.id); } catch (err) {}
    }
    drag = null;
  }
  view.addEventListener('pointerup', endDrag);
  view.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur', endDrag);

  /* ── 3 · 마우스 탐색 ───────────────────────────────────────────────
     끌지 않아도 둘러볼 수 있게 한다. 판 안에서 마우스가 가운데를 벗어나면
     그쪽으로 판이 흐르고, 가장자리에 가까울수록 빨라진다.

     가운데 띠에서는 멈춘다. 사진을 느긋하게 올려 보는 자리다.
     (칸 위에서도 멈추게 해 봤지만, 가장자리에서는 칸이 쉴 새 없이 흘러들어
      판이 몇 걸음마다 걸렸다. 가장자리로 간 사람은 둘러보려는 것이니
      멈추지 않고 흐르게 두고, 멈추고 싶으면 가운데로 끌고 오면 된다.) */
  var DEAD = .38;        /* 가운데 38% 는 멈춤 띠 */
  var SPEED = 950;       /* 가장자리에서 초당 950px */
  /* sl · st 는 우리가 들고 있는 소수점 자리다. scrollLeft 에 0.3px 을 더하고
     다시 읽으면 0 으로 깎여 돌아와, 느린 속도가 영영 쌓이지 못한다. */
  var pan = { vx: 0, vy: 0, raf: 0, last: 0, cx: -1, cy: -1, sl: 0, st: 0 };

  /* 가장자리로 갈수록 가파르게 — 멈춤 띠를 막 벗어난 자리에서는 거의 기어간다 */
  function curve(n) {
    var a = Math.abs(n);
    if (a <= DEAD) return 0;
    var t = (a - DEAD) / (1 - DEAD);
    if (t > 1) t = 1;
    return n < 0 ? -t * t : t * t;
  }

  /* 지금 자리에서 판이 흘러야 하는가 — 흐른다면 속도만 정한다 (장면 사슬은 건드리지 않는다) */
  function aim() {
    pan.vx = pan.vy = 0;
    if (slow || !isCanvas() || drag || pan.cx < 0) return;
    var r = view.getBoundingClientRect();
    if (pan.cx < r.left || pan.cx > r.right || pan.cy < r.top || pan.cy > r.bottom) return;
    pan.vx = curve((pan.cx - r.left) / r.width * 2 - 1) * SPEED;
    pan.vy = curve((pan.cy - r.top) / r.height * 2 - 1) * SPEED;
  }

  /* 흐를 일이 생겼는데 사슬이 끊겨 있으면 다시 잇는다 */
  function kick() {
    if ((pan.vx || pan.vy) && !pan.raf) {
      pan.last = 0; pan.sl = view.scrollLeft; pan.st = view.scrollTop;
      pan.raf = requestAnimationFrame(stepPan);
    }
  }
  function stopPan() {
    if (pan.raf) cancelAnimationFrame(pan.raf);
    pan.raf = 0; pan.last = 0; pan.vx = pan.vy = 0;
  }
  function stepPan(now) {
    pan.raf = 0;
    /* 첫 장면은 걸린 시간을 모른다 — 움직이지 않고 시계만 맞춘다 */
    var dt = pan.last ? Math.min(.05, (now - pan.last) / 1000) : 0;
    pan.last = now;
    if (dt) {
      /* 휠 · 방향키로 그 사이에 자리가 바뀌었으면 그쪽을 따른다 */
      if (Math.abs(view.scrollLeft - pan.sl) > 1.5) pan.sl = view.scrollLeft;
      if (Math.abs(view.scrollTop - pan.st) > 1.5) pan.st = view.scrollTop;
      pan.sl = Math.max(0, Math.min(view.scrollWidth - view.clientWidth, pan.sl + pan.vx * dt));
      pan.st = Math.max(0, Math.min(view.scrollHeight - view.clientHeight, pan.st + pan.vy * dt));
      view.scrollLeft = pan.sl;
      view.scrollTop = pan.st;
    }
    aim();
    if (pan.vx || pan.vy) pan.raf = requestAnimationFrame(stepPan);
    else pan.last = 0;
  }

  view.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') { pan.cx = -1; stopPan(); return; }
    pan.cx = e.clientX; pan.cy = e.clientY;
    aim(); kick();
  });
  view.addEventListener('pointerleave', function () { pan.cx = -1; stopPan(); });
  /* 누르는 동안에는 쉰다 — 끌기 · 단추 누르기와 겹치지 않게 */
  view.addEventListener('pointerdown', stopPan);
  window.addEventListener('blur', function () { pan.cx = -1; stopPan(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stopPan(); });

  /* ── 말로 바로 가기 ────────────────────────────────────────────── */
  function goTo(el, smooth) {
    if (!isCanvas()) { el.scrollIntoView({ block: 'start', behavior: smooth && !slow ? 'smooth' : 'auto' }); return; }
    var w = el.offsetWidth * k, h = el.offsetHeight * k;
    var left = el.offsetLeft * k - (view.clientWidth - w) / 2;
    var top = h > view.clientHeight - 48
      ? el.offsetTop * k - 24                              /* 머리말이 잘리지 않게 위를 맞춘다 */
      : el.offsetTop * k - (view.clientHeight - h) / 2;
    view.scrollTo({ left: left, top: top, behavior: smooth && !slow ? 'smooth' : 'auto' });
  }

  var jumps = [].slice.call(document.querySelectorAll('.bd-jump button'));
  jumps.forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.getAttribute('data-go'));
      if (!el) return;
      goTo(el, true);
      /* 눌러서 간 말은 색을 채워 둔다 — 쥐가 없어도 단추만으로 다 볼 수 있다 */
      pieces.forEach(function (p) { p.classList.toggle('is-on', p === el); });
    });
  });
  /* 판을 손으로 움직이면 채워 둔 색은 거둔다 (쥐로는 올려 보는 것이 기본이다).
     손가락 기기는 눌러서 켜고 끄는 쪽이라 건드리지 않는다. */
  view.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'touch') return;
    pieces.forEach(function (p) { p.classList.remove('is-on'); });
  });

  /* ── 지금 보는 자리 ────────────────────────────────────────────── */
  var map = document.getElementById('bd-map'), box = null, K = 0;
  if (map) {
    K = 180 / CW;
    map.style.height = Math.round(CH * K) + 'px';
    /* 작은 판에도 말이 가는 모양 그대로 그린다 (2026-11-25 사용자 지정).
       말 묶음을 네모 하나로 치면 넷 다 똑같은 덩어리가 된다. 칸을 하나씩 찍으면
       십자(ROOK) · ㄱ자(KNIGHT) · 대각선(BISHOP)이 작은 판에서도 바로 읽힌다. */
    function at(el) {                            /* 판 맨 위 왼쪽을 기준으로 한 자리 */
      var x = 0, y = 0, p = el;
      while (p && p !== canvas) { x += p.offsetLeft; y += p.offsetTop; p = p.offsetParent; }
      return { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight };
    }
    function put(el, cls) {
      var r = at(el), d = document.createElement('span');
      d.className = 'bd-map__p' + (cls ? ' ' + cls : '');
      d.style.left = (r.x * K) + 'px';
      d.style.top = (r.y * K) + 'px';
      d.style.width = Math.max(2, r.w * K) + 'px';
      d.style.height = Math.max(2, r.h * K) + 'px';
      map.appendChild(d);
    }
    /* 칸 자리는 글꼴이 앉은 뒤에야 제자리를 잡고, 세로로 편 판(≤900px)에서는
       아예 다른 자리가 나온다. 그래서 한 번 그리고 마는 대신 다시 그릴 수 있게 둔다. */
    function drawMap() {
      map.textContent = '';
      pieces.forEach(function (p) {
        [].slice.call(p.querySelectorAll('.bd-t')).forEach(function (t) { put(t); });
        var c = p.querySelector('.bd-card');
        if (c) put(c, 'is-pc');                  /* 말이 선 칸 — 하나만 진하게 */
      });
      box = document.createElement('span');
      box.className = 'bd-map__v';
      map.appendChild(box);
    }
    drawMap();
    map.__draw = drawMap;
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { drawMap(); paint(); });

    map.addEventListener('click', function (e) {
      if (!isCanvas()) return;
      var r = map.getBoundingClientRect(), s = K / k;   /* 스크롤 자리 → 작은 판 자리 */
      view.scrollTo({
        left: (e.clientX - r.left) / s - view.clientWidth / 2,
        top: (e.clientY - r.top) / s - view.clientHeight / 2,
        behavior: slow ? 'auto' : 'smooth'
      });
    });
  }

  function paint() {
    if (box) {
      var s = K / k;
      box.style.left = (view.scrollLeft * s) + 'px';
      box.style.top = (view.scrollTop * s) + 'px';
      box.style.width = Math.min(view.clientWidth, CW * k) * s + 'px';
      box.style.height = Math.min(view.clientHeight, CH * k) * s + 'px';
    }
    /* 지금 한가운데에 가장 가까운 말을 조작 줄에서도 짚어 준다 */
    var cx = view.scrollLeft + view.clientWidth / 2, cy = view.scrollTop + view.clientHeight / 2;
    var best = null, bd = Infinity;
    pieces.forEach(function (p) {
      var dx = (p.offsetLeft + p.offsetWidth / 2) * k - cx;
      var dy = (p.offsetTop + p.offsetHeight / 2) * k - cy;
      var d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = p.id; }
    });
    jumps.forEach(function (b) {
      b.classList.toggle('is-near', b.getAttribute('data-go') === best);
    });
  }

  var tick = 0;
  view.addEventListener('scroll', function () {
    if (tick) return;
    tick = requestAnimationFrame(function () { tick = 0; paint(); });
  }, { passive: true });
  window.addEventListener('resize', function () {
    readK(); fitHeight();
    if (map && map.__draw) map.__draw();        /* 칸 자리가 창 폭을 타므로 다시 그린다 */
    paint();
  });

  /* ── 4 · 손가락만 쓰는 기기 — 눌러서 색 채우기 ────────────────────
     쥐로 올리는 것과 똑같이 칸 하나씩 채운다. */
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
    /* 안내 글도 손가락 말로 바꾼다 — '올리기 · 가장자리' 는 쥐가 있어야 되는 말이다 */
    var hl = document.querySelector('.bd-howto ul');
    if (hl) hl.innerHTML = '<li><b>누르기</b><span>사진을 누르면 그 칸에 색이 찹니다</span></li>' +
                           '<li><b>쓸기</b><span>판을 쓸어서 둘러봅니다</span></li>';
    var tiles = [].slice.call(canvas.querySelectorAll('.bd-t'));
    tiles.forEach(function (t) {
      t.addEventListener('click', function () {
        var on = t.classList.contains('is-on');
        tiles.forEach(function (q) { q.classList.remove('is-on'); });
        if (!on) t.classList.add('is-on');
      });
    });
  }

  /* ── 처음 자리 — 쪽 제목을 가운데 놓고 연다 (2026-11-25 사용자 지정) ───
     제목에서 시작해 사방으로 둘러보는 짜임이다. 제목이 없으면 첫 말로 간다. */
  var title = canvas.querySelector('.bd-title');
  if (isCanvas() && title) goTo(title, false);     /* 세로로 편 판은 맨 위가 곧 제목이라 그대로 둔다 */
  paint();
})();
