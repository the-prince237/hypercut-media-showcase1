'use client';

import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Logo } from '@/components';
import { MenuNavigator } from '../../components/MenuNavigator';
import Image from 'next/image';
import { menuIcon } from '../../../public/icons';
import classNames from 'classnames';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <Box className='largeTablet:relative fixed z-10 flex h-[70px] w-full items-center justify-between px-[45px] tablet:h-[100px] tablet:px-[64px] minLaptop:h-[150px] laptopView:px-[90px]'>
      <Logo />
      <Box className='largeTablet:block hidden'>
        <MenuNavigator />
      </Box>
      {menuOpened && (
        <Box className='largeTablet:hidden animate-wobble fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-boxBlueTrans backdrop-blur-3xl'>
          <MenuNavigator col />
        </Box>
      )}
      <Image
        src={menuIcon}
        className={classNames('largeTablet:hidden relative rotate-[-180deg]', {
          'rotate-0': menuOpened,
        })}
        onClick={() => setMenuOpened((mo) => !mo)}
        alt='menu'
      />
    </Box>
  );
};

export default Header;
