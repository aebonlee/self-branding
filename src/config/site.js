const site = {
  name: 'Self-Branding',
  nameKo: '셀프 브랜딩 마케팅',
  description: '기업홍보부터 개인브랜딩까지 - 셀프 브랜딩 마케팅 종합 학습',
  url: 'https://aebonlee.github.io/self-branding',
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },
  brand: {
    parts: [
      { text: 'Self', className: 'brand-dream' },
      { text: 'Brand', className: 'brand-it' },
      { text: 'ing', className: 'brand-biz' }
    ]
  },
  themeColor: '#0046C8',
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.branding',
      path: '/branding/what-is-branding',
      activePath: '/branding',
      dropdown: [
        { path: '/branding/what-is-branding', labelKey: 'site.nav.whatIsBranding' },
        { path: '/branding/roadmap', labelKey: 'site.nav.roadmap' },
        { path: '/branding/syllabus', labelKey: 'site.nav.syllabus' },
        { path: '/branding/practice-guide', labelKey: 'site.nav.practiceGuide' },
      ]
    },
    {
      labelKey: 'site.nav.lessons',
      path: '/lessons',
      activePath: '/lessons',
      dropdown: [
        { path: '/lessons/intro', labelKey: 'site.nav.week1' },
        { path: '/lessons/self-analysis', labelKey: 'site.nav.week2' },
        { path: '/lessons/target-audience', labelKey: 'site.nav.week3' },
        { path: '/lessons/brand-identity', labelKey: 'site.nav.week4' },
        { path: '/lessons/digital-marketing', labelKey: 'site.nav.week5' },
        { path: '/lessons/sns-marketing', labelKey: 'site.nav.week6' },
        { path: '/lessons/content-marketing', labelKey: 'site.nav.week7' },
        { path: '/lessons/corporate-pr', labelKey: 'site.nav.week8' },
        { path: '/lessons/personal-branding', labelKey: 'site.nav.week9' },
        { path: '/lessons/portfolio-branding', labelKey: 'site.nav.week10' },
        { path: '/lessons/marketing-analytics', labelKey: 'site.nav.week11' },
        { path: '/lessons/final-project', labelKey: 'site.nav.week12' },
      ]
    },
    {
      labelKey: 'site.nav.tools',
      path: '/tools',
      activePath: '/tools',
      dropdown: [
        { path: '/tools/instagram', labelKey: 'site.nav.toolInstagram' },
        { path: '/tools/youtube', labelKey: 'site.nav.toolYouTube' },
        { path: '/tools/blog', labelKey: 'site.nav.toolBlog' },
        { path: '/tools/linkedin', labelKey: 'site.nav.toolLinkedIn' },
        { path: '/tools/email', labelKey: 'site.nav.toolEmail' },
        { path: '/tools/ads', labelKey: 'site.nav.toolAds' },
        { path: '/tools/design', labelKey: 'site.nav.toolDesign' },
        { path: '/tools/ai', labelKey: 'site.nav.toolAI' },
      ]
    },
    { path: '/lectures', labelKey: 'site.nav.lectures', activePath: '/lectures' },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
    {
      labelKey: 'site.nav.community',
      path: '/community/board',
      activePath: '/community',
      dropdown: [
        { path: '/community/board', labelKey: 'site.nav.board' },
        { path: '/community/gallery', labelKey: 'site.nav.gallery' },
        { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
        { path: '/community/websites', labelKey: 'site.nav.websites' },
      ]
    }
  ],
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/branding/what-is-branding', labelKey: 'site.nav.branding' },
    { path: '/lessons', labelKey: 'site.nav.lessons' },
    { path: '/tools', labelKey: 'site.nav.tools' },
    { path: '/lectures', labelKey: 'site.nav.lectures' },
    { path: '/references', labelKey: 'site.nav.references' },
    { path: '/community/board', labelKey: 'site.nav.board' },
    { path: '/community/gallery', labelKey: 'site.nav.gallery' },
    { path: '/community/portfolio', labelKey: 'site.nav.portfolio' },
    { path: '/community/websites', labelKey: 'site.nav.websites' }
  ],
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT Books', url: 'https://books.dreamitbiz.com' },
    { name: 'KoreaTech CT', url: 'https://koreatech.dreamitbiz.com' }
  ]
};

export default site;
