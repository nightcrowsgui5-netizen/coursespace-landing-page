import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { useLanguage, languages } from '@/i18n'

const LanguageSwitcher: FC = () => {
  const { lang, setLang } = useLanguage()

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        mr: { xs: 0, md: 2 },
        mb: { xs: 2, md: 0 },
      }}
    >
      {languages.map((item) => {
        const active = item.code === lang
        return (
          <Tooltip key={item.code} title={item.label} arrow>
            <Box
              component="button"
              type="button"
              aria-label={item.label}
              onClick={() => setLang(item.code)}
              sx={{
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                p: 0.5,
                lineHeight: 1,
                fontSize: 24,
                borderRadius: '50%',
                filter: active ? 'none' : 'grayscale(100%)',
                opacity: active ? 1 : 0.55,
                transform: active ? 'scale(1.1)' : 'scale(1)',
                transition: 'all .2s ease',
                '&:hover': { opacity: 1, filter: 'none', transform: 'scale(1.1)' },
              }}
            >
              <span role="img" aria-hidden>
                {item.flag}
              </span>
            </Box>
          </Tooltip>
        )
      })}
    </Box>
  )
}

export default LanguageSwitcher
