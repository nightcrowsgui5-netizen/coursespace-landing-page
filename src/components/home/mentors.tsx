import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'
import { useLanguage } from '@/i18n'

const HomeOurMentors: FC = () => {
  const { t } = useLanguage()

  // Foto/nome dos dados + categoria/descrição traduzidas (perfil único do professor)
  const mentor = {
    ...data[0],
    category: t.mentors.list[0]?.category ?? data[0].category,
    description: t.mentors.list[0]?.description ?? data[0].description,
  }

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 40, textAlign: 'center' }}>
          {t.mentors.title}
        </Typography>

        <Box sx={{ width: { xs: '100%', sm: 380 }, mx: 'auto' }}>
          <MentorCardItem item={mentor} />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
