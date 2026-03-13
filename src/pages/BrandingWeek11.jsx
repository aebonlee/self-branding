import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek11 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="11주차: 포트폴리오 브랜딩" path="/lessons/portfolio-branding" />
      <section className="page-header">
        <div className="container">
          <h1>11주차: 포트폴리오 브랜딩</h1>
          <p>나의 역량과 경험을 증명하는 최고의 도구 — 포트폴리오, 이력서, 개인 웹사이트로 차별화된 브랜드를 완성합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 포트폴리오 유형</h2>
            <p>
              포트폴리오는 당신의 역량과 경험을 시각적으로 증명하는 가장 강력한 도구입니다.
              이력서가 무엇을 했는가를 알려준다면, 포트폴리오는 어떻게 했고, 얼마나 잘 했는가를 보여줍니다.
              채용담당자의 평균 이력서 검토 시간이 7.4초라는 점을 고려하면,
              시각적으로 임팩트 있는 포트폴리오가 첫인상을 결정짓습니다.
            </p>

            <h3>온라인 vs 오프라인 포트폴리오</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>구분</th><th>온라인 포트폴리오</th><th>오프라인 포트폴리오</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>형태</strong></td><td>웹사이트, PDF, 디지털 플랫폼</td><td>인쇄물, 바인더, USB, 프레젠테이션</td></tr>
                <tr><td><strong>접근성</strong></td><td>URL 공유로 언제 어디서나 접근 가능</td><td>대면 미팅, 면접 시 직접 전달</td></tr>
                <tr><td><strong>업데이트</strong></td><td>실시간 수정 및 업데이트 가능</td><td>재인쇄/재제작 필요</td></tr>
                <tr><td><strong>추적</strong></td><td>Google Analytics로 방문자 분석 가능</td><td>추적 불가</td></tr>
                <tr><td><strong>적합 분야</strong></td><td>개발, UX/UI, 마케팅, 콘텐츠</td><td>그래픽 디자인, 건축, 패션, 제품 디자인</td></tr>
              </tbody>
            </table>

            <h3>분야별 포트폴리오 구성</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>분야</th><th>핵심 구성</th><th>강조 포인트</th><th>주요 플랫폼</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>UI/UX 디자인</strong></td>
                  <td>와이어프레임, 프로토타입, 유저 플로우</td>
                  <td>문제 해결 과정, 유저 리서치</td>
                  <td>Behance, Dribbble, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>소프트웨어 개발</strong></td>
                  <td>프로젝트 코드, 라이브 데모, 기술 스택</td>
                  <td>코드 품질, 문제 해결력</td>
                  <td>GitHub, 개인 블로그</td>
                </tr>
                <tr>
                  <td><strong>마케팅/기획</strong></td>
                  <td>캠페인 결과, 성과 데이터, 케이스 스터디</td>
                  <td>ROI, 데이터 기반 의사결정</td>
                  <td>개인 웹사이트, LinkedIn, Notion</td>
                </tr>
                <tr>
                  <td><strong>영상/콘텐츠</strong></td>
                  <td>하이라이트 릴, 풀 작업물, 조회수 데이터</td>
                  <td>크리에이티브, 스토리텔링</td>
                  <td>YouTube, Vimeo</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">2. 포트폴리오 구성 원칙</h2>
            <p>
              좋은 포트폴리오는 명확한 구조와 스토리라인을 가지고 있습니다.
              보는 사람이 3분 안에 당신의 역량을 파악할 수 있도록 구성해야 합니다.
            </p>

            <h3>원칙 1: 선별 (Curation)</h3>
            <div className="callout-box">
              <h3>양보다 질: 최고의 작업물만 선별하세요</h3>
              <ul>
                <li><strong>3~5개가 적정</strong>: 10개의 평범한 프로젝트보다 3개의 뛰어난 프로젝트가 효과적</li>
                <li><strong>최신성</strong>: 최근 2년 이내의 작업물을 우선 배치</li>
                <li><strong>다양성</strong>: 서로 다른 유형/스킬을 보여주는 프로젝트로 구성</li>
                <li><strong>타겟 맞춤</strong>: 지원하는 회사/직무에 맞는 프로젝트를 전략적으로 선택</li>
              </ul>
            </div>

            <h3>원칙 2: 스토리텔링</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>프로젝트 설명의 황금 구조</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>작성 팁</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>한 줄 요약</strong></td><td>프로젝트가 무엇인지 한 문장으로</td><td>[타겟]을 위한 [결과물]을 [방법]으로 만들었다</td></tr>
                  <tr><td><strong>문제/배경</strong></td><td>왜 이 프로젝트가 필요했는가</td><td>데이터, 사용자 불만, 비즈니스 과제로 구체적 맥락 제시</td></tr>
                  <tr><td><strong>나의 역할</strong></td><td>팀 내에서 무엇을 담당했는가</td><td>팀 규모, 협업 구조, 내가 주도한 영역 명시</td></tr>
                  <tr><td><strong>과정/방법</strong></td><td>어떤 접근법과 도구를 사용했는가</td><td>중간 결과물 시각 자료 포함</td></tr>
                  <tr><td><strong>결과/성과</strong></td><td>구체적인 수치와 임팩트</td><td>매출 150% 증가, 이탈률 30% 감소 등</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">3. 이력서 &amp; 자기소개서 브랜딩</h2>
            <p>
              이력서와 자기소개서는 단순한 서류가 아니라 당신의 브랜드를 전달하는 마케팅 도구입니다.
              ATS(지원자추적시스템)를 통과하면서도 인사담당자의 마음을 사로잡는 이중 전략이 필수입니다.
            </p>

            <h3>ATS 최적화 전략</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>ATS 최적화 항목</th><th>해야 할 것</th><th>하지 말아야 할 것</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>파일 형식</strong></td><td>.docx 또는 텍스트 인식 가능한 .pdf</td><td>이미지 기반 PDF, .hwp</td></tr>
                <tr><td><strong>키워드</strong></td><td>채용공고의 핵심 키워드를 자연스럽게 포함</td><td>키워드 스터핑, 흰색 글씨 숨기기</td></tr>
                <tr><td><strong>레이아웃</strong></td><td>표준적인 섹션 제목, 단순한 1단 레이아웃</td><td>복잡한 표, 그래픽, 텍스트 박스</td></tr>
                <tr><td><strong>폰트</strong></td><td>표준 폰트 (Arial, Calibri, 맑은 고딕)</td><td>장식적 폰트, 10pt 미만</td></tr>
              </tbody>
            </table>

            <h3>STAR 기법 자기소개서</h3>
            <div className="callout-box">
              <h3>STAR 기법으로 경험 서술하기</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>작성 팁</th><th>분량 비중</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>S - Situation</strong></td><td>어떤 상황/맥락에 놓여 있었는가</td><td>구체적인 시간, 장소, 배경 제시</td><td>15%</td></tr>
                  <tr><td><strong>T - Task</strong></td><td>어떤 역할/책임을 맡았는가</td><td>나의 역할을 명확히</td><td>15%</td></tr>
                  <tr><td><strong>A - Action</strong></td><td>어떤 구체적 행동을 취했는가</td><td>가장 상세하게 서술</td><td>50%</td></tr>
                  <tr><td><strong>R - Result</strong></td><td>어떤 결과/성과를 달성했는가</td><td>구체적 수치 필수</td><td>20%</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">4. 개인 웹사이트 제작 가이드</h2>
            <p>
              개인 웹사이트는 당신이 완전히 통제할 수 있는 유일한 디지털 공간입니다.
              소셜 미디어가 임대라면 개인 웹사이트는 소유입니다.
            </p>

            <h3>플랫폼별 상세 가이드</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>난이도</th><th>비용</th><th>장점</th><th>추천 대상</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>WordPress.org</strong></td><td>중간</td><td>월 $3~15</td><td>무한 확장성, SEO 최적화</td><td>블로거, 프리랜서</td></tr>
                <tr><td><strong>Wix</strong></td><td>쉬움</td><td>무료~월 $27</td><td>직관적 드래그 앤 드롭</td><td>비개발자, 포트폴리오</td></tr>
                <tr><td><strong>Notion</strong></td><td>매우 쉬움</td><td>무료~월 $8</td><td>가장 빠른 제작</td><td>초보자</td></tr>
                <tr><td><strong>GitHub Pages</strong></td><td>어려움</td><td>완전 무료</td><td>개발 역량 증명</td><td>개발자</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">5. LinkedIn 프로필 최적화</h2>
            <p>
              LinkedIn은 전 세계 10억 명 이상의 전문가가 활동하는 최대의 비즈니스 네트워킹 플랫폼입니다.
              프로필 완성도가 높을수록 검색 노출이 40배 증가합니다.
            </p>

            <h3>LinkedIn 프로필 완전 정복</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>섹션</th><th>최적화 방법</th><th>작성 예시</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>프로필 사진</strong></td><td>전문적 헤드샷, 밝은 배경</td><td>정장 또는 비즈니스 캐주얼, 미소</td></tr>
                <tr><td><strong>헤드라인</strong></td><td>직함 | 전문 영역 | 가치 제안</td><td>Senior UX Designer | 사용자 중심 디자인으로 전환율 2배 향상</td></tr>
                <tr><td><strong>About</strong></td><td>첫 3줄 Hook → 스토리 → 핵심 성과 → CTA</td><td>1인칭, 대화체, 줄바꿈 활용</td></tr>
                <tr><td><strong>Experience</strong></td><td>성과 중심 기술, 숫자 포함</td><td>달성으로 서술, 동사로 시작</td></tr>
                <tr><td><strong>Skills</strong></td><td>핵심 스킬 3개를 상단 고정</td><td>99+ 보증 받은 스킬은 검색 순위에 영향</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">6. 디지털 포트폴리오 플랫폼</h2>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>주요 분야</th><th>특징</th><th>비용</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Behance</strong></td><td>디자인, 일러스트, 사진</td><td>Adobe 생태계, 글로벌 커뮤니티</td><td>무료</td></tr>
                <tr><td><strong>Dribbble</strong></td><td>UI/UX, 그래픽</td><td>짧은 Shot 포맷, 채용 보드</td><td>무료, Pro $5/월</td></tr>
                <tr><td><strong>GitHub</strong></td><td>소프트웨어 개발</td><td>코드 저장소, 잔디 그래프</td><td>무료</td></tr>
                <tr><td><strong>Notion</strong></td><td>기획, PM, 마케팅</td><td>빠른 제작, 협업</td><td>무료~월 $8</td></tr>
                <tr><td><strong>Brunch</strong></td><td>글쓰기, 에세이</td><td>카카오 연동, 한국 SEO 우수</td><td>무료</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">7. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 온라인 포트폴리오 페이지 기획서 작성</h3>
              <p>다음 항목을 포함하는 포트폴리오 기획서를 작성하세요:</p>
              <ul>
                <li><strong>목적 &amp; 타겟</strong>: 포트폴리오의 주요 용도와 타겟 오디언스 정의</li>
                <li><strong>플랫폼 선택</strong>: 사용할 제작 도구/플랫폼과 선택 이유</li>
                <li><strong>사이트맵</strong>: 페이지 구조 설계</li>
                <li><strong>프로젝트 3개</strong>: STAR 기법을 적용한 상세 설명</li>
                <li><strong>비주얼 톤</strong>: 컬러 팔레트, 폰트 선택, 레퍼런스 3개</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: STAR 기법 자기소개서 작성</h3>
              <p>STAR 기법을 활용하여 자기소개서 경험 서술 2개를 작성하세요:</p>
              <ul>
                <li>각 항목 300~500자 내외</li>
                <li>구체적 수치와 성과 포함</li>
                <li>1개는 성공 경험, 1개는 실패에서 배운 교훈</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                12주차에서는 마케팅 분석과 KPI에 대해 배웁니다. Google Analytics 4 활용법,
                소셜 미디어 분석, ROI 계산, A/B 테스트, 데이터 시각화 등
                데이터 기반으로 브랜딩 성과를 측정하고 개선하는 전략을 다룹니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/personal-branding" className="lesson-nav-btn prev">&larr; 10주차: 개인 브랜딩 실전</Link>
              <Link to="/lessons/marketing-analytics" className="lesson-nav-btn next">12주차: 마케팅 분석 &amp; KPI &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek11;
