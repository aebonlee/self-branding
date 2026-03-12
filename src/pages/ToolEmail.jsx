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
        description="높은 ROI를 자랑하는 이메일 마케팅의 전략, 도구, 실전 가이드"
        path="/tools/email"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>이메일 마케팅</h1>
          <p>가장 높은 ROI를 자랑하는 디지털 마케팅 채널, 이메일 마케팅 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 이메일 마케팅 개요와 ROI</h2>
            <p>
              이메일 마케팅은 디지털 마케팅 채널 중 가장 높은 ROI를 자랑하는 채널입니다.
              평균적으로 이메일 마케팅에 1달러를 투자하면 36달러의 수익을 얻을 수 있으며(DMA 기준),
              이는 소셜 미디어, 검색 광고를 크게 앞서는 수치입니다.
              자신이 소유한 리스트에 직접 도달할 수 있어, 알고리즘 변화에 영향을 받지 않는 가장 안정적인 채널이기도 합니다.
            </p>

            <div className="info-box tip">
              <strong>이메일 마케팅이 여전히 강력한 이유:</strong>
              <ul>
                <li><strong>소유한 채널:</strong> SNS 알고리즘에 의존하지 않고, 구독자에게 직접 도달</li>
                <li><strong>높은 ROI:</strong> $1 투자 대비 $36 수익 (평균)</li>
                <li><strong>개인화 가능:</strong> 이름, 행동, 관심사 기반 맞춤 메시지 전송</li>
                <li><strong>자동화:</strong> 한 번 설정하면 24시간 작동하는 자동화 시퀀스</li>
                <li><strong>측정 가능:</strong> 오픈율, 클릭률, 전환율 등 정확한 성과 측정</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>채널별 ROI 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>마케팅 채널</th><th>평균 ROI</th><th>도달 안정성</th><th>개인화 수준</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>이메일 마케팅</strong></td>
                    <td>3,600% ($1 &rarr; $36)</td>
                    <td>매우 높음</td>
                    <td>매우 높음</td>
                  </tr>
                  <tr>
                    <td>SEO/블로그</td>
                    <td>2,200%</td>
                    <td>높음</td>
                    <td>낮음</td>
                  </tr>
                  <tr>
                    <td>소셜 미디어</td>
                    <td>280%</td>
                    <td>낮음 (알고리즘 의존)</td>
                    <td>중간</td>
                  </tr>
                  <tr>
                    <td>유료 검색 광고</td>
                    <td>200%</td>
                    <td>높음 (비용 지불 시)</td>
                    <td>중간</td>
                  </tr>
                  <tr>
                    <td>디스플레이 광고</td>
                    <td>150%</td>
                    <td>중간</td>
                    <td>낮음</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>2. 이메일 리스트 구축 전략</h2>
            <p>
              이메일 마케팅의 성공은 양질의 이메일 리스트 구축에서 시작됩니다.
              구매한 리스트가 아닌, 진정으로 관심 있는 구독자를 모으는 것이 핵심입니다.
              옵트인(동의 기반) 리스트는 높은 오픈율과 낮은 스팸 신고율을 보장합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>리드 마그넷 유형</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>설명</th><th>전환율</th><th>적합한 업종</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>전자책/가이드</strong></td>
                    <td>심층적인 정보를 담은 PDF</td>
                    <td>높음 (5~15%)</td>
                    <td>교육, 컨설팅, SaaS</td>
                  </tr>
                  <tr>
                    <td><strong>체크리스트</strong></td>
                    <td>실행 가능한 단계별 목록</td>
                    <td>매우 높음 (10~20%)</td>
                    <td>모든 업종</td>
                  </tr>
                  <tr>
                    <td><strong>템플릿/스와이프 파일</strong></td>
                    <td>바로 사용 가능한 템플릿</td>
                    <td>매우 높음 (15~25%)</td>
                    <td>마케팅, 디자인, 비즈니스</td>
                  </tr>
                  <tr>
                    <td><strong>웨비나/영상</strong></td>
                    <td>실시간 또는 녹화 교육 세션</td>
                    <td>중간 (3~10%)</td>
                    <td>교육, 코칭, B2B</td>
                  </tr>
                  <tr>
                    <td><strong>할인 쿠폰</strong></td>
                    <td>첫 구매 할인, 무료 배송</td>
                    <td>높음 (8~15%)</td>
                    <td>이커머스, 리테일</td>
                  </tr>
                  <tr>
                    <td><strong>무료 도구/계산기</strong></td>
                    <td>인터랙티브 도구 제공</td>
                    <td>높음 (10~20%)</td>
                    <td>금융, SaaS, 마케팅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>옵트인 폼 최적화 팁:</strong>
              <ul>
                <li><strong>위치:</strong> 블로그 상단, 사이드바, 글 중간, 팝업(15초 딜레이), 종료 의도 팝업</li>
                <li><strong>입력 필드:</strong> 최소한으로 유지. 이메일만 받으면 전환율 25% 향상</li>
                <li><strong>가치 제안:</strong> "무료 뉴스레터 구독"보다 "주간 마케팅 인사이트 + 무료 템플릿"</li>
                <li><strong>사회적 증거:</strong> "10,000명의 마케터가 구독 중" 등 숫자 활용</li>
                <li><strong>긴급성:</strong> "이번 주까지만 무료" 등 한시적 혜택 강조</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>이메일 리스트 주의사항:</strong>
              <ul>
                <li>이메일 리스트를 구매하지 마세요. 스팸 신고, 도메인 평판 손상의 주범입니다</li>
                <li>개인정보보호법(GDPR, 국내 개인정보보호법) 준수 필수</li>
                <li>더블 옵트인(확인 메일)을 사용하면 리스트 품질이 크게 향상됩니다</li>
                <li>6개월 이상 미활동 구독자는 정기적으로 재참여 캠페인 또는 정리</li>
              </ul>
            </div>

            <h2>3. 이메일 캠페인 유형</h2>
            <p>
              이메일 마케팅에는 다양한 캠페인 유형이 있으며, 각각의 목적과 타이밍이 다릅니다.
              효과적인 이메일 마케팅은 이러한 유형들을 전략적으로 조합하는 것입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>캠페인 유형별 특징</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>목적</th><th>빈도</th><th>평균 오픈율</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>웰컴 시리즈</strong></td>
                    <td>신규 구독자 온보딩, 브랜드 소개</td>
                    <td>구독 직후 3~5통</td>
                    <td>50~60%</td>
                  </tr>
                  <tr>
                    <td><strong>뉴스레터</strong></td>
                    <td>정보 공유, 관계 유지, 브랜드 인지도</td>
                    <td>주 1~2회</td>
                    <td>20~30%</td>
                  </tr>
                  <tr>
                    <td><strong>프로모션</strong></td>
                    <td>세일, 신제품, 할인 알림</td>
                    <td>캠페인 기반</td>
                    <td>15~25%</td>
                  </tr>
                  <tr>
                    <td><strong>자동화 시퀀스</strong></td>
                    <td>행동 기반 자동 발송 (장바구니 이탈 등)</td>
                    <td>트리거 기반</td>
                    <td>40~50%</td>
                  </tr>
                  <tr>
                    <td><strong>재참여 캠페인</strong></td>
                    <td>비활동 구독자 재활성화</td>
                    <td>분기 1회</td>
                    <td>10~15%</td>
                  </tr>
                  <tr>
                    <td><strong>트랜잭션 이메일</strong></td>
                    <td>주문 확인, 배송 알림, 영수증</td>
                    <td>이벤트 기반</td>
                    <td>80~90%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout-box">
              <strong>웰컴 시리즈가 중요한 이유:</strong> 웰컴 이메일의 오픈율은 일반 이메일보다 4배 높고,
              클릭률은 5배 높습니다. 구독 직후 첫 48시간이 구독자와 관계를 형성하는 골든타임입니다.
              웰컴 시리즈를 통해 브랜드 스토리, 핵심 콘텐츠, 기대할 수 있는 가치를 전달하세요.
            </div>

            <h3>웰컴 시리즈 구성 예시</h3>
            <div className="section-card" data-aos="fade-up">
              <ol>
                <li><strong>이메일 1 (즉시):</strong> 환영 메시지 + 약속한 리드 마그넷 전달 + 브랜드 소개</li>
                <li><strong>이메일 2 (1일 후):</strong> 브랜드 스토리 + 핵심 가치 + 가장 인기 있는 콘텐츠</li>
                <li><strong>이메일 3 (3일 후):</strong> 유용한 팁/인사이트 제공 + 가치 전달</li>
                <li><strong>이메일 4 (5일 후):</strong> 성공 사례/후기 + 사회적 증거</li>
                <li><strong>이메일 5 (7일 후):</strong> 특별 혜택 또는 CTA + 다음 단계 안내</li>
              </ol>
            </div>

            <h2>4. 이메일 작성 가이드</h2>
            <p>
              이메일의 성공은 제목줄에서 시작됩니다. 아무리 좋은 본문 내용도 열리지 않으면 의미가 없습니다.
              제목줄, 프리헤더, 본문, CTA 각 요소를 최적화하는 방법을 알아봅니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>제목줄(Subject Line) 작성 공식</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>기법</th><th>예시</th><th>효과</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>호기심 유발</strong></td>
                    <td>"이 한 가지를 바꿨더니 매출이 3배..."</td>
                    <td>오픈율 30% 향상</td>
                  </tr>
                  <tr>
                    <td><strong>숫자 활용</strong></td>
                    <td>"마케팅 성과를 2배로 만드는 7가지 방법"</td>
                    <td>구체성으로 신뢰도 증가</td>
                  </tr>
                  <tr>
                    <td><strong>긴급성</strong></td>
                    <td>"[마감 임박] 오늘 자정까지만 50% 할인"</td>
                    <td>FOMO 효과</td>
                  </tr>
                  <tr>
                    <td><strong>개인화</strong></td>
                    <td>"{'{'}이름{'}'}, 맞춤 추천 콘텐츠가 도착했습니다"</td>
                    <td>오픈율 26% 향상</td>
                  </tr>
                  <tr>
                    <td><strong>질문형</strong></td>
                    <td>"이메일 오픈율이 낮아서 고민이신가요?"</td>
                    <td>공감 유발</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>제목줄 최적화 팁:</strong>
              <ul>
                <li>길이: 모바일 최적화를 위해 30~50자 (한글 기준) 권장</li>
                <li>프리헤더: 제목줄을 보완하는 부가 정보. 빈칸으로 두지 마세요</li>
                <li>A/B 테스트: 제목줄 2개를 테스트하여 승자를 전체 발송</li>
                <li>스팸 트리거 회피: "무료!!!", "급하게!!!", "100% 보장" 등 피하기</li>
              </ul>
            </div>

            <h3>본문 작성과 CTA</h3>
            <div className="section-card" data-aos="fade-up">
              <h3>효과적인 이메일 본문 구조</h3>
              <ul>
                <li><strong>도입부:</strong> 구독자의 문제/관심사에 공감. 1~2문장으로 짧게</li>
                <li><strong>본문:</strong> 하나의 핵심 메시지에 집중. 단락은 2~3줄로 짧게</li>
                <li><strong>가치 전달:</strong> 읽는 것만으로도 가치를 느끼게 하는 인사이트 포함</li>
                <li><strong>CTA (Call to Action):</strong> 하나의 명확한 행동 유도. 버튼형이 텍스트 링크보다 28% 높은 클릭률</li>
                <li><strong>PS:</strong> 추가 혜택이나 긴급성 강조. 이메일 끝 PS는 높은 가독률</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>이메일 본문 작성 시 피해야 할 것:</strong>
              <ul>
                <li>하나의 이메일에 여러 CTA를 넣지 마세요 (선택의 역설)</li>
                <li>이미지만으로 구성된 이메일은 스팸 필터에 걸리기 쉽습니다</li>
                <li>긴 텍스트 블록은 모바일에서 읽기 어렵습니다</li>
                <li>구독 해지 링크를 숨기면 스팸 신고가 증가합니다</li>
              </ul>
            </div>

            <h2>5. 이메일 디자인 원칙</h2>
            <p>
              이메일의 60% 이상이 모바일에서 열립니다.
              반응형 디자인과 높은 가독성은 선택이 아닌 필수입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>이메일 디자인 체크리스트</h3>
              <ul>
                <li><strong>너비:</strong> 최대 600px (모바일 호환성)</li>
                <li><strong>폰트 크기:</strong> 본문 최소 14px, 모바일에서 16px 권장</li>
                <li><strong>CTA 버튼:</strong> 최소 44x44px (터치 영역), 대비 색상 사용</li>
                <li><strong>이미지:</strong> ALT 텍스트 필수, 이미지 차단 환경 고려</li>
                <li><strong>여백:</strong> 충분한 패딩과 여백으로 시각적 호흡 확보</li>
                <li><strong>다크 모드:</strong> 다크 모드에서도 정상 표시되는지 확인</li>
                <li><strong>프리뷰 텍스트:</strong> 제목줄을 보완하는 프리헤더 텍스트 설정</li>
              </ul>
            </div>

            <div className="callout-box">
              <strong>디자인 원칙 - 역삼각형 구조:</strong> 이메일 디자인은 위에서 아래로 갈수록 좁아지는
              역삼각형 구조가 효과적입니다. 상단에 가장 중요한 메시지와 이미지를 배치하고,
              중간에 부가 설명, 하단에 CTA를 배치합니다. 스크롤 없이 핵심을 전달하는 "Above the fold" 영역이 핵심입니다.
            </div>

            <h2>6. 이메일 마케팅 도구 비교</h2>
            <p>
              이메일 마케팅 도구 선택은 비즈니스 규모, 예산, 기능 요구사항에 따라 달라집니다.
              국내외 주요 도구들을 비교해 봅니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>주요 이메일 마케팅 도구 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>무료 플랜</th><th>강점</th><th>약점</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Mailchimp</strong></td>
                    <td>500명, 월 1,000발송</td>
                    <td>직관적 UI, 풍부한 템플릿, 통합 기능</td>
                    <td>자동화 기능 제한(무료), 가격 상승 추세</td>
                    <td>중소기업, 초보자</td>
                  </tr>
                  <tr>
                    <td><strong>Stibee (스티비)</strong></td>
                    <td>500명, 무제한 발송</td>
                    <td>한국어 UI, 국내 법규 준수, 간편한 사용</td>
                    <td>글로벌 기능 제한, 고급 자동화 부족</td>
                    <td>국내 스타트업, 크리에이터</td>
                  </tr>
                  <tr>
                    <td><strong>ConvertKit</strong></td>
                    <td>1,000명 (제한적)</td>
                    <td>크리에이터 특화, 강력한 자동화, 태그 시스템</td>
                    <td>디자인 템플릿 제한, 한국어 미지원</td>
                    <td>블로거, 크리에이터, 코치</td>
                  </tr>
                  <tr>
                    <td><strong>Brevo (구 Sendinblue)</strong></td>
                    <td>무제한 연락처, 일 300발송</td>
                    <td>SMS 통합, 합리적 가격, CRM 포함</td>
                    <td>무료 플랜 일일 발송 제한</td>
                    <td>이커머스, 중소기업</td>
                  </tr>
                  <tr>
                    <td><strong>ActiveCampaign</strong></td>
                    <td>무료 플랜 없음</td>
                    <td>최고 수준 자동화, CRM 통합, 세분화</td>
                    <td>학습 곡선 높음, 비용 높음</td>
                    <td>마케팅 에이전시, 고급 사용자</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>도구 선택 기준:</strong>
              <ul>
                <li><strong>초보자/소규모:</strong> Stibee(국내) 또는 Mailchimp(글로벌)로 시작</li>
                <li><strong>크리에이터:</strong> ConvertKit의 태그 기반 세분화 활용</li>
                <li><strong>이커머스:</strong> Brevo 또는 Klaviyo의 이커머스 통합 기능 활용</li>
                <li><strong>고급 자동화:</strong> ActiveCampaign의 비주얼 자동화 빌더 활용</li>
              </ul>
            </div>

            <h2>7. A/B 테스트와 성과 분석</h2>
            <p>
              이메일 마케팅의 가장 큰 장점 중 하나는 정확한 성과 측정이 가능하다는 것입니다.
              핵심 지표를 이해하고, A/B 테스트를 통해 지속적으로 성과를 개선하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 성과 지표 (KPI)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>계산 방법</th><th>업계 평균</th><th>개선 방법</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>오픈율 (Open Rate)</strong></td>
                    <td>열린 수 / 발송 수</td>
                    <td>20~25%</td>
                    <td>제목줄 최적화, 발송 시간 조정</td>
                  </tr>
                  <tr>
                    <td><strong>클릭률 (CTR)</strong></td>
                    <td>클릭 수 / 발송 수</td>
                    <td>2~5%</td>
                    <td>CTA 최적화, 콘텐츠 관련성</td>
                  </tr>
                  <tr>
                    <td><strong>클릭-오픈율 (CTOR)</strong></td>
                    <td>클릭 수 / 오픈 수</td>
                    <td>10~15%</td>
                    <td>본문 내용과 CTA 일치도</td>
                  </tr>
                  <tr>
                    <td><strong>전환율 (CVR)</strong></td>
                    <td>전환 수 / 클릭 수</td>
                    <td>1~5%</td>
                    <td>랜딩 페이지 최적화</td>
                  </tr>
                  <tr>
                    <td><strong>구독 해지율</strong></td>
                    <td>해지 수 / 발송 수</td>
                    <td>0.1~0.5%</td>
                    <td>발송 빈도 조정, 세분화</td>
                  </tr>
                  <tr>
                    <td><strong>바운스율</strong></td>
                    <td>반송 수 / 발송 수</td>
                    <td>2% 미만</td>
                    <td>리스트 정리, 더블 옵트인</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>A/B 테스트 가이드</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>테스트 요소</th><th>변수 예시</th><th>필요 샘플</th><th>예상 영향</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>제목줄</strong></td>
                    <td>길이, 이모지, 개인화, 질문형</td>
                    <td>최소 1,000명</td>
                    <td>오픈율 10~30% 차이</td>
                  </tr>
                  <tr>
                    <td><strong>발송 시간</strong></td>
                    <td>요일, 시간대</td>
                    <td>최소 2,000명</td>
                    <td>오픈율 5~15% 차이</td>
                  </tr>
                  <tr>
                    <td><strong>CTA</strong></td>
                    <td>버튼 색상, 문구, 위치</td>
                    <td>최소 500명</td>
                    <td>클릭률 10~25% 차이</td>
                  </tr>
                  <tr>
                    <td><strong>본문 길이</strong></td>
                    <td>짧은 vs 긴 이메일</td>
                    <td>최소 1,000명</td>
                    <td>클릭률 5~15% 차이</td>
                  </tr>
                  <tr>
                    <td><strong>발신자명</strong></td>
                    <td>회사명 vs 개인명</td>
                    <td>최소 1,000명</td>
                    <td>오픈율 5~20% 차이</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>A/B 테스트 규칙:</strong>
              <ul>
                <li>한 번에 하나의 변수만 테스트 (여러 변수 동시 변경 시 원인 파악 불가)</li>
                <li>통계적 유의성을 확보할 수 있는 충분한 샘플 사이즈 확보</li>
                <li>최소 24~48시간 테스트 후 승자 결정</li>
                <li>테스트 결과를 기록하고 학습 자산으로 축적</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>실습: 뉴스레터 템플릿 기획</h3>
              <p>아래 단계를 따라 나만의 뉴스레터를 기획하고 첫 호를 작성해 보세요.</p>
              <ol>
                <li><strong>뉴스레터 컨셉 정하기:</strong> 주제, 타겟 독자, 발행 빈도, 톤앤매너 정의</li>
                <li><strong>이름 &amp; 브랜딩:</strong> 뉴스레터 이름, 로고, 컬러 결정</li>
                <li><strong>구조 설계:</strong> 매호 반복되는 섹션 구성 (인사 &rarr; 메인 콘텐츠 &rarr; 큐레이션 &rarr; CTA)</li>
                <li><strong>리드 마그넷 제작:</strong> 구독을 유도할 무료 혜택 1개 제작 (체크리스트, 템플릿 등)</li>
                <li><strong>옵트인 폼 설치:</strong> 블로그/웹사이트에 구독 폼 설치</li>
                <li><strong>웰컴 이메일 작성:</strong> 자동 발송될 환영 이메일 1통 작성</li>
                <li><strong>첫 호 작성:</strong> 뉴스레터 1호를 실제로 작성. 제목줄 3개 후보 준비</li>
                <li><strong>A/B 테스트 계획:</strong> 첫 발송에서 테스트할 변수 1개 선정</li>
              </ol>
              <p><strong>제출물:</strong> 뉴스레터 컨셉 문서 + 첫 호 초안 + 제목줄 A/B 테스트 계획서</p>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/linkedin" className="lesson-nav-btn prev">&larr; 링크드인 마케팅</Link>
              <Link to="/tools/ads" className="lesson-nav-btn next">광고 마케팅 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolEmail;
