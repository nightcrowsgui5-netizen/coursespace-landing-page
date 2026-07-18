import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

// Ícones na mesma ordem de `feature.items` nas traduções (i18n)
export const featureIcons: ReactNode[] = [
  <ArtTrackIcon key="art" />,
  <AttachMoneyIcon key="money" />,
  <LocalLibraryIcon key="library" />,
  <ContactSupportIcon key="support" />,
]
