/* 프로젝트 상세 — 확정 원고(2026-10-21) 기준.
   섹션 = [앵커 id, 영문 레이블, 한글 제목, 이미지 배치, [본문 문단]]
   · 제목은 메인 페이지(app.js)와 같은 값을 쓴다(사용자 지정 — 메인 제목으로 통일).
   · 본문은 이미지 자리 위에 둔다. 더미 글자가 보이는 배치(process · evidence)는 쓰지 않는다. */
const projects = [
  {
    id:'korail-talk',number:'01',
    title:'코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    summary:'흩어져 있던 예약 승차권 조회 기능을 한곳으로 모아, 찾는 시간을 24.5초에서 6.4초로 줄였습니다.',
    type:'UX 개선',period:'2026.03 — 07',
    call:['좌석 자동배정','예약 승차권 조회'],
    role:'문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 개선 범위 전환 제안',
    deliverable:'보고서 · 스토리보드',outputs:['report','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        '코레일톡에서 흩어져 있던 예약 승차권 조회 기능을 한곳으로 모아, 예매 이후의 흐름을 다시 설계한 프로젝트입니다.',
        '사용자는 승차권을 산 뒤에도 여러 기능과 화면을 오가며 예약 정보를 관리합니다. 그만큼 승차권 관리 경험의 중요성도 함께 커지고 있습니다.',
      ],['korail-talk-bg.jpg']],
      ['check','CHECK','처음 잡은 문제를 의심한 이유','single',[
        '팀이 처음 고른 문제는 좌석 자동배정이었습니다. 좌석을 고르지 않고 예매하면 안내 없이 자동 배정됩니다.',
        '다만 이 문제는 버튼과 안내 문구로 풀리는 크기였습니다. 예매 전반을 평가할 만한 문제가 아니라는 논의 끝에, 좌석 배정 이후의 흐름까지 평가 범위를 넓혔습니다.',
      ],['korail-talk-problem.jpg']],
      ['evidence','EVIDENCE','평가에서 나온 것','single',[
        '열차 조회부터 좌석 결제까지를 범위로 잡고 1차 사용성 평가를 진행했습니다.',
        '참가자 중 3명이 자동 좌석 배정 때문에 원하는 좌석을 한 번에 예약하지 못했고, 그중 2명은 예약된 승차권을 찾는 데 헤맸습니다.',
      ],['korail-talk-paths.jpg']],
      ['finding','FINDING','길이 갈린 이유','single',[
        '원인을 세 가지로 짚었습니다. 기능의 위치를 외워야 하고, 메뉴 이름이 기대와 다르고, 찾는 동안 10분 결제 기한이 지나갑니다.',
        '특정 화면의 문제가 아니라 정보구조의 문제였습니다. 개선 대상을 좌석 자동배정에서 예약 승차권 조회로 바꿨습니다.',
      ],['korail-talk-heuristic.png']],
      ['move','MOVE','어디에 모을 것인가','single',[
        '모으기로 했다면 다음 질문은 \u0027어디에\u0027입니다. 같은 문제를 푼 네 서비스를 벤치마킹했습니다.',
        'SRT 는 승차권 확인 기능을 하단 탭에 고정했고, 티머니GO 는 예약과 결제를 한 내역으로 묶었습니다. 사용자가 이미 찾으러 가는 자리, \u0027나의 티켓\u0027으로 모으기로 했습니다.',
      ],['korail-talk-bench.png']],
      ['build','BUILD','화면으로 옮기기','single',[
        '장바구니와 예약 승차권 조회를 \u0027나의 티켓\u0027으로 합치고, 중복되던 결제 버튼을 하나로 줄였습니다.',
        '하단에 떨어져 있던 장바구니는 상단 탭으로 올렸습니다. 예약과 관련된 일이 한 영역에서 끝나게 했습니다.',
      ],['korail-talk-merge.jpg']],
      ['checkmate','CHECKMATE','다시 재보기','pair',[
        '같은 과업으로 2차 평가를 했습니다. 예약 내역을 찾는 시간이 24.5초에서 6.4초가 됐습니다.',
        '더 중요한 것은 경로입니다. 대부분의 참가자가 같은 길로 갔습니다. 구조가 사람 머릿속에서 하나로 연결됐다는 뜻입니다.',
      ],['korail-talk-result.png','korail-talk-quant.png']],
    ]
  },
  {
    id:'mould',number:'02',
    title:'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    summary:'화려한 기술 대신 적용 가능성과 운영 지속성을 기준으로 삼아, 공간 · 태블릿 · 영상을 하나로 이었습니다.',
    type:'서비스 기획 · 브랜드 / 경험',period:'2026.03 — 07',
    call:['화려한 기술','적용 가능성 · 운영 지속성'],
    role:'팀장 · 사용자 조사 · 서비스 구조 설계 · 공간 경험 · 영상 시나리오',
    deliverable:'제안서',outputs:['proposal'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '인테리어를 바꾸지 않고 상황에 따라 공간의 분위기를 바꾸는 주거 서비스입니다. 팀장으로 조사부터 서비스 구조와 영상 시나리오까지 맡았습니다.',
      ]],
      ['check','CHECK','무엇을 바꾸고 싶어 하는가','pair',[
        '주거 · 공간 · 미디어 트렌드를 조사했습니다. 사람들은 집을 고치고 싶은 것이 아니라 그날의 기분에 맞는 공간을 원했습니다.',
        '그래서 이 서비스를 미디어 감상이 아니라 생활 장면과 이어지는 경험으로 정의했습니다.',
      ]],
      ['condition','CONDITION','화려한 기술을 버린 자리','asymmetric',[
        '처음에는 시각적으로 화려한 기술도 검토했습니다. 그런데 공간마다 콘텐츠를 따로 만들어야 하거나 계속 손봐야 한다면, 제안서 안에서만 작동합니다.',
        '팀장으로서 기준을 바꾸자고 했습니다. 화려함이 아니라 적용 가능성과 운영 지속성입니다.',
      ]],
      ['move','MOVE','좁히고 나서 보인 것','wide',[
        '그 기준으로 기술을 견주어 LED 와 빔프로젝터로 좁혔습니다. 범위가 줄자 서비스의 중심이 분명해졌습니다.',
        '공간을 꾸미는 서비스가 아니라, 공간의 상태를 바꾸는 서비스입니다.',
      ]],
      ['build','BUILD','공간 · 태블릿 · 영상','pair',[
        '사용자 요구를 공간별 룸 콘셉트와 이용 시나리오로 옮겼습니다. 태블릿에서 고르면 공간이 따라 바뀌는 흐름을 설계했습니다.',
        '영상은 서비스의 가치와 이용 흐름이 장면의 순서로 전달되도록 스토리보드를 썼습니다.',
      ]],
      ['mate','MATE','영상팀과 나눈 일','pair',[
        '영상의 완성도와 연출은 영상 디자이너가 맡았습니다. 저는 어떤 장면을 어떤 순서로 보여줄지를 정했습니다.',
        '공간에서 겪을 경험과 영상이 말하는 것이 어긋나지 않도록 함께 맞췄습니다.',
      ]],
      ['checkmate','CHECKMATE','제안 결과','wide',[
        '공간 · 태블릿 · 영상이 하나로 이어지는 서비스 제안을 완성했습니다.',
        '커뮤니케이션 국제 어워드 디지털미디어디자인 부문 특별상을 받았습니다.',
      ]],
    ]
  },
  {
    id:'lotte-cinema',number:'03',
    title:'롯데시네마 | 특별관 탐색 경험 개선',
    summary:'결제를 범위에서 덜어내고 특별관을 골라, 근거를 요구사항으로 옮긴 뒤 일곱 가지 기능으로 풀었습니다.',
    type:'UX 개선',period:'2026.09 — 12',
    call:['결제 개선','특별관 탐색'],
    role:'일정 관리 · 사용성 평가 · 요구사항 정의 · 프로토타입 · 화면설계서',
    deliverable:'제안서 · 스토리보드',outputs:['proposal','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        '특별관을 고르는 일이 왜 어려운지 확인하고, 영화를 찾는 일부터 예매까지를 하나의 흐름으로 다시 설계한 프로젝트입니다.',
        '영화관은 특별관과 공연 · 체험 콘텐츠로 관람 경험을 넓히고 있습니다. 앱의 탐색 구조만 그 변화를 따라가지 못하고 있었습니다.',
      ],['lotte-cinema-issues.jpg']],
      ['check','CHECK','범위를 좁힌 근거','wide',[
        '처음 범위에는 결제도 있었습니다. 그런데 결제의 해결책은 정책과 시스템에 달려 있어 화면으로 바꿀 것이 없었습니다. 결제를 범위에서 덜어냈습니다.',
        '대신 특별관을 골랐습니다. 관객은 줄어드는데 특수상영 매출만 늘고 있습니다. 회사가 가려는 곳과 사용자가 원하는 것이 같은 자리를 가리켰습니다.',
      ],['lotte-cinema-market-1.png','lotte-cinema-market-2.png','lotte-cinema-market-3.png']],
      ['evidence','EVIDENCE','1차 사용성 평가','pair',[
        '앞서 찾은 문제들을 검증하려고 영화 탐색 · 관람 장소 비교 · 특별관 비교 · 상영시간 선택 · 좌석 선택을 시나리오에 담아 1차 사용성 평가를 계획했습니다.',
        '결과는 한 방향을 가리켰습니다. 사용자는 목적에 맞게 탐색하는 방법과, 특별관의 차이를 이해할 방법을 필요로 했습니다.',
      ],['lotte-cinema-tasktime.jpg','lotte-cinema-success.jpg']],
      ['finding','FINDING','불편의 원인','single',[
        '불편의 원인은 특별관 비교 · 영화 탐색 · 영화관 탐색, 세 가지로 나눌 수 있었습니다.',
        '특별관은 차이를 견줄 수 없었고, 영화는 찾을 도구가 없었으며, 영화관은 지역 이름으로 찾을 수 없었습니다.',
      ],['lotte-cinema-finding.png']],
      ['move','MOVE','요구사항으로 정의하기','pair',[
        '문제를 문장으로만 두면 사람마다 다르게 읽습니다. 데스크리서치부터 사용성 평가까지 모은 근거를 하나씩 요구사항으로 옮겨 적었습니다.',
        '요구사항마다 어떤 증거에서 나왔는지, 누구의 요구인지, 무엇으로 확인할 것인지를 같이 적었습니다. 여덟 건에 우선순위를 매겨 세 가지 기능 방향으로 묶었습니다.',
      ],['lotte-cinema-req.jpg','lotte-cinema-dir.jpg']],
      ['build','BUILD','일곱 가지 기능과 화면','pair',[
        '세 방향을 일곱 가지 기능으로 나누고, 각각 어느 화면에서 어떻게 쓰이는지까지 정했습니다.',
        '사용자마다 예매를 시작하는 자리가 다릅니다. 영화부터 · 영화관부터 · 관람 목적부터, 세 출발점이 서로 다른 길로 시작해 공통 예매 단계에서 만나게 했습니다.',
      ],['lotte-cinema-features.jpg','lotte-cinema-scenario.jpg']],
      ['current','CURRENT POSITION','현재 단계','single',[
        '요구사항과 정보구조를 마치고 프로토타입을 만들고 있습니다.',
        '개선 후 수치는 같은 과업과 조건으로 2차 평가를 마친 뒤 이 자리에 넣습니다.',
      ]],
    ]
  },
  {
    id:'dmd-graduation',number:'04',
    title:"Delight Insight 2026 | LET'S SYNC 브랜딩",
    summary:'주제를 회의실에서 정하지 않고 졸업생에게 물어, 전시 현장과 웹을 잇는 관람 경험으로 옮겼습니다.',
    type:'브랜드 / 경험',period:'2026.09 — 12',
    role:'공동 기획 · 관람객 조사 · 콘텐츠 구조 · 화면설계 · 카피라이팅',
    deliverable:'기획서 · 스토리보드',outputs:['plan','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        '계원예술대학교 디지털미디어디자인과 2026 졸업전시의 브랜딩입니다. 기획 · 디자인 · 개발 8명이 모인 팀에서 공동 기획자를 맡았습니다.',
        '전시의 주제를 정하는 일부터 시작했습니다.',
      ],['dmd-graduation-theme.jpg']],
      ['check','CHECK','주제를 어디서 찾을까','single',[
        '주제를 회의실에서 정하면 우리 생각이 됩니다. 졸업생에게 직접 물었습니다.',
        '열흘 동안 받은 답에서 한 가지가 반복됐습니다. 혼자 할 때와 같이 할 때의 결과가 달랐다는 이야기였습니다.',
      ],['dmd-graduation-survey.jpg']],
      ['finding','FINDING','세 낱말로 줄이기','single',[
        '답을 셋으로 줄였습니다. 서로 다르다는 것(개성), 그래서 끌린다는 것(연결), 만나면 없던 것이 생긴다는 것(생성).',
        'SYNC 를 \u0027맞추는 것\u0027이 아니라 \u0027당겨서 새로 만드는 것\u0027으로 정의했습니다. 전시의 모든 매체가 이 정의를 따릅니다.',
      ],['dmd-graduation-keywords.jpg']],
      ['move','MOVE','관람객이 한 종류가 아니다','single',[
        '전시에 오는 사람은 셋입니다. 짧게 참여하고 기록을 남기고 싶은 재학생, 학과를 알아보려는 입시생, 관심 작품만 효율적으로 보려는 외부 관람객입니다.',
        '셋이 원하는 것을 탐색 · 참여 · 기록으로 나누고, 각각에 맞는 길을 따로 두었습니다.',
      ],['dmd-graduation-users.jpg']],
      ['build','BUILD','구조에서 화면까지','pair',[
        '웹은 두 갈래입니다. 이야기를 따라 읽는 길은 메인에, 작품을 찾는 길은 PROJECT 와 STUDENT 에 두었습니다.',
        '학생 113명과 17개 팀을 직군으로 거르고 이름으로 찾게 했습니다. 현장은 포스터 리플렛 · 동선 안내 · 영수증 사진기로, 온라인에서 시작한 탐색이 전시장까지 이어지게 했습니다.',
      ],['dmd-graduation-profile.jpg','dmd-graduation-team.jpg']],
      ['mate','MATE','직군 간 조율','single',[
        '8명의 의견이 여러 경로로 들어왔습니다. 다 반영하면 방향이 흐트러지고, 하나만 고집하면 각자의 요구가 빠집니다.',
        '바로 반영할 것과 다 같이 정할 것을 갈랐습니다. 앞의 것은 그날 처리하고, 뒤의 것은 회의 안건으로 올려 담당과 다음 작업까지 정했습니다.',
      ],['dmd-graduation-offline.jpg']],
      ['current','CURRENT POSITION','현재 단계','single',[
        '브랜드 방향과 웹 구조를 마치고 전시 웹사이트를 만들고 있습니다.',
        '최종 결과는 전시가 끝난 뒤 확정된 범위만 더합니다.',
      ],['dmd-graduation-motif.jpg']],
    ]
  },
  {
    id:'portfolio-site',number:'05',
    title:'CHECKMATE | 포트폴리오 웹사이트 기획·제작',
    summary:'완성된 화면이 아니라 무엇을 근거로 방향을 바꿨는지가 읽히도록, 기획부터 구현까지 직접 했습니다.',
    type:'AI · 브랜드 / 경험',period:'2026.09 — 12',
    role:'콘셉트 기획 · 정보구조 · 화면설계 · 콘텐츠 작성 · AI 협업 설계 · 구현',
    deliverable:'스토리보드',outputs:['storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '완성된 화면이 아니라 무엇을 근거로 방향을 바꿨는지가 읽히는 포트폴리오를 기획부터 구현까지 직접 만들었습니다.',
      ]],
      ['check','CHECK','기획자 포트폴리오를 모아 보고','pair',[
        '기획자 · UX 포트폴리오를 모아 구성과 정보 위계를 견줬습니다.',
        '방법론과 완성 화면은 잘 보였습니다. 그런데 왜 그 방향으로 갔는지는 어디에도 빠르게 읽히지 않았습니다.',
      ]],
      ['finding','FINDING','보여줘야 할 것','asymmetric',[
        '제 프로젝트를 다시 봤더니 방법은 매번 달랐지만 한 가지는 같았습니다.',
        '근거를 쌓아 문제를 좁히고, 그 근거를 실행할 수 있는 방향으로 잇는 것. 이것이 보여야 할 것이었습니다.',
      ]],
      ['move','MOVE','CHECKMATE 구조','wide',[
        '근거를 쌓아 결정적인 수로 잇는다는 뜻에서 CHECKMATE 를 콘셉트로 삼았습니다.',
        '모든 프로젝트가 확인 → 발견 → 결정 → 결과, 같은 순서로 읽히게 구조를 고정했습니다.',
      ]],
      ['build','BUILD','정보구조 · 화면 · 구현','pair',[
        '메인 · 목록 · 상세 · 소개로 정보구조를 짜고 화면설계서를 쓴 뒤 직접 구현했습니다.',
        'AI 가 제안한 것은 원본과 대조해 확인하고 최종 문구는 직접 판단했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 결과','wide',[
        '네 페이지의 구조와 주요 기능을 구현해 실제 주소로 배포했습니다.',
        '지금은 프로젝트별 장표와 산출물 링크를 연결하고 문구를 다듬고 있습니다.',
      ]],
    ]
  }
];

const params=new URLSearchParams(location.search);const id=params.get('project')||'korail-talk';const index=Math.max(0,projects.findIndex(project=>project.id===id));const project=projects[index];const previous=projects[(index-1+projects.length)%projects.length];const next=projects[(index+1)%projects.length];
/* 커버 이미지가 있는 프로젝트 — 파일은 images/<id>-band.jpg
   2026-11-18 (사용자 지정) 커버 칸은 18:7(1440x560) 이다.
   띠 사진도 전부 18:7 로 다시 만들어서 한 군데도 잘리지 않는다. */
const COVER=new Set(['lotte-cinema','korail-talk','mould','dmd-graduation']);
if(COVER.has(project.id)){const c=document.querySelector('#detail-cover');c.className='detail-cover has-image';c.innerHTML=`<img src="images/${project.id}-band.jpg" alt="" decoding="async">`;}
document.querySelector('#project-number').textContent=project.number;document.querySelector('#detail-title').textContent=project.title;document.querySelector('#detail-summary').textContent=project.summary;document.title=`${project.title} — SIWON JOO`;
/* 산출물 — 종류마다 따로 연다. 실제 파일이 생기면 DOC_HREF 의 주소만 채운다 */
const DOC_LABEL={report:'보고서 전문 보기',proposal:'제안서 보기',plan:'기획서 보기',storyboard:'스토리보드 보기'};
const DOC_HREF={report:'#',proposal:'#',plan:'#',storyboard:'#'};
document.querySelector('#project-docs').innerHTML=(project.outputs||[])
  .map(key=>`<a class="report-button" href="${DOC_HREF[key]}" target="_blank" rel="noopener">${DOC_LABEL[key]} <i aria-hidden="true">↗</i></a>`)
  .join('');
/* 핵심 판단 — 근거로 방향을 바꾼 프로젝트에만 노출한다 */
document.querySelector('#project-facts').innerHTML=`<div><dt>프로젝트 유형</dt><dd>${project.type}</dd></div><div><dt>기간</dt><dd>${project.period}</dd></div>${project.call?`<div class="fact-call"><dt>핵심 판단</dt><dd><span class="call-from">${project.call[0]}</span><span class="call-arrow" aria-hidden="true">→</span><span class="call-to">${project.call[1]}</span></dd></div>`:''}<div><dt>담당 범위</dt><dd>${project.role}</dd></div><div><dt>산출물</dt><dd>${project.deliverable}</dd></div>`;
/* 이미지 자리 — 더미 글자가 보이지 않는 세 가지만 쓴다 */
/* 이미지 자리 — 오류 화면이 아니라 준비 중인 자리임이 읽히도록 안내를 함께 둔다 */
const ph=(cls,label)=>`<div class="${cls} placeholder"><span class="ph-label">${label}</span><span class="ph-note">이미지 준비 중입니다</span></div>`;
/* .section-visual 은 제목 · 본문과 같은 열에서 시작하기 위한 껍데기다 */
/* 장표 그림의 본디 크기 — 자리를 미리 잡아 글이 밀리지 않게 한다.
   장표마다 잘린 높이가 달라서 하나의 비율로 묶을 수 없다 */
const CASE_SIZE={'korail-talk-bg.jpg':[1500,474],'korail-talk-problem.jpg':[1500,622],'korail-talk-paths.jpg':[1500,532],'korail-talk-merge.jpg':[1500,621],'korail-talk-result.png':[1500,663],'korail-talk-quant.png':[1500,681],'lotte-cinema-issues.jpg':[1474,514],'lotte-cinema-finding.png':[1364,490],'lotte-cinema-scenario.jpg':[1500,316],'lotte-cinema-features.jpg':[1490,434],'lotte-cinema-req.jpg':[1500,674],'lotte-cinema-dir.jpg':[1500,569],'lotte-cinema-tasktime.jpg':[1500,657],'lotte-cinema-success.jpg':[1500,657],'dmd-graduation-theme.jpg':[1500,842],'dmd-graduation-survey.jpg':[1500,608],'dmd-graduation-keywords.jpg':[1500,579],'dmd-graduation-users.jpg':[1500,559],'dmd-graduation-offline.jpg':[1500,752],'dmd-graduation-profile.jpg':[1500,846],'dmd-graduation-team.jpg':[1500,847],'dmd-graduation-motif.jpg':[1500,544],'korail-talk-heuristic.png':[684,504],'korail-talk-bench.png':[1500,295],'lotte-cinema-market-1.png':[412,630],'lotte-cinema-market-2.png':[394,630],'lotte-cinema-market-3.png':[508,630]};
/* 장표 그림이 있으면 자리표시 대신 그림을 넣는다. 없으면 그대로 자리표시가 남는다 */
const slot=(label,file)=>{
  if(!file)return ph('',label);
  const z=CASE_SIZE[file];
  const wh=z?' width="'+z[0]+'" height="'+z[1]+'"':'';
  return `<figure class="case-figure"><img src="images/case/${file}"${wh} alt="" loading="lazy" decoding="async"></figure>`;
};
const visual=(kind,imgs)=>{const g=imgs||[];return `<div class="section-visual">${
  kind==='single'
  ?`<div class="visual-single">${slot('프로젝트 이미지',g[0])}</div>`
  :kind==='pair'
  ?`<div class="visual-pair">${slot('설계 화면 1',g[0])}${slot('설계 화면 2',g[1])}</div>`
  :kind==='asymmetric'
  ?`<div class="visual-asymmetric">${slot('조사 · 분석 자료',g[0])}${slot('상세 이미지',g[1])}</div>`
  :`<div class="visual-wide">${slot('프로젝트 이미지 1',g[0])}${slot('프로젝트 이미지 2',g[1])}${slot('프로젝트 이미지 3',g[2])}</div>`
}</div>`;};
/* 본문 제목은 작은 영문 + 큰 한글, 본문 문단은 이미지 자리 위에 */
document.querySelector('#detail-sections').innerHTML=project.sections.map((section,i)=>`<section class="case-section" id="${section[0]}"><div class="section-heading"><h2><em><b>${String(i+1).padStart(2,'0')}</b>${section[1]}</em>${section[2]}</h2><div class="section-body">${section[4].map(para=>`<p>${para}</p>`).join('')}</div></div>${visual(section[3],section[5])}</section>`).join('');
/* 목차는 한글 이름만 (칸 폭이 210px) */
document.querySelector('#section-nav').innerHTML=project.sections.map((section,i)=>`<a href="#${section[0]}" class="${i===0?'is-active':''}">${String(i+1).padStart(2,'0')}　${section[2]}</a>`).join('');
/* 하단 다른 프로젝트 — 목록 페이지의 INDEX 행과 같은 형식 */
document.querySelector('#other-projects-list').innerHTML=projects
  .filter(item=>item.id!==project.id)
  .map(item=>`
    <article class="project-row">
      <a class="project-row__link" href="project-detail.html?project=${item.id}" aria-label="${item.title} 상세 페이지로 이동">
        <span class="project-row__cats">${item.type.split(' · ').map(cat=>`<span>${cat}</span>`).join('')}</span>
        <span class="project-row__year">${item.period}</span>
        <span class="project-row__name">${item.title}<i aria-hidden="true">↗</i></span>
        <span class="project-row__desc">${item.summary}</span>
      </a>
    </article>`).join('');
const topButton=document.querySelector('#top-button');topButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));const updateTopButton=()=>topButton.classList.toggle('is-visible',scrollY>700);addEventListener('scroll',updateTopButton,{passive:true});updateTopButton();
const navLinks=[...document.querySelectorAll('#section-nav a')];const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;navLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${visible.target.id}`));},{rootMargin:'-15% 0px -65% 0px',threshold:[0,.2,.5]});document.querySelectorAll('.case-section').forEach(section=>observer.observe(section));
