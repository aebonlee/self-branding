import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolYouTube = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="유튜브 마케팅"
        description="유튜브 채널 기획부터 영상 제작, SEO, 수익화까지 완벽 가이드"
        path="/tools/youtube"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>유튜브 마케팅</h1>
          <p>세계 2위 검색엔진, 유튜브를 활용한 영상 마케팅 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 유튜브 마케팅 개요</h2>
            <p>
              유튜브는 Google에 이어 세계에서 두 번째로 큰 검색엔진이자, 월간 활성 사용자 25억 명 이상을
              보유한 세계 최대 동영상 플랫폼입니다. 영상 콘텐츠는 텍스트나 이미지보다 기억에 95% 더
              남으며, 구매 결정에 직접적인 영향을 미칩니다.
            </p>

            <div className="info-box tip">
              <strong>유튜브 마케팅의 강점:</strong>
              <ul>
                <li>검색 기반 플랫폼: 콘텐츠가 수년간 지속적으로 유입을 발생시킴</li>
                <li>높은 신뢰도: 영상을 통한 전문성 전달이 텍스트보다 효과적</li>
                <li>다양한 수익 모델: 광고 수익, 멤버십, 슈퍼챗, 스폰서십</li>
                <li>Google 검색 통합: 유튜브 영상이 Google 검색 결과에 직접 노출</li>
              </ul>
            </div>

            <h2>2. 채널 기획</h2>
            <p>
              성공적인 유튜브 채널은 명확한 컨셉과 일관된 방향성에서 시작됩니다.
              채널을 시작하기 전 반드시 기획 단계를 거쳐야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>채널 기획 단계</h3>
              <ol>
                <li><strong>채널 컨셉 설정:</strong> 어떤 주제를 다룰 것인지 명확히 정의. 3가지 키워드로 채널 정체성 요약</li>
                <li><strong>타겟 오디언스 설정:</strong> 시청자의 나이, 관심사, 고민 파악. 구독할 이유 정의</li>
                <li><strong>경쟁 채널 분석:</strong> 같은 분야 채널 5~10개 분석. 차별화 포인트 도출</li>
                <li><strong>채널 아트 제작:</strong> 배너 (2560x1440px), 프로필 이미지 (800x800px)</li>
                <li><strong>채널 설명 작성:</strong> 핵심 키워드 포함, 업로드 일정, 채널 가치 명시</li>
              </ol>
            </div>

            <div className="info-box tip">
              <strong>채널 컨셉 공식:</strong> [타겟] + [주제] + [차별화] = 채널 컨셉
              <br /><br />
              예시: "직장인을 위한 + 부업/재테크 + 실전 경험 공유 = 월급쟁이 부업 일기"
            </div>

            <h2>3. 콘텐츠 기획</h2>
            <p>
              유튜브 영상은 목적과 형태에 따라 다양한 유형으로 나뉩니다.
              채널 성장 단계에 맞는 콘텐츠 전략을 세워야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>영상 유형별 특징</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>특징</th><th>목적</th><th>평균 길이</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>튜토리얼</strong></td>
                    <td>단계별 교육 콘텐츠</td>
                    <td>전문성 어필, 검색 유입</td>
                    <td>10~20분</td>
                  </tr>
                  <tr>
                    <td><strong>브이로그</strong></td>
                    <td>일상/작업 과정 공유</td>
                    <td>친밀감 형성, 커뮤니티</td>
                    <td>10~15분</td>
                  </tr>
                  <tr>
                    <td><strong>리뷰</strong></td>
                    <td>제품/서비스 평가</td>
                    <td>신뢰 구축, 제휴 수익</td>
                    <td>8~15분</td>
                  </tr>
                  <tr>
                    <td><strong>쇼츠</strong></td>
                    <td>60초 이하 숏폼</td>
                    <td>신규 구독자 확보, 바이럴</td>
                    <td>15~60초</td>
                  </tr>
                  <tr>
                    <td><strong>라이브</strong></td>
                    <td>실시간 소통</td>
                    <td>커뮤니티 강화, 슈퍼챗</td>
                    <td>30~120분</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. 영상 제작</h2>
            <p>
              고품질 영상 제작은 반드시 비싼 장비가 필요한 것은 아닙니다.
              스마트폰과 무료 편집 도구만으로도 충분히 시작할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>촬영 장비 추천 (단계별)</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>단계</th><th>카메라</th><th>마이크</th><th>조명</th><th>예산</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>입문</td>
                    <td>스마트폰</td>
                    <td>핀마이크 (₩15,000~)</td>
                    <td>자연광 + LED 링라이트</td>
                    <td>~10만원</td>
                  </tr>
                  <tr>
                    <td>중급</td>
                    <td>Sony ZV-1 / Canon M50</td>
                    <td>로데 VideoMicro</td>
                    <td>소프트박스 2등</td>
                    <td>~100만원</td>
                  </tr>
                  <tr>
                    <td>고급</td>
                    <td>Sony A7 IV / Canon R6</td>
                    <td>로데 NT-USB / SM7B</td>
                    <td>Aputure 조명 세트</td>
                    <td>300만원+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>편집 소프트웨어 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>소프트웨어</th><th>난이도</th><th>가격</th><th>특징</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>캡컷 (CapCut)</strong></td>
                    <td>초급</td>
                    <td>무료</td>
                    <td>직관적 UI, 자동 자막, 모바일/PC</td>
                  </tr>
                  <tr>
                    <td><strong>다빈치 리졸브</strong></td>
                    <td>중급~고급</td>
                    <td>무료 (스튜디오 $295)</td>
                    <td>전문가급 기능, 컬러 그레이딩</td>
                  </tr>
                  <tr>
                    <td><strong>프리미어 프로</strong></td>
                    <td>중급~고급</td>
                    <td>월 ₩24,000</td>
                    <td>업계 표준, Adobe 연동</td>
                  </tr>
                  <tr>
                    <td><strong>파이널 컷 프로</strong></td>
                    <td>중급</td>
                    <td>₩449,000 (1회)</td>
                    <td>Mac 전용, 최적화 성능</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>5. 유튜브 SEO</h2>
            <p>
              유튜브 SEO는 영상이 검색 결과와 추천 영상에 노출되도록 최적화하는 과정입니다.
              올바른 SEO 전략 없이는 아무리 좋은 콘텐츠도 묻힐 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>유튜브 SEO 핵심 요소</h3>
              <ul>
                <li><strong>제목 (Title):</strong> 핵심 키워드를 앞쪽에 배치. 60자 이내. 호기심 유발하되 클릭베이트 지양</li>
                <li><strong>설명 (Description):</strong> 처음 2줄에 핵심 내용. 키워드 자연스럽게 포함. 타임스탬프(챕터) 추가</li>
                <li><strong>태그 (Tags):</strong> 핵심 키워드 5~8개. 넓은 태그 + 좁은 태그 조합</li>
                <li><strong>썸네일:</strong> 1280x720px, 큰 텍스트(3~5단어), 인물 표정, 대비 강한 컬러</li>
                <li><strong>챕터:</strong> 영상을 구간별로 나누어 시청자 편의성 증가 + 검색 최적화</li>
                <li><strong>자막 (CC):</strong> 정확한 자막 제공은 접근성과 SEO 모두에 효과적</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>썸네일 CTR 높이는 공식:</strong>
              <ul>
                <li>얼굴 클로즈업 + 강한 감정 표현</li>
                <li>대비 강한 색상 (노란색, 빨간색 텍스트)</li>
                <li>텍스트는 3~5단어 이내로 간결하게</li>
                <li>배경과 구분되는 아웃라인 효과</li>
                <li>목표 CTR: 5~10% (상위 채널 기준)</li>
              </ul>
            </div>

            <h2>6. 수익화</h2>
            <p>
              유튜브는 다양한 수익화 경로를 제공합니다. 채널 성장 단계에 맞는 수익화 전략을 세우세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>수익화 방법 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>수익원</th><th>조건</th><th>예상 수익</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>파트너 프로그램 (광고)</strong></td>
                    <td>구독자 1,000명 + 시청시간 4,000시간</td>
                    <td>CPM ₩1,000~10,000 (분야별)</td>
                  </tr>
                  <tr>
                    <td><strong>슈퍼챗/슈퍼스티커</strong></td>
                    <td>파트너 프로그램 가입</td>
                    <td>라이브당 수만~수백만원</td>
                  </tr>
                  <tr>
                    <td><strong>채널 멤버십</strong></td>
                    <td>구독자 1,000명+</td>
                    <td>멤버당 월 ₩1,000~50,000</td>
                  </tr>
                  <tr>
                    <td><strong>브랜드 스폰서십</strong></td>
                    <td>영향력에 따라 다름</td>
                    <td>영상당 50만~수천만원</td>
                  </tr>
                  <tr>
                    <td><strong>제휴 마케팅</strong></td>
                    <td>제한 없음</td>
                    <td>판매당 5~30% 커미션</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> 수익화에만 집중하면 콘텐츠 품질이 저하될 수 있습니다. 먼저 가치 있는
              콘텐츠로 충성 시청자를 확보한 후, 자연스럽게 수익화를 도입하세요.
            </div>

            <h2>7. 유튜브 분석</h2>
            <p>
              YouTube Studio 분석 기능을 활용하면 채널 성과를 정확히 파악하고 전략을 개선할 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>핵심 분석 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>의미</th><th>목표 수치</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>시청 지속 시간</td>
                    <td>평균적으로 영상을 얼마나 시청하는지</td>
                    <td>50% 이상</td>
                  </tr>
                  <tr>
                    <td>CTR (클릭률)</td>
                    <td>노출 대비 클릭 비율</td>
                    <td>5~10%</td>
                  </tr>
                  <tr>
                    <td>구독자 전환율</td>
                    <td>시청 → 구독 전환</td>
                    <td>1~3%</td>
                  </tr>
                  <tr>
                    <td>트래픽 소스</td>
                    <td>시청자가 어디서 왔는지</td>
                    <td>검색 + 추천 50% 이상</td>
                  </tr>
                  <tr>
                    <td>재시청률</td>
                    <td>같은 영상을 반복 시청하는 비율</td>
                    <td>높을수록 좋음</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>TubeBuddy</strong></td>
                    <td>키워드 리서치, SEO 점수, 썸네일 A/B 테스트</td>
                    <td>무료~월 $7.50</td>
                  </tr>
                  <tr>
                    <td><strong>VidIQ</strong></td>
                    <td>키워드 분석, 경쟁사 분석, 트렌드 알림</td>
                    <td>무료~월 $7.50</td>
                  </tr>
                  <tr>
                    <td><strong>Canva</strong></td>
                    <td>썸네일 디자인, 채널 아트, 인트로/아웃트로</td>
                    <td>무료~월 $13</td>
                  </tr>
                  <tr>
                    <td><strong>Descript</strong></td>
                    <td>AI 기반 영상/팟캐스트 편집, 자막 자동 생성</td>
                    <td>무료~월 $24</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools/instagram" className="lesson-nav-btn prev">← 인스타그램 마케팅</Link>
              <Link to="/tools/blog" className="lesson-nav-btn next">블로그 & SEO →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolYouTube;
