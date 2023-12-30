'use client'

import { Box } from '@mui/material'
import React from 'react'
import { initThinBackend } from 'thin-backend'
import { ThinBackend } from 'thin-backend-react'

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL })

const Providers = ({ children } : { children: React.ReactNode}) => {
  return (
    <ThinBackend>
      <Box className="flex flex-col items-center w-screen">
        { children }
      </Box>
    </ThinBackend>
  )
}

export default Providers