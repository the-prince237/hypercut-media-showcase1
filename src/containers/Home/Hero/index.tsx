'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import waves from '../../../../public/bgs/hero-waves.jpg';
import meta from '../../../../public/icons/meta.png';

import { Rubik_Glitch } from 'next/font/google';
import classNames from 'classnames';
import { quicksandLight } from '@/containers/Header';
import { BluredRing } from '@/components';

const rubik = Rubik_Glitch({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  return (
    <Box className='absolute left-0 top-0 flex h-full w-full items-center justify-center px-[100px] py-0'>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          objectFit: 'cover',
          height: '100%',
          opacity: '0.2',
        }}
        src={waves}
        alt='waves'
      />
      <BluredRing />
      <Box className='relative flex w-full flex-col items-center'>
        <Typography
          className={classNames(
            rubik.className,
            'align-center text-[86px] leading-[86px]',
            'text-[#222]',
          )}
        >
          EXPLOSEZ VOS VENTES
        </Typography>
        <Typography
          className={classNames(
            'align-center text-[86px] leading-[86px]',
            'flex w-fit items-center justify-center py-[10px] pl-[10px] pr-[75px]',
            quicksandLight.className,
          )}
        >
          avec
          <Image src={meta} style={{ width: 56, height: 56, objectFit: 'contain' }} alt='meta' />
          <span className='font-[900] text-[#0166e2]'>eta</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
