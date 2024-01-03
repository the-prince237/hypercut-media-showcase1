import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import bgImage from '../../../../public/bgs/hero.png';
import { makeStyles } from '@mui/styles';

const Hero = () => {
  const classes = useClasses();
  return (
    <Box className={classes.hero}>
      <Image
        style={{
          objectFit: 'contain',
          filter: 'grayscale(100%)',
          width: '100vw',
          height: '70vh',
        }}
        src={bgImage}
        alt='hero bg'
      />
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
  },
});

export default Hero;
