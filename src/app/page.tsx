'use client'

import { Hero, Plans, Services, Stats } from '@/containers/Home'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box className='h-full w-full'>
      <Hero />
      <Stats />
      <Services />
      <Plans />
    </Box>
  )
}
