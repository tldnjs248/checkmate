/* 프로젝트 상세 — 확정 원고(2026-10-21) 기준.
   섹션 = [앵커 id, 영문 레이블, 한글 제목, 이미지 배치, [본문 문단]]
   · 제목은 메인 페이지(app.js)와 같은 값을 쓴다(사용자 지정 — 메인 제목으로 통일).
   · 본문은 이미지 자리 위에 둔다. 더미 글자가 보이는 배치(process · evidence)는 쓰지 않는다. */
const projects = [
  {
    id:'korail-talk',number:'01',
    title:'코레일톡 | 사용자 검증을 통한 예약 승차권 조회 UX/UI 개선',
    summary:'사용성 평가와 아이트래킹을 통해 예약 승차권의 반복 탐색 문제를 검증하고, 조회 구조와 사용자 경로를 개선한 프로젝트입니다.',
    type:'UX 개선',period:'2026.03 — 07',
    call:'팀이 다른 문제를 찾던 시점에 예약 승차권 조회 불편을 제시하고, 평가 범위를 예매 전반으로 넓히자고 제안',
    role:'철도 이용 환경 및 관련 문헌 조사 · 아이트래킹과 사용성 평가 결과 분석 · 평가 범위 확장 제안',
    deliverable:'보고서 · 스토리보드',outputs:['report','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '코레일톡의 좌석 자동배정 과정에서 발생하는 불편을 개선하는 과제로 시작했습니다. 철도 이용 환경과 관련 자료를 조사하고, 아이트래킹과 사용성 평가 결과를 분석해 개선 방향의 근거를 정리했습니다.',
      ]],
      ['check','CHECK','평가 범위를 다시 살펴본 이유','pair',[
        '최초에 발견한 좌석 자동배정 문제는 안내 문구나 일부 화면 요소를 수정하는 것만으로도 해결할 수 있는 문제였습니다. 이 문제만으로 예매 전반의 사용성 평가를 진행할 필요가 있는지 확인하기 위해 좌석 배정 이후의 사용자 흐름까지 살펴봤습니다.',
        '이 과정에서 좌석을 확인하거나 변경·취소하려는 사용자가 예약 승차권을 다시 찾아야 하지만, 그 위치와 이동 경로를 예상하기 어렵다는 문제를 발견했습니다.',
      ]],
      ['evidence','EVIDENCE','사용자 행동 검증','asymmetric',[
        '발견한 문제를 개인적인 판단으로 남기지 않기 위해 예약 승차권 조회 과업을 사용성 평가에 포함했습니다. 아이트래킹과 행동 관찰 결과, 참가자 5명 중 2명이 원하는 승차권을 찾기 위해 상단과 하단 메뉴를 반복해서 탐색했습니다.',
      ]],
      ['finding','FINDING','승차권 조회 문제','pair',[
        '동일한 승차권 관련 정보가 서로 다른 메뉴에 나뉘어 있었습니다. 예약 승차권을 확인하는 단순한 과업임에도 사용자는 적절한 메뉴를 판단하지 못해 여러 화면을 반복적으로 탐색했습니다.',
      ]],
      ['move','MOVE','개선 우선순위 전환','wide',[
        '사용성 평가 결과를 바탕으로 개선 우선순위를 좌석 자동배정에서 예약 승차권 조회 과정으로 전환했습니다. 벤치마킹 결과를 참고해 승차권 정보를 중심으로 탐색 경로와 메뉴 체계를 재구성하고, 사용자가 첫 화면에서 다음 행동을 예상할 수 있도록 정보의 우선순위를 조정했습니다.',
      ]],
      ['build','BUILD','조회 구조와 화면 개선','pair',[
        '분산된 승차권 정보를 사용 목적에 따라 다시 분류하고, 정보구조도와 사용자 흐름을 정리했습니다. 개선 방향을 와이어프레임과 화면설계서로 구체화하고, 프로토타입으로 제작해 팀과 함께 사용성을 검증했습니다.',
      ]],
      ['checkmate','CHECKMATE','개선 결과','wide',[
        '2차 사용성 평가 결과, 개선 전 평균 24.5초가 소요됐던 예약 승차권 조회 과업의 평균 수행 시간이 개선 후 6.4초로 단축됐습니다. 프로젝트는 과목 우수작으로 선정됐습니다.',
      ]],
    ]
  },
  {
    id:'mould',number:'02',
    title:'MOULD | 공간을 개인화하는 몰입형 미디어 기반 주거 경험 서비스',
    summary:'사용자 요구와 기술의 적용·운영 조건을 검토하고, 서비스 콘셉트를 공간별 경험과 태블릿 UX, 영상 시나리오로 구체화한 프로젝트입니다.',
    type:'서비스 기획 · 브랜드 / 경험',period:'2026.03 — 07',
    call:'기술의 화려함 대신 적용 가능성과 운영 지속성을 우선 기준으로 제안해 기술 범위를 좁힘',
    role:'팀장 · 사용자 및 트렌드 조사 · 서비스 구조 설계 · 공간별 경험 및 영상 시나리오 기획',
    deliverable:'제안서 · 기획서',outputs:['proposal','plan'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '물리적인 인테리어를 반복해서 변경하지 않고도 사용자의 상황과 취향에 따라 공간 분위기를 전환할 수 있는 주거 경험을 제안했습니다. 팀장으로서 사용자와 트렌드를 조사하고, 브랜드 콘셉트부터 서비스 구조와 경험 시나리오까지 기획했습니다.',
      ]],
      ['check','CHECK','사용자와 주거 환경 조사','pair',[
        '주거·공간·미디어 트렌드와 사용자의 생활 방식을 조사해, 고정된 공간 안에서도 상황에 따라 분위기와 콘텐츠를 바꾸고 싶은 요구를 확인했습니다. 이를 단순한 미디어 감상이 아니라 생활 장면과 연결되는 공간 경험의 기회로 정의했습니다.',
      ]],
      ['condition','CONDITION','기술·운영 조건','asymmetric',[
        '시각적으로 화려한 기술만으로는 실제 주거 환경에서 지속 가능한 서비스를 만들기 어려웠습니다. 사용자가 일상에서 자연스럽게 이용할 수 있는지, 콘텐츠를 지속해서 제작·교체·운영할 수 있는지, 공간별 설치와 유지가 가능한지를 함께 검토했습니다.',
      ]],
      ['move','MOVE','서비스 구조를 좁힌 기준','wide',[
        '팀장으로서 기술의 화려함보다 적용 가능성과 운영 지속성을 우선 기준으로 삼자고 제안했습니다. 이 기준에 따라 기술 범위를 좁히고, 사용자가 생활 상황에 맞는 콘텐츠를 선택해 공간 경험을 전환하는 구조로 서비스의 중심을 정리했습니다.',
      ]],
      ['build','BUILD','공간·태블릿·영상 경험','pair',[
        '사용자 요구를 공간별 룸 콘셉트와 이용 시나리오로 구체화했습니다. 태블릿에서는 콘텐츠를 탐색하고 공간에 적용하는 흐름을 설계했습니다. 영상에서는 서비스의 핵심 가치와 전체 이용 흐름이 순차적으로 전달되도록 스토리보드를 작성했습니다.',
      ]],
      ['mate','MATE','영상팀과의 협업','asymmetric',[
        '영상의 시각적 완성도와 장면 연출은 영상팀 디자이너가 중심이 되어 제작했습니다. 저는 서비스의 장점이 어떤 장면과 순서로 전달되어야 하는지 정리하고, 공간 경험과 영상 표현이 일치하도록 영상팀과 방향을 조율했습니다.',
      ]],
      ['checkmate','CHECKMATE','제안 결과','wide',[
        '공간 경험과 태블릿 UX, 영상 시나리오가 연결되는 통합 서비스 제안을 완성했습니다. 프로젝트는 커뮤니케이션 국제 어워드 디지털미디어디자인 부문 특별상을 받았습니다.',
      ]],
    ]
  },
  {
    id:'lotte-cinema',number:'03',
    title:'롯데시네마 | 특별관 탐색 경험 개선',
    summary:'결제 개선으로 시작한 과제에서 결제를 범위 밖으로 덜어내고, 사용자가 한 번에 수행하는 탐색과 예매를 하나의 흐름으로 합쳐 특별관 선택까지 이어지도록 개선하는 프로젝트입니다.',
    type:'UX 개선',period:'2026.09 — 12',
    call:'결제 항목은 UX로 풀 수 없다고 보고 범위에서 제외하고, 탐색과 예매를 하나의 흐름으로 통합',
    role:'일정 · 주간 진행 관리 · 1차 사용성 평가 및 결과 분석 · 개선 원칙 및 요구사항 정의 · 프로토타입 · 화면설계서',
    deliverable:'제안서 · 스토리보드',outputs:['proposal','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '과제는 경쟁사의 혜택 적용과 결제 과정을 개선하는 방향으로 시작했습니다. 대상을 롯데시네마로 옮긴 뒤 팀은 탐색 · 예매 · 결제 세 항목을 모두 개선하려 했지만, 저는 결제 단계에서 UX로 풀 수 있는 부분이 거의 없다고 판단했습니다.',
        '결제를 범위에서 빼고, 사용자가 실제로는 한 번에 수행하는 탐색과 예매를 하나의 흐름으로 합쳐 다루자고 제안했습니다. 이 결정은 팀의 Decision Log에 9월 24일자로 남아 있습니다.',
      ]],
      ['check','CHECK','범위를 좁힌 근거','pair',[
        '1년치 앱 스토어 리뷰를 불편 주제 여덟 가지로 나눴습니다. 가장 많은 앱 안정성과 로그인은 개발 이슈로 보고 제외했고, 남은 항목 중 예매 · 결제 · 복구는 33건이었지만 해결책이 결제 정책과 시스템에 달려 있어 화면 설계로 바꿀 수 있는 것이 거의 없었습니다.',
        '같은 기간 산업 조사에서는 전체 관객 수가 13.8% 줄어드는 동안 특수상영 매출이 46.3% 늘었고, 늘어난 특별관 수요는 롯데시네마(2.1배)보다 경쟁사(4.8배)로 쏠리고 있었습니다. 특별관을 강화하는 사업 방향과 그것이 예매로 이어지지 않는 앱 사이에 간극이 있었습니다.',
      ]],
      ['finding','FINDING','사용성 평가에서 드러난 것','asymmetric',[
        '기능을 이해하고 능동적으로 탐색하는 사용자 다섯 명에게 다섯 가지 과업을 주고 아이트래킹과 함께 1차 사용성 평가를 진행했습니다. 과업별 성공 여부 · 완료 시간 · 시선 이동 · 발화를 기록하고, 관찰한 사실과 해석을 분리해 문제 후보를 추렸습니다.',
        '영화를 찾는 과업의 성공률은 40%였습니다. 극장 목록이 지점 이름뿐이라 지역명으로는 찾을 수 없어 "잠실이 없는데?"라는 말이 다섯 번 나왔고, 한 참가자는 163초를 썼습니다. 특별관을 비교하는 과업에서는 안내 화면까지 간 참가자가 한 명도 없었고, 네 명이 시간표의 관 이름 배지만 보고 1–10초 만에 골랐습니다. 비교할 화면은 있었지만 아무도 닿지 못했습니다.',
      ]],
      ['move','MOVE','결정적인 수','wide',[
        '문제는 특별관을 모른다는 것이 아니라, 알아보는 자리와 고르는 자리가 떨어져 있다는 것이었습니다. 관마다 제각각이던 소개 글을 화면 · 사운드 · 좌석 · 특수효과 · 요금 다섯 항목으로 맞춰 같은 기준으로 견주게 하고, 예매 화면 안에 특별관 칩과 정보 시트를 넣어 비교한 자리에서 그대로 예매로 넘어가게 했습니다.',
        '영화 목록에는 관람 목적 탭 일곱 개를 두어 일반 영화 · 특별관 · 특별상영 · GV · 콘서트 · 팬 콘텐츠를 목적별로 거를 수 있게 했습니다. 극장은 지점 이름 대신 동네 이름으로 찾고, 두세 곳의 회차를 나란히 놓고 비교하도록 바꿨습니다.',
      ]],
      ['build','BUILD','근거에서 화면까지','pair',[
        '리뷰 · 인터뷰 · 사용성 평가에서 나온 근거를 요구사항 여덟 건으로 묶고, 각 요구사항에 우선순위와 검증 방법을 1:1로 붙였습니다. 근거가 하나뿐인 항목은 가설로 표시해 추가 검증 대상으로 남겼습니다.',
        '요구사항을 기능으로 옮긴 뒤 현행 정보구조 위에 바뀐 지점을 겹쳐 표시하고, 세 가지 탐색 출발점이 공통 예매 단계에서 합류하는 흐름으로 정리했습니다. 이 흐름을 프로토타입과 화면설계서로 구체화하고 있습니다.',
      ]],
      ['current','CURRENT POSITION','현재 단계','wide',[
        '요구사항 정의와 정보구조 · 사용자 흐름 설계를 마치고 프로토타입을 제작하고 있습니다. 이후 1차와 같은 과업 · 같은 조건으로 2차 사용성 평가를 진행해 성공률과 소요 시간을 비교하고, 그 결과를 화면설계서에 반영할 예정입니다.',
      ]],
    ]
  },
  {
    id:'dmd-graduation',number:'04',
    title:'DMD Graduation Exhibition | 디지털미디어디자인과 졸업전시 브랜딩',
    summary:'학과의 다양한 작업을 하나의 브랜드 경험으로 연결하고, 관람 목적에 맞게 웹과 전시 현장을 탐색할 수 있도록 설계한 프로젝트입니다.',
    type:'브랜드 / 경험',period:'2026.09 — 12',
    role:'공동 기획 · 전시 사례 및 관람객 요구 분석 · 웹사이트 콘텐츠 구조 및 화면설계 · 웹 카피라이팅',
    deliverable:'기획서 · 스토리보드',outputs:['plan','storyboard'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '디지털미디어디자인과 졸업전시의 정체성을 구체화하고, 전시를 처음 접하는 관람객도 필요한 정보를 쉽게 찾을 수 있도록 온·오프라인 경험을 설계했습니다.',
      ]],
      ['check','CHECK','관람객과 팀의 요구','pair',[
        '졸업전시는 재학생과 관계자뿐 아니라 입학을 고려하는 학생, 가족, 외부 관람객처럼 서로 다른 목적을 가진 사람들이 방문합니다. 관람객마다 알고 싶은 정보와 탐색 순서가 다르기 때문에, 전시의 핵심 메시지를 일관되게 전달하면서도 목적에 맞는 정보를 쉽게 찾을 수 있는 구조가 필요했습니다.',
      ]],
      ['finding','FINDING','하나의 비유로 묶는 방향의 한계','asymmetric',[
        '초기에는 전시를 하나의 강한 비유와 이미지로 통합하는 방향을 검토했습니다. 그러나 하나의 표현으로 모든 작업을 규정하면 디지털미디어디자인과가 가진 다양한 영역과 개별 프로젝트의 이야기가 충분히 드러나지 않을 수 있었습니다.',
      ]],
      ['move','MOVE','서로 다른 작업을 연결하는 방향','wide',[
        'SYNC라는 개념은 지도 교수의 제안에서 나왔습니다. 다만 연결이라는 말은 선언만으로 전달되지 않습니다. 관람객이 웹사이트를 따라가는 동안 연결을 실제로 겪게 만드는 일이 남아 있었고, 그 몫이 제게 있었습니다.',
        '전시 사례와 관람객 요구를 조사해 무엇을 먼저 보여줄지 정했습니다. 전시의 이야기를 따라가는 흐름과 전시 정보 · 참여 프로젝트를 목적에 따라 찾아가는 흐름이 한 화면에서 부딪치지 않도록 콘텐츠 구조와 화면을 설계했고, 각 작업이 서로 다른 영역에서 왔다는 점이 묻히지 않도록 카피의 기준도 함께 잡았습니다.',
      ]],
      ['build','BUILD','브랜드 메시지와 웹 경험','pair',[
        '전시 주제와 핵심 메시지를 바탕으로 웹사이트에 필요한 콘텐츠를 구분하고, 정보의 우선순위와 탐색 순서를 정리했습니다. 각 페이지의 역할에 맞춰 콘텐츠와 화면 구조를 설계하고, 관람객이 다음 내용을 예상할 수 있도록 레이블과 카피를 작성했습니다.',
        '웹사이트에 머무르지 않고 SNS 콘텐츠와 실제 전시 현장에서도 같은 메시지와 정보가 이어지도록 온·오프라인 접점을 함께 검토했습니다.',
      ]],
      ['mate','MATE','직군 간 협업과 조율','asymmetric',[
        '디자인·기획·개발 인원이 제시한 의견을 모두 같은 방식으로 처리하지 않았습니다. 바로 반영할 수 있는 요청과 전체 방향에 영향을 주어 추가 논의가 필요한 내용을 구분하고, 이를 회의 안건과 다음 작업으로 정리했습니다.',
        '한 사람의 의견을 선택하기보다 프로젝트의 목적과 관람객 경험을 기준으로 공통 지점을 찾고, 논의가 실제 작업으로 이어지도록 조율했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 결과','wide',[
        '졸업전시의 브랜드 방향과 웹사이트 콘텐츠 구조를 정리하고, 전시 웹사이트와 온·오프라인 콘텐츠를 제작하고 있습니다.',
        '최종 웹사이트와 SNS 콘텐츠, 실제 전시 결과는 공개와 운영이 완료된 뒤 확정된 범위만 추가할 예정입니다.',
      ]],
    ]
  },
  {
    id:'portfolio-site',number:'05',
    title:'CHECKMATE | AI를 활용한 포트폴리오 웹사이트 기획·제작',
    summary:'문제를 확인하고 근거를 쌓아 방향을 결정하는 기획 과정을 보여주기 위해 포트폴리오 웹사이트를 직접 기획하고 구현한 프로젝트입니다.',
    type:'AI · 브랜드 / 경험',period:'2026.09 — 12',
    role:'포트폴리오 전략 및 콘셉트 기획 · 정보구조 설계 · 화면설계 · 콘텐츠 작성 · AI 협업 방식 설계 · 웹사이트 구현',
    deliverable:'스토리보드 · 제안서',outputs:['storyboard','proposal'],
    sections:[
      ['opening','OPENING','프로젝트 개요','wide',[
        '서비스 기획자로서 완성된 결과물만 보여주는 것이 아니라, 문제를 어떻게 발견하고 어떤 근거로 방향을 바꿨는지 전달할 수 있는 포트폴리오를 만들고자 했습니다.',
        '기획부터 정보구조와 화면설계, 콘텐츠 작성, 웹 구현까지 전 과정을 직접 진행했습니다. AI는 자료 정리와 대안 탐색, 문장 검토, 화면설계 및 구현을 돕는 협업 도구로 활용했습니다.',
      ]],
      ['check','CHECK','기획자 포트폴리오 사례 분석','pair',[
        '기획자와 UX 포트폴리오 사례를 조사해 프로젝트의 구성 방식과 정보 위계, 개인 역할과 결과를 표현하는 방식을 비교했습니다.',
        '많은 포트폴리오가 조사 방법론과 완성된 화면을 보여주고 있었지만, 지원자가 어떤 문제를 중요하게 보았고 무엇을 근거로 방향을 바꿨는지는 상대적으로 빠르게 파악하기 어려웠습니다.',
        '채용 담당자가 짧은 시간 안에 프로젝트의 핵심과 지원자의 기여를 이해하려면 결과물뿐 아니라 문제, 근거, 판단과 변화가 하나의 흐름으로 연결되어야 한다고 보았습니다.',
      ]],
      ['finding','FINDING','보여줘야 할 기획 역량','asymmetric',[
        '프로젝트마다 사용한 방법은 달랐지만, 제 경험에는 공통된 업무 방식이 있었습니다.',
        '코레일톡에서는 최초 문제에 머물지 않고 사용자 행동을 확인해 개선 우선순위를 바꿨습니다. MOULD에서는 사용자 요구와 기술·운영 조건을 함께 검토해 추상적인 아이디어를 서비스 경험으로 구체화했습니다. 졸업전시에서는 서로 다른 직군의 의견을 정리해 다음 작업으로 연결했습니다.',
        '이를 바탕으로 포트폴리오에서 강조할 핵심을 계속 확인하며 문제를 좁히고, 쌓은 근거를 실행 가능한 방향으로 연결하는 기획 방식으로 정리했습니다.',
      ]],
      ['move','MOVE','CHECKMATE 콘셉트와 구조','wide',[
        '확인한 근거를 쌓아 결정적인 방향으로 연결한다는 의미에서 CHECKMATE를 포트폴리오의 핵심 콘셉트로 설정했습니다.',
        '콘셉트를 시각적인 장식에만 사용하지 않고 프로젝트를 설명하는 공통 구조에 적용했습니다. 각 프로젝트가 확인한 문제 → 발견한 핵심 → 결정적인 방향 → 구체화 → 결과의 흐름으로 읽히도록 정보 구조와 레이블을 설계했습니다.',
      ]],
      ['build','BUILD','정보구조·화면·구현','pair',[
        '메인, 프로젝트 목록, 프로젝트 상세, 소개 페이지로 전체 정보구조를 구성했습니다. 정보구조도와 화면설계서를 작성한 뒤 이를 실제 웹 화면으로 구현했습니다.',
        '프로젝트 목록에는 유형과 산출물 필터 및 정렬 기능을 적용했습니다. 상세 페이지에는 고정 목차와 다른 프로젝트 탐색 영역을 배치해 긴 내용도 원하는 순서에 따라 살펴볼 수 있도록 구현했습니다.',
      ]],
      ['ai-mate','AI AS MATE','AI 협업 방식','asymmetric',[
        'AI를 결과물을 대신 결정하는 도구가 아니라, 여러 가능성을 빠르게 탐색하고 판단을 구체화하는 협업 도구로 활용했습니다.',
        '사례와 문헌을 정리할 때는 자료를 분류하고 비교하는 데 활용했습니다. 화면설계와 구현 과정에서는 구조 대안을 탐색하고 코드를 작성·수정하는 데 활용했습니다.',
        'AI가 제안한 내용을 그대로 적용하지 않았습니다. 원본 자료와 결과물을 대조해 사실관계를 확인하고, 먼저 보여줄 정보와 삭제할 정보, 최종 문구와 화면 구조는 포트폴리오의 목적에 따라 직접 판단했습니다.',
      ]],
      ['current','CURRENT POSITION','현재 결과','wide',[
        '메인 페이지와 프로젝트 목록, 프로젝트 상세, 소개 페이지의 기본 구조와 주요 기능을 구현했습니다. 현재 프로젝트별 상세 콘텐츠와 이미지, 보고서·제안서 링크를 연결하고 있으며, 전체 문구와 정보 위계를 최종 검토하고 있습니다.',
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
document.querySelector('#project-facts').innerHTML=`<div><dt>프로젝트 유형</dt><dd>${project.type}</dd></div><div><dt>기간</dt><dd>${project.period}</dd></div>${project.call?`<div class="fact-call"><dt>핵심 판단</dt><dd>${project.call}</dd></div>`:''}<div><dt>담당 범위</dt><dd>${project.role}</dd></div><div><dt>산출물</dt><dd>${project.deliverable}</dd></div>`;
/* 이미지 자리 — 더미 글자가 보이지 않는 세 가지만 쓴다 */
const visual=kind=>kind==='pair'?`<div class="visual-pair"><div class="placeholder">이미지 자리</div><div class="placeholder">이미지 자리</div></div>`:kind==='asymmetric'?`<div class="visual-asymmetric"><div class="placeholder">메인 이미지 자리</div><div class="placeholder">서브 이미지</div></div>`:`<div class="visual-wide placeholder">와이드 이미지 자리</div>`;
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
