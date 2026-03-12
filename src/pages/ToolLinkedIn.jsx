import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolLinkedIn = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="링크드인 마케팅"
        description="B2B 마케팅과 프로페셔널 네트워킹을 위한 링크드인 활용 완벽 가이드"
        path="/tools/linkedin"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>링크드인 마케팅</h1>
          <p>B2B 마케팅과 프로페셔널 브랜딩의 최강자, 링크드인 활용 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 링크드인 플랫폼 특성</h2>
            <p>
              링크드인(LinkedIn)은 전 세계 10억 명 이상의 회원을 보유한 세계 최대 비즈니스 전문 소셜 네트워크입니다.
              B2B 마케팅, 채용, 프로페셔널 네트워킹에 있어 가장 효과적인 플랫폼으로,
              B2B 리드의 80% 이상이 링크드인에서 발생합니다. 특히 의사결정자들이 밀집해 있어
              비즈니스 성장에 직접적인 영향을 미칠 수 있는 유일한 소셜 플랫폼입니다.
            </p>

            <div className="info-box tip">
              <strong>링크드인이 중요한 이유:</strong>
              <ul>
                <li><strong>B2B 의사결정자 집중:</strong> CEO, CMO, 팀장급 이상의 전문가 다수 활동</li>
                <li><strong>높은 신뢰도:</strong> 실명 기반 비즈니스 플랫폼으로 콘텐츠 신뢰도 높음</li>
                <li><strong>오가닉 도달률:</strong> 다른 SNS 대비 월등히 높은 자연 노출 (5~15%)</li>
                <li><strong>커리어 브랜딩:</strong> 전문가로서의 개인 브랜드 구축에 최적</li>
                <li><strong>콘텐츠 수명:</strong> 일반 포스트도 24~48시간 이상 피드에 노출</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>링크드인 주요 통계</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>항목</th><th>수치</th><th>마케팅 시사점</th></tr>
                </thead>
                <tbody>
                  <tr><td>전 세계 회원 수</td><td>10억+</td><td>글로벌 도달 가능</td></tr>
                  <tr><td>월간 활성 사용자</td><td>3.1억+</td><td>활발한 참여 기반</td></tr>
                  <tr><td>B2B 리드 발생 비율</td><td>80%+</td><td>B2B 마케팅 필수 채널</td></tr>
                  <tr><td>콘텐츠 소비자</td><td>사용자의 77%</td><td>높은 콘텐츠 소비율</td></tr>
                  <tr><td>오가닉 도달률</td><td>5~15%</td><td>Facebook 대비 5~10배</td></tr>
                  <tr><td>C-Level 사용자</td><td>6,500만+</td><td>의사결정자 직접 접근</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>B2B vs B2C 비교:</strong> B2C 마케팅에서는 인스타그램, 틱톡 등이 효과적이지만,
              B2B 마케팅에서는 링크드인이 압도적입니다. 특히 SaaS, 컨설팅, 전문 서비스, 교육, HR 분야에서
              링크드인은 가장 높은 ROI를 제공합니다. B2B 마케터의 97%가 콘텐츠 배포에 링크드인을 활용합니다.
            </div>

            <h2>2. 프로필 최적화</h2>
            <p>
              링크드인 프로필은 여러분의 디지털 명함이자 이력서입니다.
              프로필 완성도가 높을수록 검색 노출이 증가하며, 프로필 조회수가 최대 21배 향상됩니다.
              링크드인 알고리즘은 완성도 높은 프로필을 우선 노출하므로, 모든 섹션을 빠짐없이 채우는 것이 중요합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>프로필 최적화 체크리스트</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>요소</th><th>최적화 방법</th><th>팁</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>프로필 사진</strong></td>
                    <td>전문적인 헤드샷, 얼굴이 프레임의 60%, 밝은 배경</td>
                    <td>미소를 짓고, 눈을 카메라에 맞추세요</td>
                  </tr>
                  <tr>
                    <td><strong>배경 이미지</strong></td>
                    <td>브랜드/전문 분야를 나타내는 커스텀 배너 (1584x396px)</td>
                    <td>Canva에서 링크드인 배너 템플릿 활용</td>
                  </tr>
                  <tr>
                    <td><strong>헤드라인 (220자)</strong></td>
                    <td>직함 대신 가치 제안 작성, 키워드 포함</td>
                    <td>검색 키워드를 자연스럽게 포함</td>
                  </tr>
                  <tr>
                    <td><strong>About (2,600자)</strong></td>
                    <td>스토리텔링 + 핵심 성과 + CTA, 처음 3줄이 핵심</td>
                    <td>"더보기" 클릭 전 노출되는 3줄에 집중</td>
                  </tr>
                  <tr>
                    <td><strong>경력</strong></td>
                    <td>구체적 성과와 숫자 포함, 미디어 첨부</td>
                    <td>각 직무별 3~5개의 핵심 성과 기술</td>
                  </tr>
                  <tr>
                    <td><strong>스킬</strong></td>
                    <td>최대 50개 등록, 핵심 스킬 3개 상단 고정</td>
                    <td>동료에게 스킬 보증 요청</td>
                  </tr>
                  <tr>
                    <td><strong>추천글</strong></td>
                    <td>동료, 상사, 클라이언트에게 요청, 최소 5개 이상</td>
                    <td>구체적인 프로젝트/성과를 언급하도록 안내</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>헤드라인 작성 공식:</strong>
              <br />[직함/역할] | [전문 분야] | [핵심 성과/가치] | [대상]
              <br /><br />
              <strong>예시 1:</strong> "마케팅 디렉터 | 데이터 기반 성장 전략 | 3년간 매출 500% 성장 주도"
              <br /><strong>예시 2:</strong> "프리랜서 UX 디자이너 | SaaS 제품 전문 | 사용자 이탈률 40% 감소 실현"
              <br /><strong>예시 3:</strong> "스타트업 CMO | B2B SaaS 마케팅 | 월 200% 리드 증가 | 시리즈B 성장 파트너"
            </div>

            <h3>About 섹션 작성 프레임워크</h3>
            <p>
              About 섹션은 링크드인에서 가장 중요한 자유 작성 공간입니다.
              2,600자를 최대한 활용하되, 처음 3줄(약 300자)이 "더보기" 클릭 없이 노출되는 영역이므로
              가장 강력한 메시지를 배치해야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>About 섹션 구성 (STAR 방식)</h3>
              <ol>
                <li><strong>훅 (처음 3줄):</strong> 가장 강력한 성과 또는 가치 제안으로 시작. 숫자와 구체적 결과 포함</li>
                <li><strong>Situation:</strong> 어떤 문제를 해결하는 사람인지 맥락 설명</li>
                <li><strong>Task &amp; Action:</strong> 전문 분야와 접근 방식 설명. 키워드 자연스럽게 포함</li>
                <li><strong>Result:</strong> 핵심 성과 3~5개를 불릿 포인트로 정리</li>
                <li><strong>CTA:</strong> 연락 방법, 협업 제안, 무료 리소스 안내</li>
              </ol>
            </div>

            <h2>3. 콘텐츠 전략</h2>
            <p>
              링크드인에서 콘텐츠를 꾸준히 발행하면 사고 리더십을 구축하고 네트워크를 확장할 수 있습니다.
              플랫폼에 맞는 콘텐츠 유형과 전략을 알아봅니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>콘텐츠 유형별 특징</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>특징</th><th>최적 활용</th><th>참여율</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>텍스트 포스트</strong></td>
                    <td>텍스트 중심, 스토리텔링</td>
                    <td>인사이트 공유, 경험담</td>
                    <td>매우 높음</td>
                  </tr>
                  <tr>
                    <td><strong>이미지 포스트</strong></td>
                    <td>캐러셀, 인포그래픽</td>
                    <td>데이터 시각화, 프레임워크</td>
                    <td>높음</td>
                  </tr>
                  <tr>
                    <td><strong>문서/캐러셀</strong></td>
                    <td>PDF 슬라이드 형태</td>
                    <td>단계별 가이드, 체크리스트</td>
                    <td>매우 높음</td>
                  </tr>
                  <tr>
                    <td><strong>아티클</strong></td>
                    <td>긴 형식 콘텐츠</td>
                    <td>심층 분석, 가이드</td>
                    <td>중간</td>
                  </tr>
                  <tr>
                    <td><strong>뉴스레터</strong></td>
                    <td>구독 기반 정기 발행</td>
                    <td>전문 지식 공유, 팔로워 유지</td>
                    <td>높음</td>
                  </tr>
                  <tr>
                    <td><strong>동영상</strong></td>
                    <td>네이티브 비디오, 1~3분</td>
                    <td>브랜드 스토리, 비하인드 씬</td>
                    <td>높음</td>
                  </tr>
                  <tr>
                    <td><strong>이벤트/라이브</strong></td>
                    <td>실시간 방송, 웨비나</td>
                    <td>네트워킹, 교육</td>
                    <td>높음</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>링크드인 포스트 작성 공식 (AIDA):</strong>
              <ul>
                <li><strong>Attention (주목):</strong> 첫 줄에 강한 훅. 의문문, 놀라운 통계, 도발적 주장</li>
                <li><strong>Interest (관심):</strong> 문제 상황 공감, 경험 공유</li>
                <li><strong>Desire (욕구):</strong> 해결책 제시, 인사이트 전달</li>
                <li><strong>Action (행동):</strong> 질문으로 마무리하여 댓글 유도</li>
              </ul>
            </div>

            <h3>게시 빈도와 최적 시간</h3>
            <div className="section-card" data-aos="fade-up">
              <h3>최적 게시 전략</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>항목</th><th>권장 사항</th><th>이유</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>게시 빈도</strong></td>
                    <td>주 3~5회</td>
                    <td>알고리즘이 꾸준한 활동을 보상</td>
                  </tr>
                  <tr>
                    <td><strong>최적 시간 (한국)</strong></td>
                    <td>오전 8~9시, 점심 12시</td>
                    <td>출근 시간 및 점심 시간 피크</td>
                  </tr>
                  <tr>
                    <td><strong>최적 요일</strong></td>
                    <td>화~목요일</td>
                    <td>주중 비즈니스 활동이 활발</td>
                  </tr>
                  <tr>
                    <td><strong>댓글 대응</strong></td>
                    <td>게시 후 1시간 이내</td>
                    <td>초기 인게이지먼트가 도달률 결정</td>
                  </tr>
                  <tr>
                    <td><strong>외부 링크</strong></td>
                    <td>첫 댓글에 배치</td>
                    <td>외부 링크 포함 시 도달률 50% 감소</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>인게이지먼트 높이는 핵심 전략:</strong>
              <ul>
                <li>게시 후 1시간 이내에 모든 댓글에 답글 달기 (알고리즘 부스트)</li>
                <li>외부 링크는 본문이 아닌 첫 번째 댓글에 삽입</li>
                <li>포스트 내에서 질문으로 마무리하여 댓글 유도</li>
                <li>다른 사람을 태그할 때는 관련성 있는 경우에만 (스팸 태그 금지)</li>
                <li>동일한 주제를 다양한 각도에서 반복 발행하여 전문성 인식 강화</li>
              </ul>
            </div>

            <h2>4. 링크드인 회사 페이지 운영</h2>
            <p>
              링크드인 회사 페이지는 기업의 공식적인 디지털 존재감을 나타냅니다.
              잘 운영된 회사 페이지는 브랜드 인지도, 채용, 리드 생성에 모두 기여합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>회사 페이지 최적화 체크리스트</h3>
              <ul>
                <li><strong>로고 &amp; 커버:</strong> 고해상도 로고(300x300px)와 브랜드 메시지가 담긴 커버 이미지(1128x191px)</li>
                <li><strong>소개글:</strong> 핵심 가치, 서비스, 차별점을 2,000자 이내로 명확하게 작성. SEO 키워드 포함</li>
                <li><strong>CTA 버튼:</strong> "웹사이트 방문", "문의하기" 등 목적에 맞는 버튼 설정</li>
                <li><strong>직원 연결:</strong> 직원들이 회사 페이지와 경력을 연결하도록 안내</li>
                <li><strong>Showcase 페이지:</strong> 제품/서비스별 세부 페이지 생성으로 타겟 마케팅</li>
                <li><strong>Life 탭:</strong> 기업 문화, 팀 사진, 이벤트 등 채용 브랜딩 콘텐츠</li>
              </ul>
            </div>

            <div className="callout-box">
              <strong>직원 어드보커시(Employee Advocacy):</strong> 직원들이 회사 콘텐츠를 개인 계정으로 공유하면
              회사 페이지의 도달률이 평균 561% 증가합니다. 직원 어드보커시 프로그램을 체계적으로 운영하세요.
              공유하기 쉬운 콘텐츠를 제공하고, 직원들의 개인 브랜딩도 함께 지원하는 것이 핵심입니다.
            </div>

            <h2>5. 링크드인 광고</h2>
            <p>
              링크드인 광고는 B2B 마케팅에서 가장 정밀한 타겟팅을 제공합니다.
              직함, 산업, 기업 규모, 직급, 스킬 등으로 정확한 의사결정자에게 도달할 수 있습니다.
              타 플랫폼 대비 CPC가 높지만, B2B에서는 리드 품질이 압도적으로 높습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>링크드인 광고 유형 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>형식</th><th>목적</th><th>평균 CPC</th><th>추천 예산</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sponsored Content</strong></td>
                    <td>피드 내 네이티브 광고</td>
                    <td>브랜드 인지도, 리드 생성</td>
                    <td>$5~15</td>
                    <td>일 $50+</td>
                  </tr>
                  <tr>
                    <td><strong>Sponsored InMail</strong></td>
                    <td>메시지함 직접 전달</td>
                    <td>이벤트 초대, 제안서</td>
                    <td>건당 $0.50~1</td>
                    <td>일 $30+</td>
                  </tr>
                  <tr>
                    <td><strong>Text Ads</strong></td>
                    <td>사이드바 텍스트+이미지</td>
                    <td>웹사이트 트래픽</td>
                    <td>$3~8</td>
                    <td>일 $25+</td>
                  </tr>
                  <tr>
                    <td><strong>Dynamic Ads</strong></td>
                    <td>개인화된 자동 광고</td>
                    <td>팔로워 확보, 채용</td>
                    <td>$6~12</td>
                    <td>일 $40+</td>
                  </tr>
                  <tr>
                    <td><strong>Display Ads</strong></td>
                    <td>배너 형태의 디스플레이</td>
                    <td>브랜드 인지도</td>
                    <td>CPM $30~50</td>
                    <td>월 $5,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>링크드인 광고 타겟팅 옵션:</strong>
              <ul>
                <li><strong>직함:</strong> 특정 직함(예: "마케팅 디렉터", "CTO")을 직접 타겟팅</li>
                <li><strong>산업:</strong> 148개 이상의 산업 카테고리로 분류</li>
                <li><strong>기업 규모:</strong> 직원 수 기준 (1~10명부터 10,000명+까지)</li>
                <li><strong>직급:</strong> 인턴부터 C-Level까지 단계별 타겟팅</li>
                <li><strong>스킬:</strong> 프로필에 등록된 스킬 기반 타겟팅</li>
                <li><strong>그룹:</strong> 특정 링크드인 그룹 멤버 타겟팅</li>
                <li><strong>리타겟팅:</strong> 웹사이트 방문자, 동영상 시청자 재타겟팅</li>
              </ul>
            </div>

            <h2>6. 리크루팅 &amp; 인재 브랜딩</h2>
            <p>
              링크드인은 기업의 채용 브랜딩과 인재 확보에 가장 효과적인 플랫폼입니다.
              단순한 구인 공고를 넘어, 기업 문화와 비전을 전달하여 우수 인재를 유치하는 전략적 도구입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>채용 마케팅 전략</h3>
              <ul>
                <li><strong>기업 페이지 최적화:</strong> 기업 문화, 비전, 팀 분위기를 보여주는 콘텐츠 정기 발행</li>
                <li><strong>Life 탭 활용:</strong> 직원 인터뷰, 사무실 환경, 회사 이벤트, 복지 혜택 공유</li>
                <li><strong>직원 어드보커시:</strong> 직원들이 자발적으로 기업 콘텐츠를 공유하도록 장려</li>
                <li><strong>채용 광고:</strong> 직무별 타겟팅된 구인 광고로 적합한 후보자에게 도달</li>
                <li><strong>인재 풀 구축:</strong> 잠재 후보자와 미리 관계를 구축하여 채용 리드타임 단축</li>
                <li><strong>Recruiter 도구:</strong> LinkedIn Recruiter로 고급 검색, InMail, 파이프라인 관리</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>인재 브랜딩 주의사항:</strong>
              <ul>
                <li>실제 기업 문화와 다른 이미지를 만들면 역효과 (입사 후 이탈률 증가)</li>
                <li>현직 직원의 솔직한 이야기가 기획된 콘텐츠보다 효과적</li>
                <li>다양성과 포용성을 진정성 있게 보여주는 것이 중요</li>
                <li>채용 공고에 급여 범위를 명시하면 지원율 2배 이상 증가</li>
              </ul>
            </div>

            <h2>7. 링크드인 분석 도구 활용</h2>
            <p>
              데이터 기반의 링크드인 마케팅을 위해서는 분석 도구를 적극 활용해야 합니다.
              링크드인 내장 분석 도구와 서드파티 도구를 조합하면 더 깊은 인사이트를 얻을 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 분석 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>의미</th><th>목표 수치</th><th>개선 방법</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>노출 수 (Impressions)</strong></td>
                    <td>콘텐츠가 피드에 표시된 횟수</td>
                    <td>팔로워의 5~15%</td>
                    <td>게시 시간 최적화, 해시태그 활용</td>
                  </tr>
                  <tr>
                    <td><strong>참여율 (Engagement Rate)</strong></td>
                    <td>(좋아요+댓글+공유+클릭) / 노출 수</td>
                    <td>2~5%</td>
                    <td>질문으로 마무리, CTA 포함</td>
                  </tr>
                  <tr>
                    <td><strong>프로필 조회수</strong></td>
                    <td>프로필을 방문한 사람 수</td>
                    <td>주간 증가 추세</td>
                    <td>콘텐츠 발행 빈도 증가</td>
                  </tr>
                  <tr>
                    <td><strong>팔로워 증가율</strong></td>
                    <td>신규 팔로워 수 / 기간</td>
                    <td>주 50~200명</td>
                    <td>바이럴 콘텐츠, 네트워킹 강화</td>
                  </tr>
                  <tr>
                    <td><strong>SSI (Social Selling Index)</strong></td>
                    <td>링크드인 활동 종합 점수 (100점 만점)</td>
                    <td>70점 이상</td>
                    <td>프로필 완성, 콘텐츠 발행, 네트워킹</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>추천 분석 도구</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Shield Analytics</strong></td>
                    <td>프로필/콘텐츠 분석, 성장 추적, 경쟁사 비교</td>
                    <td>월 $8~</td>
                  </tr>
                  <tr>
                    <td><strong>AuthoredUp</strong></td>
                    <td>포스트 작성/예약, 텍스트 포매팅, 상세 분석</td>
                    <td>월 $19.95</td>
                  </tr>
                  <tr>
                    <td><strong>Taplio</strong></td>
                    <td>AI 포스트 생성, 캐러셀 제작, 예약, 분석</td>
                    <td>월 $49~</td>
                  </tr>
                  <tr>
                    <td><strong>LinkedIn Sales Navigator</strong></td>
                    <td>고급 검색, 리드 추천, InMail 크레딧</td>
                    <td>월 $99~</td>
                  </tr>
                  <tr>
                    <td><strong>LinkedIn SSI</strong></td>
                    <td>소셜 셀링 지수 무료 확인</td>
                    <td>무료</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>8. 개인 브랜딩 &amp; 사고 리더십</h2>
            <p>
              링크드인은 개인 브랜딩과 사고 리더십(Thought Leadership) 구축에 최적의 플랫폼입니다.
              꾸준한 콘텐츠 발행과 네트워킹으로 업계 전문가로 자리매김할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>사고 리더십 구축 5단계</h3>
              <ol>
                <li><strong>전문 분야 선정:</strong> 1~2가지 핵심 주제에 집중. "이 주제하면 이 사람"이 되기</li>
                <li><strong>꾸준한 콘텐츠 발행:</strong> 주 3~5회 포스트, 월 1~2회 아티클/뉴스레터</li>
                <li><strong>커뮤니티 참여:</strong> 관련 포스트에 인사이트 있는 댓글, 그룹 토론 참여</li>
                <li><strong>네트워크 확장:</strong> 업계 전문가, 의사결정자와 전략적으로 연결</li>
                <li><strong>오프라인 연계:</strong> 컨퍼런스 발표, 팟캐스트 출연, 인터뷰 등 다채널 활동</li>
              </ol>
            </div>

            <div className="info-box tip">
              <strong>커리어 전환을 위한 링크드인 활용:</strong>
              <ul>
                <li>새로운 분야의 키워드로 헤드라인과 스킬 업데이트</li>
                <li>전환하려는 분야의 콘텐츠를 꾸준히 발행하며 전문성 구축</li>
                <li>해당 분야 전문가들과 적극적으로 네트워킹</li>
                <li>관련 자격증, 수강 이력 프로필에 추가</li>
                <li>전환 스토리를 진솔하게 공유하여 공감 유도</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습: 링크드인 프로필 최적화 실행</h3>
              <p>아래 단계를 따라 링크드인 프로필을 완전히 최적화해 보세요.</p>
              <ol>
                <li><strong>프로필 사진 업데이트:</strong> 전문적인 헤드샷으로 교체 (밝은 배경, 미소, 고해상도)</li>
                <li><strong>헤드라인 재작성:</strong> 위의 공식을 활용하여 가치 제안 중심의 헤드라인 작성</li>
                <li><strong>About 섹션 완성:</strong> STAR 프레임워크를 적용하여 2,600자 이내로 작성</li>
                <li><strong>경력 섹션 업데이트:</strong> 각 직무에 3~5개의 구체적 성과(숫자 포함) 추가</li>
                <li><strong>스킬 정리:</strong> 핵심 스킬 50개 등록, 상위 3개 고정, 동료에게 보증 요청</li>
                <li><strong>추천글 요청:</strong> 최소 3명에게 구체적인 프로젝트/성과 기반의 추천글 요청</li>
                <li><strong>첫 콘텐츠 발행:</strong> AIDA 공식을 적용하여 텍스트 포스트 1개 작성 및 게시</li>
                <li><strong>SSI 점수 확인:</strong> linkedin.com/sales/ssi에서 현재 점수 확인 후 기록</li>
              </ol>
              <p><strong>목표:</strong> 2주 후 SSI 점수 10점 이상 향상, 프로필 조회수 3배 증가</p>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/blog" className="lesson-nav-btn prev">&larr; 블로그 &amp; SEO</Link>
              <Link to="/tools/email" className="lesson-nav-btn next">이메일 마케팅 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolLinkedIn;
