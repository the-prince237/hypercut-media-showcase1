'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { CTABanner } from '..';

const ContactUs = () => {
  return (
    <Box className='relative flex flex-col items-center justify-center gap-[50px] py-[200px]'>
      <Box className='absolute top-[-50px] h-[80px] w-[944px] rotate-[-130.218deg] bg-[rgba(255,255,255,0.50)] blur-[250px]' />
      <Box className='absolute right-[-634px] h-[710.399px] w-[1001.792px] rotate-[-33.6deg] rounded-[249.471px] bg-[rgba(199,106,11,0.20)]  blur-[250px]' />
      <Typography className='relative w-[1245px] text-center text-[96px] font-[400] leading-[110px] text-white'>
        Don’t feel hesitate to contact us. We’d be thrilled to take a
        <span className='text-orange00'> Journey with you!</span>
      </Typography>
      <CTABanner />
    </Box>
  );
};

export default ContactUs;
