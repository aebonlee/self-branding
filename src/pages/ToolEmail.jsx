import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolEmail = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="이메일 마케팅"
        description="높은 ROI의 이메일 마케팅 전략, 자동화, 뉴스레터 운영 가이드"
        path="/tools/email"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>이메일 마케팅</h1>
          <p>가장 높은 ROI를 자랑하는 이메일 마케팅의 모든 것</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 이메일 마케팅 개요</h2>
            <p>
              이메일 마케팅은 디지털 마케팅 채널 중 가장 높은 ROI(투자 대비 수익)를 기록하는 채널입니다.
              평균적으로 1달러 투자 시 42달러의 수익을 창출하며, 고객과의 직접적인 1:1 커뮤니케이션이
              가능한 유일한 채널입니다.
            </p>

            <div className="info-box tip">
              <strong>이메일 마케팅의 강점:</strong>
              <ul>
                <li>최고의 ROI: 마케팅 채널 중 평균 4,200%의 투자 수익률</li>
                <li>소유한 채널: SNS 알고리즘 변화에 영향받지 않는 자체 미디어</li>
                <li>개인화: 수신자별 맞춤 콘텐츠 전달로 높은 전환율</li>
                <li>자동화: 한 번 설정하면 자동으로 작동하는 마케팅 파이프라인</li>
                <li>측정 가능: 오픈률, 클릭률, 전환율 등 정확한 성과 측정</li>
              </ul>
            </div>

            <h2>2. 이메일 리스트 구축</h2>
            <p>
              이메일 마케팅의 첫 번째 단계는 양질의 구독자 리스트를 확보하는 것입니다.
              구매한 리스트가 아닌, 자발적으로 옵트인(Opt-in)한 구독자가 핵심입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>리스트 구축 전략</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>방법</th><th>설명</th><th>전환율</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>리드 마그넷</strong></td>
                    <td>무료 전자책, 체크리스트, 템플릿 제공</td>
                    <td>5~15%</td>
                  </tr>
                  <tr>
                    <td><strong>웨비나/무료 강의</strong></td>
                    <td>가치 있는 교육 콘텐츠로 이메일 수집</td>
                    <td>10~30%</td>
                  </tr>
                  <tr>
                    <td><strong>팝업 폼</strong></td>
                    <td>사이트 방문 시 나타나는 구독 폼</td>
                    <td>2~5%</td>
                  </tr>
                  <tr>
                    <td><strong>랜딩 페이지</strong></td>
                    <td>구독 전용 페이지, SNS에서 유입</td>
                    <td>15~30%</td>
                  </tr>
                  <tr>
                    <td><strong>콘텐츠 업그레이드</strong></td>
                    <td>블로그 글 관련 보너스 콘텐츠</td>
                    <td>10~25%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>효과적인 리드 마그넷 예시:</strong>
              <ul>
                <li>"인스타그램 성장을 위한 30일 콘텐츠 캘린더 (무료 다운로드)"</li>
                <li>"브랜딩 자기분석 워크시트 PDF"</li>
                <li>"마케팅 예산 계획 템플릿 (엑셀)"</li>
                <li>"SEO 체크리스트 50개 항목"</li>
              </ul>
            </div>

            <h2>3. 이메일 작성법</h2>
            <p>
              이메일의 성패는 제목줄에서 결정됩니다. 아무리 좋은 내용이라도
              열리지 않으면 의미가 없습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>이메일 구성 요소별 최적화</h3>
              <ul>
                <li><strong>제목줄 (Subject Line):</strong> 50자 이내. 호기심 유발, 긴급성, 개인화. 이모지 적절히 사용
                  <br />좋은 예: "김민수님, 이 3가지만 바꾸면 매출이 달라집니다"
                  <br />나쁜 예: "뉴스레터 제42호 - 이번 주 마케팅 소식 모음"</li>
                <li><strong>프리헤더:</strong> 제목 보완 텍스트. 85자 이내. 제목과 다른 정보 제공</li>
                <li><strong>본문 구성:</strong>
                  <ul>
                    <li>역피라미드 구조: 핵심 → 보충 → CTA</li>
                    <li>1가지 메시지에 집중 (One Email, One Goal)</li>
                    <li>스캐너블하게 작성 (짧은 단락, 볼드, 불릿)</li>
                  </ul>
                </li>
                <li><strong>CTA (행동 유도):</strong> 명확한 버튼 1~2개. 대비 색상. 행동 중심 문구
                  <br />좋은 예: "무료 가이드 다운로드하기"
                  <br />나쁜 예: "여기를 클릭하세요"</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>스팸 필터 방지:</strong> 다음 단어/패턴은 스팸 필터에 걸릴 확률이 높습니다:
              "무료!!!", "지금 당장!!!", "100% 보장", 과도한 대문자, 과도한 느낌표,
              이미지만으로 구성된 이메일. 텍스트와 이미지 비율을 60:40으로 유지하세요.
            </div>

            <h2>4. 자동화</h2>
            <p>
              이메일 자동화는 한 번 설정하면 조건에 따라 자동으로 이메일이 발송되는 시스템입니다.
              시간을 절약하면서 개인화된 커뮤니케이션을 실현할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 자동화 시퀀스</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>시퀀스</th><th>트리거</th><th>목적</th><th>이메일 수</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>웰컴 시퀀스</strong></td>
                    <td>신규 구독</td>
                    <td>자기 소개, 기대치 설정, 신뢰 구축</td>
                    <td>3~5통</td>
                  </tr>
                  <tr>
                    <td><strong>온보딩 시퀀스</strong></td>
                    <td>제품/서비스 가입</td>
                    <td>사용법 안내, 핵심 기능 소개</td>
                    <td>5~7통</td>
                  </tr>
                  <tr>
                    <td><strong>너처링 시퀀스</strong></td>
                    <td>리드 마그넷 다운로드</td>
                    <td>관심 → 구매 의향으로 전환</td>
                    <td>5~10통</td>
                  </tr>
                  <tr>
                    <td><strong>장바구니 이탈</strong></td>
                    <td>구매 미완료</td>
                    <td>구매 완료 유도</td>
                    <td>2~3통</td>
                  </tr>
                  <tr>
                    <td><strong>재참여 캠페인</strong></td>
                    <td>90일 미활동</td>
                    <td>비활성 구독자 재활성화</td>
                    <td>3~4통</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>웰컴 시퀀스 예시 (5통):</strong>
              <ol>
                <li><strong>즉시:</strong> 환영 + 리드 마그넷 전달 + 자기 소개</li>
                <li><strong>2일 후:</strong> 가장 인기 있는 콘텐츠/리소스 공유</li>
                <li><strong>4일 후:</strong> 성공 사례/사회적 증거 공유</li>
                <li><strong>6일 후:</strong> FAQ 또는 고객의 일반적 고민 해결</li>
                <li><strong>8일 후:</strong> 특별 제안 또는 다음 단계 안내</li>
              </ol>
            </div>

            <h2>5. 뉴스레터 운영</h2>
            <p>
              정기 뉴스레터는 구독자와의 관계를 유지하고 브랜드 충성도를 높이는 핵심 수단입니다.
              한국에서는 뉴스레터 시장이 빠르게 성장하고 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>성공적인 뉴스레터 운영 팁</h3>
              <ul>
                <li><strong>일정한 발행 주기:</strong> 주 1회 또는 격주 1회. 요일과 시간을 고정하여 기대감 형성</li>
                <li><strong>일관된 포맷:</strong> 섹션 구성을 고정하여 독자가 빠르게 스캔할 수 있도록</li>
                <li><strong>콘텐츠 큐레이션:</strong> 직접 작성 + 외부 좋은 콘텐츠 선별 소개</li>
                <li><strong>개인화:</strong> 이름 삽입, 관심사 기반 세그먼트별 콘텐츠 차별화</li>
                <li><strong>독자 참여 유도:</strong> 설문, 질문, 회신 유도로 양방향 소통</li>
                <li><strong>A/B 테스트:</strong> 제목, 발송 시간, CTA를 지속적으로 테스트</li>
              </ul>
            </div>

            <h2>6. 성과 측정</h2>
            <p>
              이메일 마케팅의 성과를 정확히 측정하고 개선하기 위해 핵심 지표를 이해해야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 이메일 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>계산 방법</th><th>업계 평균</th><th>좋은 수치</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>오픈률</strong></td>
                    <td>열린 수 / 발송 수</td>
                    <td>20~25%</td>
                    <td>30%+</td>
                  </tr>
                  <tr>
                    <td><strong>클릭률 (CTR)</strong></td>
                    <td>클릭 수 / 발송 수</td>
                    <td>2~3%</td>
                    <td>5%+</td>
                  </tr>
                  <tr>
                    <td><strong>전환율</strong></td>
                    <td>전환 수 / 클릭 수</td>
                    <td>1~3%</td>
                    <td>5%+</td>
                  </tr>
                  <tr>
                    <td><strong>구독 해지율</strong></td>
                    <td>해지 수 / 발송 수</td>
                    <td>0.2~0.5%</td>
                    <td>0.2% 이하</td>
                  </tr>
                  <tr>
                    <td><strong>바운스율</strong></td>
                    <td>반송 수 / 발송 수</td>
                    <td>0.5~1%</td>
                    <td>0.5% 이하</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>성과 개선 팁:</strong>
              <ul>
                <li>오픈률 낮을 때: 제목줄과 발송 시간 A/B 테스트</li>
                <li>클릭률 낮을 때: CTA 위치/문구 변경, 콘텐츠 관련성 확인</li>
                <li>구독 해지 높을 때: 발송 빈도 조정, 세그먼테이션 강화</li>
                <li>바운스 높을 때: 리스트 클리닝, 유효하지 않은 이메일 제거</li>
              </ul>
            </div>

            <h2>7. 법적 준수</h2>
            <p>
              이메일 마케팅은 각국의 법률을 준수해야 합니다. 위반 시 무거운 과태료가 부과될 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>주요 법규 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>법규</th><th>적용 지역</th><th>핵심 요구사항</th><th>위반 시 벌금</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>정보통신망법</strong></td>
                    <td>한국</td>
                    <td>사전 수신동의, 수신거부 처리, 발신자 정보 명시</td>
                    <td>최대 3,000만원</td>
                  </tr>
                  <tr>
                    <td><strong>GDPR</strong></td>
                    <td>EU</td>
                    <td>명시적 동의, 데이터 삭제 요청 대응, DPO 지정</td>
                    <td>최대 매출의 4%</td>
                  </tr>
                  <tr>
                    <td><strong>CAN-SPAM</strong></td>
                    <td>미국</td>
                    <td>허위 헤더 금지, 수신거부 기능, 물리적 주소 표기</td>
                    <td>건당 $46,517</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>반드시 지켜야 할 사항:</strong>
              <ul>
                <li>수신자의 사전 동의(Opt-in) 없이 마케팅 이메일 발송 금지</li>
                <li>모든 마케팅 이메일에 수신거부(Unsubscribe) 링크 필수 포함</li>
                <li>수신거부 요청 시 10일 이내(한국 기준) 처리 완료</li>
                <li>발신자 정보(회사명, 연락처, 주소) 명확히 표기</li>
                <li>구독자 개인정보 안전하게 관리 및 제3자 제공 금지</li>
              </ul>
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Mailchimp</strong></td>
                    <td>올인원 이메일 마케팅, 자동화, 랜딩 페이지</td>
                    <td>무료~월 $20</td>
                    <td>초보~중급, 글로벌</td>
                  </tr>
                  <tr>
                    <td><strong>Stibee (스티비)</strong></td>
                    <td>한국어 UI, 뉴스레터, 자동화, 구독 폼</td>
                    <td>무료~월 ₩16,500</td>
                    <td>국내 사용자</td>
                  </tr>
                  <tr>
                    <td><strong>ConvertKit</strong></td>
                    <td>크리에이터 특화, 자동화, 유료 뉴스레터</td>
                    <td>무료~월 $25</td>
                    <td>크리에이터, 블로거</td>
                  </tr>
                  <tr>
                    <td><strong>Brevo (Sendinblue)</strong></td>
                    <td>이메일+SMS+CRM 통합, 자동화</td>
                    <td>무료~월 $25</td>
                    <td>중소기업</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/linkedin" className="lesson-nav-btn prev">← 링크드인 마케팅</Link>
              <Link to="/tools/ads" className="lesson-nav-btn next">광고 마케팅 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolEmail;
