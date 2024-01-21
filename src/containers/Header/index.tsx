'use client';

import { Box } from '@mui/material';
import React from 'react';
import { CTA, Logo } from '@/components';
import { MenuNavigator } from './components';

const Header = () => {
  return (
    <Box className='relative z-10 flex h-[150px] w-full items-center justify-between px-[90px]'>
      <Logo />
      <MenuNavigator />
      <CTA small />
    </Box>
  );
};

export default Header;
