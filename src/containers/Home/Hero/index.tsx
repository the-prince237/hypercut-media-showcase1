import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { waves } from '../../../../public/bgs';
import { heroVector, likes } from '../../../../public/images';
import { HeroBox } from './components';
import classNames from 'classnames';
import styles from '@/styles';

const Hero = () => {
  return (
    <Box className='absolute top-0 h-fit min-h-screen w-screen overflow-x-hidden'>
      <Image
        src={waves}
        alt='waves'
        className='absolute h-full w-[120vw] opacity-[0.3]'
        style={{ objectFit: 'cover' }}
      />
      <Box
        className={classNames(
          'relative flex min-h-screen w-full flex-col justify-between gap-[56px] pt-[209px]',
          styles.pagePadder,
        )}
      >
        <Box className='relative flex w-full'>
          <Image src={likes} alt='likes' className='absolute left-[50%]' />
          <Typography className='relative text-[36px]  font-bold tablet:text-[42px] minLaptop:text-[48px] minLaptop:leading-[70px]'>
            <span className='text-orange00'>CATAPULT</span> <br /> your performances to the <br />
            <span className='text-orange00'>Stratosphere</span>
          </Typography>
        </Box>
        <Box className='relative flex h-full flex-1 justify-center'>
          <Image src={heroVector} alt='hero' className='w-[calc(100%+32px)]' />
          <Box className='absolute flex h-full w-full flex-col gap-[15px]'>
            <Box className='flex justify-start minLaptop:absolute minLaptop:left-0 minLaptop:top-[42px]'>
              <HeroBox number={1} title='Search Engine Optimization (SEO)' />
            </Box>
            <Box className='mr-4 flex justify-end minLaptop:absolute minLaptop:bottom-[200px] minLaptop:left-[30px]'>
              <HeroBox number={2} title='Targeted Advertising' />
            </Box>
            <Box className='ml-7 flex justify-start minLaptop:absolute minLaptop:right-0 minLaptop:top-[50px]'>
              <HeroBox number={3} title='Social Media Marketing' />
            </Box>
            <Box className='mr-10 flex justify-end minLaptop:absolute minLaptop:bottom-[160px] minLaptop:right-[30px]'>
              <HeroBox number={4} title='Analytics and Reporting' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-bgBlue to-transparent minLaptop:h-[300px]' />
    </Box>
  );
};

export default Hero;
