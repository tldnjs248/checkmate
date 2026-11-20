# 상세 페이지 부품 목록

코레일톡 상세 페이지(`case-korail.js`)가 쓰는 블록을 전부 뽑아 둔 것이다.
생김새는 `case.css`(705개 규칙)가 이미 정해 두었으므로, **아래 클래스를 그대로 쓰면
코레일톡과 똑같은 모양이 나온다.** 새 클래스를 만들지 말고 여기 있는 것만 쓴다.

- 모든 마크업은 `.kc` 안에 들어간다 (상세 페이지가 알아서 감싼다)
- 글자 크기 · 색 · 여백을 `style=` 로 적지 않는다. 클래스가 이미 정해 두었다
- `style=` 를 쓰는 곳은 아래에 적힌 네 가지 변수뿐이다
  `--k`(나타나는 차례) · `--w`(막대 길이) · `--h`(세로 막대 높이) · `--i`/`--n`(경로 칸)

---

## 0. 나타나기 — `rv`

화면에 들어올 때 떠오르게 하려면 블록에 `rv` 를 붙인다.
같은 줄에 여러 개가 있으면 `style="--k:1"`, `--k:2` … 로 차례를 준다 (0은 생략).

```html
<div class="tile rv">…</div>
<div class="tile rv" style="--k:1">…</div>
<div class="tile rv" style="--k:2">…</div>
```

긴 표나 그림 하나에는 `rv` 를 붙이지 않는다 — 하나씩 떠오르는 게 의미 있을 때만 쓴다.

---

## 1. 절 — `st`

한 절 = `<section class="st" id="sN">`. id 는 `s1` 부터 차례대로. 목차가 이 id 를 쓴다.

```html
<section class="st" id="s2" data-lbg>
  <header class="st-h">
    <p class="st-no">02</p>
    <h2 class="st-n">문제 정의</h2>
    <div class="st-m"><span>데스크리서치</span><span>필드리서치</span><span>FGI</span></div>
  </header>
  <div class="bk2"> … 블록 1 … </div>
  <div class="bk2"> … 블록 2 … </div>
</section>
```

- `st-m` 은 **그 절에서 실제로 쓴 방법**만. 안 쓴 절에서는 `st-m` 을 통째로 뺀다
- `data-lbg` 는 그 절 안의 그림을 한 묶음으로 묶어 크게 보기에서 좌우로 넘기게 한다. 항상 붙인다
- 절은 4~7개. 3개면 빈약하고 8개면 길다

## 2. 블록 — `bk2`

절 안의 한 덩어리. 꼬리표 → 제목 → 본문 → 내용 순서가 고정이다.

```html
<div class="bk2">
  <p class="ey rv">문제 검증 및 도출</p>
  <h3 class="bh rv">1차 사용성 평가 결과</h3>
  <p class="bl rv">본문 한두 문단. 강조는 <b>굵게</b>로만 한다.</p>
  … 아래 부품 중 하나 …
</div>
```

- `ey` 꼬리표(작은 글) · `bh` 제목 · `bl` 본문. 셋 다 선택이지만 `bh` 는 거의 항상 쓴다
- `bl` 은 2문단까지. 그보다 길면 타일이나 목록으로 쪼갠다

### 블록 안 소제목 — `sub`

한 블록 안에서 또 나눠야 할 때만.

```html
<div class="sub rv">과업 화면에서 찾은 문제</div>
```

---

## 3. 타일 격자 — `box tiles t2/t3/t4`

가장 많이 쓰는 부품. 숫자는 한 줄에 몇 칸인지다.

```html
<div class="box tiles t4">
  <div class="tile rv"><p class="tile-k">프로젝트 배경</p><p class="tile-n">KTX 승차권 구매의 90% 이상이 온라인</p></div>
  <div class="tile rv" style="--k:1"><p class="tile-k">프로젝트 목표</p><p class="tile-n">탐색 혼란 개선</p></div>
  <div class="tile rv" style="--k:2"><p class="tile-k">사용자</p><p class="tile-n">20대 대학생 · 직장인</p><p class="tile-t">부 사용자 50대 가족 단위</p></div>
  <div class="tile rv" style="--k:3"><p class="tile-k">매체</p><p class="tile-n">모바일 앱</p></div>
</div>
```

한 타일 안에 쓸 수 있는 것

| | 쓰임 | 글자 |
|---|---|---|
| `tile-k` | 작은 라벨 (맨 위) | 12 · 회색 |
| `tile-n` | 굵은 한 줄 (핵심) | 16 · 굵게 |
| `tile-t` | 설명 한두 줄 | 14 |
| `tile-b` | 아래쪽 보조 줄 | 14 · 회색 |

- 타일은 한 격자에 최대 6칸. 그보다 많으면 두 격자로 나눈다
- `t2`(2칸) · `t3`(3칸) · `t4`(4칸)만 있다

---

## 4. 지표 카드 — `res`

페이지 맨 위, 제목 바로 아래에 두는 큰 수치. **2개 고정**이다.

```html
<div class="res rv">
  <div><p class="res-k">예약내역 확인 평균 수행 시간</p>
    <p class="res-v"><span data-count="6.4" data-from="24.5">6.4</span>초</p>
    <div class="res-b" aria-hidden="true"><i style="--w:26.1%"></i></div>
    <p class="res-s">24.5초 → 6.4초 · <em>18.1초 감소</em></p></div>
  <div><p class="res-k">전체 평균 성공 비율</p>
    <p class="res-v"><span data-count="85">85</span>%</p>
    <div class="res-b" aria-hidden="true"><i style="--w:85%"></i></div>
    <p class="res-s">2차 사용성 평가</p></div>
</div>
```

- `data-count` 끝값 · `data-from` 시작값(없으면 0부터 센다). 화면에 들어오면 숫자가 올라간다
- `--w` 는 막대가 차는 비율. 좋아진 정도를 눈으로 보여 주는 값이라 대략이어도 된다
- **검증된 수치만 쓴다.** 원자료에 없으면 이 부품을 통째로 뺀다

## 5. 해결법 세 칸 — `af`

지표 카드 바로 위. **3칸 고정**이다.

```html
<div class="af">
  <div class="tile rv"><p class="tile-k">우리의 해결법 1</p><p class="tile-n">기능 통합</p><p class="tile-t">예약 조회 · 취소 · 장바구니를 ‘나의 티켓’으로</p></div>
  <div class="tile rv" style="--k:1"><p class="tile-k">우리의 해결법 2</p><p class="tile-n">명칭 정렬</p><p class="tile-t">사용자 과업 기준으로 메뉴명 · 위치 재구성</p></div>
  <div class="tile rv" style="--k:2"><p class="tile-k">우리의 해결법 3</p><p class="tile-n">흐름 단순화</p><p class="tile-t">예약 확인부터 관리까지 단일 경로로</p></div>
</div>
```

`af` 와 `res` 는 `<header class="hd"> … </header>` 안에 넣는다. 그게 페이지 머리다.

---

## 6. 가로 장표 갤러리 — `hs`

장표를 넘겨 보는 띠. 누르면 전체 화면으로 커진다.

```html
<div class="hs" data-lbg><div class="hs-sc" tabindex="0" aria-label="장표 넘겨 보기">
  <button class="hs-it" type="button" data-lb>
    <span class="hs-im"><img src="images/lotte-cinema/ut1_01.webp" alt="Task Time" loading="lazy" decoding="async" draggable="false"></span>
    <span class="hs-c"><b>01</b><span>Task Time</span></span>
  </button>
  <button class="hs-it" type="button" data-lb>
    <span class="hs-im"><img src="images/lotte-cinema/ut1_02.webp" alt="성공률" loading="lazy" decoding="async" draggable="false"></span>
    <span class="hs-c"><b>02</b><span>성공률</span></span>
  </button>
  …
</div>
<div class="hs-ctl"><div class="hs-dots"></div>
  <button class="pd prev press" type="button" aria-label="이전"><svg class="i"><use href="#i-left"/></svg></button>
  <button class="pd next press" type="button" aria-label="다음"><svg class="i"><use href="#i-right"/></svg></button>
</div></div>
```

- 한 묶음에 **5~15장**. 한 절에 갤러리는 **하나만**
- `alt` 와 `hs-c` 안의 이름은 **같은 글**로 쓴다. 크게 보기에서 그 글이 설명으로 뜬다
- `<b>` 안의 번호는 01 부터 두 자리
- `hs-dots` 는 비워 둔다 — 자바스크립트가 장 수만큼 점을 만든다
- 그림은 `images/<프로젝트 id>/` 아래. webp 권장, 긴 변 2880px 이하

---

## 7. 막대 그래프 — `bars`

세로 막대. 연도별 수치처럼 몇 개 안 되는 값에 쓴다.

```html
<div class="bars" aria-label="KTX 이용객 7만 2천, 19만, 22만, 24만 6천">
  <div class="bar" style="--h:29"><b>7만 2천</b><i></i></div>
  <div class="bar" style="--h:77;--j:1"><b>19만</b><i></i></div>
  <div class="bar" style="--h:89;--j:2"><b>22만</b><i></i></div>
  <div class="bar" style="--h:100;--j:3"><b>24만 6천</b><i></i></div>
</div>
<p class="src">숫자로 보는 KTX 개통 21주년, 한국철도공사 (단위:명)</p>
```

- `--h` 는 가장 큰 값을 100으로 둔 비율. `--j` 는 차례(0은 생략)
- 막대는 3~6개. 그 이상은 표로 간다
- `src` 는 출처. 수치를 쓰면 **반드시** 붙인다

## 8. 도넛 — `donut`

비율 하나를 크게 보여 줄 때.

```html
<div class="dn-row">
  <div class="donut" style="--len:354.7">
    <svg viewBox="0 0 160 160"><circle class="tr" cx="80" cy="80" r="64"/><circle class="vl" cx="80" cy="80" r="64"/></svg>
    <b>88.2%</b>
  </div>
  <p class="lgd"><span>온라인 예매</span><span>역창구</span><span>기타</span></p>
</div>
<p class="src">숫자로 보는 KTX 개통 19주년, 한국철도공사</p>
```

- `--len` = 402.1 × 비율. 88.2% 면 `402.1 × 0.882 = 354.7`
- 도넛 넷을 나란히 둘 때는 바깥을 `<div class="box tiles t4">` 로 감싸고 타일마다 하나씩

---

## 9. 경로 다이어그램 — `rt-box`

화면과 화면 사이를 오간 길을 보여 준다. 탐색 경로 · 과업 흐름에 쓴다.

```html
<div class="box rt-box rv">
  <p class="rt-n">좌석 선택 경로</p>
  <div class="rt-sc"><div class="rt" style="--n:5">
    <span class="nd sq" style="--i:0">좌석 버튼 인지 여부</span>
    <i class="ra" aria-hidden="true"><svg viewBox="0 0 28 10"><path d="M1 5H26M22 1.5 25.5 5 22 8.5"/></svg></i>
    <span class="nd sq" style="--i:1">좌석 미지정</span>
    <i class="ra" aria-hidden="true"><svg viewBox="0 0 28 10"><path d="M1 5H26M22 1.5 25.5 5 22 8.5"/></svg></i>
    <span class="nd sq re" style="--i:2">재예매 과정</span>
  </div></div>
  <ul class="find"><li>좌석 미지정 뒤 자동 배정으로 재탐색 발생</li><li>특정 화면 안 UI 개선으로 해결 가능</li></ul>
</div>
```

- `--n` 은 칸 수(화살표 포함). `--i` 는 각 칸의 차례 — 이 순서로 하나씩 켜진다
- `nd sq` 가 보통 칸(검게 채워짐), `nd sq re` 는 **되돌아간 칸**(테두리만). 재탐색 · 실패에 쓴다
- `find` 는 그 경로에서 읽어 낸 것. 3줄까지

## 10. 번호 붙은 항목 — `mp` · `no`

원칙 · 문제 같은 것을 번호와 함께 늘어놓을 때.

```html
<div class="maps">
  <div class="mp rv">
    <p class="mp-h"><span class="no">1</span>기억보다 인지</p>
    <p class="mp-p">좌석 선택 버튼이 잘 보이지 않아 기능의 존재를 기억해야만 쓸 수 있음</p>
    <svg class="i mp-a" viewBox="0 0 24 24"><use href="#i-q"/></svg>
    <div class="mp-g"><span><b>기능 인지 강화</b> · 좌석 선택 기능을 쉽게 인식하도록</span></div>
  </div>
  <div class="mp rv" style="--k:1"> … </div>
</div>
```

`mp-a` 화살표와 `mp-g`(그래서 무엇을 했는가)는 있을 때만 쓴다.

---

## 11. 표 — `tw` + `tb`

수치를 칸으로 보여 줘야 할 때만. 타일로 되면 타일이 낫다.

```html
<div class="tw rv"><table class="tb">
  <thead><tr><th></th><th>게이지플롯(5)</th><th>히트맵(5)</th><th>전체(15)</th></tr></thead>
  <tbody>
    <tr><th>기능 통합</th><td>성공3 / 헤맴2</td><td>성공5 / 헤맴0</td><td>성공12 / 헤맴2</td></tr>
  </tbody>
</table></div>
```

- 첫 칸은 `<th>` 로. 가로 6칸까지. 넘으면 두 표로 나눈다

## 12. 칩 줄 — `chips`

방법 · 산출물을 나열할 때. 라벨과 짝지어 쓴다.

```html
<dl class="meth">
  <dt>문제정의</dt><dd class="chips"><span>데스크리서치</span><span>유저 정의</span><span>사용성평가 1차</span></dd>
  <dt>개선안 설계</dt><dd class="chips"><span>벤치마킹</span><span>정보구조도</span><span>프로토타이핑</span></dd>
</dl>
```

## 13. 라벨–값 목록 — `kv`

팀 · 기간 · 역할처럼 짧은 사실.

```html
<dl class="kv">
  <dt>팀</dt><dd>한정민, 정서영, 주시원</dd>
  <dt>기간</dt><dd>2026.03 — 07</dd>
  <dt>내 역할</dt><dd>문헌 조사 · 아이트래킹 · 사용성 평가 분석</dd>
</dl>
```

## 14. 인용 · 과업 목록 — `quote` · `task`

```html
<p class="quote">4월 19일 일요일, 서울에서 부산에 10시쯤 도착하는 KTX 창가 1인석을 예약해 주세요.</p>

<ol class="task"><li>서울역 → 부산역 목적지 설정</li><li>날짜 선택</li><li>예약 내역 확인</li></ol>
```

`quote` 는 시나리오 문장 · 사용자 발언에. `task` 는 번호가 의미 있는 순서에.

---

## 15. 산출물 크게 보기 — `sdp`

화면설계서처럼 장이 많은 산출물을 전체 화면 뷰어로 여는 블록. **한 페이지에 하나만.**

```html
<div class="box sdp rv">
  <button class="sdp-im" type="button" data-sd="0" aria-label="화면설계서 전체 보기">
    <span class="sdp-st">
      <img src="images/lotte-cinema/sd/sd_13.webp" alt="" loading="lazy" draggable="false">
      <img src="images/lotte-cinema/sd/sd_15.webp" alt="" loading="lazy" draggable="false">
      <img src="images/lotte-cinema/sd/sd_06.webp" alt="" loading="lazy" draggable="false">
    </span>
  </button>
  <div><p>설명 한두 줄. 모두 몇 장인지 밝힌다.</p>
    <button class="go press" type="button" data-sd="0">화면설계서 전체 보기<svg class="i"><use href="#i-right"/></svg></button></div>
</div>
```

뷰어에 들어갈 장 목록은 데이터로 따로 적는다 — 아래 **17. 내는 것** 참고.

---

## 16. 쓰지 않는 부품

아래는 코레일톡에만 있는 것이다. 새 프로젝트에서는 **쓰지 않는다.**
쓰려면 자바스크립트와 자료 구조를 새로 짜야 해서 이번 작업 범위 밖이다.

| 부품 | 왜 안 쓰는가 |
|---|---|
| 폰 목업 (`kp` · `ka-` · `kb-`) | 앱 화면을 손으로 다시 그린 것. 원본 화면이 있으면 그림으로 넣는 게 낫다 |
| 레이더 차트 (`rd`) | 축과 값을 담는 전용 자료가 따로 필요하다 |
| 근거→개선안→목표 연결선 (`lk`) | 선을 긋는 전용 자료가 따로 필요하다 |
| 스크롤로 넘기는 칸 (`sy`) | 화면 높이에 기대는 부품이라 조정이 많이 든다 |
| As-is / To-be 전환 (`ab`) | 폰 목업과 묶여 있다 |
| 미끄러지는 단추 줄 (`sg` · `pk`) | 거르는 자료 구조가 따로 필요하다 |

화면을 보여 줘야 하면 **6번 가로 갤러리**를 쓴다. 그게 이번 작업의 기본 수단이다.

---

## 17. 내는 것

파일 하나다. `case-<프로젝트 id>.js`

```js
/* 주석 — 어떤 원자료에서 어느 절을 만들었는지 */
window.CASE_SD = [                       /* 산출물 뷰어를 쓸 때만. 안 쓰면 통째로 뺀다 */
  { "title": "표지", "src": "images/lotte-cinema/sd/sd_01.webp" },
  …
];
window.CASE_PAGE = [
  "<header class=\"hd\">",
  "  <div class=\"af\"> … </div>",
  "  <div class=\"res rv\"> … </div>",
  "</header>",
  "<section class=\"st\" id=\"s1\" data-lbg>",
  …
].join("\n");
```

- 한 줄에 한 태그씩 끊어 적는다 (나중에 고칠 수 있게)
- 큰따옴표는 `\"` 로 적는다
- 맨 위에 주석으로 **어느 원자료 몇 쪽에서 왔는지** 남긴다
- 다 쓰고 `node --check case-<id>.js` 로 문법을 확인한다

---

## 18. 반드시 넣어야 하는 받침 — 크게 보기 틀

`hs` 갤러리를 쓰면 **이 틀이 본문 맨 끝에 있어야 한다.** 없으면 `case.js` 가
`$('.x', LB.el)` 에서 멈추고 페이지 전체가 비어 보인다. 글자 하나 바꾸지 않고
그대로 복사한다.

```html
<div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="이미지 크게 보기">
  <div class="lb-scrim"></div>
  <img class="lb-img" alt="" draggable="false">
  <div class="lb-ui">
    <button class="x glass press" type="button" aria-label="닫기"><svg class="i"><use href="#i-x"/></svg></button>
    <button class="lb-nav prev glass press" type="button" aria-label="이전 이미지"><svg class="i"><use href="#i-left"/></svg></button>
    <button class="lb-nav next glass press" type="button" aria-label="다음 이미지"><svg class="i"><use href="#i-right"/></svg></button>
    <div class="lb-cap"><span class="lb-t"></span><div class="gal-dots glass" role="tablist" aria-label="이미지 고르기"></div></div>
  </div>
</div>
<div id="sr-live" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap"></div>
```

맨 위 아이콘 묶음(`#i-x` · `#i-left` · `#i-right` · `#i-q`)도 같이 있어야 한다.

## 19. 세로 그림을 갤러리에 넣을 때

`hs` 는 가로 장표(1920×1080) 기준이다. 폰 화면처럼 **세로로 긴 그림을 그냥 넣으면
갤러리 칸 비율에 맞춰 크게 잘린다.** 1920×1080 흰 바탕 가운데에 올려 가로 그림으로
만든 뒤 넣는다.

```
ffmpeg -i 폰화면.png -vf "scale=-2:700:flags=lanczos,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:white" \
       -c:v libwebp -quality 88 -compression_level 6 out.webp
```

## 20. 영상 한 편 크게 — `flm`

완성 영상을 상세 페이지 안에서 바로 보게 하는 칸. **한 페이지에 하나만.**

```html
<div class="flm rv">
  <video controls preload="metadata" playsinline poster="images/mould/film_poster.webp">
    <source src="images/mould.mp4" type="video/mp4">
  </video>
</div>
<p class="src">1920 × 1080 · MP4 · 24fps</p>
```

- 가로세로는 16:9 로 고정된다. 표지(`poster`)는 꼭 넣는다 — 없으면 까만 칸으로 보인다
- 표지는 영상에서 한 장 뽑아 쓴다
  `ffmpeg -ss 00:00:24 -i 영상.mp4 -frames:v 1 -vf scale=1280:-2 -c:v libwebp -quality 84 표지.webp`
- `autoplay` 는 쓰지 않는다. 보는 사람이 눌러서 켠다

## 21. 바깥으로 나가는 단추

산출물 뷰어가 아니라 **다른 주소로 보내는 단추**는 `a.go` 로 쓴다. 생김새는 15번 `go` 와 같다.

```html
<a class="go press" href="https://…" target="_blank" rel="noopener">브랜드 웹사이트 열기<svg class="i"><use href="#i-out"/></svg></a>
```

`#i-out` 아이콘을 맨 위 아이콘 묶음에 같이 넣는다.

## 22. 도표 — 장표에 있던 모양 그대로 다시 그린다

장표의 도표를 **그림으로 붙이지 않는다.** 같은 모양으로 아래 부품을 써서 다시 그린다.
원형 도표를 막대 하나로 바꾸는 식으로 **모양을 바꾸지 않는다.** 장표가 세로 막대면
세로 막대로, 꺾은선이면 꺾은선으로 둔다 (2026-11-19 사용자 지정).

| 장표의 도표 | 쓸 부품 |
|---|---|
| 원형 · 도넛 | 8번 `donut` |
| 세로 막대 (3~6칸) | `bars ax` (아래) |
| 가로 막대 · 이름이 길거나 5칸 이상 | `gbs` (아래) |
| 두 해를 견주고 늘고 준 정도를 말할 때 | `cb` (아래) |
| 꺾은선 · 해마다 달라지는 값 | `lnc` (아래) |

### 도표는 반드시 카드 줄 `cr` 안에 넣는다

장표에서 도표는 **저마다 카드 안에 들어가 한 줄에 나란히** 놓인다 (04 · 05 쪽).
카드 없이 쌓으면 도표가 840px 에서 끝나 오른쪽 300px 가 비고, 같은 이야기를 하는
도표 둘이 서로 멀어진다 (2026-11-19 사용자 지적). 카드 하나는

> 제목 `cr-t` → 도표 → 출처 `src`

```html
<div class="cr cr-2">
  <figure class="cr-i wide rv">  <!-- wide = 한 줄을 다 쓴다 -->
    <figcaption class="cr-t">연도별 새로 추가된 관람 콘텐츠 유형 수 · 2022 — 2026년</figcaption>
    <div class="lnc" role="img" aria-label="…">…</div>
    <p class="src">직썰 외 4개 매체</p>
  </figure>
  <figure class="cr-i rv">
    <figcaption class="cr-t">롯데시네마 특별관 종류별 운영 지점 수 · 2026년 10월</figcaption>
    <div class="gbs">…</div>
    <p class="src">롯데시네마 홈페이지 스페셜관 2026.10 조회</p>
  </figure>
  <figure class="cr-i rv">…</figure>
</div>
```

- `cr` 혼자 = 한 줄에 카드 하나(전체 폭) · `cr cr-2` = 둘 · `cr cr-3` = 셋
- `rv` 는 **`cr-i` 마다** 붙인다. 안쪽 도표에는 붙이지 않는다 (두 번 걸면 안 자란다)
- 출처는 카드 바닥에 붙는다. 그래서 높이가 다른 카드끼리도 출처 줄이 나란하다
- 카드 안에서는 도표가 카드 폭을 다 쓴다 (`gbs` 의 최대폭 840px 이 풀린다)
- **표(`tw`)는 반 폭 카드에 넣지 않는다.** 네 칸짜리 표를 `cr-2` 에 넣었더니
  마지막 칸이 잘렸다. 표는 `cr` 혼자(전체 폭) 카드에 담는다
- 제목은 명사로 끝낸다. 물음표 문장을 쓰지 않는다

### 회색은 `--kbar` 를 쓴다

도표 막대에 `--bg-2`(#F8F8F8) · `--bg-3`(#E8E8E8) · `--sep`(#E5E5E5)을 쓰면
흰 바탕에서 **막대가 보이지 않는다.** 2026-11-19 에 중간 회색 두 단을 더했다.

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--kbar` | `#C4C4C4` | 견주는 막대 · 도표의 기본 회색 (`dim` 칸도 같다) |
| `--kbar-2` | `#DADADA` | 한 단 옅게 — 도넛 남은 조각 · 두 해 비교 띠 바탕 |
| `--kfill` | `#0A0A0A` | 말하려는 칸 (`on`) |

`dim` 은 **글자만** 눌러 둔다. 막대까지 `--kbar-2` 로 옅게 하면 카드 바탕(#F8F8F8)
위에서 아예 보이지 않는다.

### 가로 막대 — `gbs` · `gb`

장표 05 쪽 모양이다. **눈금 바탕(트랙)을 깔지 않는다.** 막대만 있고 값은 막대 끝
바로 오른쪽에 붙는다.

```html
<div class="gbs rv">
  <div class="gb on"><b>광음시네마</b><p class="gb-b"><i style="--w:100"></i><span>25곳</span></p></div>
  <div class="gb"><b>수퍼플렉스</b><p class="gb-b"><i style="--w:44;--j:1"></i><span>11곳</span></p></div>
  <div class="gb dim"><b>수퍼MX4D</b><p class="gb-b"><i style="--w:8;--j:2"></i><span>2곳</span></p></div>
</div>
<p class="src">출처</p>
```

- `--w` 는 가장 큰 값을 100 으로 둔 비율(숫자만, % 없이) · `--j` 는 차례
- `on` 은 **말하려는 칸**에 붙인다 (검게 칠해지고 글자가 굵어진다)
- `dim` 은 참고로만 두는 칸 (막대가 한 단 옅어지고 글자를 눌러 둔다)
- 값 글자가 길면 칸에 `style="--vw:104px"` 로 자리폭을 키운다 (기본 62px).
  이 폭만큼 빼고 막대 길이를 잰다 — 안 키우면 긴 값이 오른쪽으로 삐져나온다
- `rv` 는 `gbs` 에 붙인다 — 화면에 들어오면 막대가 자란다
- **`hb` 라는 이름을 쓰지 말 것.** 코레일톡 쪽 As-is/To-be 막대가 이미 그 이름을
  쓰고 있어서, 같은 이름으로 만들면 그 페이지의 막대가 깨진다

### 세로 막대 — `bars ax`

장표 04 쪽 모양이다. 7번 `bars` 에 `ax` 를 더하면 바닥선과 가로축 이름이 생긴다.

```html
<div class="bars ax rv" role="img" aria-label="…">
  <div class="bar" style="--h:100"><b>4.37회</b><i></i><span>2019년</span></div>
  <div class="bar" style="--h:56;--j:1"><b>2.44회</b><i></i><span>2023년</span></div>
  <div class="bar on" style="--h:48;--j:2"><b>2.08회</b><i></i><span>2025년</span></div>
</div>
```

- 차례는 값(`b`) → 막대(`i`) → 가로축 이름(`span`)
- 마지막 칸은 자동으로 강조된다. 다른 칸을 강조하려면 그 칸에 `on`
- 칸이 서넛뿐이면 폭을 540px 로 묶어 둔다 (이미 CSS 에 들어 있다).
  안 묶으면 1100px 를 다 써서 띄엄띄엄해 보인다

### 두 해 비교 띠 — `cb`

장표 04 쪽 가운데 카드 모양이다. **띠 자체가 값의 크기**이고, 이름과 값은 띠 안에,
늘고 준 정도는 오른쪽에 크게 붙는다. 타일 안에 넣는다.

```html
<div class="tile rv"><p class="tile-k">전체 관객수</p>
  <div class="cb">
    <div class="cb-rs">
      <div class="cb-r" style="--w:100"><b>2024년</b><span>1억 2천만 명</span></div>
      <div class="cb-r on" style="--w:88;--j:1"><b>2025년</b><span>1억 6백만 명</span></div>
    </div>
    <p class="cb-d"><b>13.8%</b><span>감소</span></p>
  </div>
</div>
```

- `--w` 는 띠의 가로 폭 비율 · `on` 은 올해(또는 말하려는 해) — 검게 칠해지고 글자가 희어진다
- 띠가 너무 짧아지지 않게 가장 짧은 띠도 200px 는 된다

### 꺾은선 — `lnc`

```html
<div class="lnc rv" role="img" aria-label="관람 콘텐츠 유형 수 2022년 1개에서 2026년 6개로 증가">
  <svg viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true">
    <polyline class="pl" points="100,148 300,105 500,83 700,62 900,40"/>
  </svg>
  <div class="lnc-d">
    <div style="--y:74.2%"><b>1개</b><i></i><span>2022<em>롯시플</em></span></div>
    <div style="--y:52.5%;--j:1"><b>3개</b><i></i><span>2023<em>스포츠 · 버튜버</em></span></div>
  </div>
</div>
```

- 점 n 개의 x 자리는 `(i + 0.5) / n`. viewBox x = 그 비율 × 1000
- y 는 위 20% ~ 아래 85% 로 잡는다 → `y% = 85 - (값 / 최댓값) × 65`. viewBox y = `y% × 2`
- `--y` 와 polyline 의 y 가 **반드시 같아야** 점과 선이 맞는다
- 가로축 이름(`span`)은 짧게. 그 해에 무엇이 생겼는지 같은 곁들이는 말은 `em` 으로
  한 줄 더 쓴다 — 좁은 화면(760px 아래)에서는 `em` 이 저절로 사라진다

## 23. 벤치마킹 카드 — `bmk` · `bm`

장표 15 · 16 쪽 모양이다. **화면 한 장과 그 화면에 대한 설명을 반드시 한 카드에
묶는다.** 화면을 격자로 따로 모으고 설명을 목록으로 따로 두면, 보는 사람이
몇 번째 화면이 몇 번째 설명인지 세어 봐야 한다 (2026-11-19 사용자 지적).

```html
<div class="bmk">
  <article class="bm rv">
    <button class="bm-im" type="button" data-lb aria-label="CGV · … 크게 보기">
      <img src="images/…/bench_01.webp" width="680" height="1244" alt="CGV · …"
           loading="lazy" decoding="async" draggable="false">
    </button>
    <div>
      <p class="bm-r">R-01</p>
      <p class="bm-s">CGV · 2026 앱 영화별 예매 화면</p>
      <h4 class="bm-n">특별관 간 경험 차이를 같은 기준으로 비교</h4>
      <dl class="bm-l">
        <dt>제공하는 기능</dt><dd>포맷 필터 칩과 극장별 특별관 탭</dd>
        <dt>개선 필요 부분</dt><dd>특별관 간 경험 차이를 같은 기준으로 비교하기 어려움</dd>
        <dt class="ap">개선 적용 방향</dt><dd class="ap">화면 · 음향 · 움직임 · 좌석 · 추가요금을 한눈에 비교</dd>
      </dl>
    </div>
  </article>
</div>
```

- 줄 차례는 장표 그대로 — 요구사항 번호 → 출처 → 우리 목표 중심 제목 →
  제공하는 기능 → 개선 필요 부분 → **개선 적용 방향**(`ap`, 마지막 줄만 굵게)
- 카드는 한 줄에 하나다. 두 줄로 놓으면 글 칸이 220px 밖에 안 남아 줄이 깨진다
- 그림에 `width` · `height` 를 **반드시 적는다.** 안 적으면 `loading="lazy"` 그림이
  늦게 뜨면서 카드 높이가 뛴다
- **`go` 라는 이름을 쓰지 말 것.** 바깥 링크 단추가 쓰는 이름이라 글이 검은 알약이 된다

## 24. 앱 화면 캡처 — `shots`

세로로 긴 캡처는 가로 갤러리(6번)에 넣지 않는다. 흰 바탕만 넓어지고 화면이 작아진다.

```html
<div class="shots">
  <button class="rv" type="button" data-lb aria-label="CGV 영화별 예매 크게 보기">
    <span class="sh-im"><img src="images/…/bench_01.webp" alt="CGV · 영화별 예매" loading="lazy" decoding="async" draggable="false"></span>
    <span class="sh-c"><b>CGV</b>영화별 예매 · 포맷 필터 칩</span>
  </button>
  …
</div>
```

한 줄에 4칸(좁은 화면 2칸). 눌러서 크게 볼 수 있다. 그림은 세로 비율 그대로 둔다.

### 가로 그림 격자 — `shots wide` · `shots two`

`shots` 에 `wide` 를 더하면 칸이 16:9 가 된다 (룸 렌더처럼 넓은 그림).
`two` 를 더하면 한 줄에 두 칸이 된다 (화면이 길어 크게 보여야 할 때).

```html
<div class="shots wide">…</div>      <!-- 16:9 네 칸 -->
<div class="shots two wide">…</div>  <!-- 16:9 두 칸 -->
```

## 25. 벤치마킹 · 사례 목록 — `ab bq`

**사례가 넷을 넘으면 카드로 쌓지 않는다.** 여덟 장을 세로로 쌓았더니 2743px 였고,
화면이 작아 글 옆이 비었다 (2026-11-20 사용자 지적). 코레일톡 '개선 전후'가 쓰는
`ab` 를 그대로 쓴다 — 왼쪽은 목록, 오른쪽은 고른 화면 한 장. 700px 으로 줄었다.

```html
<div class="ab bq box rv">
  <div class="ab-nav">
    <button class="ab-up" type="button" aria-label="이전 사례"><svg …></button>
    <button class="ab-dn" type="button" aria-label="다음 사례"><svg …></button>
  </div>
  <div class="ab-ls">
    <div class="ab-it on">
      <button class="ab-b" type="button" aria-expanded="true" aria-controls="bq-sc0">
        <span class="pl" aria-hidden="true"><svg …></span>
        <i class="rq">R-01</i>CGV · 특별관 비교 기준
      </button>
      <div class="ab-d" tabindex="-1">
        <p class="bq-rq"><b>R-01</b>CGV · 2026 앱 영화별 예매 화면</p>
        <p class="ab-dh">특별관 간 경험 차이를 같은 기준으로 비교</p>
        <p class="ab-dl"><span class="lab">제공하는 기능</span>포맷 필터 칩과 극장별 특별관 탭</p>
        <p class="ab-dl"><span class="lab">개선 필요 부분</span>…</p>
        <p class="ab-dl ap"><span class="lab">개선 적용 방향</span>…</p>
      </div>
    </div>
    …
  </div>
  <div class="ab-st">
    <div class="ab-sc on" id="bq-sc0" data-n="1">
      <div class="ab-g a"><button class="bq-im" type="button" data-lb aria-label="… 크게 보기">
        <img src="…" width="680" height="1244" alt="…" loading="lazy" decoding="async" draggable="false">
      </button></div>
    </div>
    …
  </div>
</div>
```

- `ab-it` 의 차례와 `ab-sc` 의 차례가 **반드시 같아야** 목록과 화면이 맞는다
- `aria-controls` 와 `id` 를 짝지어 둔다. 코레일톡이 `ab-sc0` 을 쓰므로 `bq-sc0` 으로
- 목록 단추 글은 **한 줄에 들어가게** 짧게 (브랜드 + 가져올 것). 긴 제목은 `ab-dh` 에
- 자바스크립트는 `case.js` 가 `.ab` 를 모두 집어 알아서 붙인다. 따로 쓸 것이 없다
- `data-lb` 는 보이는 화면만 눌리지만, 크게 보기 안에서는 여덟 장을 모두 넘길 수 있다

## 26. 참고 사이트 방식 — `xs` · `bb` · `lyr`

MOULD 는 브랜드 사이트(busy-venus-155131.framer.app)를 기준으로 삼는다.
**글을 줄이고 그림과 도해를 자주 쓴다** (2026-11-20 사용자 지정).

### 펼침 띠 — `xs`

한 장이 열려 있고, 손을 올린 장이 열린다. 자바스크립트 없이 `flex-grow` 로만 움직인다.

```html
<div class="xs rv">
  <button class="xs-it" type="button" data-lb aria-label="하늘 테마 크게 보기">
    <img src="…" alt="하늘 · 구름 위에 떠 있는 듯한 공간" loading="lazy" decoding="async" draggable="false">
    <span class="xs-c"><b>하늘</b><span>구름 위에 떠 있는 듯한 공간</span></span>
  </button>
  … 3~5장
</div>
```

- 처음에는 **첫 장**이 열려 있다. 열린 장만 설명(`span`)이 보인다
- 760px 아래에서는 세로로 쌓이고 설명이 모두 보인다
- 그림은 세로로 길게 잘리므로 **가운데에 중요한 것이 오는 그림**을 쓴다

### 꽉 찬 그림 띠 — `bb`

절을 열 때 글 대신 그림 한 장을 크게 깐다. 1101px 이상에서 글 칸보다 넓게 나간다.

```html
<figure class="bb rv">
  <img src="…" width="1600" height="756" alt="…" loading="lazy" decoding="async" draggable="false">
  <figcaption class="bb-c"><b>같은 거실, 다른 하루</b><span>오전에는 업무 공간, 저녁에는 …</span></figcaption>
</figure>
```

- **띠의 제목이 바로 아래 `bh` 와 같으면 안 된다.** 같은 말이 두 번 보인다
- 그림이 없으면 완성 영상에서 뽑는다 — `ffmpeg -ss <시각> -i 영상 -frames:v 1`
- 절 머리(`st-h`) 와 첫 `bk2` 사이에 둔다

### 겹 도해 — `lyr`

여러 겹이 하나로 묶인다는 것을 글 대신 계단으로 보인다.

```html
<div class="lyr rv">
  <div class="lyr-st">
    <i style="--i:0"><b>색</b><span>벽 · 바닥 · 가구의 색감</span></i>
    <i style="--i:1"><b>빛</b><span>밝기와 웜 · 쿨</span></i>
    <i style="--i:2"><b>영상</b><span>벽면과 천장에 흐르는 장면</span></i>
    <i style="--i:3"><b>소리</b><span>공간을 채우는 소리</span></i>
  </div>
  <i class="lyr-ar" aria-hidden="true"><svg viewBox="0 0 28 10"><path d="M1 5H26M22 1.5 25.5 5 22 8.5"/></svg></i>
  <p class="lyr-out"><b>테마 하나</b><span>버튼 한 번에 네 가지가 함께 바뀐다</span></p>
</div>
```

- `--i` 가 계단의 칸 수이자 나타나는 차례다. 겹은 서넛이 알맞다

## 27. 쫀득한 움직임

`--spring` 이 `--ease-out` 과 같은 곡선이라 어디에도 튕김이 없었다 (2026-11-20 지적).

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `--spring` | `cubic-bezier(.34,1.28,.52,1)` | 살짝 지나쳤다 돌아옴 — 막대 · 나타남 · 누름 |
| `--spring-s` | `cubic-bezier(.34,1.56,.64,1)` | 더 튕김 — 작은 단추 |
| `--ease-exp` | `cubic-bezier(.16,1,.3,1)` | 길게 미끄러짐 — 펼침 띠 · 그림 확대 |

- 나타날 때 `scale .986 → 1` 이 함께 걸린다
- 카드(`tile` · `mp`)는 손을 올리면 3px 떠오르고, 갤러리 그림은 1.04배로 커진다
- `prefers-reduced-motion` 이면 모든 움직임을 끈다 — 이 규칙은 꼭 남겨 둘 것

## 28. 그림 한 장이 말하게 — `shot` (2026-11-21)

애플 제품 쪽을 보면 **한 절에 생각 하나**, 그림이 크게 먼저 오고 글은 짧게 붙는다.
장표의 도해 · 목업은 캡처를 갤러리에 몰아 넣지 말고 그 자리에 크게 넣는다.

```html
<figure class="shot rv">
  <button class="shot-b" type="button" data-lb aria-label="… 크게 보기">
    <img src="images/…/svc_room.webp" width="1294" height="612" alt="…"
         loading="lazy" decoding="async" draggable="false">
  </button>
</figure>
<p class="src">01 평면도 · 02 투시도 — 번호는 아래 목록과 같다</p>
```

- 그림에 번호가 박혀 있으면 **그 번호를 HTML 목록(`maps` · `mp`)으로 받아 적는다.**
  그림 속 번호와 목록의 번호가 같아야 읽힌다
- 카드 줄 안에 그림을 넣을 때는 `cr-im` + `cr-l`(장점 · 한계 · 적합 공간)

### '… 장표 다섯 장' 갤러리는 쓰지 않는다

장표를 통째로 캡처해 `hs` 에 몰아 넣는 방식은 뺐다 (2026-11-21 사용자 지정).
장표 안의 **그림과 글을 꺼내 웹 구조로 다시 짠다.** 가로 스크롤은 스토리보드처럼
차례가 있는 것 한 군데만 남긴다.

### 장표 옆 '개선사항' 메모를 먼저 읽는다

피그마 포폴 파일(4kYiTuHsZC6c04jtvl23ea)의 장표 옆에 `개선사항` 이라는 이름의
메모가 붙어 있다. 무엇을 어떻게 바꾸라는 지시가 거기 적혀 있으니 **손대기 전에
반드시 읽는다.** `get_metadata` 로 받아 `name="개선사항"` 틀 아래 글을 뽑으면 된다.
