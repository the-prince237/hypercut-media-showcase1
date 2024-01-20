'use client';

import { ContactUs } from '@/containers';
import { Hero, Services, Works } from '@/containers/Home';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className='flex flex-col'>
      <Hero />
      <Box className='mt-[150vh] flex flex-col gap-[100px] px-[134px]'>
        <Works />
        <Services />
        <ContactUs />
      </Box>
    </Box>
  );
}
