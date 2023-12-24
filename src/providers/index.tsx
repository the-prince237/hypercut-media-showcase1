'use client'

import React from 'react'
import { initThinBackend, logout } from 'thin-backend'
import { ThinBackend } from 'thin-backend-react'

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL })


const Providers = ({ children } : { children: React.ReactNode}) => {
  return (
    <ThinBackend>
      <div className='w-screen h-screen flex flex-col bg-gray-900'>
        <div className='flex justify-center w-full'>
          <button onClick={() => logout()}>Logout</button>
        </div>
        <div className='flex items-center h-screen flex-1 justify-center'>
          { children }
        </div>
      </div>
    </ThinBackend>
  )
}

export default Providers