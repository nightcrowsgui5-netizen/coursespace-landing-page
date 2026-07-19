// Configuração central de SEO.
export const seo = {
  siteUrl: 'https://www.mauroalexandre.com.br',
  siteName: 'MauroAlexandre',
  title: 'MauroAlexandre — Cursos de Redes: TR-069, BGP e Informática para Concursos',
  description:
    'Aprenda redes de forma prática com o professor Mauro Alexandre. Cursos de TR-069, BGP e Informática para Concursos, com certificado, horário flexível e conteúdo direto ao ponto.',
  keywords: [
    'curso de redes',
    'TR-069',
    'TR069',
    'CWMP',
    'BGP',
    'roteamento',
    'informática para concursos',
    'curso para provedor',
    'provedor de internet',
    'ISP',
    'Mauro Alexandre',
    'curso online de redes',
  ],
  author: 'Mauro Alexandre',
  locale: 'pt_BR',
  localeAlternate: 'en_US',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
} as const

export const absoluteUrl = (path = '/'): string => {
  const base = seo.siteUrl.replace(/\/$/, '')
  return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`
}
