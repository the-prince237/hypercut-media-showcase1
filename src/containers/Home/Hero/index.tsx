'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import bgImage from '../../../../public/bgs/hero.png';
import waves from '../../../../public/bgs/hero-waves.jpg';
import { makeStyles } from '@mui/styles';

import { Rubik_Glitch } from 'next/font/google';
import classNames from 'classnames';
import { quicksandLight } from '@/containers/Header';

import { CloseOutlined } from '@mui/icons-material';

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
      <Image
        style={{
          objectFit: 'contain',
          filter: 'grayscale(100%)',
          height: '90vh',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
          right: '-300px',
        }}
        src={bgImage}
        alt='hero bg'
      />
      <Box className={classes.elements}>
        <Box className={classes.texts}>
          <Typography className={classNames(classes.text, classes.text1, quicksandLight.className)}>
            Your Creative
          </Typography>
          <Typography className={classNames(rubik.className, classes.text, classes.text2)}>
            Marketing Agency
          </Typography>
        </Box>
      </Box>
      <Box className={classNames(classes.elements, classes.graphics)}>
        <CloseOutlined color='primary' fontSize='large' />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  elements: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '0 100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphics: {},
  texts: {
    width: '100%',
    marginLeft: '20vw',
  },
  text: {
    fontSize: '86px',
    lineHeight: '86px',
  },
  text1: {
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1px)',
    width: 'fit-content',
    paddingRight: '50px',
    fontSize: '86px',
    lineHeight: '86px',
    fontWeight: 'lighter',
  },
  text2: {
    textShadow: '15px 15px 15px black',
  },
});

export default Hero;
