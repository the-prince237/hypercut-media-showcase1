'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import waves from '../../../../public/bgs/hero-waves.jpg';
import meta from '../../../../public/icons/meta.png';
import { makeStyles } from '@mui/styles';

import { Rubik_Glitch } from 'next/font/google';
import classNames from 'classnames';
import { quicksandLight } from '@/containers/Header';
import { BluredRing } from '@/components';

const rubik = Rubik_Glitch({ weight: '400', subsets: ['latin'] });

const Hero = () => {
  const classes = useClasses();
  return (
    <Box className={classes.hero}>
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
      <Box className={classes.texts}>
        <Typography className={classNames(rubik.className, classes.text, classes.text2)}>
          EXPLOSEZ VOS VENTES
        </Typography>
        <Typography className={classNames(classes.text, classes.text1, quicksandLight.className)}>
          avec
          <Image src={meta} style={{ width: 56, height: 56, objectFit: 'contain' }} alt='meta' />
          <span className={classes.text12}>eta</span>
        </Typography>
      </Box>
    </Box>
  );
};

const useClasses = makeStyles({
  hero: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 100px',
  },
  block: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: '86px',
    lineHeight: '86px',
    textAlign: 'center',
  },
  text1: {
    width: 'fit-content',
    padding: '10px 75px 10px 10px',
    fontSize: '36px',
    lineHeight: '36px',
    // fontWeight: '900',
    // color: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text12: {
    color: '#0166e2',
    fontWeight: '900',
  },
  text2: {
    color: '#222',
  },
});

export default Hero;
