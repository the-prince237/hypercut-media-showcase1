'use client';

import { Logo, TextFontSmall } from '@/components';
import { Box } from '@mui/material';
import React from 'react';
import { MenuNavigator } from '../../components/MenuNavigator';
import styles from '@/styles';
import classNames from 'classnames';

const Footer = () => {
  return (
    <Box
      className={classNames(
        'minlapTop:justify-center flex w-full items-center justify-between py-[64px]',
        styles.pagePadder,
      )}
    >
      <TextFontSmall title='@ Copyright HYPERCUT MEDIA - All Right Reserved.' />
      <Box className='m-0 minLaptop:m-auto'>
        <Logo />
      </Box>
      <Box className='hidden minLaptop:block'>
        <MenuNavigator footer />
      </Box>
    </Box>
  );
};

export default Footer;
