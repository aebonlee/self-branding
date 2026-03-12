import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek9 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="9주차: 개인 브랜딩 실전" path="/lessons/personal-branding" />
      <section className="page-header">
        <div className="container">
          <h1>9주차: 개인 브랜딩 실전</h1>
          <p>온라인 프레즌스 구축부터 평판 관리까지, 나만의 퍼스널 브랜드를 실전에서 구축합니다</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 온라인 프레즌스 구축</h2>
            <p>
              온라인 프레즌스(Online Presence)란 인터넷에서 나를 검색했을 때 나타나는 모든 디지털 발자국을 의미합니다.
              오늘날 처음 만나는 사람의 80% 이상이 온라인 검색을 통해 사전 정보를 수집하며,
              채용담당자의 70%가 후보자의 온라인 활동을 확인합니다.
              따라서 의도적으로 관리되는 온라인 프레즌스는 개인 브랜딩의 핵심 기반입니다.
            </p>

            <h3>통일된 프로필 구축</h3>
            <div className="callout-box">
              <h4>모든 채널에서 일관되게 유지할 요소</h4>
              <ul>
                <li><strong>프로필 사진</strong> — 전문적이고 고화질인 동일한 사진 사용 (얼굴이 잘 보이는 반신 사진)</li>
                <li><strong>이름/닉네임</strong> — 모든 플랫폼에서 동일한 사용자명 확보 (namechk.com으로 확인)</li>
                <li><strong>바이오(소개글)</strong> — 핵심 키워드를 포함한 일관된 자기소개</li>
                <li><strong>비주얼 톤</strong> — 컬러 팔레트, 폰트, 디자인 스타일의 통일</li>
                <li><strong>링크</strong> — 웹사이트, 포트폴리오, 대표 SNS 링크 연결</li>
              </ul>
            </div>

            <h3>일관된 메시지</h3>
            <p>
              온라인의 모든 접점에서 "나는 누구이고, 무엇을 하며, 어떤 가치를 제공하는가"에 대한
              메시지가 일관되어야 합니다. 이를 위해 <strong>브랜드 포지셔닝 스테이트먼트</strong>를 작성하고,
              이를 기반으로 각 채널의 소개글을 작성하세요.
            </p>

            <div className="info-box tip">
              <h3>브랜드 포지셔닝 스테이트먼트 공식</h3>
              <p>
                "나는 <strong>[타겟 오디언스]</strong>를 위해 <strong>[핵심 역량/서비스]</strong>을(를) 제공하는
                <strong> [직함/역할]</strong>입니다. <strong>[차별화 포인트]</strong>을(를) 통해
                <strong> [제공하는 가치/결과]</strong>를 만들어냅니다."
              </p>
              <p>
                <em>예시: "나는 스타트업 창업자를 위해 데이터 기반 브랜딩 전략을 제공하는 마케팅 컨설턴트입니다.
                10년간의 실무 경험과 100개 이상의 프로젝트 노하우를 통해 6개월 안에 브랜드 인지도를 3배 높여드립니다."</em>
              </p>
            </div>

            <h2 data-aos="fade-up">2. 링크드인 최적화</h2>
            <p>
              링크드인(LinkedIn)은 9억 명 이상의 전문가가 활동하는 세계 최대의 비즈니스 네트워킹 플랫폼입니다.
              특히 B2B 마케팅, 취업, 비즈니스 파트너십에서 가장 강력한 퍼스널 브랜딩 채널입니다.
            </p>

            <h3>프로필 최적화 체크리스트</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>항목</th><th>최적화 방법</th><th>중요도</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>프로필 사진</strong></td><td>전문적인 헤드샷, 밝은 배경, 웃는 표정, 400x400px 이상</td><td>매우 높음</td></tr>
                <tr><td><strong>배경 이미지</strong></td><td>브랜드 컬러/슬로건을 반영한 커스텀 배너 (1584x396px)</td><td>높음</td></tr>
                <tr><td><strong>헤드라인</strong></td><td>"직함 | 핵심 역량 | 가치 제안" 형태, 키워드 포함 (120자)</td><td>매우 높음</td></tr>
                <tr><td><strong>요약(About)</strong></td><td>스토리텔링 + 핵심 성과 + CTA, 2~3문단, 키워드 자연 삽입</td><td>매우 높음</td></tr>
                <tr><td><strong>경력(Experience)</strong></td><td>역할, 성과, 수치를 포함한 구체적 설명</td><td>높음</td></tr>
                <tr><td><strong>스킬(Skills)</strong></td><td>핵심 역량 최소 5개 등록, 동료에게 보증(Endorsement) 요청</td><td>중간</td></tr>
                <tr><td><strong>추천글(Recommendations)</strong></td><td>상사, 동료, 고객으로부터 최소 3개의 추천글 확보</td><td>높음</td></tr>
                <tr><td><strong>주요 게시물(Featured)</strong></td><td>대표 작업물, 기사, 발표 자료 3~5개 핀 고정</td><td>중간</td></tr>
              </tbody>
            </table>

            <h3>링크드인 콘텐츠 활동</h3>
            <ul>
              <li><strong>포스트 작성</strong>: 업계 인사이트, 경험 공유, 의견 표명을 주 2~3회 발행</li>
              <li><strong>아티클 발행</strong>: 전문적인 장문 콘텐츠를 월 1~2회 발행</li>
              <li><strong>댓글 활동</strong>: 업계 리더의 게시물에 가치 있는 댓글 작성 (단순 "좋아요"가 아닌 의미 있는 의견)</li>
              <li><strong>해시태그 활용</strong>: 3~5개의 관련 해시태그 사용 (#퍼스널브랜딩 #마케팅 #커리어성장)</li>
            </ul>

            <div className="info-box tip">
              <h3>링크드인 알고리즘 팁</h3>
              <p>
                게시물 발행 후 첫 1시간의 반응이 도달 범위를 결정합니다.
                발행 직후 댓글에 적극적으로 응답하고, 동료들에게 반응을 요청하세요.
                외부 링크보다 텍스트 중심 포스트나 문서(PDF) 게시물이 더 높은 도달률을 보입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">3. 네트워킹 전략</h2>
            <p>
              네트워킹은 "아는 사람"을 늘리는 것이 아니라, "서로 가치를 교환할 수 있는 관계"를 구축하는 것입니다.
              효과적인 네트워킹은 커리어 성장의 가장 강력한 가속기입니다.
            </p>

            <h3>온라인 네트워킹</h3>
            <ul>
              <li><strong>커뮤니티 참여</strong>: 업계 관련 온라인 커뮤니티, Discord 서버, 슬랙 그룹 가입</li>
              <li><strong>웨비나/온라인 행사</strong>: 관련 행사에 참석하고 질문하며 존재감 드러내기</li>
              <li><strong>DM 전략</strong>: 가치를 먼저 제공하는 메시지 (무작정 "만나주세요"가 아닌 구체적 제안)</li>
              <li><strong>협업 제안</strong>: 콘텐츠 공동 제작, 게스트 포스팅, 팟캐스트 출연 등</li>
            </ul>

            <h3>오프라인 네트워킹</h3>
            <ul>
              <li><strong>컨퍼런스/밋업</strong>: 업계 행사에 정기적으로 참석, 발표 기회 확보</li>
              <li><strong>명함 교환 이후</strong>: 48시간 이내 후속 연락, LinkedIn 연결 요청</li>
              <li><strong>커피 챗</strong>: 만나고 싶은 사람에게 20분 커피 미팅 제안</li>
              <li><strong>스터디/모임</strong>: 정기 스터디 그룹 참여 또는 직접 조직</li>
            </ul>

            <h3>관계 유지 전략</h3>
            <div className="callout-box">
              <h4>네트워크 관리 매트릭스</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>관계 등급</th><th>대상</th><th>접촉 빈도</th><th>방법</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>A등급 (핵심)</strong></td><td>멘토, 핵심 파트너, 주요 고객</td><td>월 1~2회</td><td>정기 미팅, 직접 연락</td></tr>
                  <tr><td><strong>B등급 (중요)</strong></td><td>동료, 업계 지인</td><td>분기 1회</td><td>SNS 소통, 행사 참석</td></tr>
                  <tr><td><strong>C등급 (일반)</strong></td><td>넓은 네트워크</td><td>반기 1회</td><td>뉴스레터, 명절 인사</td></tr>
                </tbody>
              </table>
            </div>

            <h2 data-aos="fade-up">4. 강연 &amp; 인터뷰</h2>
            <p>
              강연과 인터뷰는 퍼스널 브랜드를 한 단계 끌어올리는 강력한 도구입니다.
              전문가로서의 신뢰도를 높이고, 더 넓은 오디언스에게 도달할 수 있습니다.
            </p>

            <h3>스피킹 기회 확보 방법</h3>
            <ul>
              <li><strong>소규모부터 시작</strong>: 사내 발표, 스터디 모임, 지역 밋업에서 연습</li>
              <li><strong>CFP(Call for Proposals)</strong>: 컨퍼런스의 발표자 모집에 적극적으로 지원</li>
              <li><strong>전문성 증명</strong>: 블로그, 유튜브 등으로 해당 분야 전문성을 먼저 증명</li>
              <li><strong>게스트 출연</strong>: 팟캐스트, 유튜브 채널에 게스트로 출연 요청</li>
              <li><strong>교육 강사</strong>: 대학교 특강, 기업 교육, 온라인 강의 플랫폼 활용</li>
            </ul>

            <h3>미디어 출연 준비</h3>
            <div className="callout-box">
              <h4>인터뷰 준비 체크리스트</h4>
              <ul>
                <li><strong>핵심 메시지 3개</strong>: 어떤 질문을 받더라도 전달하고 싶은 메시지 3가지 준비</li>
                <li><strong>예상 질문 답변</strong>: 10~15개의 예상 질문에 대한 답변 연습</li>
                <li><strong>수치와 사례</strong>: 구체적인 데이터와 실제 사례를 준비하여 설득력 확보</li>
                <li><strong>바운더리 설정</strong>: 답변하지 않을 주제나 범위를 미리 결정</li>
                <li><strong>외모와 태도</strong>: 브랜드에 맞는 복장, 자신감 있는 태도, 적절한 제스처</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. 사이드 프로젝트</h2>
            <p>
              사이드 프로젝트는 본업 외에 진행하는 개인 프로젝트로, 전문성을 증명하고
              포트폴리오를 강화하는 데 매우 효과적입니다. 많은 유명 브랜드와 서비스가
              사이드 프로젝트에서 시작되었습니다 (Twitter, Gmail, Craigslist 등).
            </p>

            <h3>사이드 프로젝트 아이디어</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>분야</th><th>프로젝트 예시</th><th>브랜딩 효과</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>개발</strong></td><td>오픈소스 기여, 개인 앱/웹 서비스, 기술 블로그</td><td>기술력 증명, GitHub 포트폴리오</td></tr>
                <tr><td><strong>디자인</strong></td><td>UI/UX 리디자인, Daily UI Challenge, 일러스트 시리즈</td><td>디자인 감각, Behance 포트폴리오</td></tr>
                <tr><td><strong>마케팅</strong></td><td>니치 뉴스레터, 틈새 SNS 계정 운영, 트렌드 리포트</td><td>마케팅 역량, 실전 데이터</td></tr>
                <tr><td><strong>콘텐츠</strong></td><td>유튜브 채널, 팟캐스트, 전자책 출판</td><td>콘텐츠 제작 능력, 팬덤</td></tr>
                <tr><td><strong>교육</strong></td><td>온라인 강의 제작, 멘토링, 워크숍 운영</td><td>전문가 포지셔닝, 교육 역량</td></tr>
              </tbody>
            </table>

            <div className="info-box warning">
              <h3>사이드 프로젝트 주의사항</h3>
              <ul>
                <li>회사 근무 중인 경우, 겸업금지 조항 및 지식재산권 규정을 반드시 확인하세요.</li>
                <li>너무 많은 프로젝트를 동시에 시작하지 마세요. 하나에 집중하는 것이 효과적입니다.</li>
                <li>완벽함보다 꾸준함이 중요합니다. 작게 시작하되 꾸준히 업데이트하세요.</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">6. 개인 웹사이트</h2>
            <p>
              개인 웹사이트는 당신이 완전히 통제할 수 있는 유일한 디지털 공간입니다.
              소셜 미디어는 알고리즘이나 플랫폼 정책에 의존하지만, 개인 웹사이트는
              당신만의 규칙으로 운영됩니다.
            </p>

            <h3>개인 웹사이트 필수 구성 요소</h3>
            <ul>
              <li><strong>도메인</strong>: 본인 이름 또는 브랜드명.com 확보 (예: honggildong.com)</li>
              <li><strong>홈페이지</strong>: 핵심 메시지, 간략한 소개, CTA</li>
              <li><strong>소개(About) 페이지</strong>: 스토리, 경력, 가치관</li>
              <li><strong>포트폴리오</strong>: 대표 작업물 3~5개 상세 설명</li>
              <li><strong>블로그</strong>: 정기적인 전문 콘텐츠 발행</li>
              <li><strong>연락처</strong>: 이메일, 소셜 링크, 문의 폼</li>
            </ul>

            <h3>웹사이트 제작 도구 비교</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>도구</th><th>난이도</th><th>비용</th><th>장점</th><th>적합 대상</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Notion</strong></td><td>매우 쉬움</td><td>무료~월 $8</td><td>빠른 제작, 쉬운 업데이트</td><td>초보자, 간단한 포트폴리오</td></tr>
                <tr><td><strong>Wix</strong></td><td>쉬움</td><td>무료~월 $27</td><td>드래그 앤 드롭, 풍부한 템플릿</td><td>비개발자, 중소 규모</td></tr>
                <tr><td><strong>WordPress</strong></td><td>중간</td><td>호스팅 월 $3~</td><td>무한한 확장성, SEO 최적화</td><td>블로거, 비즈니스</td></tr>
                <tr><td><strong>GitHub Pages</strong></td><td>어려움</td><td>무료</td><td>개발자 친화적, 커스텀 자유</td><td>개발자, 기술 포트폴리오</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">7. 평판 관리</h2>
            <p>
              온라인 평판은 당신이 직접 만드는 것이 아니라, 다른 사람들이 만드는 것입니다.
              하지만 체계적인 관리를 통해 긍정적인 방향으로 형성할 수 있습니다.
            </p>

            <h3>온라인 평판 모니터링</h3>
            <ul>
              <li><strong>Google Alerts</strong>: 본인 이름과 브랜드명에 대한 알림 설정</li>
              <li><strong>정기 검색</strong>: 월 1회 이상 본인 이름으로 검색하여 결과 확인</li>
              <li><strong>리뷰 사이트</strong>: 관련 플랫폼의 리뷰와 평가 모니터링</li>
              <li><strong>SNS 멘션</strong>: 태그되거나 언급되는 게시물 추적</li>
            </ul>

            <h3>부정적 리뷰/의견 대응 전략</h3>
            <div className="callout-box">
              <h4>대응 프레임워크 (A.C.E.)</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>행동</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A - Acknowledge (인정)</strong></td>
                    <td>문제를 인정하고 공감 표현</td>
                    <td>"불편을 끼쳐드려 죄송합니다. 말씀하신 상황이 충분히 이해됩니다."</td>
                  </tr>
                  <tr>
                    <td><strong>C - Correct (교정)</strong></td>
                    <td>문제 해결 방안 제시</td>
                    <td>"확인 후 즉시 조치하겠습니다. DM으로 상세 내용을 알려주시겠어요?"</td>
                  </tr>
                  <tr>
                    <td><strong>E - Elevate (전환)</strong></td>
                    <td>긍정적 방향으로 전환</td>
                    <td>"이번 피드백을 반영하여 더 나은 서비스를 제공하겠습니다."</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>평판 관리 주의사항</h3>
              <p>
                부정적인 콘텐츠를 무작정 삭제하려 하지 마세요. 스트라이샌드 효과(Streisand Effect)로
                오히려 더 큰 관심을 받을 수 있습니다. 대신, 양질의 긍정적 콘텐츠를 꾸준히 생산하여
                검색 결과에서 부정적 내용을 밀어내는 전략이 효과적입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 링크드인 프로필 최적화</h3>
              <p>위에서 배운 체크리스트를 기반으로 링크드인 프로필을 최적화하세요:</p>
              <ul>
                <li>프로필 사진 및 배경 이미지 업데이트</li>
                <li>헤드라인 최적화 (직함 + 핵심 역량 + 가치 제안)</li>
                <li>요약(About) 섹션 재작성 (스토리텔링 기법 적용)</li>
                <li>경력 항목에 구체적 성과 및 수치 추가</li>
                <li>스킬 5개 이상 등록 및 추천글 1건 이상 요청</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: 엘리베이터 피치 작성</h3>
              <p>30초 안에 나를 소개하는 엘리베이터 피치를 작성하세요. 다음 구조를 따르세요:</p>
              <ul>
                <li><strong>Hook (관심 끌기)</strong>: "~한 문제를 해결합니다" 또는 "~를 도와드립니다" (1문장)</li>
                <li><strong>전문성 (나는 누구인가)</strong>: 역할, 경력, 핵심 역량 (1~2문장)</li>
                <li><strong>차별화 (왜 나인가)</strong>: 독특한 접근법, 대표 성과 (1문장)</li>
                <li><strong>CTA (행동 유도)</strong>: 다음 단계 제안 (1문장)</li>
              </ul>
              <p><strong>분량:</strong> 100~150자 내외 (30초 스피치)</p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                10주차에서는 포트폴리오 브랜딩을 다룹니다. 포트폴리오 구성법, 이력서 디자인,
                자기소개서 작성(STAR 기법), 그리고 포트폴리오 웹사이트 제작까지 배웁니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/corporate-pr" className="lesson-nav-btn prev">&larr; 8주차: 기업 홍보 &amp; PR</Link>
              <Link to="/lessons/portfolio-branding" className="lesson-nav-btn next">10주차: 포트폴리오 브랜딩 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek9;
