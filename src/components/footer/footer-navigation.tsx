import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { useLanguage } from '@/i18n'

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  const { t } = useLanguage()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title={t.footer.courseTitle} />
        {t.footer.courseMenu.map((label, index) => (
          <NavigationItem key={index + label} label={label} path="#" />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title={t.footer.menuTitle} />
        {headerNavigations.map(({ key, path }, index) => (
          <NavigationItem key={index + path} label={t.nav[key]} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title={t.footer.aboutTitle} />
        {t.footer.companyMenu.map((label, index) => (
          <NavigationItem key={index + label} label={label} path="#" />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
