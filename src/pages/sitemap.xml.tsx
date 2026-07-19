import { GetServerSideProps } from 'next'
import { seo } from '@/config/seo'

// Rota dinâmica: gera o sitemap no servidor e define o Content-Type na resposta.
// Isso garante application/xml de forma confiável (não depende de arquivo estático).
const SitemapXml = (): null => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const url = seo.siteUrl.replace(/\/$/, '')
  const lastmod = '2026-07-18'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${url}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${url}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${url}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}/" />
  </url>
</urlset>`

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default SitemapXml
