import { Box, Typography } from '@mui/material';
import React from 'react';
import { CTAShapes } from './components';

const CTABanner = () => {
  return (
    <Box className='w-full rounded-[40px] bg-gradient-to-tl from-transparent to-[#5a5f92] p-[7px] drop-shadow-2xl'>
      <Box className='relative h-[465.162px] w-full overflow-hidden rounded-[38px] bg-boxBlue px-[64px]'>
        <CTAShapes />
        <Box className='h-full w-full py-[150px]'>
          <Typography className='w-[600px] text-[34px] font-[700] leading-[46px] text-white'>
            Nous vous répondrons sous 6 heures !
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CTABanner;
