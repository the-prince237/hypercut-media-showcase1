'use client'

import React from 'react'
import { initThinBackend, logout } from 'thin-backend'
import { ThinBackend } from 'thin-backend-react'

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL })


const Providers = ({ children } : { children: React.ReactNode}) => {
  return (
    <ThinBackend requireLogin>
      <div>
        { children }
      </div>  
    </ThinBackend>
  )
}

export default Providers