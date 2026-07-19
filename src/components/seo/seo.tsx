import React, { FC } from 'react'
import Head from 'next/head'
import { seo, absoluteUrl } from '@/config/seo'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl('/'),
      name: seo.siteName,
      description: seo.description,
      inLanguage: 'pt-BR',
      publisher: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Mauro Alexandre',
      jobTitle: 'Especialista em Redes',
      description:
        'Especialista em redes, com ampla experiência em TR-069, BGP e infraestrutura de provedores de internet.',
      url: absoluteUrl('/'),
      image: absoluteUrl('/images/home-hero.png'),
      knowsAbout: ['Redes de Computadores', 'TR-069', 'CWMP', 'BGP', 'Roteamento', 'Provedores de Internet (ISP)'],
    },
    {
      '@type': 'Course',
      name: 'TR-069',
      description: 'Curso de TR-069 (CWMP) para gerenciamento remoto de equipamentos em provedores de internet.',
      inLanguage: 'pt-BR',
      provider: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Course',
      name: 'BGP',
      description: 'Curso de BGP: roteamento entre sistemas autônomos, políticas de rota e boas práticas para ISPs.',
      inLanguage: 'pt-BR',
      provider: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Course',
      name: 'Informática para Concursos',
      description: 'Curso de Informática para Concursos, com foco no que mais cai nas provas.',
      inLanguage: 'pt-BR',
      provider: { '@id': absoluteUrl('/#person') },
    },
  ],
}

const Seo: FC = () => {
  const canonical = absoluteUrl('/')
  const ogImage = absoluteUrl(seo.ogImage)

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MauroAlexandre — Cursos de Redes" />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:locale:alternate" content={seo.localeAlternate} />

      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data (JSON-LD) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
}

export default Seo
