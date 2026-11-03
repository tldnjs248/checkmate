/* 프로젝트 상세 — 확정 원고(2026-10-21) 기준.
   섹션 = [앵커 id, 영문 레이블, 한글 제목, 이미지 배치, [본문 문단]]
   · 제목은 메인 페이지(app.js)와 같은 값을 쓴다(사용자 지정 — 메인 제목으로 통일).
   · 본문은 이미지 자리 위에 둔다. 더미 글자가 보이는 배치(process · evidence)는 쓰지 않는다. */
const projects = [
  {
    id:'korail-talk',number:'01',
    title:'코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    summary:'사용성 평가로 예약 승차권의 반복 탐색 문제를 검증하고 조회 구조를 개선했습니다.',
    type:'UX 개선',period:'2026.03 — 07',
    call:['좌석 자동배정','예매 전반'],
    role:'문헌 조사 · 아이트래킹 · 사용성 평가 분석 · 범위 확장 제안',
    deliverable:'보고서 · 스토리보드',outputs:['report','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '좌석 자동배정의 불편으로 시작한 과제입니다. 사용성 평가를 근거로 개선 대상을 예약 승차권 조회로 바꾸고, 조회 구조를 다시 설계했습니다.',
      ]],
      ['check','CHECK','평가 범위를 다시 살펴본 이유','pair',[
        '처음 문제는 안내 문구만 고쳐도 풀리는 범위였습니다. 예매 전반을 평가할 가치가 있는지 보려고 좌석 배정 이후의 흐름까지 넓혀 보자고 제안했습니다.',
      ]],
      ['evidence','EVIDENCE','사용자 행동 검증','asymmetric',[
        '개인적인 판단으로 남기지 않으려 예약 승차권 조회를 평가 과업에 넣었습니다. 아이트래킹 결과 참가자 5명 중 2명이 상단과 하단 메뉴를 반복해 오갔습니다.',
      ]],
      ['finding','FINDING','승차권 조회 문제','pair',[
        '같은 승차권 정보가 여러 메뉴에 흩어져 있었습니다. 단순한 과업인데도 어느 메뉴로 가야 할지 판단하지 못해 화면을 반복해서 탐색했습니다.',
      ]],
      ['move','MOVE','개선 우선순위 전환','wide',[
        '개선 대상을 좌석 자동배정에서 예약 승차권 조회로 바꿨습니다. 승차권 정보를 중심으로 메뉴를 다시 묶고, 첫 화면에서 다음 행동이 보이도록 순서를 조정했습니다.',
      ]],
      ['build','BUILD','조회 구조와 화면 개선','pair',[
        '흩어진 정보를 사용 목적에 따라 다시 분류해 정보구조와 사용자 흐름을 정리했습니다. 이를 화면설계서와 프로토타입으로 옮겨 팀과 함께 검증했습니다.',
      ]],
      ['checkmate','CHECKMATE','개선 결과','wide',[
        '2차 평가에서 예약 승차권 조회 시간이 24.5초에서 6.4초로 줄었습니다. 반복 탐색 없이 한 번에 찾았고, 프로젝트는 과목 우수작으로 선정됐습니다.',
      ]],
    ]
  },
  {
    id:'mould',number:'02',
    title:'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    summary:'사용자 요구와 운영 조건을 함께 따져 공간 · 태블릿 · 영상으로 이어지는 서비스를 설계했습니다.',
    type:'서비스 기획 · 브랜드 / 경험',period:'2026.03 — 07',
    call:['화려한 기술','적용 가능성 · 운영 지속성'],
    role:'팀장 · 사용자 조사 · 서비스 구조 설계 · 공간 경험 · 영상 시나리오',
    deliverable:'제안서 · 기획서',outputs:['proposal','plan'],
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
    summary:'영화 검색부터 특별관 비교까지, 롯데시네마 앱의 탐색 구조를 개선했습니다.',
    type:'UX 개선',period:'2026.09 — 12',
    call:['결제 개선','탐색 + 예매 통합'],
    role:'일정 관리 · 사용성 평가 · 요구사항 정의 · 프로토타입 · 화면설계서',
    deliverable:'제안서 · 스토리보드',outputs:['proposal','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '영화산업 흐름에 따라 롯데시네마의 특별관 전략을 강화할 수 있는 방향으로 롯데시네마 앱의 영화 검색부터 특별관 비교까지, 탐색 구조를 개선한 프로젝트입니다.',
      ]],
      ['check','CHECK','범위를 좁힌 근거','pair',[
        '결제는 해결책이 정책과 시스템에 달려 화면으로 바꿀 것이 없었습니다. 반면 전체 관객이 13.8% 줄 때 특수상영 매출은 46.3% 늘어, 특별관이 기회였습니다.',
      ]],
      ['finding','FINDING','개선 전 사용성 평가 결과','asymmetric',[
        '사용자 다섯 명에게 다섯 과업을 주고 아이트래킹과 함께 1차 평가를 했습니다. 영화 탐색 성공률은 40%, 특별관 안내 화면까지 닿은 참가자는 한 명도 없었습니다.',
      ]],
      ['move','MOVE','결정적인 수','wide',[
        '특별관을 모르는 것이 아니라 알아보는 자리와 고르는 자리가 떨어져 있었습니다. 소개 글을 다섯 항목으로 맞춰 견주게 하고 그 자리에서 바로 예매로 넘어가게 했습니다.',
      ]],
      ['build','BUILD','근거에서 화면까지','pair',[
        '근거를 요구사항 여덟 건으로 묶고 각각에 우선순위와 검증 방법을 붙였습니다. 세 가지 탐색 출발점이 공통 예매 단계에서 합류하는 흐름으로 정리했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 단계','wide',[
        '요구사항과 정보구조 설계를 마치고 프로토타입을 만들고 있습니다. 개선 후 수치는 2차 평가를 마친 뒤 이 자리에 넣을 예정입니다.',
      ]],
    ]
  },
  {
    id:'dmd-graduation',number:'04',
    title:'DMD Graduation Exhibition | 디지털미디어디자인과 졸업전시 브랜딩',
    summary:'학과의 여러 작업을 하나의 브랜드 경험으로 잇고, 관람 목적에 맞는 탐색 경로를 설계했습니다.',
    type:'브랜드 / 경험',period:'2026.09 — 12',
    role:'공동 기획 · 관람객 조사 · 콘텐츠 구조 · 화면설계 · 카피라이팅',
    deliverable:'기획서 · 스토리보드',outputs:['plan','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '졸업전시의 정체성을 구체화하고, 처음 온 관람객도 필요한 정보를 쉽게 찾을 수 있도록 웹사이트와 전시 현장을 잇는 온 · 오프라인 경험을 설계했습니다.',
      ]],
      ['check','CHECK','세 종류의 관람객','pair',[
        '작품을 빨리 찾으려는 외부 관람객, 학과를 알아보려는 입시생, 운영하느라 볼 시간이 없는 재학생이 함께 옵니다. 셋이 알고 싶은 것과 찾는 순서가 모두 달랐습니다.',
      ]],
      ['finding','FINDING','하나의 비유로 묶는 방향의 한계','asymmetric',[
        '초기에는 전시를 하나의 비유로 묶는 방향을 검토했습니다. 그러나 한 표현으로 규정하면 학과의 여러 영역과 개별 작업이 묻힐 수 있었습니다.',
      ]],
      ['move','MOVE','두 흐름을 가르는 구조','wide',[
        'SYNC 개념은 지도 교수의 제안에서 나왔습니다. 저는 이야기를 따라가는 흐름을 메인에, 작품을 찾는 흐름을 PROJECT · STUDENT에 갈라 두었습니다.',
      ]],
      ['build','BUILD','구조에서 화면까지','pair',[
        '관람객 세 유형에게 필요한 것을 탐색 · 참여 · 기록으로 정리했습니다. 학생 113명과 17개 팀을 직군으로 거르고 이름으로 찾을 수 있게 했습니다.',
      ]],
      ['mate','MATE','직군 간 협업과 조율','pair',[
        '여러 직군의 의견을 같은 방식으로 처리하지 않았습니다. 바로 반영할 요청과 방향에 영향을 주는 내용을 갈라 회의 안건과 다음 작업으로 정리했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 결과','wide',[
        '브랜드 방향과 웹 콘텐츠 구조를 정리하고 전시 웹사이트를 만들고 있습니다. 최종 결과는 전시가 끝난 뒤 확정된 범위만 더할 예정입니다.',
      ]],
    ]
  },
  {
    id:'portfolio-site',number:'05',
    title:'CHECKMATE | AI를 활용한 포트폴리오 웹사이트 기획·제작',
    summary:'근거를 쌓아 방향을 결정하는 과정이 읽히도록 포트폴리오를 직접 기획하고 구현했습니다.',
    type:'AI · 브랜드 / 경험',period:'2026.09 — 12',
    role:'콘셉트 기획 · 정보구조 · 화면설계 · 콘텐츠 작성 · AI 협업 설계 · 구현',
    deliverable:'스토리보드 · 제안서',outputs:['storyboard','proposal'],
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
const visual=kind=>kind==='pair'
  ?`<div class="visual-pair">${ph('','설계 화면')}${ph('','설계 화면')}</div>`
  :kind==='asymmetric'
  ?`<div class="visual-asymmetric">${ph('','조사 · 분석 자료')}${ph('','상세 이미지')}</div>`
  :ph('visual-wide','프로젝트 이미지');
/* 본문 제목은 작은 영문 + 큰 한글, 본문 문단은 이미지 자리 위에 */
document.querySelector('#detail-sections').innerHTML=project.sections.map((section,i)=>`<section class="case-section" id="${section[0]}"><div class="section-heading"><span>${String(i+1).padStart(2,'0')}</span><h2><em>${section[1]}</em>${section[2]}</h2><div class="section-body">${section[4].map(para=>`<p>${para}</p>`).join('')}</div></div>${visual(section[3])}</section>`).join('');
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
