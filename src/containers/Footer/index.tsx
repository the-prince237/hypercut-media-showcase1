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
        'flex w-full items-center justify-center gap-[100px] overflow-x-hidden py-[64px]',
        styles.pagePadder,
      )}
    >
      <TextFontSmall title='@ Copyright wellrafi.com All Right Reserved.' />
      <Logo />
      <MenuNavigator />
    </Box>
  );
};

export default Footer;
