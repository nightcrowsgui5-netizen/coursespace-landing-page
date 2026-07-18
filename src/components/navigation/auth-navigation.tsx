import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import { useLanguage } from '@/i18n'

const AuthNavigation: FC = () => {
  const { t } = useLanguage()
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        {t.auth.signIn}
      </StyledButton>
      <StyledButton disableHoverEffect={true}>{t.auth.signUp}</StyledButton>
    </Box>
  )
}

export default AuthNavigation
