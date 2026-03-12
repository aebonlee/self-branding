import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const BrandingWeek2 = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead title="2주차: 자기분석 & 핵심가치" path="/lessons/self-analysis" />
      <section className="page-header">
        <div className="container">
          <h1>2주차: 자기분석 &amp; 핵심가치</h1>
          <p>나를 알아야 브랜드가 보인다 — SWOT 분석부터 브랜드 미션 수립까지</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 자기분석의 중요성</h2>
            <p>
              성공적인 셀프 브랜딩의 첫 번째 단계는 <strong>자기 자신을 깊이 이해하는 것</strong>입니다.
              많은 사람들이 브랜딩을 시작할 때 로고나 SNS 계정 만들기부터 시작하지만,
              이는 기초 공사 없이 건물을 짓는 것과 같습니다.
            </p>
            <p>
              자기분석을 통해 나의 강점, 약점, 가치관, 열정을 명확히 파악해야만
              진정성 있는 브랜드를 구축할 수 있습니다. 남들이 만들어놓은 트렌드를 따라가는 것이 아니라,
              나만의 고유한 이야기를 만들어야 합니다.
            </p>

            <div className="callout-box">
              <h3>왜 나를 먼저 알아야 하는가?</h3>
              <ul>
                <li><strong>진정성 확보</strong>: 자신을 잘 아는 사람만이 진정성 있는 메시지를 전달할 수 있음</li>
                <li><strong>차별화 근거</strong>: 나의 고유한 경험과 관점이 차별화의 핵심</li>
                <li><strong>지속 가능성</strong>: 가면을 쓴 브랜딩은 오래 유지할 수 없음</li>
                <li><strong>방향 설정</strong>: 명확한 자기 인식이 전략적 의사결정의 기반</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">2. SWOT 분석</h2>
            <p>
              SWOT 분석은 내부 환경(강점/약점)과 외부 환경(기회/위협)을 체계적으로 분석하는 프레임워크입니다.
              기업 전략에서 널리 사용되지만, 개인 브랜딩에도 매우 효과적인 도구입니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th style={{ width: '50%', background: '#dbeafe' }}>S — 강점 (Strengths)</th>
                  <th style={{ width: '50%', background: '#fef3c7' }}>W — 약점 (Weaknesses)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>나만의 전문 지식과 기술</li>
                      <li>독특한 경험과 배경</li>
                      <li>성격적 강점 (소통력, 리더십 등)</li>
                      <li>이미 보유한 네트워크와 자산</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>부족한 기술이나 지식</li>
                      <li>성격적 약점</li>
                      <li>제한된 자원 (시간, 예산)</li>
                      <li>경험 부족 분야</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="lesson-table" style={{ marginTop: '0' }}>
              <thead>
                <tr>
                  <th style={{ width: '50%', background: '#d1fae5' }}>O — 기회 (Opportunities)</th>
                  <th style={{ width: '50%', background: '#fee2e2' }}>T — 위협 (Threats)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>성장하는 시장이나 트렌드</li>
                      <li>새로운 기술이나 플랫폼</li>
                      <li>네트워킹 기회</li>
                      <li>교육/자격 취득 기회</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>경쟁 심화</li>
                      <li>시장 환경 변화</li>
                      <li>기술 변화에 따른 도태 위험</li>
                      <li>경제적 불확실성</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="info-box tip">
              <h3>SWOT 분석 팁</h3>
              <p>
                SWOT 분석을 할 때 가장 중요한 것은 <strong>솔직함</strong>입니다. 자신을 과대평가하거나
                과소평가하지 말고 객관적으로 바라보세요. 친한 친구나 멘토에게 피드백을 받는 것도 좋은 방법입니다.
                또한, SO전략(강점으로 기회 활용), WO전략(약점을 보완하여 기회 잡기),
                ST전략(강점으로 위협 대응), WT전략(약점과 위협 최소화) 등 교차 분석도 수행해보세요.
              </p>
            </div>

            <h2 data-aos="fade-up">3. 핵심 역량 발견</h2>

            <h3>조하리의 창 (Johari Window)</h3>
            <p>
              조하리의 창은 자기 인식과 타인의 피드백을 결합하여 나를 더 깊이 이해하는 도구입니다.
              1955년 조셉 루프트(Joseph Luft)와 해리 잉햄(Harry Ingham)이 개발했습니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr>
                  <th></th>
                  <th>나도 아는 것</th>
                  <th>나는 모르는 것</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>타인도 아는 것</strong></td>
                  <td style={{ background: '#dbeafe' }}><strong>공개 영역 (Open)</strong><br />나와 타인이 모두 아는 특성. 브랜딩에서 가장 활용하기 쉬운 영역</td>
                  <td style={{ background: '#fef3c7' }}><strong>맹점 영역 (Blind Spot)</strong><br />타인은 알지만 나는 모르는 특성. 피드백을 통해 발견 가능</td>
                </tr>
                <tr>
                  <td><strong>타인은 모르는 것</strong></td>
                  <td style={{ background: '#d1fae5' }}><strong>숨겨진 영역 (Hidden)</strong><br />나만 아는 특성. 브랜딩에서 전략적으로 공개할 수 있음</td>
                  <td style={{ background: '#f3f4f6' }}><strong>미지 영역 (Unknown)</strong><br />아직 발견하지 못한 잠재력. 새로운 경험을 통해 발견</td>
                </tr>
              </tbody>
            </table>

            <h3>가치관 탐색</h3>
            <p>
              가치관은 브랜드의 근본을 결정합니다. 아래 목록에서 자신에게 가장 중요한 가치를 5개 선택해보세요.
            </p>
            <div className="callout-box">
              <p>
                성실 / 창의성 / 자유 / 도전 / 성장 / 가족 / 정의 / 봉사 / 리더십 / 협력 /
                전문성 / 균형 / 혁신 / 진정성 / 용기 / 감사 / 재미 / 건강 / 안정 / 열정
              </p>
            </div>

            <h2 data-aos="fade-up">4. 브랜드 미션과 비전 수립</h2>

            <h3>미션 스테이트먼트 작성법</h3>
            <p>
              미션(Mission)은 <strong>"지금 내가 하는 일의 목적"</strong>을 정의합니다.
              비전(Vision)은 <strong>"미래에 달성하고 싶은 모습"</strong>을 그립니다.
            </p>

            <div className="callout-box">
              <h3>미션 작성 공식</h3>
              <p>
                <strong>"나는 [타겟]을 위해 [방법]을 통해 [가치]를 제공한다"</strong>
              </p>
              <p><strong>예시:</strong></p>
              <ul>
                <li>"나는 취업 준비생을 위해 실전적인 브랜딩 교육을 통해 자신감 있는 커리어 시작을 돕는다"</li>
                <li>"나는 소규모 사업자를 위해 디지털 마케팅 전략을 통해 매출 성장을 지원한다"</li>
              </ul>
            </div>

            <h3>비전 보드</h3>
            <p>
              비전 보드는 미래에 달성하고 싶은 모습을 시각적으로 표현한 것입니다.
              이미지, 텍스트, 인용구 등을 모아 하나의 콜라주를 만들면 목표를 더 생생하게 인식할 수 있습니다.
            </p>
            <ul>
              <li>3년 후 나의 직업/역할은?</li>
              <li>어떤 분야의 전문가로 알려지고 싶은가?</li>
              <li>어떤 라이프스타일을 추구하는가?</li>
              <li>어떤 영향력을 행사하고 싶은가?</li>
            </ul>

            <h2 data-aos="fade-up">5. 브랜드 포지셔닝</h2>
            <p>
              브랜드 포지셔닝이란 타겟 오디언스의 마음속에 나의 브랜드가 차지하는 고유한 위치를 정의하는 것입니다.
              효과적인 포지셔닝은 경쟁자와 명확하게 차별화되어야 합니다.
            </p>

            <div className="callout-box">
              <h3>포지셔닝 질문</h3>
              <ul>
                <li>나는 <strong>누구</strong>인가? (정체성)</li>
                <li>나는 <strong>누구를 위해</strong> 존재하는가? (타겟)</li>
                <li>나는 <strong>어떤 가치</strong>를 제공하는가? (가치 제안)</li>
                <li>나는 <strong>어떻게 다른가</strong>? (차별화)</li>
                <li>나를 <strong>왜 선택해야</strong> 하는가? (근거)</li>
              </ul>
            </div>

            <h2 data-aos="fade-up">6. USP (Unique Selling Proposition)</h2>
            <p>
              USP는 "나만이 제공할 수 있는 독특한 가치"를 한 문장으로 표현한 것입니다.
              강력한 USP는 다음 세 가지 조건을 충족해야 합니다.
            </p>
            <table className="lesson-table">
              <thead>
                <tr><th>조건</th><th>설명</th><th>예시</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>구체적</strong></td>
                  <td>추상적이지 않고 명확한 가치</td>
                  <td>"디자인 경력 10년의 UX 전문가"</td>
                </tr>
                <tr>
                  <td><strong>차별적</strong></td>
                  <td>경쟁자와 구별되는 고유한 특성</td>
                  <td>"마케팅+개발 양쪽을 아는 기획자"</td>
                </tr>
                <tr>
                  <td><strong>가치있는</strong></td>
                  <td>타겟이 실제로 원하는 것</td>
                  <td>"매출을 3배 올려주는 SNS 전략가"</td>
                </tr>
              </tbody>
            </table>

            <div className="info-box warning">
              <h3>흔한 실수</h3>
              <p>
                USP를 작성할 때 "열심히 하는 사람", "다재다능한 사람" 같은 모호한 표현은 피해야 합니다.
                이런 표현은 모든 사람에게 적용될 수 있기 때문에 차별화가 되지 않습니다.
                가능한 한 구체적인 숫자, 특정 분야, 독특한 경험을 포함하세요.
              </p>
            </div>

            <h2 data-aos="fade-up">7. 실습 과제</h2>
            <div className="exercise-box">
              <h3>과제 1: 나의 SWOT 분석</h3>
              <p>아래 항목에 따라 자신의 SWOT 분석을 작성하세요.</p>
              <ul>
                <li><strong>강점 (S)</strong>: 나의 전문 기술, 경험, 성격적 장점 5가지</li>
                <li><strong>약점 (W)</strong>: 개선이 필요한 부분 3가지와 극복 방안</li>
                <li><strong>기회 (O)</strong>: 활용할 수 있는 외부 환경 변화 3가지</li>
                <li><strong>위협 (T)</strong>: 대비해야 할 외부 요인 3가지</li>
              </ul>
            </div>
            <div className="exercise-box">
              <h3>과제 2: 브랜드 미션 작성</h3>
              <p>위의 미션 작성 공식을 활용하여 나만의 브랜드 미션 스테이트먼트를 작성하세요.</p>
              <ul>
                <li>타겟: 내가 도움을 주고 싶은 사람은 누구인가?</li>
                <li>방법: 어떤 방식으로 가치를 전달할 것인가?</li>
                <li>가치: 최종적으로 어떤 변화를 만들고 싶은가?</li>
              </ul>
              <p><strong>제출 형식:</strong> 미션 스테이트먼트 1문장 + 비전 스테이트먼트 1문장 + 핵심 가치 5개</p>
            </div>

            <div className="info-box tip">
              <h3>다음 주 예고</h3>
              <p>
                3주차에서는 타겟 오디언스를 분석하는 방법을 배웁니다. 페르소나 설정, 시장조사,
                STP 전략 등을 통해 나의 브랜드가 누구에게 어필해야 하는지 명확하게 정의합니다.
              </p>
            </div>

            <div className="lesson-nav">
              <Link to="/lessons/intro" className="lesson-nav-btn prev">&larr; 1주차: 브랜딩 개론</Link>
              <Link to="/lessons/target-audience" className="lesson-nav-btn next">3주차: 타겟 오디언스 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingWeek2;
