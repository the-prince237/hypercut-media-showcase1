import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { waves } from '../../../../public/bgs';
import { heroVector, likes } from '../../../../public/images';
import { HeroBox } from './components';
import classNames from 'classnames';
import styles from '@/styles';
import { TypeAnimation } from 'react-type-animation';
import { scrollDownIcon } from '../../../../public/icons';

const Hero = () => {
  return (
    <Box
      id='features'
      className='absolute top-0 flex h-fit min-h-screen w-screen flex-col items-center overflow-x-hidden'
    >
      <Image
        src={waves}
        alt='waves'
        className='absolute h-full w-[120vw] opacity-[0.3]'
        style={{ objectFit: 'cover' }}
      />
      <Box
        className={classNames(
          'relative flex h-full min-h-screen w-screen flex-col justify-between gap-[56px] pt-[120px] tablet:pt-[160px] minLaptop:pt-[209px]',
          styles.pagePadder,
        )}
      >
        <Box className={classNames('relative flex w-full')}>
          <Image
            src={likes}
            alt='likes'
            className='absolute left-[50%] hidden w-[200vw] animate-bounce minLaptop:block'
          />
          <Box className='flex flex-col'>
            <Typography className='gradient__text relative text-[36px] font-[500]  tablet:text-[42px] minLaptop:max-w-[60%] minLaptop:text-[48px] minLaptop:leading-[70px]'>
              Experts and Fine Tools to Catapult your ...
            </Typography>
            <TypeAnimation
              sequence={[
                'Company Brand',
                3000,
                'E Commerce',
                3000,
                'Organization',
                3000,
                'Hottest   Events',
                3000,
                'Biggest   Projects',
                3000,
              ]}
              wrapper='span'
              className='break-words text-[38px] font-[200] uppercase italic tracking-[3px] text-white tablet:text-[45px] minLaptop:text-[52px]'
              repeat={Infinity}
            />
          </Box>
        </Box>
        <Box className='relative bottom-0 flex h-full w-full flex-1 items-end justify-center'>
          <Image
            src={heroVector}
            alt='hero'
            className='w-[calc(100%+32px)] min-w-[800px] animate-pulse tablet:animate-none'
          />
          <Box
            className={classNames(
              'absolute bottom-0 hidden h-full w-full flex-col gap-[15px] tablet:flex',
              styles.pagePadder,
            )}
          >
            <Box className='flex justify-start minLaptop:absolute minLaptop:left-0 minLaptop:top-[42px]'>
              <HeroBox number={1} title='Branding & Positionnement' />
            </Box>
            <Box className='mr-4 flex justify-end minLaptop:absolute minLaptop:bottom-[200px] minLaptop:left-[30px]'>
              <HeroBox number={2} title="Marketing d'influence" />
            </Box>
            <Box className='ml-7 flex justify-start minLaptop:absolute minLaptop:right-0 minLaptop:top-[50px]'>
              <HeroBox number={3} title='Community Management' />
            </Box>
            <Box className='mr-[-15px] flex justify-end minLaptop:absolute minLaptop:bottom-[160px] minLaptop:right-[30px]'>
              <HeroBox number={4} title='Meta & Tiktok Analytics' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-bgBlue to-transparent minLaptop:h-[300px]' />

      <Image
        src={scrollDownIcon}
        alt='scroll down'
        className='absolute bottom-[100px] m-auto w-[50px] animate-bounce rounded-full bg-transWhite backdrop-blur-xl minLaptop:hidden'
      />
    </Box>
  );
};

export default Hero;
