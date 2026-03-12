import { useLanguage } from '../contexts/LanguageContext';

const SEOHead = ({ title, description, path = '', ogImage, noindex = false }) => {
  const SITE = '셀프 브랜딩 마케팅 | Self-Branding Marketing';
  const BASE = 'https://self-branding.dreamitbiz.com';
  const DEFAULT_DESC = '기업홍보부터 개인브랜딩까지 - 셀프 브랜딩 마케팅 종합 학습 플랫폼';
  const fullTitle = title ? `${title} | ${SITE}` : SITE;
  const desc = description || DEFAULT_DESC;
  const image = ogImage || `${BASE}/og-image.png`;

  const { language } = useLanguage();

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${BASE}${path}`} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${BASE}${path}`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="셀프 브랜딩 마케팅" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEOHead;
