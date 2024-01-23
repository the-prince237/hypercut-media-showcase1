'use client';

import { Box } from '@mui/material';
import React from 'react';
import { Logo } from '@/components';
import { MenuNavigator } from '../../components/MenuNavigator';

const Header = () => {
  return (
    <Box className='relative z-10 flex h-[150px] w-full items-center justify-between px-[45px] tablet:px-[64px] laptopView:px-[90px]'>
      <Logo />
      <MenuNavigator />
    </Box>
  );
};

export default Header;
