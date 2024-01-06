'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Quicksand } from 'next/font/google';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import metaBlack from '../../../public/icons/meta_black.png';
import Image from 'next/image';

export const quicksandLight = Quicksand({ weight: '300', subsets: ['latin'] });
const quicksandBold = Quicksand({ weight: '700', subsets: ['latin'] });

const Header = () => {
  const classes = useClasses();
  return (
    <Box className={classes.header}>
      <Box className={classes.logo}>
        <Typography className={classNames(quicksandLight.className, classes.logoText)}>
          Hypercut
        </Typography>

        <Image
          src={metaBlack}
          alt='meta'
          style={{
            height: 30,
            width: 30,
            objectFit: 'contain',
          }}
        />
        <Typography className={classNames(quicksandBold.className, classes.logoText)}>
          edia
        </Typography>
      </Box>
    </Box>
  );
};

const useClasses = makeStyles({
  header: {
    position: 'fixed',
    backdropFilter: 'blur(5px)',
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: '100px',
    padding: '0 50px',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  logoText: {
    display: 'flex',
    fontSize: '24px',
  },
});

export default Header;
