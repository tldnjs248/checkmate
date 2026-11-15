/* 프로젝트 상세 — 확정 원고(2026-10-21) 기준.
   섹션 = [앵커 id, 영문 레이블, 한글 제목, 이미지 배치, [본문 문단]]
   · 제목은 메인 페이지(app.js)와 같은 값을 쓴다(사용자 지정 — 메인 제목으로 통일).
   · 본문은 이미지 자리 위에 둔다. 더미 글자가 보이는 배치(process · evidence)는 쓰지 않는다. */
const projects = [
  {
    id:'korail-talk',number:'01',
    title:'코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    summary:'사용성 평가로 예약 승차권의 반복 탐색 문제를 검증하고, 흩어진 기능을 통합해 조회 시간을 24.5초에서 6.4초로 줄였습니다.',
    type:'UX 개선',period:'2026.03 — 07',
    call:['좌석 자동배정','예약 승차권 조회'],
    role:'문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 개선 범위 전환 제안',
    deliverable:'보고서 · 스토리보드',outputs:['report','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        '탐색 구조를 고쳐 예약 내역을 쉽고 빠르게 확인할 수 있도록 한 프로젝트입니다. 사용성 평가로 예약 승차권 조회 과정의 정보구조와 탐색 경로가 복잡하다는 것을 확인하고, 흩어진 기능을 통합해 예약 관리 경험을 다시 설계했습니다.',
        'KTX는 2025년 기준 하루 평균 약 24만 명이 이용하고, 승차권 구매의 88.2%가 온라인에서 일어납니다. 예매한 뒤에도 모바일로 예약 정보를 관리하게 되면서 승차권 관리 경험의 중요성이 함께 커졌습니다.',
      ],['korail-talk-bg.jpg']],
      ['check','CHECK','처음 잡은 문제와 그 한계','single',[
        '처음 문제는 좌석 자동배정이었습니다. 사용자는 좌석을 직접 고를 것으로 기대하지만, 선택 없이 예매를 진행하면 시스템이 별도 안내 없이 좌석을 배정합니다.',
        '다만 이 문제는 버튼 시인성과 안내 문구로 풀리는 화면 단위 과제였습니다. 예매 전반을 평가할 핵심 문제로 보기에는 근거가 부족하다고 판단해, 좌석 배정 이후의 흐름까지 평가 범위를 넓히자고 제안했습니다.',
      ],['korail-talk-problem.jpg']],
      ['evidence','EVIDENCE','1차 사용성 평가와 아이트래킹','single',[
        '개인적인 판단으로 남기지 않으려 예약 승차권 조회를 평가 과업에 넣었습니다. 기능을 이해하고 능동적으로 탐색하는 미디엄 유저를 참가자로 정하고, 목적지 설정부터 예약 내역 확인까지 다섯 과업으로 시나리오를 짰습니다.',
        '기억보다 인지 · 시스템 상태의 가시화 · 오류 예방, 세 가지 휴리스틱 항목을 기준으로 두고 아이트래킹과 행동 관찰을 함께 진행했습니다.',
      ],['korail-talk-test.jpg']],
      ['finding','FINDING','참가자마다 달랐던 탐색 경로','single',[
        '참가자들은 저마다 다른 메뉴로 예약 내역을 찾았습니다. 전체 메뉴 · 나의 티켓 · 장바구니 · 승차권 예매를 오가며 재탐색이 반복됐습니다.',
        '기능이 있을 자리를 예측하지 못해 경로가 길어졌습니다. 문제의 원인이 특정 화면이 아니라 정보구조와 기능 배치 전반에 걸쳐 있다는 것이 여기서 드러났습니다.',
      ],['korail-talk-finding.jpg']],
      ['move','MOVE','개선 대상을 바꾼 판단','single',[
        '좌석 선택은 화면 단위 개선 과제로, 예약 승차권 조회는 탐색 경로와 정보구조 전반의 문제로 판단해 최종 개선 대상을 바꿨습니다.',
        '통합의 기준은 네 서비스를 견주어 잡았습니다. SRT 는 승차권 확인을 하단 탭에 고정해 위치를 기억할 필요를 없앴고, 티머니GO 는 예약 · 결제 내역을 하나로 묶었으며, 야놀자는 내 예약을 단일 경로로 제공합니다.',
      ],['korail-talk-bench.jpg']],
      ['build','BUILD','조회 구조와 화면 개선','single',[
        '흩어져 있던 장바구니와 예약 승차권 조회를 \u0027나의 티켓\u0027 메뉴로 통합했습니다. 장바구니 화면에서 중복되던 결제 버튼을 하나로 합치고, 예약 변경 기능을 더했습니다.',
        '하단에 있던 장바구니는 상단 탭으로 올려 \u0027승차권 · 장바구니 · 이용권 · 정기권 패스\u0027로 정리했습니다. 예약 관리 기능을 한 영역에서 일관되게 다루도록 했습니다.',
      ],['korail-talk-merge.jpg']],
      ['checkmate','CHECKMATE','2차 평가 결과','pair',[
        '예약 내역 확인 평균 수행 시간이 24.5초에서 6.4초로, 18.1초 줄었습니다. 기능 인지 점수는 37.5점에서 100점이 됐습니다.',
        '게이즈플롯 · 히트맵 · 클러스터를 합친 전체 평균 성공 비율은 85% 였고, 대부분의 참가자가 같은 경로로 예약 내역을 찾았습니다. 탐색 구조가 사용자에게 일관되게 인지된다는 뜻입니다.',
        '프로젝트는 과목 우수작으로 선정됐습니다.',
      ],['korail-talk-result.jpg','korail-talk-quant.jpg']],
    ]
  },
  {
    id:'mould',number:'02',
    title:'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    summary:'사용자 요구와 운영 조건을 함께 따져 공간 · 태블릿 · 영상으로 이어지는 서비스를 설계했습니다.',
    type:'서비스 기획 · 브랜드 / 경험',period:'2026.03 — 07',
    call:['화려한 기술','적용 가능성 · 운영 지속성'],
    role:'팀장 · 사용자 조사 · 서비스 구조 설계 · 공간 경험 · 영상 시나리오',
    deliverable:'제안서',outputs:['proposal'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '인테리어를 바꾸지 않고도 상황에 따라 공간 분위기를 전환하는 주거 경험을 제안했습니다. 팀장으로서 조사부터 서비스 구조와 경험 시나리오까지 기획했습니다.',
      ]],
      ['check','CHECK','사용자와 주거 환경 조사','pair',[
        '주거 · 공간 · 미디어 트렌드를 조사해 고정된 공간에서도 분위기를 바꾸고 싶어 하는 요구를 확인했습니다. 미디어 감상이 아니라 생활 장면과 이어지는 경험으로 정의했습니다.',
      ]],
      ['condition','CONDITION','기술 · 운영 조건','asymmetric',[
        '화려한 기술만으로는 실제 주거에서 오래 쓰이기 어려웠습니다. 일상적인 사용, 콘텐츠의 지속적인 교체, 공간별 설치와 유지를 함께 따졌습니다.',
      ]],
      ['move','MOVE','서비스 구조를 좁힌 기준','wide',[
        '팀장으로서 기술의 화려함보다 적용 가능성과 운영 지속성을 우선 기준으로 삼자고 제안했습니다. 이 기준으로 기술 범위를 좁히고 서비스의 중심을 정리했습니다.',
      ]],
      ['build','BUILD','공간 · 태블릿 · 영상 경험','pair',[
        '사용자 요구를 공간별 룸 콘셉트와 이용 시나리오로 옮겼습니다. 태블릿에서 콘텐츠를 골라 공간에 적용하는 흐름을 설계하고, 영상 스토리보드를 작성했습니다.',
      ]],
      ['mate','MATE','영상팀과의 협업','pair',[
        '영상의 완성도와 연출은 영상팀 디자이너가 맡았습니다. 저는 서비스의 장점이 어떤 장면과 순서로 전달될지 정하고 공간 경험과 어긋나지 않도록 조율했습니다.',
      ]],
      ['checkmate','CHECKMATE','제안 결과','wide',[
        '공간 · 태블릿 · 영상이 하나로 이어지는 서비스 제안을 완성했습니다. 커뮤니케이션 국제 어워드 디지털미디어디자인 부문 특별상을 받았습니다.',
      ]],
    ]
  },
  {
    id:'lotte-cinema',number:'03',
    title:'롯데시네마 | 특별관 탐색 경험 개선',
    summary:'영화 탐색부터 예매까지를 하나의 흐름으로 잇고, 특별관을 같은 기준으로 견주어 고를 수 있게 했습니다.',
    type:'UX 개선',period:'2026.09 — 12',
    call:['결제 개선','특별관 탐색'],
    role:'일정 관리 · 사용성 평가 · 요구사항 정의 · 프로토타입 · 화면설계서',
    deliverable:'제안서 · 스토리보드',outputs:['proposal','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        'OTT 와 경쟁하면서 영화관은 특별관과 공연 · 체험형 콘텐츠로 차별화된 관람 경험을 넓히고 있습니다. 롯데컬처웍스도 관객 수를 늘리기보다 객단가와 경험 가치를 높이는 쪽에 집중하고 있습니다.',
        '영화 탐색부터 예매까지를 하나의 연속된 흐름으로 개선해, 사용자가 특별관을 더 쉽고 편하게 고를 수 있도록 한 프로젝트입니다.',
      ],['lotte-cinema-issues.jpg']],
      ['check','CHECK','범위를 좁힌 근거','pair',[
        '결제 단계는 해결책이 정책과 시스템에 달려 있어 화면으로 바꿀 것이 없었습니다. 그래서 결제를 범위에서 덜어냈습니다.',
        '대신 특별관을 택했습니다. 전체 관객이 13.8% 줄어드는 동안 특수상영 매출은 46.3% 늘었습니다. 회사의 전략과 사용자의 수요가 같은 곳을 가리키고 있었습니다.',
      ]],
      ['evidence','EVIDENCE','1차 사용성 평가와 아이트래킹','single',[
        '2026년 9월 28일, 참가자 다섯 명에게 다섯 과업을 주고 아이트래킹과 함께 1차 평가를 진행했습니다. 시나리오는 \u0027이번 주 토요일 저녁 8시 이후, 친구 생일이라 잠실에서 함께 영화를 본다\u0027 였습니다.',
        '과업은 영화 탐색 · 관람 장소 비교 · 특별관 비교 · 상영시간 선택 · 좌석 선택 다섯 단계였습니다.',
      ],['lotte-cinema-test.jpg']],
      ['finding','FINDING','세 갈래로 나뉜 문제','single',[
        '첫 과업 성공률은 40% 였습니다. 다섯 중 세 명이 상세 화면을 거치지 않고 곧장 예매로 갔습니다. 두 번째 과업은 45% 로 가장 낮았습니다.',
        '한 참가자는 \u0027아니 잠실이 없는데?\u0027 를 다섯 번 반복했고, 다른 참가자는 영화와 영화 예매 화면을 다섯 번 오가며 163초를 썼습니다. 문제는 특별관 비교 · 영화 탐색 · 영화관 탐색 세 갈래로 나뉘었습니다.',
      ],['lotte-cinema-finding.jpg']],
      ['move','MOVE','탐색의 출발점을 셋으로','single',[
        '사용자마다 예매를 시작하는 자리가 달랐습니다. 보고 싶은 영화가 정해진 목적형, 지역과 극장을 먼저 고르는 실용형, GV 나 특별전 같은 관람 방식을 찾는 경험형 셋으로 나눴습니다.',
        '세 출발점이 서로 다른 자리에서 시작하되 공통 예매 단계에서 합류하도록 흐름을 설계했습니다.',
      ],['lotte-cinema-scenario.jpg']],
      ['build','BUILD','일곱 가지 기능과 화면','single',[
        '요구사항을 일곱 가지 기능으로 정리하고, 각각 어느 화면에서 어떻게 쓰이는지 붙였습니다. 특별관 비교는 예매 시트의 스페셜관 칩 · 정보 시트 · 비교 표와 좌석 시야 3D 보기로, 영화 탐색은 홈 통합 검색과 관람 목적 알약으로 풀었습니다.',
        '영화관 탐색은 지역 기반 검색과 여러 영화관을 나란히 보는 화면으로 풀었습니다. 회차가 없을 때 띄울 문구까지 함께 정했습니다.',
      ],['lotte-cinema-features.jpg']],
      ['current','CURRENT POSITION','현재 단계','wide',[
        '요구사항과 정보구조 설계를 마치고 프로토타입을 만들고 있습니다. 개선 후 수치는 같은 과업과 조건으로 2차 평가를 마친 뒤 이 자리에 넣을 예정입니다.',
      ]],
    ]
  },
  {
    id:'dmd-graduation',number:'04',
    title:"Delight Insight 2026 | LET'S SYNC 브랜딩",
    summary:'졸업생 설문에서 브랜드 키워드를 뽑고, 전시 현장과 웹을 잇는 온 · 오프라인 관람 경험을 설계했습니다.',
    type:'브랜드 / 경험',period:'2026.09 — 12',
    role:'공동 기획 · 관람객 조사 · 콘텐츠 구조 · 화면설계 · 카피라이팅',
    deliverable:'기획서 · 스토리보드',outputs:['plan','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','single',[
        '계원예술대학교 디지털미디어디자인과 2026 졸업전시 DELIGHT INSIGHT 의 브랜딩입니다. 기획 · 디자인 · 개발 8명이 참여한 팀에서 공동 기획자로 전시 방향과 웹 콘텐츠를 맡았습니다.',
        '서로 다른 개성이 연결될 때 새로운 결과가 만들어진다는 것을 전시 전체의 주제로 삼았습니다.',
      ],['dmd-graduation-theme.jpg']],
      ['check','CHECK','주제를 사람 말에서 찾다','single',[
        '주제를 먼저 정하지 않고 졸업생에게 물었습니다. 구글 폼으로 9월 6일부터 16일까지 학과 졸업 예정자를 대상으로 설문했습니다.',
        '함께 작업할 때 무엇이 달라지냐는 물음에 52.3% 가 아이디어와 관점이 확장된다고 답했습니다. 결과물의 방향을 바꾼 요인으로는 51.1% 가 주변인의 피드백과 외부 관점을 꼽았고, 47.4% 는 협업으로 실제 다른 결과가 만들어졌다고 했습니다.',
      ],['dmd-graduation-survey.jpg']],
      ['finding','FINDING','답변에서 뽑은 세 키워드','single',[
        '답을 묶어 브랜드 키워드 셋을 뽑았습니다. 개성(Differents)은 서로 다른 성격과 관점, 연결(Connect)은 서로에게 이끌려 영향을 주고받는 것, 생성(Creation)은 연결되며 처음에는 없던 결과가 만들어지는 것입니다.',
        'SYNC 를 단순한 동기화가 아니라 서로 다른 개성이 당기고 교차하며 새롭게 창조되는 생성적 연결로 정의하고, 슬로건을 LET\u0027S SYNC! — 당기고, 닿고, 스파크! 로 정했습니다.',
      ],['dmd-graduation-keywords.jpg']],
      ['move','MOVE','세 종류의 관람객','single',[
        '관람객이 한 종류가 아니었습니다. 바쁜 전시 중에 짧게 참여하고 동기와 경험을 남기고 싶은 재학생, 관심 작품으로 학과 특성을 이해하고 싶은 입시생, 관심 작품을 효율적으로 발견하고 현장에서 놓친 정보를 다시 찾고 싶은 외부 관람객입니다.',
        '셋의 필요를 탐색 · 참여 · 기록으로 정리하고, 각각에 맞는 해결을 따로 두었습니다.',
      ],['dmd-graduation-users.jpg']],
      ['build','BUILD','구조에서 화면까지','pair',[
        '웹은 이야기를 따라가는 흐름을 메인에 두고, 작품을 찾는 흐름을 PROJECT 와 STUDENT 로 갈랐습니다. 학생 113명과 17개 팀의 프로필을 직군으로 거르고 이름으로 찾을 수 있게 했습니다.',
        '현장은 관람객이 완성하는 포스터 리플렛, 방향 가이드와 지시선으로 이동까지 경험으로 잇는 동선 안내, 관람의 순간을 남기는 영수증 사진기로 구성했습니다. 온라인에서 시작한 탐색이 현장으로, 현장의 경험이 다시 온라인으로 이어지게 했습니다.',
      ],['dmd-graduation-profile.jpg','dmd-graduation-team.jpg']],
      ['mate','MATE','직군 간 협업과 조율','single',[
        '8명의 의견이 여러 경로로 섞여 들어왔습니다. 바로 반영할 요청과 전체 방향에 영향을 주는 사안을 갈라, 앞의 것은 그날 처리하고 뒤의 것은 회의 안건으로 올렸습니다.',
        '비주얼 방향이 정해지지 않아 웹 작업이 멈췄을 때는 디자인팀과 무드보드와 포스터 시안을 함께 검토해 방향을 확정하고 작업을 다시 돌렸습니다.',
      ],['dmd-graduation-offline.jpg']],
      ['current','CURRENT POSITION','현재 단계','single',[
        '브랜드 방향과 웹 콘텐츠 구조를 정리하고 전시 웹사이트를 만들고 있습니다. 최종 결과는 전시가 끝난 뒤 확정된 범위만 더할 예정입니다.',
      ],['dmd-graduation-motif.jpg']],
    ]
  },
  {
    id:'portfolio-site',number:'05',
    title:'CHECKMATE | 포트폴리오 웹사이트 기획·제작',
    summary:'근거를 쌓아 방향을 결정하는 과정이 읽히도록 포트폴리오를 직접 기획하고 구현했습니다.',
    type:'AI · 브랜드 / 경험',period:'2026.09 — 12',
    role:'콘셉트 기획 · 정보구조 · 화면설계 · 콘텐츠 작성 · AI 협업 설계 · 구현',
    deliverable:'스토리보드',outputs:['storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '완성된 결과물이 아니라, 문제를 어떻게 발견하고 무엇을 근거로 방향을 바꿨는지가 읽히는 포트폴리오를 기획부터 구현까지 직접 만들었습니다.',
      ]],
      ['check','CHECK','기획자 포트폴리오 사례 분석','pair',[
        '기획자 · UX 포트폴리오 사례를 모아 구성 방식과 정보 위계를 비교했습니다. 방법론과 완성 화면은 잘 보였지만 왜 방향을 바꿨는지는 빠르게 읽히지 않았습니다.',
      ]],
      ['finding','FINDING','보여줘야 할 기획 역량','asymmetric',[
        '프로젝트마다 방법은 달랐지만 공통된 업무 방식이 있었습니다. 근거를 쌓아 문제를 좁히고, 그 근거를 실행할 수 있는 방향으로 잇는 것입니다.',
      ]],
      ['move','MOVE','CHECKMATE 콘셉트와 구조','wide',[
        '근거를 쌓아 결정적인 수로 잇는다는 뜻에서 CHECKMATE를 콘셉트로 삼았습니다. 모든 프로젝트가 확인 → 발견 → 결정 → 결과 순서로 읽히게 구조를 짰습니다.',
      ]],
      ['build','BUILD','정보구조 · 화면 · 구현','pair',[
        '메인 · 목록 · 상세 · 소개로 정보구조를 짜고 화면설계서를 쓴 뒤 직접 구현했습니다. AI가 제안한 것은 원본과 대조해 확인하고 최종 문구는 직접 판단했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 결과','wide',[
        '네 페이지의 구조와 주요 기능을 구현해 실제 주소로 배포했습니다. 현재 프로젝트별 이미지와 산출물 링크를 연결하고 전체 문구를 다듬고 있습니다.',
      ]],
    ]
  }
];

const params=new URLSearchParams(location.search);const id=params.get('project')||'korail-talk';const index=Math.max(0,projects.findIndex(project=>project.id===id));const project=projects[index];const previous=projects[(index-1+projects.length)%projects.length];const next=projects[(index+1)%projects.length];
/* 커버 이미지가 있는 프로젝트 — 파일은 images/<id>-band.jpg */
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
/* 장표 그림이 있으면 자리표시 대신 그림을 넣는다. 없으면 그대로 자리표시가 남는다 */
const slot=(label,file)=>file
  ?`<figure class="case-figure"><img src="images/case/${file}" alt="" loading="lazy" decoding="async"></figure>`
  :ph('',label);
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
document.querySelector('#detail-sections').innerHTML=project.sections.map((section,i)=>`<section class="case-section" id="${section[0]}"><div class="section-heading"><span>${String(i+1).padStart(2,'0')}</span><h2><em>${section[1]}</em>${section[2]}</h2><div class="section-body">${section[4].map(para=>`<p>${para}</p>`).join('')}</div></div>${visual(section[3],section[5])}</section>`).join('');
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
