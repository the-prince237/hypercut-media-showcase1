'use client';

import { ContactUs } from '@/containers';
import { Hero, Plans, Services, Works } from '@/containers/Home';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className='flex flex-col'>
      <Hero />
      <Box className='mt-[150vh] px-[134px]'>
        <Works />
        <Services />
        <ContactUs />
        <Plans />
      </Box>
    </Box>
  );
}
