'use client';

import { Box } from '@mui/material';
import React from 'react';
import { CTA, Logo } from '@/components';
import { HeaderLink, MenuDot } from './components';

const Header = () => {
  return (
    <Box className='relative z-10 flex h-[150px] w-full items-center justify-between px-[90px]'>
      <Logo />
      <Box className='flex items-center'>
        <HeaderLink title='Services' href='#services' />
        <MenuDot />
        <HeaderLink title='About Us' href='#aboutus' />
        <MenuDot />
        <HeaderLink title='Features' href='#features' />
        <MenuDot />
        <HeaderLink title='Our Works' href='#works' />
      </Box>
      <CTA small />
    </Box>
  );
};

export default Header;
