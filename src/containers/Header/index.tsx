'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Quicksand } from 'next/font/google';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

export const quicksandLight = Quicksand({ weight: '300', subsets: ['latin'] });
const quicksandBold = Quicksand({ weight: '700', subsets: ['latin'] });

const Header = () => {
  const classes = useClasses();
  return (
    <Box className={classes.header}>
      <Box className={classes.logo}>
        <Typography className={classNames(quicksandLight.className, classes.logoText)}>
          Hypercute
        </Typography>
        <Typography className={classNames(quicksandBold.className, classes.logoText)}>
          Media
        </Typography>
      </Box>
    </Box>
  );
};

const useClasses = makeStyles({
  header: {
    position: 'relative',
    backgroundColor: 'rgba(100, 100, 100, 0.1)',
    backdropFilter: 'blur(15px)',
    zIndex: '10',
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: '100px',
    padding: '0 100px',
    borderBottom: 'solid 1px #333',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoText: {
    display: 'flex',
    fontSize: '24px',
  },
});

export default Header;
