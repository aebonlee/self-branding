import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek10 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="10주차: 포트폴리오 브랜딩" path="/lessons/portfolio-branding" />
      <section className="page-header">
        <div className="container">
          <h1>10주차: 포트폴리오 브랜딩</h1>
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
              포트폴리오의 형태는 온라인/오프라인, 그리고 분야에 따라 크게 달라집니다.
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
                <tr><td><strong>인터랙션</strong></td><td>클릭, 스크롤, 애니메이션, 라이브 데모</td><td>질감, 소재, 실물 크기 체험</td></tr>
                <tr><td><strong>비용</strong></td><td>무료~저비용 (도메인+호스팅)</td><td>인쇄비, 제작비 발생</td></tr>
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
                  <td>와이어프레임, 프로토타입, 유저 플로우, 비포/애프터</td>
                  <td>문제 해결 과정, 유저 리서치, 반복 개선</td>
                  <td>Behance, Dribbble, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>그래픽 디자인</strong></td>
                  <td>로고, 브랜드 아이덴티티, 편집 디자인, 일러스트</td>
                  <td>시각적 완성도, 컨셉 기획력, 클라이언트 요구 반영</td>
                  <td>Behance, Adobe Portfolio, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>소프트웨어 개발</strong></td>
                  <td>프로젝트 코드, 라이브 데모, 기술 스택, 아키텍처</td>
                  <td>코드 품질, 문제 해결력, 기술적 도전, 문서화</td>
                  <td>GitHub, 개인 블로그, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>마케팅/기획</strong></td>
                  <td>캠페인 결과, 성과 데이터, 전략 문서, 케이스 스터디</td>
                  <td>ROI, 성장률, 데이터 기반 의사결정 과정</td>
                  <td>개인 웹사이트, LinkedIn, Notion</td>
                </tr>
                <tr>
                  <td><strong>영상/콘텐츠</strong></td>
                  <td>하이라이트 릴, 풀 작업물, 조회수 데이터</td>
                  <td>크리에이티브, 스토리텔링, 기술적 퀄리티</td>
                  <td>YouTube, Vimeo, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>글쓰기/에디터</strong></td>
                  <td>발행 기사, 기고문, 편집물, 조회수/공유수</td>
                  <td>글쓰기 스타일, 다양한 장르, 독자 반응</td>
                  <td>브런치, Medium, 개인 블로그</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>포트폴리오가 필요한 순간</h3>
              <p>
                포트폴리오는 디자이너나 개발자만의 것이 아닙니다. 마케터, 기획자, 영업, PM, 교육자 등
                모든 직무에서 자신의 성과를 시각화하여 보여줄 수 있습니다.
                나는 포트폴리오가 필요 없는 직군이다라고 생각한다면, 경쟁자가 포트폴리오를 가지고 있을 때
                불리해질 수 있다는 점을 기억하세요. 형태와 내용은 다르지만, 원칙은 동일합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">2. 포트폴리오 구성 원칙</h2>
            <p>
              좋은 포트폴리오는 명확한 구조와 스토리라인을 가지고 있습니다.
              보는 사람이 3분 안에 당신의 역량을 파악할 수 있도록 구성해야 합니다.
              핵심 원칙은 선별, 스토리텔링, 시각 디자인 세 가지입니다.
            </p>

            <h3>원칙 1: 선별 (Curation)</h3>
            <div className="callout-box">
              <h3>양보다 질: 최고의 작업물만 선별하세요</h3>
              <ul>
                <li><strong>3~5개가 적정</strong>: 10개의 평범한 프로젝트보다 3개의 뛰어난 프로젝트가 효과적</li>
                <li><strong>최신성</strong>: 최근 2년 이내의 작업물을 우선 배치</li>
                <li><strong>다양성</strong>: 서로 다른 유형/스킬을 보여주는 프로젝트로 구성</li>
                <li><strong>타겟 맞춤</strong>: 지원하는 회사/직무에 맞는 프로젝트를 전략적으로 선택</li>
                <li><strong>정기 정리</strong>: 분기마다 포트폴리오를 리뷰하고, 약한 프로젝트는 교체</li>
              </ul>
            </div>

            <h3>원칙 2: 스토리텔링</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>프로젝트 설명의 황금 구조</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>작성 팁</th><th>분량</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>한 줄 요약</strong></td>
                    <td>프로젝트가 무엇인지 한 문장으로</td>
                    <td>[타겟]을 위한 [결과물]을 [방법]으로 만들었다</td>
                    <td>1문장</td>
                  </tr>
                  <tr>
                    <td><strong>문제/배경 (Problem)</strong></td>
                    <td>왜 이 프로젝트가 필요했는가</td>
                    <td>데이터, 사용자 불만, 비즈니스 과제로 구체적 맥락 제시</td>
                    <td>2~3문장</td>
                  </tr>
                  <tr>
                    <td><strong>나의 역할 (Role)</strong></td>
                    <td>팀 내에서 무엇을 담당했는가</td>
                    <td>팀 규모, 협업 구조, 내가 주도한 영역 명시</td>
                    <td>1~2문장</td>
                  </tr>
                  <tr>
                    <td><strong>과정/방법 (Process)</strong></td>
                    <td>어떤 접근법과 도구를 사용했는가</td>
                    <td>중간 결과물(스케치, 와이어프레임 등) 시각 자료 포함</td>
                    <td>3~5문장</td>
                  </tr>
                  <tr>
                    <td><strong>결과/성과 (Result)</strong></td>
                    <td>구체적인 수치와 임팩트</td>
                    <td>매출 150% 증가, 이탈률 30% 감소 등 KPI 기반 수치</td>
                    <td>2~3문장</td>
                  </tr>
                  <tr>
                    <td><strong>배운 점 (Learnings)</strong></td>
                    <td>이 경험에서 얻은 인사이트</td>
                    <td>실패에서 배운 점도 가치 있는 콘텐츠</td>
                    <td>1~2문장</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>원칙 3: 시각 디자인</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>디자인 요소</th><th>권장 사항</th><th>주의 사항</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>레이아웃</strong></td><td>깔끔한 그리드 기반, 충분한 여백</td><td>과도한 장식, 복잡한 구조 지양</td></tr>
                <tr><td><strong>타이포그래피</strong></td><td>최대 2~3개 폰트, 명확한 위계</td><td>장식적 폰트 남용, 가독성 저하 주의</td></tr>
                <tr><td><strong>색상</strong></td><td>브랜드 컬러 기반 3~5색 팔레트</td><td>너무 많은 색상, 눈이 피로한 조합 피하기</td></tr>
                <tr><td><strong>이미지</strong></td><td>고해상도, 일관된 크기/비율, 최적화</td><td>저해상도 이미지, 워터마크 있는 스톡 사진</td></tr>
                <tr><td><strong>여백</strong></td><td>요소 간 충분한 간격, 숨 쉴 공간</td><td>빈 공간을 무조건 채우려는 시도</td></tr>
                <tr><td><strong>모바일 대응</strong></td><td>반응형 디자인, 모바일 우선 테스트</td><td>데스크톱에서만 확인 (모바일 방문 60%+)</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 이력서 &amp; 자기소개서 브랜딩</h2>
            <p>
              이력서와 자기소개서는 단순한 서류가 아니라 당신의 브랜드를 전달하는 마케팅 도구입니다.
              수백 명의 지원자 중에서 눈에 띄려면, 차별화된 전략이 필요합니다.
              ATS(지원자추적시스템)를 통과하면서도 인사담당자의 마음을 사로잡는
              이중 전략이 현대 취업 시장의 필수입니다.
            </p>

            <h3>ATS 최적화 전략</h3>
            <div className="callout-box">
              <h4>ATS(Applicant Tracking System)란?</h4>
              <p>
                ATS는 기업이 수많은 지원서를 자동으로 분류하고 선별하는 소프트웨어입니다.
                대기업의 98%, 중소기업의 66%가 ATS를 사용하며, 지원서의 75%가 ATS 단계에서 탈락합니다.
                인사담당자의 눈에 닿기 전에 먼저 기계의 눈을 통과해야 합니다.
              </p>
            </div>

            <table className="lesson-table">
              <thead>
                <tr><th>ATS 최적화 항목</th><th>해야 할 것</th><th>하지 말아야 할 것</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>파일 형식</strong></td>
                  <td>.docx 또는 텍스트 인식 가능한 .pdf</td>
                  <td>이미지 기반 PDF, .hwp, 특이한 파일 형식</td>
                </tr>
                <tr>
                  <td><strong>키워드</strong></td>
                  <td>채용공고의 핵심 키워드를 이력서에 자연스럽게 포함</td>
                  <td>키워드 과도 삽입(키워드 스터핑), 흰색 글씨 숨기기</td>
                </tr>
                <tr>
                  <td><strong>레이아웃</strong></td>
                  <td>표준적인 섹션 제목, 단순한 1단 레이아웃</td>
                  <td>복잡한 표, 그래픽, 텍스트 박스, 머리글/바닥글</td>
                </tr>
                <tr>
                  <td><strong>폰트</strong></td>
                  <td>표준 폰트 (Arial, Calibri, Noto Sans, 맑은 고딕)</td>
                  <td>장식적 폰트, 손글씨체, 10pt 미만</td>
                </tr>
                <tr>
                  <td><strong>날짜 형식</strong></td>
                  <td>2023.01 ~ 2024.12 일관된 형식</td>
                  <td>형식 불일치, 약 3년 같은 모호한 표현</td>
                </tr>
                <tr>
                  <td><strong>섹션명</strong></td>
                  <td>경력, 학력, 자격증 등 표준 명칭</td>
                  <td>나의 여정, 성장 스토리 등 비표준 명칭</td>
                </tr>
              </tbody>
            </table>

            <h3>이력서 차별화 전략</h3>
            <div className="section-card" data-aos="fade-up">
              <h4>성과 중심 경력 기술법</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>구분</th><th>BAD (직무 설명)</th><th>GOOD (성과 중심)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>마케터</strong></td>
                    <td>SNS 채널 운영 및 콘텐츠 제작 담당</td>
                    <td>Instagram 릴스 전략 도입으로 팔로워 2,400 &rarr; 8,700명(+262%) 성장, 월 리드 45건 확보</td>
                  </tr>
                  <tr>
                    <td><strong>개발자</strong></td>
                    <td>프론트엔드 개발 업무 수행</td>
                    <td>React 기반 SPA 마이그레이션으로 페이지 로딩 속도 60% 개선, Core Web Vitals 모두 Green 달성</td>
                  </tr>
                  <tr>
                    <td><strong>기획자</strong></td>
                    <td>신규 서비스 기획 및 런칭</td>
                    <td>B2B SaaS 프로덕트 0 &rarr; 1 기획, 출시 3개월 만에 유료 고객 120사 확보 및 MRR 3,500만원 달성</td>
                  </tr>
                  <tr>
                    <td><strong>디자이너</strong></td>
                    <td>UI/UX 디자인 담당</td>
                    <td>결제 플로우 UX 개선으로 전환율 18% &rarr; 27% 향상, 이탈률 35% 감소</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>STAR 기법 자기소개서</h3>
            <div className="callout-box">
              <h3>STAR 기법으로 경험 서술하기</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>작성 팁</th><th>분량 비중</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>S - Situation (상황)</strong></td>
                    <td>어떤 상황/맥락에 놓여 있었는가</td>
                    <td>구체적인 시간, 장소, 배경 제시. 간결하게</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td><strong>T - Task (과제)</strong></td>
                    <td>어떤 역할/책임을 맡았는가</td>
                    <td>나의 역할을 명확히, 개인 기여분 강조</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td><strong>A - Action (행동)</strong></td>
                    <td>어떤 구체적 행동을 취했는가</td>
                    <td>가장 상세하게 서술, 능동태 사용, 의사결정 과정 포함</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td><strong>R - Result (결과)</strong></td>
                    <td>어떤 결과/성과를 달성했는가</td>
                    <td>구체적 수치 필수, 배운 점이나 이후 변화도 포함</td>
                    <td>20%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>STAR 기법 실전 예시</h3>
              <p>
                <strong>S:</strong> 2024년 상반기, 입사 2개월 차에 담당 SNS 채널의 팔로워 성장이 3개월째 정체(월 2% 미만 성장)되어 있었다.<br />
                <strong>T:</strong> 인스타그램 채널의 월간 팔로워 성장률을 10% 이상으로 개선하는 임무를 맡았다.<br />
                <strong>A:</strong> 경쟁사 5개의 콘텐츠를 분석하여 릴스 콘텐츠의 높은 도달률을 확인하고,
                주 3회 릴스 포스팅 전략을 수립했다. 인기 오디오를 활용한 15초 교육 콘텐츠를 기획하고,
                팔로워 참여를 높이기 위한 CTA를 모든 포스트에 삽입했다. 또한 해시태그 전략을 개편하고,
                최적 발행 시간을 A/B 테스트로 확인했다.<br />
                <strong>R:</strong> 3개월 만에 팔로워가 2,400명에서 8,700명으로 262% 성장했으며,
                평균 도달률은 기존 대비 4.5배 증가했다. 이 전략은 팀 내 표준 운영 가이드로 채택되었다.
              </p>
            </div>

            <div className="info-box warning">
              <h3>이력서/자기소개서 주의사항</h3>
              <ul>
                <li><strong>거짓 기재</strong>: 학력, 경력, 자격증 허위 기재는 법적 문제를 일으킬 수 있습니다.</li>
                <li><strong>오타/맞춤법</strong>: 단 1개의 오타도 치명적입니다. 3번 이상 검수하세요.</li>
                <li><strong>개인정보</strong>: 주민등록번호, 상세 주소, 가족 정보 등 불필요한 개인정보 기재 지양</li>
                <li><strong>일반적 표현</strong>: 성실하고 책임감 있는 같은 추상적 표현 대신 구체적 사례로 증명하세요.</li>
                <li><strong>장문의 서사</strong>: 이력서는 2페이지 이내, 자기소개서 항목별 500자 이내로 간결하게 작성</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 개인 웹사이트 제작 가이드</h2>
            <p>
              개인 웹사이트는 당신이 완전히 통제할 수 있는 유일한 디지털 공간입니다.
              소셜 미디어는 알고리즘이나 플랫폼 정책에 의존하지만, 개인 웹사이트는
              당신만의 규칙으로 운영됩니다. 디지털 부동산이라는 표현처럼,
              소셜 미디어가 임대라면 개인 웹사이트는 소유입니다.
            </p>

            <h3>플랫폼별 상세 가이드</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>난이도</th><th>비용</th><th>장점</th><th>단점</th><th>추천 대상</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>WordPress.org</strong></td>
                  <td>중간</td>
                  <td>호스팅 월 $3~15 + 도메인 연 $10~15</td>
                  <td>무한 확장성, 수천 개 플러그인, SEO 최적화, 완전한 소유권</td>
                  <td>호스팅 관리 필요, 보안 업데이트, 학습 곡선</td>
                  <td>블로거, 프리랜서, 장기 운영</td>
                </tr>
                <tr>
                  <td><strong>Wix</strong></td>
                  <td>쉬움</td>
                  <td>무료~월 $27</td>
                  <td>직관적 드래그 앤 드롭, 500+ 템플릿, AI 디자인 도우미</td>
                  <td>SEO 제한, 사이트 이전 불가, 무료 플랜 광고</td>
                  <td>비개발자, 빠른 제작, 포트폴리오</td>
                </tr>
                <tr>
                  <td><strong>Squarespace</strong></td>
                  <td>쉬움</td>
                  <td>월 $16~$49</td>
                  <td>프리미엄 디자인 템플릿, 올인원 솔루션</td>
                  <td>유료만 가능, 한국어 제한</td>
                  <td>디자이너, 크리에이터</td>
                </tr>
                <tr>
                  <td><strong>Notion</strong></td>
                  <td>매우 쉬움</td>
                  <td>무료~월 $8 (Super, Oopy로 사이트화)</td>
                  <td>가장 빠른 제작, 쉬운 업데이트, 협업 가능</td>
                  <td>디자인 제한, SEO 약점, 커스텀 도메인 유료</td>
                  <td>초보자, 빠른 프로토타입</td>
                </tr>
                <tr>
                  <td><strong>GitHub Pages</strong></td>
                  <td>어려움</td>
                  <td>완전 무료 (커스텀 도메인도 무료 연결)</td>
                  <td>무료, 개발 역량 증명, Git 기반 버전 관리, 빠른 속도</td>
                  <td>HTML/CSS/JS 필요, 동적 기능 제한</td>
                  <td>개발자, 기술 포트폴리오</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>웹사이트 제작 단계별 가이드</h3>
              <ul>
                <li><strong>1단계: 기획 (1일)</strong> — 목적 정의, 타겟 설정, 페이지 구조(사이트맵) 설계, 레퍼런스 수집</li>
                <li><strong>2단계: 도메인 &amp; 호스팅 (1시간)</strong> — 도메인 구매(Namecheap, 가비아), 호스팅 세팅</li>
                <li><strong>3단계: 디자인 (1~3일)</strong> — 템플릿 선택 또는 와이어프레임 제작, 컬러/폰트 결정</li>
                <li><strong>4단계: 콘텐츠 제작 (2~5일)</strong> — 소개글, 프로젝트 설명, 이미지, 포트폴리오 구성</li>
                <li><strong>5단계: 개발/구현 (1~7일)</strong> — 선택한 플랫폼에서 사이트 구축</li>
                <li><strong>6단계: 테스트 (1일)</strong> — 모바일 테스트, 브라우저 호환성, 링크 확인, 속도 체크</li>
                <li><strong>7단계: 론칭 &amp; 홍보 (지속)</strong> — SSL 인증서, Google Search Console 등록, SNS 공유</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>웹사이트 필수 설정 체크리스트</h3>
              <ul>
                <li>SSL 인증서 설치 (https:// 보안 연결) — 대부분 호스팅에서 무료 제공</li>
                <li>Google Analytics 4 연동 — 방문자 행동 분석</li>
                <li>Google Search Console 등록 — 검색 노출 모니터링</li>
                <li>SEO 기본 설정 — title 태그, meta description, OG 태그</li>
                <li>파비콘(Favicon) 설정 — 브라우저 탭의 작은 아이콘</li>
                <li>404 페이지 커스텀 — 브랜드에 맞는 에러 페이지</li>
                <li>사이트 속도 최적화 — Google PageSpeed Insights에서 90점 이상 목표</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. LinkedIn 프로필 최적화</h2>
            <p>
              LinkedIn은 전 세계 10억 명 이상의 전문가가 활동하는 최대의 비즈니스 네트워킹 플랫폼입니다.
              취업, 이직, 프리랜서 영업, B2B 파트너십 등 비즈니스 관련 모든 활동에서
              LinkedIn 프로필은 당신의 디지털 명함이자 온라인 이력서 역할을 합니다.
              프로필 완성도가 높을수록 검색 노출이 40배 증가한다는 LinkedIn 공식 데이터가 있습니다.
            </p>

            <h3>LinkedIn 프로필 완전 정복</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>섹션</th><th>최적화 방법</th><th>작성 예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>프로필 사진</strong></td>
                  <td>전문적 헤드샷, 밝은 배경, 얼굴이 화면의 60~70%</td>
                  <td>정장 또는 비즈니스 캐주얼, 미소, 정면 또는 45도 각도</td>
                </tr>
                <tr>
                  <td><strong>배너 이미지 (1584x396px)</strong></td>
                  <td>전문 분야, 핵심 키워드, 브랜드 컬러 반영</td>
                  <td>Data-Driven Marketing | Helping Brands Grow 3x</td>
                </tr>
                <tr>
                  <td><strong>헤드라인 (최대 220자)</strong></td>
                  <td>직함 | 전문 영역 | 가치 제안 형태</td>
                  <td>Senior UX Designer | 사용자 중심 디자인으로 전환율 2배 향상</td>
                </tr>
                <tr>
                  <td><strong>About (최대 2,600자)</strong></td>
                  <td>첫 3줄 Hook &rarr; 스토리 &rarr; 핵심 성과 &rarr; 스킬 &rarr; CTA</td>
                  <td>1인칭, 대화체, 줄바꿈 활용</td>
                </tr>
                <tr>
                  <td><strong>Featured (3~5개)</strong></td>
                  <td>대표 작업물, 기사, 발표 자료, 수상 이력</td>
                  <td>썸네일 이미지가 매력적인 콘텐츠 우선 배치</td>
                </tr>
                <tr>
                  <td><strong>Experience</strong></td>
                  <td>회사 로고 연결, 성과 중심 기술, 숫자 포함</td>
                  <td>관리가 아닌 달성으로 서술, 동사로 시작</td>
                </tr>
                <tr>
                  <td><strong>Skills (50개까지)</strong></td>
                  <td>핵심 스킬 3개를 상단 고정, 동료 보증 요청</td>
                  <td>99+ 보증 받은 스킬은 검색 순위에 큰 영향</td>
                </tr>
                <tr>
                  <td><strong>Recommendations</strong></td>
                  <td>상사, 동료, 고객에게 추천글 요청 (최소 3개)</td>
                  <td>구체적 프로젝트를 언급한 추천이 효과적</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>LinkedIn SSI(Social Selling Index) 점수 확인</h3>
              <p>
                linkedin.com/sales/ssi에서 자신의 SSI 점수를 무료로 확인할 수 있습니다.
                SSI는 프로필 브랜딩, 관계 구축, 인사이트 공유, 관계 강화의 4개 영역을
                각 25점 만점으로 평가하며, 총 100점 만점입니다.
                SSI 70점 이상이면 상위 10%, 80점 이상이면 상위 1%에 해당합니다.
                SSI 점수가 높을수록 LinkedIn 알고리즘에서 콘텐츠 노출 우선순위가 높아집니다.
              </p>
            </div>

            <h2 data-aos="fade-up">6. 비디오 포트폴리오 &amp; 릴</h2>
            <p>
              비디오 콘텐츠는 텍스트나 이미지보다 65% 더 높은 기억 유지율을 보입니다.
              특히 영상 분야, 마케팅, 크리에이터 직군에서는 비디오 포트폴리오가 필수이며,
              다른 분야에서도 자기소개 영상이나 프로젝트 데모 영상은 차별화 요소가 됩니다.
            </p>

            <h3>비디오 포트폴리오 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>길이</th><th>내용</th><th>용도</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>쇼릴 (Showreel)</strong></td><td>60~90초</td><td>최고의 작업물 하이라이트 모음</td><td>첫인상, SNS 공유, 포트폴리오 메인</td></tr>
                <tr><td><strong>자기소개 영상</strong></td><td>60~120초</td><td>나는 누구이고, 어떤 가치를 제공하는가</td><td>웹사이트 About, LinkedIn, 이메일 서명</td></tr>
                <tr><td><strong>프로젝트 케이스 스터디</strong></td><td>2~5분</td><td>프로젝트의 문제 &rarr; 과정 &rarr; 결과를 영상으로</td><td>포트폴리오 상세 페이지, 프레젠테이션</td></tr>
                <tr><td><strong>튜토리얼/데모</strong></td><td>3~10분</td><td>기술 시연, 도구 사용법, 프로세스 공유</td><td>YouTube, 블로그, 교육 콘텐츠</td></tr>
                <tr><td><strong>숏폼 릴</strong></td><td>15~60초</td><td>빠른 팁, 비하인드, 비포/애프터</td><td>Instagram Reels, TikTok, YouTube Shorts</td></tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>비디오 포트폴리오 제작 팁</h3>
              <ul>
                <li><strong>첫 3초</strong>: 가장 임팩트 있는 장면이나 질문으로 시작하세요. 3초 안에 시선을 잡지 못하면 이탈합니다.</li>
                <li><strong>음악</strong>: 저작권 무료 음악을 활용하세요 (Epidemic Sound, Artlist, YouTube Audio Library)</li>
                <li><strong>자막</strong>: 85%의 SNS 영상이 무음으로 재생됩니다. 자막은 필수입니다.</li>
                <li><strong>브랜딩</strong>: 인트로/아웃트로에 로고, 색상, 연락처를 일관되게 넣으세요.</li>
                <li><strong>CTA</strong>: 영상 마지막에 포트폴리오 사이트 방문, 이메일 문의 등 행동 유도.</li>
                <li><strong>플랫폼</strong>: YouTube(장기 보관), Vimeo(프리미엄 화질), Instagram Reels(발견 채널)을 용도에 맞게 활용</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">7. 디지털 포트폴리오 플랫폼</h2>
            <p>
              개인 웹사이트 외에도, 전문 포트폴리오 플랫폼을 활용하면
              해당 분야의 커뮤니티와 연결되고, 플랫폼의 자체 트래픽을 통해 더 많은 노출을 얻을 수 있습니다.
              개인 웹사이트 + 전문 플랫폼 조합이 가장 효과적입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>주요 분야</th><th>특징</th><th>활용 팁</th><th>비용</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Behance</strong></td>
                  <td>디자인, 일러스트, 사진, 영상</td>
                  <td>Adobe 생태계, 글로벌 커뮤니티, 큐레이션, 채용 연계</td>
                  <td>프로젝트별 상세 프로세스 공유, 태그 활용, 정기 업데이트</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td><strong>Dribbble</strong></td>
                  <td>UI/UX, 그래픽, 모션</td>
                  <td>초대제(현재 개방), 채용 보드, 짧은 Shot 포맷</td>
                  <td>400x300px 샷으로 임팩트 있는 비주얼, 과정 포함</td>
                  <td>무료, Pro $5/월</td>
                </tr>
                <tr>
                  <td><strong>GitHub</strong></td>
                  <td>소프트웨어 개발</td>
                  <td>코드 저장소, 오픈소스, 잔디(커밋) 그래프, Actions</td>
                  <td>README.md 꼼꼼히 작성, 프로필 README, 핀 프로젝트 6개</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td><strong>Notion</strong></td>
                  <td>기획, PM, 마케팅, 범용</td>
                  <td>빠른 제작, 다양한 블록, 협업, Super/Oopy로 웹사이트화</td>
                  <td>템플릿 활용, 토글로 상세 정보 관리, 깔끔한 레이아웃</td>
                  <td>무료~월 $8</td>
                </tr>
                <tr>
                  <td><strong>Brunch (브런치)</strong></td>
                  <td>글쓰기, 에세이, 칼럼</td>
                  <td>카카오 연동, 작가 인증, 매거진 시스템, 한국 SEO 우수</td>
                  <td>시리즈로 전문성 구축, 매거진 참여, 정기 발행</td>
                  <td>무료</td>
                </tr>
                <tr>
                  <td><strong>Medium</strong></td>
                  <td>글쓰기, 기술, 비즈니스</td>
                  <td>글로벌 오디언스, 큐레이션, 유료 구독 모델</td>
                  <td>영문 콘텐츠로 글로벌 도달, Publication 참여</td>
                  <td>무료, 파트너 프로그램</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>포트폴리오 관리의 핵심</h3>
              <p>
                포트폴리오는 만들어놓고 끝이 아닙니다. 분기마다 새로운 프로젝트를 추가하고,
                오래된 작업물은 정리하세요. 3~5개의 최신이면서 가장 잘한 프로젝트만
                유지하는 것이 10개의 평범한 프로젝트보다 훨씬 효과적입니다.
                또한 각 플랫폼에 동일한 프로젝트를 올리더라도, 플랫폼 특성에 맞게 형태를 최적화하세요.
                Behance에는 상세 프로세스를, Dribbble에는 임팩트 있는 비주얼을,
                GitHub에는 코드와 README를 중심으로 구성합니다.
              </p>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>GitHub 프로필 README 가이드 (개발자 필수)</h3>
              <p>
                GitHub 프로필 README는 username/username 리포지토리에 README.md를 생성하면 프로필 상단에 표시됩니다.
                다음 요소를 포함하면 효과적입니다:
              </p>
              <ul>
                <li>간략한 자기소개와 현재 관심사/학습 중인 기술</li>
                <li>기술 스택 배지 (shields.io 활용)</li>
                <li>대표 프로젝트 링크</li>
                <li>GitHub 활동 통계 (github-readme-stats 활용)</li>
                <li>블로그/포트폴리오 링크</li>
                <li>연락처 및 SNS 링크</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 온라인 포트폴리오 페이지 기획서 작성</h3>
              <p>다음 항목을 포함하는 포트폴리오 기획서를 작성하세요:</p>
              <ul>
                <li><strong>목적 &amp; 타겟</strong>: 이 포트폴리오의 주요 용도와 타겟 오디언스 정의</li>
                <li><strong>플랫폼 선택</strong>: 사용할 제작 도구/플랫폼과 선택 이유</li>
                <li><strong>사이트맵</strong>: 페이지 구조 (홈, 소개, 프로젝트, 블로그, 연락처 등)</li>
                <li><strong>와이어프레임</strong>: 주요 페이지의 레이아웃 스케치 (손 그림도 가능)</li>
                <li><strong>자기소개문</strong>: 브랜드 포지셔닝 스테이트먼트 기반 소개글 (150자 이내)</li>
                <li><strong>프로젝트 3개</strong>: 각 프로젝트에 STAR 기법을 적용한 상세 설명</li>
                <li><strong>비주얼 톤</strong>: 컬러 팔레트(3~5색), 폰트 선택, 레이아웃 스타일, 레퍼런스 3개</li>
                <li><strong>CTA 설계</strong>: 방문자에게 원하는 행동과 전환 경로</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: STAR 기법 자기소개서 작성</h3>
              <p>STAR 기법을 활용하여 자기소개서 경험 서술 2개를 작성하세요:</p>
              <ul>
                <li>각 항목 300~500자 내외</li>
                <li>구체적 수치와 성과 포함</li>
                <li>Action(행동) 부분을 가장 상세하게 서술</li>
                <li>1개는 성공 경험, 1개는 실패에서 배운 교훈</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 C: 이력서 리브랜딩</h3>
              <p>기존 이력서를 성과 중심으로 리브랜딩하세요:</p>
              <ul>
                <li>모든 경력 항목을 직무 설명에서 성과 중심으로 재작성</li>
                <li>ATS 최적화 체크리스트 반영</li>
                <li>지원하고자 하는 직군의 JD(Job Description)를 1개 선정하고, 해당 JD에 맞춰 커스텀</li>
                <li>ATS 시뮬레이터(Jobscan 등)로 매칭 점수 확인</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                11주차에서는 마케팅 분석과 KPI에 대해 배웁니다. Google Analytics 4 활용법,
                소셜 미디어 분석, ROI 계산, A/B 테스트, 데이터 시각화 등
                데이터 기반으로 브랜딩 성과를 측정하고 개선하는 전략을 다룹니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/personal-branding" className="lesson-nav-btn prev">&larr; 9주차: 개인 브랜딩 실전</Link>
              <Link to="/lessons/marketing-analytics" className="lesson-nav-btn next">11주차: 마케팅 분석 &amp; KPI &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek10;
