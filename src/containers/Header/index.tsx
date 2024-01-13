'use client';

import { Box } from '@mui/material';
import React from 'react';
import { Logo } from '@/components';

const Header = () => {
  return (
    <Box className='fixed z-[10] flex h-screen w-screen items-center justify-between bg-black p-[50px]'>
      <Logo />
    </Box>
  );
};

export default Header;
