import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';

const ToolInstagram = () => {
  const { t } = useLanguage();
  useAOS();

  return (
    <>
      <SEOHead
        title="인스타그램 마케팅"
        description="인스타그램을 활용한 브랜드 성장 전략과 콘텐츠 마케팅 가이드"
        path="/tools/instagram"
      />
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <h1>인스타그램 마케팅</h1>
          <p>비주얼 콘텐츠의 힘으로 브랜드를 성장시키는 인스타그램 마케팅 완벽 가이드</p>
        </div>
      </section>
      <section className="lesson-content section" data-aos="fade-up">
        <div className="container">
          <div className="lesson-body">

            <h2>1. 인스타그램 마케팅 개요</h2>
            <p>
              인스타그램은 전 세계 20억 명 이상의 월간 활성 사용자를 보유한 비주얼 중심의 소셜 미디어 플랫폼입니다.
              특히 18~34세 사이의 사용자가 전체의 60% 이상을 차지하며, MZ세대를 타겟으로 하는 브랜드에게
              필수적인 마케팅 채널입니다.
            </p>

            <div className="info-box tip">
              <strong>왜 인스타그램인가?</strong>
              <ul>
                <li>높은 참여율: 다른 SNS 대비 2~3배 높은 인게이지먼트</li>
                <li>비주얼 스토리텔링: 이미지와 영상으로 브랜드 감성 전달</li>
                <li>쇼핑 기능 통합: 콘텐츠에서 바로 구매로 연결</li>
                <li>다양한 콘텐츠 포맷: 피드, 스토리, 릴스, 라이브, 가이드</li>
              </ul>
            </div>

            <div className="section-card" data-aos="fade-up">
              <h3>인스타그램 주요 통계</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>항목</th><th>수치</th></tr>
                </thead>
                <tbody>
                  <tr><td>월간 활성 사용자</td><td>20억+</td></tr>
                  <tr><td>일간 활성 사용자</td><td>5억+</td></tr>
                  <tr><td>일일 스토리 사용자</td><td>5억+</td></tr>
                  <tr><td>비즈니스 계정 팔로우 비율</td><td>사용자의 90%</td></tr>
                  <tr><td>릴스 일일 재생 시간</td><td>17.6분 (평균)</td></tr>
                </tbody>
              </table>
            </div>

            <h2>2. 프로필 최적화</h2>
            <p>
              인스타그램 프로필은 잠재 팔로워가 처음 접하는 브랜드의 얼굴입니다. 3초 안에 어떤 계정인지
              명확하게 전달해야 합니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>프로필 최적화 체크리스트</h3>
              <ul>
                <li><strong>프로필 사진:</strong> 로고 또는 선명한 인물 사진 (320x320px 권장). 원형으로 잘리므로 중앙 배치 중요</li>
                <li><strong>사용자 이름(@):</strong> 브랜드명과 일치하는 검색하기 쉬운 이름. 특수문자나 숫자 최소화</li>
                <li><strong>바이오 (150자):</strong> 핵심 가치 + 타겟 명시 + CTA. 줄바꿈과 이모지로 가독성 확보</li>
                <li><strong>링크:</strong> 링크트리 또는 맞춤 랜딩 페이지로 여러 URL 연결</li>
                <li><strong>카테고리:</strong> 비즈니스 계정으로 전환 후 적절한 카테고리 설정</li>
                <li><strong>하이라이트:</strong> 주요 스토리를 카테고리별로 정리. 통일된 커버 이미지 사용</li>
              </ul>
            </div>

            <div className="info-box tip">
              <strong>바이오 작성 공식:</strong> [누구를 위한] + [무엇을 하는] + [차별화 포인트] + [행동 유도]
              <br /><br />
              예시: "소상공인을 위한 마케팅 전문가 | SNS로 매출 2배 성장 비법 공유 | 무료 가이드 다운로드 👇"
            </div>

            <h2>3. 콘텐츠 전략</h2>
            <p>
              인스타그램에서는 다양한 콘텐츠 포맷을 전략적으로 조합해야 합니다.
              각 포맷의 특성을 이해하고, 목적에 맞게 활용하세요.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>콘텐츠 포맷별 특징</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>포맷</th><th>특징</th><th>최적 활용</th><th>권장 빈도</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>피드 포스트</strong></td>
                    <td>정사각형/세로 이미지, 캐러셀(최대 10장)</td>
                    <td>정보 전달, 교육 콘텐츠, 포트폴리오</td>
                    <td>주 3~5회</td>
                  </tr>
                  <tr>
                    <td><strong>스토리</strong></td>
                    <td>24시간 후 사라짐, 풀스크린 세로</td>
                    <td>일상 공유, 설문, Q&A, 프로모션</td>
                    <td>매일 3~7개</td>
                  </tr>
                  <tr>
                    <td><strong>릴스</strong></td>
                    <td>최대 90초 숏폼 영상, 높은 노출</td>
                    <td>바이럴 콘텐츠, 트렌드 참여, 신규 팔로워 확보</td>
                    <td>주 3~5회</td>
                  </tr>
                  <tr>
                    <td><strong>라이브</strong></td>
                    <td>실시간 방송, 댓글 소통</td>
                    <td>Q&A, 제품 런칭, 비하인드 씬</td>
                    <td>월 2~4회</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>콘텐츠 믹스 공식 (4:3:2:1):</strong>
              <ul>
                <li><strong>40% 교육 콘텐츠:</strong> 팁, 튜토리얼, 인사이트 공유</li>
                <li><strong>30% 관계 콘텐츠:</strong> 비하인드 씬, 일상, 스토리</li>
                <li><strong>20% 영감 콘텐츠:</strong> 동기부여, 성공 사례, 후기</li>
                <li><strong>10% 프로모션:</strong> 제품/서비스 홍보, 세일 안내</li>
              </ul>
            </div>

            <h2>4. 해시태그 전략</h2>
            <p>
              해시태그는 인스타그램에서 콘텐츠가 발견되는 핵심 경로입니다. 전략적인 해시태그 사용으로
              도달 범위를 넓힐 수 있습니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>해시태그 유형별 전략</h3>
              <ul>
                <li><strong>브랜드 해시태그:</strong> 브랜드 고유 해시태그 (#나이키 #JustDoIt). UGC(사용자 생성 콘텐츠) 수집에 활용</li>
                <li><strong>커뮤니티 해시태그:</strong> 업계/관심사 커뮤니티 (#마케터일상 #디자인영감)</li>
                <li><strong>니치 해시태그:</strong> 경쟁이 적은 특화 해시태그 (게시물 1만~50만개)</li>
                <li><strong>위치 해시태그:</strong> 지역 기반 노출 (#서울카페 #홍대맛집)</li>
              </ul>
            </div>

            <div className="info-box warning">
              <strong>주의:</strong> 인스타그램은 최대 30개의 해시태그를 허용하지만, 최적 효과를 위해
              <strong> 8~15개</strong>를 권장합니다. 금지 해시태그 사용은 계정 제재로 이어질 수 있으니
              정기적으로 확인하세요.
            </div>

            <h2>5. 인스타그램 쇼핑</h2>
            <p>
              인스타그램 쇼핑 기능을 활용하면 콘텐츠에서 바로 제품 구매로 연결할 수 있습니다.
              브랜드의 매출 전환에 강력한 도구입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>인스타그램 쇼핑 설정 단계</h3>
              <ol>
                <li>비즈니스 또는 크리에이터 계정으로 전환</li>
                <li>Facebook 페이지와 연결</li>
                <li>Commerce Manager에서 카탈로그 생성</li>
                <li>인스타그램에서 쇼핑 기능 신청 및 승인 대기</li>
                <li>피드 포스트, 스토리, 릴스에 제품 태그 추가</li>
              </ol>
            </div>

            <div className="info-box tip">
              <strong>쇼핑 콘텐츠 팁:</strong> 제품만 보여주기보다 라이프스타일 이미지에 자연스럽게 제품을 녹여내세요.
              사용자가 '광고'가 아닌 '영감'으로 느끼게 하는 것이 전환율을 높이는 핵심입니다.
            </div>

            <h2>6. 인플루언서 협업</h2>
            <p>
              인플루언서 마케팅은 신뢰할 수 있는 제3자를 통해 브랜드 메시지를 전달하는 강력한 전략입니다.
              적절한 인플루언서를 선정하고 효과적으로 협업하는 방법을 알아봅니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>인플루언서 유형별 비교</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>유형</th><th>팔로워 수</th><th>특징</th><th>비용 (참고)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>나노 인플루언서</td>
                    <td>1천~1만</td>
                    <td>높은 참여율, 진정성, 니치 커뮤니티</td>
                    <td>제품 제공~30만원</td>
                  </tr>
                  <tr>
                    <td>마이크로 인플루언서</td>
                    <td>1만~10만</td>
                    <td>전문성, 충성도 높은 팔로워</td>
                    <td>30만~200만원</td>
                  </tr>
                  <tr>
                    <td>매크로 인플루언서</td>
                    <td>10만~100만</td>
                    <td>넓은 도달 범위, 브랜드 인지도</td>
                    <td>200만~1000만원</td>
                  </tr>
                  <tr>
                    <td>메가 인플루언서</td>
                    <td>100만+</td>
                    <td>대규모 노출, 셀럽 효과</td>
                    <td>1000만원+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>협업 체크리스트:</strong>
              <ul>
                <li>인플루언서의 팔로워 인구통계가 타겟과 일치하는지 확인</li>
                <li>참여율(좋아요, 댓글) 대비 팔로워 수 비율 점검 (2% 이상 권장)</li>
                <li>과거 협업 콘텐츠의 품질과 톤 확인</li>
                <li>계약서에 콘텐츠 사용 범위, 기간, 성과 지표 명시</li>
              </ul>
            </div>

            <h2>7. 분석 도구 활용</h2>
            <p>
              인스타그램 인사이트는 비즈니스/크리에이터 계정에서 무료로 제공되는 분석 도구입니다.
              데이터 기반의 전략 수립에 필수적입니다.
            </p>

            <div className="section-card" data-aos="fade-up">
              <h3>주요 분석 지표</h3>
              <table className="lesson-table">
                <thead>
                  <tr><th>지표</th><th>의미</th><th>활용법</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>도달 (Reach)</td>
                    <td>콘텐츠를 본 고유 계정 수</td>
                    <td>콘텐츠 노출 범위 측정</td>
                  </tr>
                  <tr>
                    <td>노출 (Impressions)</td>
                    <td>콘텐츠가 표시된 총 횟수</td>
                    <td>반복 노출 효과 분석</td>
                  </tr>
                  <tr>
                    <td>참여율 (Engagement Rate)</td>
                    <td>(좋아요+댓글+저장+공유) / 도달</td>
                    <td>콘텐츠 품질 및 관련성 평가</td>
                  </tr>
                  <tr>
                    <td>저장 수 (Saves)</td>
                    <td>나중에 다시 보기 위해 저장한 수</td>
                    <td>교육/정보 콘텐츠의 가치 측정</td>
                  </tr>
                  <tr>
                    <td>프로필 방문</td>
                    <td>프로필을 방문한 계정 수</td>
                    <td>콘텐츠 → 팔로워 전환 퍼널 분석</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box tip">
              <strong>최적 게시 시간 찾기:</strong> 인사이트 &gt; 팔로워 &gt; 가장 활발한 시간대에서
              팔로워가 가장 활발한 요일과 시간을 확인하세요. 일반적으로 평일 오전 7~9시,
              점심 12~13시, 저녁 19~21시가 높은 참여율을 보입니다.
            </div>

            <h2>8. 추천 도구</h2>
            <div className="section-card" data-aos="fade-up">
              <table className="lesson-table">
                <thead>
                  <tr><th>도구</th><th>주요 기능</th><th>가격</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Later</strong></td>
                    <td>콘텐츠 예약, 비주얼 플래너, 링크인바이오</td>
                    <td>무료~월 $25</td>
                  </tr>
                  <tr>
                    <td><strong>Planoly</strong></td>
                    <td>피드 미리보기, 예약, 분석</td>
                    <td>무료~월 $13</td>
                  </tr>
                  <tr>
                    <td><strong>Canva</strong></td>
                    <td>인스타그램 템플릿, 릴스 편집, 브랜드 키트</td>
                    <td>무료~월 $13</td>
                  </tr>
                  <tr>
                    <td><strong>CapCut</strong></td>
                    <td>릴스 영상 편집, 자막, 효과</td>
                    <td>무료</td>
                  </tr>
                  <tr>
                    <td><strong>Metricool</strong></td>
                    <td>분석, 예약, 경쟁사 분석</td>
                    <td>무료~월 $18</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lesson-nav">
              <Link to="/tools" className="lesson-nav-btn prev">← 마케팅 도구 홈</Link>
              <Link to="/tools/youtube" className="lesson-nav-btn next">유튜브 마케팅 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolInstagram;
