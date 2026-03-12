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
          <p>온라인 프레즌스 구축부터 네트워킹, 엘리베이터 피치까지 — 나만의 브랜드를 세상에 알리는 실전 전략</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 온라인 프레즌스 구축</h2>
            <p>
              디지털 시대에 검색되지 않으면 존재하지 않는 것이라는 말이 있습니다.
              당신의 이름을 구글이나 네이버에 검색했을 때 어떤 결과가 나오나요?
              온라인 프레즌스(Online Presence)는 인터넷 상에서 당신의 존재감을 의미하며,
              퍼스널 브랜딩의 가장 기본적인 인프라입니다. 채용 담당자의 92%가
              후보자를 온라인에서 검색한다는 조사 결과가 이를 뒷받침합니다.
              또한 클라이언트의 78%는 비즈니스 미팅 전에 상대방을 온라인으로 조사합니다.
            </p>

            <h3>도메인 &amp; 웹사이트</h3>
            <div className="callout-box">
              <h3>나만의 도메인을 확보하세요</h3>
              <ul>
                <li><strong>도메인 선택</strong>: 가급적 본명(예: honggildong.com) 또는 브랜드명으로 .com 도메인 확보</li>
                <li><strong>.com 우선</strong>: .com이 없으면 .co, .me, .kr 순으로 고려</li>
                <li><strong>일관성</strong>: 도메인, SNS 핸들, 이메일 주소를 모두 동일한 이름으로 통일</li>
                <li><strong>이메일</strong>: name@yourdomain.com 형태의 커스텀 이메일은 전문성을 높여줍니다</li>
                <li><strong>핸들 선점</strong>: namechk.com에서 모든 플랫폼의 동일 핸들 사용 가능 여부를 확인하고 선점하세요</li>
              </ul>
            </div>

            <h3>개인 웹사이트 필수 구성</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>페이지</th><th>핵심 내용</th><th>팁</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>홈 (Home)</strong></td><td>핵심 메시지, 간략한 소개, CTA</td><td>5초 안에 이 사람이 무엇을 하는지 파악할 수 있어야 함</td></tr>
                <tr><td><strong>소개 (About)</strong></td><td>스토리, 경력 요약, 가치관</td><td>3인칭이 아닌 1인칭으로 작성, 인간적인 면도 보여주세요</td></tr>
                <tr><td><strong>포트폴리오 (Work)</strong></td><td>대표 프로젝트 3~5개</td><td>각 프로젝트에 과정과 결과를 함께 보여주세요</td></tr>
                <tr><td><strong>블로그 (Blog)</strong></td><td>전문 분야 콘텐츠</td><td>월 2~4회 정기 발행으로 SEO 효과 극대화</td></tr>
                <tr><td><strong>연락처 (Contact)</strong></td><td>이메일, SNS, 문의 폼</td><td>간단한 문의 폼 + 응답 예상 시간 명시</td></tr>
              </tbody>
            </table>

            <h3>SEO (검색엔진 최적화) 기초</h3>
            <p>
              내 이름이나 브랜드명으로 검색했을 때 원하는 결과가 상위에 노출되도록 관리해야 합니다.
              이를 네임 SEO(Name SEO) 또는 퍼스널 SEO라고 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>SEO 전략</th><th>실행 방법</th><th>효과</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>이름 일관성</strong></td><td>모든 플랫폼에서 동일한 이름/핸들 사용</td><td>검색 결과 통합, 인지도 향상</td></tr>
                <tr><td><strong>프로필 완성도</strong></td><td>LinkedIn, GitHub, 포트폴리오 사이트 프로필 100% 작성</td><td>검색 순위 상승</td></tr>
                <tr><td><strong>콘텐츠 발행</strong></td><td>블로그, 미디엄, 브런치 등에 정기적 글 발행</td><td>검색 결과 점유율 확대</td></tr>
                <tr><td><strong>백링크 확보</strong></td><td>외부 매체 기고, 인터뷰, 게스트 포스팅</td><td>도메인 권위(DA) 상승</td></tr>
                <tr><td><strong>구글 Knowledge Panel</strong></td><td>구조화된 데이터, 위키 등재, 다양한 플랫폼 활동</td><td>검색 시 정보 패널 노출</td></tr>
                <tr><td><strong>이미지 SEO</strong></td><td>프로필 사진 파일명을 본명으로 설정, ALT 태그 활용</td><td>이미지 검색 결과 노출</td></tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>온라인 평판 감사 (Online Reputation Audit)</h3>
              <p>
                지금 바로 자신의 이름을 구글, 네이버, 유튜브에서 검색해 보세요.
                검색 결과 1페이지(상위 10개)가 모두 내가 원하는 콘텐츠로 채워져 있는지 확인하세요.
                부정적인 결과가 있다면 긍정적 콘텐츠를 더 많이 생산하여 밀어내는 전략(Content Displacement)을 사용합니다.
                구글 알림(Google Alerts)에 자신의 이름을 등록하면 새로운 언급을 실시간 모니터링할 수 있습니다.
                또한 Mention, Brand24 같은 도구를 활용하면 더 정밀한 모니터링이 가능합니다.
              </p>
            </div>

            <h2 data-aos="fade-up">2. 프로페셔널 네트워킹 전략</h2>
            <p>
              당신이 아는 것보다 당신을 아는 사람이 더 중요하다는 말은
              네트워킹의 가치를 극단적으로 표현한 것입니다. 실제로는 당신을 아는 사람이 당신에 대해
              무엇을 아는가가 더 정확합니다.
              전략적 네트워킹은 퍼스널 브랜드의 도달 범위를 기하급수적으로 확장시킵니다.
              LinkedIn 데이터에 따르면, 새로운 직장의 85%는 네트워킹을 통해 얻어집니다.
            </p>

            <h3>LinkedIn 전략</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>요소</th><th>최적화 방법</th><th>팁</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>프로필 사진</strong></td><td>전문적인 헤드샷, 밝은 배경, 얼굴이 70% 차지</td><td>사진이 있는 프로필은 21배 더 많은 조회수</td></tr>
                <tr><td><strong>배너 이미지</strong></td><td>전문 분야, 핵심 메시지가 담긴 커스텀 배너</td><td>Canva에서 1584x396px로 제작</td></tr>
                <tr><td><strong>헤드라인</strong></td><td>직함 | 전문 분야 | 핵심 가치 형태</td><td>단순 직함이 아닌 가치 제안(Value Proposition) 포함</td></tr>
                <tr><td><strong>About 섹션</strong></td><td>스토리텔링 + 성과 + CTA (2000자 활용)</td><td>첫 3줄이 가장 중요 (더보기 클릭 유도)</td></tr>
                <tr><td><strong>경험 섹션</strong></td><td>직무 설명이 아닌 성과 중심 기술</td><td>숫자와 구체적 결과로 증명</td></tr>
                <tr><td><strong>스킬 &amp; 추천</strong></td><td>핵심 스킬 상위 3개 고정, 동료 추천 요청</td><td>추천 50개 이상이면 상위 검색 노출</td></tr>
                <tr><td><strong>Featured 섹션</strong></td><td>대표 작업물, 기사, 발표 자료 핀 고정</td><td>3~5개의 최고 콘텐츠를 전략적으로 배치</td></tr>
                <tr><td><strong>추천글</strong></td><td>상사, 동료, 고객으로부터 추천글 확보</td><td>구체적 프로젝트를 언급한 추천글이 효과적</td></tr>
              </tbody>
            </table>

            <h3>업계 행사 &amp; 커뮤니티</h3>
            <div className="callout-box">
              <h3>효과적인 네트워킹을 위한 행사 활용법</h3>
              <ul>
                <li><strong>사전 준비</strong>: 참석자 리스트를 확인하고, 만나고 싶은 3~5명을 미리 LinkedIn에서 연결 요청</li>
                <li><strong>가치 교환</strong>: 무엇을 도와드릴 수 있을까요로 대화를 시작 (받기 전에 주기)</li>
                <li><strong>후속 조치</strong>: 행사 후 24시간 이내에 개인화된 메시지와 함께 LinkedIn 연결 요청</li>
                <li><strong>정기적 참석</strong>: 같은 커뮤니티에 3회 이상 참석하면 아는 사람에서 신뢰하는 사람으로 전환</li>
                <li><strong>발표자로 참여</strong>: 참석자에서 발표자로 역할을 전환하면 네트워킹 효과가 10배 증가</li>
                <li><strong>콘텐츠화</strong>: 행사에서 배운 내용을 LinkedIn 포스트나 블로그로 정리 공유</li>
              </ul>
            </div>

            <h3>온라인 커뮤니티 활동</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>커뮤니티 유형</th><th>예시</th><th>활용 전략</th><th>브랜딩 효과</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>전문 포럼</strong></td><td>Stack Overflow, 디스쿼스, 개발자 카페</td><td>질문에 성실히 답변하여 전문성 입증</td><td>전문가 포지셔닝</td></tr>
                <tr><td><strong>Slack/Discord 그룹</strong></td><td>업종별 프라이빗 그룹, 스터디 채널</td><td>적극적 참여로 핵심 멤버가 되기</td><td>인너 서클 진입</td></tr>
                <tr><td><strong>오픈소스 프로젝트</strong></td><td>GitHub 오픈소스 기여, 번역 프로젝트</td><td>코드 기여, 이슈 해결, 문서화 작업</td><td>기술력 공개 증명</td></tr>
                <tr><td><strong>LinkedIn 그룹</strong></td><td>업종별 전문 그룹</td><td>인사이트 공유, 토론 참여, 글 발행</td><td>비즈니스 네트워크 확장</td></tr>
                <tr><td><strong>뉴스레터 커뮤니티</strong></td><td>Substack, 메일리 커뮤니티</td><td>뉴스레터 발행 + 상호 추천</td><td>구독자 기반 영향력</td></tr>
              </tbody>
            </table>

            <h3>네트워크 관리 매트릭스</h3>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>관계 등급</th><th>대상</th><th>접촉 빈도</th><th>방법</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>A등급 (핵심, 15명)</strong></td><td>멘토, 핵심 파트너, 주요 고객, 추천인</td><td>월 1~2회</td><td>정기 미팅, 직접 연락, 생일/기념일 축하</td></tr>
                  <tr><td><strong>B등급 (중요, 50명)</strong></td><td>동료, 업계 지인, 전 직장 인맥</td><td>분기 1회</td><td>SNS 소통, 행사 참석 시 만남, 콘텐츠 공유</td></tr>
                  <tr><td><strong>C등급 (일반, 150명)</strong></td><td>넓은 네트워크, 행사 만남</td><td>반기 1회</td><td>뉴스레터, 명절 인사, LinkedIn 소통</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <h3>네트워킹에서 피해야 할 실수</h3>
              <ul>
                <li><strong>일방적 요청</strong>: 처음 만나자마자 부탁이나 세일즈를 시도하지 마세요.</li>
                <li><strong>양 위주 연결</strong>: 500명과 피상적 연결보다 50명과 깊은 관계가 더 가치 있습니다.</li>
                <li><strong>후속 조치 없음</strong>: 명함만 교환하고 연락하지 않는 것은 시간 낭비입니다.</li>
                <li><strong>자기 이야기만</strong>: 80% 듣고 20% 말하는 것이 좋은 네트워킹입니다.</li>
                <li><strong>SNS 스팸</strong>: 무분별한 DM, 댓글 광고는 오히려 평판을 떨어뜨립니다.</li>
                <li><strong>필요할 때만 연락</strong>: 평소에 관계를 유지하지 않다가 부탁할 때만 연락하는 것은 최악입니다.</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">3. 강연/인터뷰 기회 만들기</h2>
            <p>
              강연과 인터뷰는 퍼스널 브랜드를 확립하는 가장 강력한 방법 중 하나입니다.
              청중 앞에서 자신의 전문 지식을 공유하면, 단순한 전문가에서 사고 리더(Thought Leader)로
              포지셔닝될 수 있습니다. 처음부터 대규모 행사를 목표로 하지 말고,
              작은 모임에서 시작해 점진적으로 무대를 넓혀가세요.
            </p>

            <h3>강연 기회의 단계별 확장</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>단계</th><th>기회 유형</th><th>준비물</th><th>예상 규모</th><th>소요 기간</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1단계 (입문)</strong></td>
                  <td>사내 발표, 스터디 그룹, 소규모 밋업</td>
                  <td>발표 자료 + 경험 정리</td>
                  <td>10~30명</td>
                  <td>즉시 시작</td>
                </tr>
                <tr>
                  <td><strong>2단계 (성장)</strong></td>
                  <td>업계 세미나, 웨비나, 팟캐스트 게스트</td>
                  <td>발표 영상 + 블로그 + 소셜 미디어 활동</td>
                  <td>30~100명</td>
                  <td>3~6개월</td>
                </tr>
                <tr>
                  <td><strong>3단계 (확장)</strong></td>
                  <td>컨퍼런스 발표, TEDx, 기업 초청 강연</td>
                  <td>이전 강연 영상 + 언론 기사 + 저서/콘텐츠</td>
                  <td>100~500명</td>
                  <td>6~18개월</td>
                </tr>
                <tr>
                  <td><strong>4단계 (전문)</strong></td>
                  <td>국제 컨퍼런스, 기조연설, 방송 출연, 대학 특강</td>
                  <td>스피커 프로필 + 에이전시 연계 + 저서</td>
                  <td>500명 이상</td>
                  <td>1~3년</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h4>팟캐스트 출연 전략</h4>
              <p>
                팟캐스트는 퍼스널 브랜딩의 숨겨진 보물입니다. 수천 개의 팟캐스트가 매주 게스트를
                찾고 있으며, 진입 장벽이 상대적으로 낮습니다.
                팟캐스트 청취자는 평균 80% 이상의 완청률을 보이며, 이는 다른 매체에 비해 매우 높은 수치입니다.
              </p>
              <ul>
                <li><strong>리서치</strong>: 자신의 전문 분야와 관련된 팟캐스트 20개 리스트업</li>
                <li><strong>청취</strong>: 최소 3개 에피소드를 듣고, 호스트의 스타일과 관심사 파악</li>
                <li><strong>피칭</strong>: 구체적인 주제 제안 + 자신만이 제공할 수 있는 고유 인사이트 강조</li>
                <li><strong>준비</strong>: 핵심 메시지 3개 + 흥미로운 에피소드 + 실용적 팁 준비</li>
                <li><strong>홍보</strong>: 출연 에피소드를 자신의 채널에서 적극 공유하고, 호스트와 관계 유지</li>
                <li><strong>자체 제작</strong>: 게스트 출연이 익숙해지면 자신만의 팟캐스트 론칭도 고려</li>
              </ul>
            </div>

            <h3>웨비나 &amp; 온라인 강연</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>플랫폼</th><th>특징</th><th>적합한 용도</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Zoom Webinar</strong></td><td>대규모 참석자, 녹화 기능, Q&amp;A</td><td>기업 웨비나, 전문 세미나</td></tr>
                <tr><td><strong>YouTube Live</strong></td><td>무료, 무제한 시청자, 아카이빙</td><td>공개 강연, 튜토리얼</td></tr>
                <tr><td><strong>LinkedIn Live</strong></td><td>전문가 네트워크 도달, 높은 인게이지먼트</td><td>B2B 콘텐츠, 업계 대담</td></tr>
                <tr><td><strong>Instagram Live</strong></td><td>친밀한 소통, 실시간 댓글</td><td>Q&amp;A, 비하인드, 가벼운 주제</td></tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>TEDx 신청 가이드</h3>
              <p>
                TEDx는 공유할 가치가 있는 아이디어(Ideas Worth Spreading)를 전파하는 플랫폼입니다.
                한국 각 지역에서 연 1~2회 개최되며, 공식 웹사이트(ted.com/tedx/events)에서
                가까운 TEDx 이벤트를 찾아 스피커 신청서를 제출할 수 있습니다.
                핵심은 나의 이야기가 아니라 관객이 가져갈 수 있는 아이디어를 중심으로 기획하는 것입니다.
                신청서에는 아이디어의 독창성, 범용성, 그리고 당신이 이 주제에 대해 말할 자격이 있는 이유를 명확히 서술하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">4. 사이드 프로젝트로 전문성 입증</h2>
            <p>
              사이드 프로젝트는 본업 외에 자발적으로 진행하는 프로젝트로,
              포트폴리오 강화, 새로운 스킬 습득, 전문성 입증의 강력한 도구입니다.
              말로 하지 말고 보여줘라(Show, Don't Tell)는 퍼스널 브랜딩의 핵심 원칙이며,
              사이드 프로젝트는 이를 가장 잘 실천하는 방법입니다.
              Twitter(X), Gmail, Craigslist 등 세계적 서비스들도 사이드 프로젝트에서 시작되었습니다.
            </p>

            <h3>사이드 프로젝트 유형</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>유형</th><th>예시</th><th>장점</th><th>소요 시간</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>콘텐츠 프로젝트</strong></td><td>블로그 시리즈, 뉴스레터, 유튜브 채널, 팟캐스트</td><td>꾸준함 증명, SEO 효과, 사고 리더십</td><td>주 3~5시간</td></tr>
                <tr><td><strong>오픈소스 기여</strong></td><td>GitHub 프로젝트, 라이브러리 개발, 번역, 문서화</td><td>기술력 증명, 글로벌 네트워크</td><td>주 2~4시간</td></tr>
                <tr><td><strong>커뮤니티 운영</strong></td><td>밋업 주최, 스터디 그룹, 온라인 커뮤니티 운영</td><td>리더십 증명, 네트워크 확장, 영향력</td><td>주 2~3시간</td></tr>
                <tr><td><strong>제품/서비스 론칭</strong></td><td>앱, 웹서비스, 온라인 강의, 전자책, SaaS</td><td>기업가 정신, 실행력, 수익화 가능</td><td>프로젝트별 상이</td></tr>
                <tr><td><strong>사회 공헌</strong></td><td>재능 기부, 멘토링, 비영리 프로젝트, 교육 봉사</td><td>가치관 증명, 사회적 신뢰, CSR</td><td>월 4~8시간</td></tr>
                <tr><td><strong>연구/리서치</strong></td><td>업계 리포트, 트렌드 분석, 설문 조사, 백서 발행</td><td>데이터 기반 전문성, 인용 효과</td><td>프로젝트별 상이</td></tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>Building in Public (공개 개발)</h3>
              <p>
                Building in Public은 프로젝트의 진행 과정을 실시간으로 공개하는 트렌드입니다.
                완성된 결과물만 공개하는 대신, 아이디어 구상 단계부터 개발, 실패, 성공까지
                모든 여정을 SNS나 블로그에 공유합니다.
              </p>
              <ul>
                <li><strong>투명성</strong>: 매출, 사용자 수, 실패 경험까지 솔직하게 공유</li>
                <li><strong>참여 유도</strong>: 팔로워가 프로젝트에 의견을 제시하고 함께 성장하는 느낌</li>
                <li><strong>신뢰 구축</strong>: 과정의 진정성이 완성된 결과보다 강한 신뢰를 만듦</li>
                <li><strong>마케팅 효과</strong>: 론칭 전부터 잠재 고객과 팬을 확보</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>사이드 프로젝트 성공의 3가지 원칙</h3>
              <ul>
                <li><strong>본업과 시너지</strong>: 본업의 전문성을 강화하거나 보완하는 방향으로 선택하세요. 마케터가 마케팅 블로그를 운영하면 본업에도 도움이 됩니다.</li>
                <li><strong>지속 가능성</strong>: 6개월 이상 꾸준히 할 수 있는 규모로 시작하세요. 화려한 시작보다 일관된 지속이 더 강력합니다.</li>
                <li><strong>공개 &amp; 공유</strong>: 과정 자체를 공유하세요. 완성된 결과뿐 아니라 진행 중인 과정도 훌륭한 콘텐츠입니다.</li>
              </ul>
            </div>

            <div className="info-box warning">
              <h3>사이드 프로젝트 주의사항</h3>
              <ul>
                <li><strong>겸업금지 확인</strong>: 재직 중이라면 근로계약서의 겸업금지 조항과 지식재산권 규정을 반드시 확인하세요.</li>
                <li><strong>집중의 법칙</strong>: 동시에 3개 이상의 프로젝트를 진행하면 어느 것도 제대로 완성하기 어렵습니다.</li>
                <li><strong>번아웃 방지</strong>: 본업에 지장이 가지 않도록 시간을 관리하세요. 주 5시간 이하로 시작을 권장합니다.</li>
                <li><strong>법적 이슈</strong>: 타인의 저작물, 상표, 데이터를 무단 사용하지 않도록 주의하세요.</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">5. 퍼스널 브랜딩 콘텐츠 전략</h2>
            <p>
              퍼스널 브랜딩에서 콘텐츠는 당신의 자산입니다. 한 번 만들어진 양질의 콘텐츠는
              24시간 365일 당신을 대신하여 전문성을 증명하고, 새로운 기회를 끌어옵니다.
              핵심은 어디서, 무엇을, 어떤 빈도로 발행할 것인지 전략적으로 결정하는 것입니다.
            </p>

            <h3>LinkedIn 글쓰기 전략</h3>
            <div className="callout-box">
              <h3>LinkedIn 포스트 유형별 가이드</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>포스트 유형</th><th>구조</th><th>예시 주제</th><th>최적 길이</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>경험 공유</strong></td>
                    <td>Hook &rarr; 상황 &rarr; 교훈 &rarr; CTA</td>
                    <td>입사 첫날 대표님이 한 말, 면접에서 떨어진 후 깨달은 것</td>
                    <td>800~1200자</td>
                  </tr>
                  <tr>
                    <td><strong>인사이트/팁</strong></td>
                    <td>문제 제기 &rarr; 해결책 리스트 &rarr; 요약</td>
                    <td>마케터라면 알아야 할 5가지 지표</td>
                    <td>600~1000자</td>
                  </tr>
                  <tr>
                    <td><strong>의견/논평</strong></td>
                    <td>트렌드 언급 &rarr; 내 관점 &rarr; 근거 &rarr; 질문</td>
                    <td>AI 시대에 마케터의 역할</td>
                    <td>500~800자</td>
                  </tr>
                  <tr>
                    <td><strong>성과 공유</strong></td>
                    <td>성과 &rarr; 과정 &rarr; 감사 &rarr; 교훈</td>
                    <td>프로젝트 완료 회고, 수상 소식 공유</td>
                    <td>400~600자</td>
                  </tr>
                  <tr>
                    <td><strong>질문형</strong></td>
                    <td>맥락 제시 &rarr; 개방형 질문 &rarr; 내 의견 힌트</td>
                    <td>여러분은 어떤 도구를 사용하시나요?</td>
                    <td>300~500자</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <h3>LinkedIn 알고리즘 팁</h3>
              <ul>
                <li><strong>첫 3줄이 생명</strong>: 더 보기 클릭을 유도하는 강력한 첫 문장(Hook)이 핵심입니다.</li>
                <li><strong>외부 링크 지양</strong>: 링크가 포함된 포스트는 도달률이 최대 50% 감소합니다. 댓글에 링크를 달거나 텍스트 포스트를 활용하세요.</li>
                <li><strong>Dwell Time</strong>: 독자가 오래 머무는 글이 알고리즘에 유리합니다. 줄바꿈과 스토리로 읽는 시간을 늘리세요.</li>
                <li><strong>발행 시간</strong>: 한국 기준 화~목요일 오전 8~9시 또는 점심시간(12~13시)이 최적입니다.</li>
                <li><strong>댓글 대응</strong>: 포스트 발행 후 1시간 이내 댓글에 적극 답변하면 추가 노출됩니다.</li>
                <li><strong>해시태그</strong>: 3~5개의 관련 해시태그를 본문 끝에 배치하세요.</li>
              </ul>
            </div>

            <h3>뉴스레터 운영</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>항목</th><th>권장 사항</th><th>이유</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>발행 주기</strong></td><td>주 1회 고정 요일/시간</td><td>구독자의 기대감 형성, 루틴화</td></tr>
                <tr><td><strong>길이</strong></td><td>읽는 데 5~7분 (1500~2500자)</td><td>너무 길면 이탈, 너무 짧으면 가치 부족</td></tr>
                <tr><td><strong>구성</strong></td><td>인사 &rarr; 주제 &rarr; 실용 팁 &rarr; CTA &rarr; P.S.</td><td>친근하면서도 구조적인 형태</td></tr>
                <tr><td><strong>제목</strong></td><td>호기심 유발 + 구체적 숫자/키워드</td><td>오픈율 직접 좌우 (A/B 테스트 필수)</td></tr>
                <tr><td><strong>플랫폼</strong></td><td>Substack, 메일리, Beehiiv, ConvertKit</td><td>무료 시작 가능, 구독자 관리 용이</td></tr>
                <tr><td><strong>성장 전략</strong></td><td>SNS 홍보, 상호 추천, 리드 마그넷</td><td>초기 100명 확보가 가장 어렵고 중요</td></tr>
              </tbody>
            </table>

            <h2 data-aos="fade-up">6. 오프라인 브랜딩</h2>
            <p>
              디지털이 아무리 중요해도, 실제 만남에서 형성되는 인상은 대체 불가능합니다.
              첫인상은 7초 만에 결정되며, 그 인상을 바꾸는 데는 평균 21번의 추가 접촉이 필요합니다.
              오프라인 브랜딩은 온라인 프레즌스의 신뢰성을 높이는 핵심 보완 요소입니다.
            </p>

            <h3>명함 디자인</h3>
            <div className="callout-box">
              <h3>현대적 명함의 필수 요소</h3>
              <ul>
                <li><strong>기본 정보</strong>: 이름, 직함/브랜드 슬로건, 연락처 (미니멀하게)</li>
                <li><strong>QR 코드</strong>: 포트폴리오 사이트나 LinkedIn 프로필로 연결되는 QR 코드</li>
                <li><strong>디자인</strong>: 브랜드 아이덴티티(색상, 폰트)와 일관되게 디자인</li>
                <li><strong>소재</strong>: 두꺼운 종이(350g 이상), 특수 코팅, 엠보싱 등으로 촉감 차별화</li>
                <li><strong>디지털 명함</strong>: NFC 카드나 디지털 명함(리멤버, Blinq, HiHello) 병행 활용</li>
                <li><strong>양면 활용</strong>: 앞면은 정보, 뒷면은 포트폴리오 QR 또는 핵심 서비스 한 줄</li>
              </ul>
            </div>

            <h3>엘리베이터 피치 (Elevator Pitch)</h3>
            <p>
              엘리베이터 피치란 엘리베이터를 타고 이동하는 30~60초 동안 자신을 효과적으로
              소개하는 짧은 자기소개입니다. 네트워킹 행사, 면접, 우연한 만남 등
              어떤 상황에서도 자연스럽게 활용할 수 있어야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h4>엘리베이터 피치 공식 (30초 버전)</h4>
              <table className="lesson-table">
                <thead>
                  <tr><th>순서</th><th>요소</th><th>시간</th><th>예시</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1</strong></td>
                    <td>Hook (관심 끌기)</td>
                    <td>5초</td>
                    <td>혹시 SNS 콘텐츠 만드는 데 매일 3시간 이상 쓰시나요?</td>
                  </tr>
                  <tr>
                    <td><strong>2</strong></td>
                    <td>Who (나는 누구)</td>
                    <td>5초</td>
                    <td>저는 김브랜드, 콘텐츠 전략가입니다.</td>
                  </tr>
                  <tr>
                    <td><strong>3</strong></td>
                    <td>What (무엇을 하는가)</td>
                    <td>10초</td>
                    <td>소규모 브랜드가 AI 도구를 활용해 콘텐츠 제작 시간을 70% 줄이도록 돕습니다.</td>
                  </tr>
                  <tr>
                    <td><strong>4</strong></td>
                    <td>Proof (증거)</td>
                    <td>5초</td>
                    <td>지난 1년간 50개 브랜드의 콘텐츠 운영을 최적화했습니다.</td>
                  </tr>
                  <tr>
                    <td><strong>5</strong></td>
                    <td>CTA (행동 유도)</td>
                    <td>5초</td>
                    <td>혹시 관심 있으시면 커피 한잔 하면서 이야기 나눌 수 있을까요?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>첫인상 관리 (메라비언의 법칙)</h3>
            <table className="lesson-table">
              <thead>
                <tr><th>요소</th><th>비중</th><th>관리 방법</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>시각적 요소 (외모, 복장, 표정)</strong></td><td>55%</td><td>TPO에 맞는 복장, 깔끔한 그루밍, 자신감 있는 자세, 자연스러운 미소</td></tr>
                <tr><td><strong>청각적 요소 (목소리, 톤, 속도)</strong></td><td>38%</td><td>명확한 발음, 적절한 속도(분당 120~150단어), 따뜻한 톤, 적절한 볼륨</td></tr>
                <tr><td><strong>언어적 요소 (말의 내용)</strong></td><td>7%</td><td>준비된 자기소개, 상대에 대한 관심 표현, 경청의 태도</td></tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>오프라인 브랜딩 보너스 팁</h3>
              <p>
                악수할 때는 적절한 힘으로 2~3초 정도, 상대방의 눈을 보며 미소와 함께 하세요.
                대화 중 상대방의 이름을 2~3번 자연스럽게 불러주면 친밀감이 급격히 상승합니다.
                경청과 관심을 표현하는 것이 최고의 첫인상 전략입니다.
              </p>
            </div>

            <h2 data-aos="fade-up">7. 사례 분석: 성공적인 퍼스널 브랜더들</h2>
            <p>
              성공적인 퍼스널 브랜딩은 특별한 재능이 아니라 전략과 일관성의 결과입니다.
              다양한 분야에서 퍼스널 브랜드를 성공적으로 구축한 패턴을 분석해 보겠습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>퍼스널 브랜딩 성공 패턴</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>패턴</th><th>설명</th><th>대표 사례</th><th>핵심 전략</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>전문성 집중형</strong></td>
                    <td>하나의 분야에서 최고 전문가로 포지셔닝</td>
                    <td>특정 기술의 유명 개발자, 업계 애널리스트</td>
                    <td>깊이 있는 콘텐츠, 컨퍼런스 발표, 저서 출판</td>
                  </tr>
                  <tr>
                    <td><strong>교육자형</strong></td>
                    <td>지식을 쉽게 전달하는 교육 콘텐츠</td>
                    <td>유튜브 강의 채널, 온라인 코스 크리에이터</td>
                    <td>정기 콘텐츠, 체계적 커리큘럼, 커뮤니티 운영</td>
                  </tr>
                  <tr>
                    <td><strong>스토리텔러형</strong></td>
                    <td>자신의 경험과 여정을 진솔하게 공유</td>
                    <td>브런치 작가, 에세이스트, 브이로거</td>
                    <td>진정성, 꾸준한 기록, 감성적 연결</td>
                  </tr>
                  <tr>
                    <td><strong>커뮤니티 빌더형</strong></td>
                    <td>사람들을 연결하는 허브 역할</td>
                    <td>밋업 주최자, 슬랙 커뮤니티 운영자</td>
                    <td>연결자 역할, 이벤트 기획, 상호 가치 창출</td>
                  </tr>
                  <tr>
                    <td><strong>크로스오버형</strong></td>
                    <td>두 가지 이상의 분야를 결합</td>
                    <td>디자인하는 개발자, 코딩하는 마케터</td>
                    <td>독특한 포지셔닝, 융합 콘텐츠, 희소 가치</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <h3>퍼스널 브랜딩 성공의 6가지 공통점</h3>
              <ul>
                <li><strong>일관성</strong>: 최소 1년 이상 꾸준히 같은 메시지를 전달했다</li>
                <li><strong>진정성</strong>: 꾸미지 않은 실제 경험과 진솔한 이야기를 공유했다</li>
                <li><strong>가치 제공</strong>: 자신의 홍보가 아니라 타인에게 유용한 콘텐츠를 먼저 제공했다</li>
                <li><strong>명확한 포지셔닝</strong>: 특정 주제 하면 떠오르는 명확한 포지션이 있다</li>
                <li><strong>멀티 채널</strong>: 한 채널에 의존하지 않고, 2~3개 채널에서 활동했다</li>
                <li><strong>커뮤니티 참여</strong>: 일방적 발신이 아니라 쌍방향 소통과 관계 구축에 투자했다</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">8. 실습 과제</h2>

            <div className="exercise-box">
              <h3>과제 A: 나만의 엘리베이터 피치 만들기</h3>
              <p>30초 버전과 60초 버전의 엘리베이터 피치를 각각 작성하세요:</p>
              <ul>
                <li><strong>30초 버전</strong>: Hook + Who + What + Proof + CTA (5요소 포함)</li>
                <li><strong>60초 버전</strong>: 30초 버전 + 구체적 사례/스토리 추가</li>
                <li>실제로 소리 내어 읽으며 시간을 측정하세요</li>
                <li>스마트폰으로 녹음하여 톤, 속도, 명확성을 자체 평가하세요</li>
                <li>3명 이상에게 들려주고 피드백을 받아 수정하세요</li>
                <li>상황별 버전도 준비하세요 (취업 면접용, 비즈니스 미팅용, 캐주얼 소개용)</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 B: 온라인 프레즌스 감사 &amp; 개선 계획</h3>
              <p>자신의 온라인 프레즌스를 종합적으로 점검하세요:</p>
              <ul>
                <li>구글/네이버에 본인 이름 검색 후 상위 10개 결과 기록 및 평가</li>
                <li>LinkedIn SSI(Social Selling Index) 점수 확인: linkedin.com/sales/ssi</li>
                <li>모든 SNS 프로필 사진, 소개글, 핸들 일관성 점검표 작성</li>
                <li>개선이 필요한 3가지 항목 선정 및 구체적 실행 계획 수립</li>
                <li>1개월 후 달성 목표 설정 (측정 가능한 KPI로)</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>과제 C: LinkedIn 포스트 3편 작성 &amp; 발행</h3>
              <p>다음 유형별로 LinkedIn 포스트를 각 1편씩 작성하세요:</p>
              <ul>
                <li><strong>경험 공유형</strong>: 직장/프로젝트에서의 실제 경험과 교훈 (800자 이상)</li>
                <li><strong>인사이트형</strong>: 업계 트렌드에 대한 나만의 관점 (600자 이상)</li>
                <li><strong>성과 공유형</strong>: 최근 달성한 성과와 과정 (400자 이상)</li>
                <li>각 포스트에 강력한 첫 줄(Hook) 포함</li>
                <li>실제 LinkedIn에 발행하고, 1주일간 인게이지먼트 데이터(조회수, 좋아요, 댓글) 분석</li>
                <li>가장 반응이 좋았던 포스트의 성공 요인 분석 보고서 작성</li>
              </ul>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                10주차에서는 포트폴리오 브랜딩을 다룹니다.
                나의 역량과 경험을 효과적으로 보여주는 포트폴리오 구성 원칙, 이력서 &amp; 자기소개서 브랜딩,
                개인 웹사이트 제작 가이드, 디지털 포트폴리오 플랫폼 활용법을 집중적으로 배웁니다.
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
