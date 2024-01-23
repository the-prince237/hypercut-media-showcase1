'use client';

import { Logo, TextFontSmall } from '@/components';
import { Box } from '@mui/material';
import React from 'react';
import { MenuNavigator } from '../Header/components';
import styles from '@/styles';
import classNames from 'classnames';

const Footer = () => {
  return (
    <Box
      className={classNames(
        'minLaptop:gap-[75px] laptopView:pgap-[100px] minlapTop:justify-center flex w-full items-center justify-between gap-[25px] py-[64px]',
        styles.pagePadder,
      )}
    >
      <TextFontSmall title='@ Copyright wellrafi.com All Right Reserved.' />
      <Logo />
      <Box className='minLaptop:block hidden'>
        <MenuNavigator />
      </Box>
    </Box>
  );
};

export default Footer;
