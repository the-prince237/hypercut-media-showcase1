'use client';

import { Logo, TextFontSmall } from '@/components';
import { Box } from '@mui/material';
import React from 'react';
import { MenuNavigator } from '../Header/components';

const Footer = () => {
  return (
    <Box className='flex w-full items-center justify-center gap-[100px] px-[134px] py-[64px]'>
      <TextFontSmall title='@ Copyright wellrafi.com All Right Reserved.' />
      <Logo />
      <MenuNavigator />
    </Box>
  );
};

export default Footer;
