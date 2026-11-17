/* ══════════════════════════════════════════════════════════════
   역량 카드 — 2×2 네 장
   메인(index.html) ABOUT 미리보기와 소개(about.html) SKILLS 가
   같은 카드를 써야 하므로 이 파일 하나로 두고 양쪽에서 불러온다.
   그릴 자리는 두 페이지 모두 #skill-list 다.

   2026-11-17 바뀐 것 (사용자 지정)
     HOW I PLAY 가 프로젝트별 역량 키워드를 다 보여 주게 되면서
     `UX · UI RESEARCH` 와 `협업 역량` 두 장이 그것과 통째로 겹쳤다.
     두 장을 빼고 그 자리에 이력서에만 있던 사실을 넣는다.
       윗줄  TOOL · AI          (도구 이야기는 HOW I PLAY 에 없다 — 그대로 둔다)
       아랫줄 교내활동 · 경력사항  (이력서에서 가져옴)
     빠진 두 장에서 건질 것은 HOW I PLAY 로 옮겼다 —
     심층인터뷰(FGI) · 에스노그라피 → 롯데시네마 CHECK
     역할 분담 · 일정 관리          → 롯데시네마 MATE

   2026-11-18 바뀐 것 (사용자 지정)
     네 장이 서로 다른 것을 담게 되어 `/ 001` 번호를 뺐다 — 차례가 있는 묶음이 아니다.
     오른쪽 아래 체스 말 그래픽도 뺐다. 설명하는 바가 없어 글자 자리만 먹었다.

   항목 형식
     name  왼쪽 굵은 칸 (도구 이름 · 날짜)
     use   오른쪽 설명 한 줄
     note  그 아래 한 줄 더 (경력 설명처럼 문장이 필요할 때만)
   ══════════════════════════════════════════════════════════════ */
const skills = [
  {
    title: 'TOOL',
    items: [
      { name: 'Figma', use: '와이어프레임 · 프로토타입 제작, 문서 제작' },
      { name: 'PowerPoint', use: '정보구조도 · 화면설계서 작성, 발표 장표 제작' },
      { name: 'Excel', use: '사용성 평가 데이터 정리, 설문 결과 기초 분석' },
    ],
  },
  {
    title: 'AI',
    items: [
      { name: 'Claude', use: 'AI 기반 장표 제작 · 웹 프로토타입 구현' },
      { name: 'ChatGPT', use: '리서치 보조 · 생성형 이미지 제작 · 장표 제작' },
      { name: 'Gemini', use: '문서 요약 및 정보 비교' },
      { name: 'NotebookLM', use: '리서치 및 정보 문서화' },
    ],
  },
  {
    title: '교내활동',
    items: [
      { name: '2026.09', use: 'AI 동아리 AIM · 바이브 코딩 웹 제작' },
      { name: '2026.09', use: '2026 졸업작품 전시위원회 브랜딩팀' },
      { name: '2026.07', use: '혁신지원사업 ESG RE:ACT 팀장 · AI 윤리 카드뉴스' },
      { name: '2026.03', use: '기획 동아리 초안 · 학과 SNS 카드뉴스 제작' },
      { name: '2025.09', use: '2025 졸업작품 전시회 전시팀' },
    ],
  },
  {
    title: '경력사항',
    items: [
      {
        name: '2025.03 – 2026.07',
        use: '이마트 트레이더스 위례 · 고객 응대 및 행사 운영',
        note: '다양한 문의와 구매 상황을 직접 응대하며 고객의 요구와 선택 기준 파악',
      },
      {
        name: '2026.01 – 2026.03',
        use: 'yugen 잠실점 · 매장 운영 및 고객 응대',
        note: '고객의 요구와 불편을 직접 들으며 상황에 맞는 응대로 구매까지 연결',
      },
    ],
  },
];

/* `이름 — 설명` 한 줄, 필요하면 그 아래 문장 한 줄 더 */
/* HOW I PLAY 의 프로젝트 줄과 같은 틀 — 왼쪽 이름 칸, 오른쪽 설명 칸.
   가운데 `—` 와 글머리 기호는 뺐다. 칸이 갈라져 있으니 둘 다 필요 없다.
   (2026-11-18 사용자 지정) */
const skillItem = (item) => `<li><b>${item.name}</b><span class="skill-card__use">${item.use}</span>${item.note ? `<span class="skill-card__note">${item.note}</span>` : ''}</li>`;

const skillHost = document.querySelector('#skill-list');
if (skillHost) {
  skillHost.innerHTML = skills.map((skill) => `
  <article class="skill-card">
    <h3>${skill.title}</h3>
    ${skill.sub ? `<p class="skill-card__sub">${skill.sub}</p>` : ''}
    <ul>${skill.items.map(skillItem).join('')}</ul>
  </article>
`).join('');
}
