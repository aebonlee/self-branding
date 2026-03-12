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
          <p>첫인상을 결정짓는 포트폴리오와 이력서, 나를 증명하는 최고의 브랜딩 도구를 만듭니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 포트폴리오의 중요성</h2>
            <p>
              포트폴리오는 당신의 역량과 경험을 시각적으로 증명하는 가장 강력한 도구입니다.
              이력서가 "무엇을 했는가"를 알려준다면, 포트폴리오는 "어떻게 했고, 얼마나 잘 했는가"를 보여줍니다.
              채용담당자의 평균 이력서 검토 시간이 7.4초라는 점을 고려하면,
              시각적으로 임팩트 있는 포트폴리오가 첫인상을 결정짓습니다.
            </p>

            <div className="callout-box">
              <h3>포트폴리오가 필요한 순간</h3>
              <ul>
                <li><strong>취업/이직</strong> — 면접관에게 실무 능력을 직접 보여줄 때</li>
                <li><strong>프리랜서 영업</strong> — 클라이언트에게 이전 작업물을 공유할 때</li>
                <li><strong>투자/파트너십</strong> — 비즈니스 역량과 실적을 증명할 때</li>
                <li><strong>강연/교육</strong> — 전문가로서의 신뢰도를 확보할 때</li>
                <li><strong>네트워킹</strong> — 자기소개를 넘어 구체적인 작업물을 공유할 때</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. 포트폴리오 유형</h2>
            <p>
              직무와 분야에 따라 포트폴리오의 구성과 강조점이 달라집니다.
              각 분야별 포트폴리오 특성을 비교해보겠습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>분야</th><th>핵심 구성</th><th>강조 포인트</th><th>주요 플랫폼</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>디자인</strong></td>
                  <td>비주얼 작업물, 디자인 프로세스, 목업</td>
                  <td>시각적 완성도, 문제 해결 과정, 유저 리서치</td>
                  <td>Behance, Dribbble, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>개발</strong></td>
                  <td>프로젝트 코드, 라이브 데모, 기술 스택</td>
                  <td>코드 품질, 문제 해결력, 기술적 도전</td>
                  <td>GitHub, 개인 블로그, 개인 웹사이트</td>
                </tr>
                <tr>
                  <td><strong>마케팅</strong></td>
                  <td>캠페인 결과, 성과 데이터, 전략 문서</td>
                  <td>ROI, 성장률, 데이터 기반 의사결정</td>
                  <td>개인 웹사이트, LinkedIn, 노션</td>
                </tr>
                <tr>
                  <td><strong>콘텐츠 크리에이터</strong></td>
                  <td>콘텐츠 샘플, 조회수/팔로워 데이터, 협업 사례</td>
                  <td>크리에이티브, 오디언스 반응, 브랜드 적합성</td>
                  <td>YouTube, Brunch, 개인 웹사이트</td>
                </tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">3. 포트폴리오 구성</h2>
            <p>
              좋은 포트폴리오는 명확한 구조와 스토리라인을 가지고 있습니다.
              보는 사람이 3분 안에 당신의 역량을 파악할 수 있도록 구성해야 합니다.
            </p>

            <h3>필수 구성 요소</h3>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>섹션</th><th>내용</th><th>팁</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>자기소개</strong></td>
                    <td>간결한 소개, 핵심 역량, 가치 제안</td>
                    <td>3문장 이내, "나는 ~를 통해 ~를 해결하는 사람입니다" 형태</td>
                  </tr>
                  <tr>
                    <td><strong>프로젝트 설명</strong></td>
                    <td>프로젝트별 배경, 역할, 과정, 결과</td>
                    <td>3~5개의 대표 프로젝트 선정, 각 프로젝트에 STAR 기법 적용</td>
                  </tr>
                  <tr>
                    <td><strong>성과/수치</strong></td>
                    <td>구체적인 KPI, 성장률, 매출, 사용자 수 등</td>
                    <td>"매출 150% 성장", "사용자 10만 명 확보" 등 구체적 수치 필수</td>
                  </tr>
                  <tr>
                    <td><strong>스킬/도구</strong></td>
                    <td>사용 가능한 기술 스택, 도구, 자격증</td>
                    <td>숙련도를 시각화 (상/중/하 또는 막대 그래프)</td>
                  </tr>
                  <tr>
                    <td><strong>추천/후기</strong></td>
                    <td>동료, 상사, 고객의 추천 코멘트</td>
                    <td>실명과 직함 포함, 2~3개면 충분</td>
                  </tr>
                  <tr>
                    <td><strong>연락처</strong></td>
                    <td>이메일, LinkedIn, GitHub 등 연락 수단</td>
                    <td>접근하기 쉬운 위치에 배치, CTA 버튼 추가</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>프로젝트 설명의 황금 구조</h3>
              <p>각 프로젝트를 다음 순서로 설명하면 가장 효과적입니다:</p>
              <ul>
                <li><strong>한 줄 요약</strong>: 프로젝트가 무엇인지 한 문장으로</li>
                <li><strong>문제/배경</strong>: 왜 이 프로젝트가 필요했는가</li>
                <li><strong>나의 역할</strong>: 팀 내에서 무엇을 담당했는가</li>
                <li><strong>과정/방법</strong>: 어떤 접근법과 도구를 사용했는가</li>
                <li><strong>결과/성과</strong>: 구체적인 수치와 임팩트</li>
                <li><strong>배운 점</strong>: 이 경험에서 얻은 인사이트</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">4. 이력서 디자인</h2>
            <p>
              현대적인 이력서는 깔끔한 디자인과 전략적 구성이 필수입니다.
              특히 ATS(지원자추적시스템)를 사용하는 기업이 늘어나면서,
              ATS 통과와 인사담당자의 눈길 모두를 사로잡는 이력서가 필요합니다.
            </p>

            <h3>ATS(지원자추적시스템) 최적화</h3>
            <div className="callout-box">
              <h4>ATS란?</h4>
              <p>
                ATS(Applicant Tracking System)는 기업이 수많은 지원서를 자동으로 분류하고 선별하는 소프트웨어입니다.
                대기업의 98%, 중소기업의 66%가 ATS를 사용하며, 지원서의 75%가 ATS 단계에서 탈락합니다.
              </p>
            </div>

            <table className="lesson-table">
              <thead>
                <tr><th>ATS 최적화 항목</th><th>해야 할 것</th><th>하지 말아야 할 것</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>파일 형식</strong></td>
                  <td>.docx 또는 .pdf (텍스트 인식 가능)</td>
                  <td>이미지 기반 PDF, 특이한 파일 형식</td>
                </tr>
                <tr>
                  <td><strong>키워드</strong></td>
                  <td>채용공고의 핵심 키워드를 이력서에 자연스럽게 포함</td>
                  <td>키워드 과도 삽입 (키워드 스터핑)</td>
                </tr>
                <tr>
                  <td><strong>레이아웃</strong></td>
                  <td>표준적인 섹션 제목, 단순한 레이아웃</td>
                  <td>복잡한 표, 그래픽, 텍스트 박스, 머리글/바닥글</td>
                </tr>
                <tr>
                  <td><strong>폰트</strong></td>
                  <td>표준 폰트 (Arial, Calibri, Noto Sans)</td>
                  <td>장식적 폰트, 손글씨체</td>
                </tr>
                <tr>
                  <td><strong>날짜 형식</strong></td>
                  <td>"2023.01 ~ 2024.12" 일관된 형식</td>
                  <td>형식 불일치, 약어 남발</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box warning">
              <h3>이력서 디자인 주의사항</h3>
              <p>
                디자이너가 아니라면 과도한 디자인은 오히려 역효과를 낼 수 있습니다.
                깔끔하고 읽기 쉬운 레이아웃이 최고입니다. 디자인 직군이라면 이력서 자체가
                디자인 역량을 보여주는 작품이 되어야 하지만, ATS용과 디자인용 두 가지 버전을
                준비하는 것을 권장합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">5. 자기소개서 작성: STAR 기법</h2>
            <p>
              STAR 기법은 구조적이고 설득력 있는 자기소개서(경험 서술)를 작성하는 가장 효과적인 프레임워크입니다.
              행동 면접(Behavioral Interview)에서도 동일한 구조가 사용됩니다.
            </p>

            <div className="callout-box">
              <h3>STAR 기법 구성</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>설명</th><th>작성 팁</th><th>비중</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>S - Situation (상황)</strong></td>
                    <td>어떤 상황/맥락에 놓여 있었는가</td>
                    <td>구체적인 시간, 장소, 배경 제시. 2~3문장으로 간결하게</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td><strong>T - Task (과제)</strong></td>
                    <td>어떤 역할/책임을 맡았는가</td>
                    <td>"나"의 역할을 명확히, 팀 프로젝트라면 개인 기여분 강조</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td><strong>A - Action (행동)</strong></td>
                    <td>어떤 구체적 행동을 취했는가</td>
                    <td>가장 상세하게 서술, "~했다" 능동태 사용, 의사결정 과정 포함</td>
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
                <strong>S:</strong> 2024년 상반기, 입사 2개월 차에 담당 SNS 채널의 팔로워 성장이 정체되어 있었다. (상황)<br />
                <strong>T:</strong> 인스타그램 채널의 월간 팔로워 성장률을 개선하는 임무를 맡았다. (과제)<br />
                <strong>A:</strong> 경쟁사 5개의 콘텐츠를 분석하여 릴스 콘텐츠의 높은 도달률을 확인하고,
                주 3회 릴스 포스팅 전략을 수립했다. 인기 오디오를 활용한 15초 교육 콘텐츠를 기획하고,
                팔로워 참여를 높이기 위한 CTA를 모든 포스트에 삽입했다. (행동)<br />
                <strong>R:</strong> 3개월 만에 팔로워가 2,400명에서 8,700명으로 262% 성장했으며,
                평균 도달률은 기존 대비 4.5배 증가했다. (결과)
              </p>
            </div>

            <h2 data-aos="fade-up">6. 포트폴리오 웹사이트 제작</h2>
            <p>
              전문적인 포트폴리오 웹사이트는 당신의 브랜드를 가장 효과적으로 보여주는 공간입니다.
              제작 도구에 따라 난이도와 결과물이 달라지므로, 자신의 상황에 맞는 도구를 선택하세요.
            </p>

            <h3>제작 도구별 가이드</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>도구</th><th>장점</th><th>단점</th><th>제작 시간</th><th>추천 대상</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Notion</strong></td>
                  <td>빠른 제작, 쉬운 업데이트, 무료</td>
                  <td>디자인 제한, 커스텀 도메인 유료</td>
                  <td>1~2시간</td>
                  <td>빠르게 시작하고 싶은 사람</td>
                </tr>
                <tr>
                  <td><strong>Wix / Squarespace</strong></td>
                  <td>전문적인 템플릿, 드래그 앤 드롭</td>
                  <td>월 구독료, 사이트 이전 어려움</td>
                  <td>4~8시간</td>
                  <td>비개발자, 디자이너</td>
                </tr>
                <tr>
                  <td><strong>WordPress</strong></td>
                  <td>무한한 확장성, 풍부한 플러그인</td>
                  <td>학습 곡선, 호스팅 필요</td>
                  <td>1~3일</td>
                  <td>블로거, 장기적 운영 계획자</td>
                </tr>
                <tr>
                  <td><strong>GitHub Pages</strong></td>
                  <td>완전 무료, 개발 역량 증명</td>
                  <td>코딩 필수, 디자인 역량 필요</td>
                  <td>1~5일</td>
                  <td>개발자</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>포트폴리오 웹사이트 필수 체크리스트</h3>
              <ul>
                <li>모바일 반응형 디자인 (모바일 방문 비율 60% 이상)</li>
                <li>3초 이내 페이지 로딩 속도</li>
                <li>명확한 네비게이션과 직관적 구조</li>
                <li>고화질 이미지와 일관된 비주얼 톤</li>
                <li>쉽게 접근할 수 있는 연락처/CTA</li>
                <li>SEO 기본 설정 (title, meta description, OG 태그)</li>
                <li>Google Analytics 연동 (방문자 분석)</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">7. 포트폴리오 플랫폼</h2>
            <p>
              개인 웹사이트 외에도, 전문 포트폴리오 플랫폼을 활용하면
              해당 분야의 커뮤니티와 연결되고 더 많은 노출을 얻을 수 있습니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>주요 분야</th><th>특징</th><th>활용 팁</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Behance</strong></td>
                  <td>디자인, 일러스트, 사진</td>
                  <td>Adobe 생태계, 글로벌 커뮤니티, 큐레이션 시스템</td>
                  <td>프로젝트별 상세한 프로세스 공유, 태그 활용</td>
                </tr>
                <tr>
                  <td><strong>Dribbble</strong></td>
                  <td>UI/UX, 그래픽 디자인</td>
                  <td>초대제 커뮤니티, 채용 연계, 짧은 포맷</td>
                  <td>400x300px 샷으로 임팩트 있는 비주얼 공유</td>
                </tr>
                <tr>
                  <td><strong>GitHub</strong></td>
                  <td>소프트웨어 개발</td>
                  <td>코드 저장소, 오픈소스 기여, 잔디(커밋) 그래프</td>
                  <td>README.md 꼼꼼히 작성, 프로필 README 활용</td>
                </tr>
                <tr>
                  <td><strong>Brunch</strong></td>
                  <td>글쓰기, 콘텐츠</td>
                  <td>한국형 미디엄, 카카오 연동, 작가 인증</td>
                  <td>시리즈로 전문성 구축, 매거진 참여</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>포트폴리오 관리의 핵심</h3>
              <p>
                포트폴리오는 만들어놓고 끝이 아닙니다. 분기마다 새로운 프로젝트를 추가하고,
                오래된 작업물은 정리하세요. 3~5개의 최신이면서 가장 잘한 프로젝트만
                유지하는 것이 10개의 평범한 프로젝트보다 훨씬 효과적입니다.
                "양보다 질"이 포트폴리오의 핵심입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제: 나만의 포트폴리오 페이지 구성안 작성</h3>
              <p>다음 항목을 포함하는 포트폴리오 구성안(와이어프레임)을 작성하세요:</p>
              <ul>
                <li><strong>페이지 구조</strong>: 홈, 소개, 프로젝트, 연락처 등 페이지 목록과 내비게이션</li>
                <li><strong>자기소개</strong>: 브랜드 포지셔닝 스테이트먼트 기반 소개글 (150자 이내)</li>
                <li><strong>프로젝트 3개</strong>: 각 프로젝트에 STAR 기법을 적용한 설명</li>
                <li><strong>비주얼 톤</strong>: 사용할 컬러 팔레트 (3~5색), 폰트, 레이아웃 스타일</li>
                <li><strong>플랫폼 선택</strong>: 사용할 제작 도구와 선택 이유</li>
                <li><strong>CTA 설계</strong>: 방문자에게 원하는 행동 (이메일 문의, 이력서 다운로드 등)</li>
              </ul>
              <p><strong>추가 과제:</strong> STAR 기법을 활용하여 자기소개서 경험 서술 1개를 300자 내외로 작성하세요.</p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                11주차에서는 마케팅 분석과 KPI에 대해 배웁니다. Google Analytics 4 활용법,
                소셜 미디어 분석, ROI 계산, A/B 테스트 등 데이터 기반 브랜딩 전략을 다룹니다.
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
