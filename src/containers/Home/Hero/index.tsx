import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { waves } from '../../../../public/bgs';
import { TextFontSmall } from '@/components';
import { heroVector, likes } from '../../../../public/images';
import { HeroBox } from './components';
import { likesUp } from '../../../../public/animes';

const Hero = () => {
  return (
    <Box className='absolute top-0 h-fit w-screen'>
      <Image
        src={waves}
        alt='waves'
        className='absolute h-full w-[120vw] opacity-[0.3]'
        style={{ objectFit: 'cover' }}
      />
      <Image
        src={likesUp}
        alt='likes up'
        className='absolute bottom-0 right-[50px] h-full'
        style={{ objectFit: 'contain' }}
      />
      <Box className='relative flex w-full flex-col gap-[56px] px-[134px] pt-[209px]'>
        <Box className='flex w-full items-center justify-between px-[100px]'>
          <Typography className='w-[60%] max-w-[620px] text-[48px] font-[400] leading-[70px]'>
            <span className='text-orange00'>From Zero to Hero</span> transform your business with
            our proven digital marketing strategies
          </Typography>

          <Box className='relative'>
            <Box className='h-fit max-w-[406px]'>
              <TextFontSmall title='You do you. Tutur has your back with a full-service marketing platform that helps you crush your goals—and make more time for your passions.' />
            </Box>
            <Image src={likes} alt='likes' className='absolute bottom-[100%]' />
          </Box>
        </Box>
        <Box className='relative flex w-full justify-center'>
          <Image src={heroVector} alt='hero' className='w-[calc(100%+32px)]' />
          <HeroBox
            top={42}
            left={0}
            number={1}
            title='Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results'
          />
        </Box>
      </Box>
      <Box className='absolute bottom-0 left-0 h-[300px] w-full bg-gradient-to-t from-bgBlue to-transparent' />
    </Box>
  );
};

export default Hero;
