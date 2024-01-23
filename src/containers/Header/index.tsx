'use client';

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Logo } from '@/components';
import { MenuNavigator } from '../../components/MenuNavigator';
import Image from 'next/image';
import { menuIcon } from '../../../public/icons';
import classNames from 'classnames';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // header bg state
  const [bg, setBg] = useState(false);
  //nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 800 ? setBg(true) : setBg(false);
    });
  });

  return (
    <Box
      className={classNames(
        'z-10 flex h-[80px] w-full items-center justify-between px-[45px] tablet:h-[100px] tablet:px-[64px] largeTablet:relative minLaptop:h-[150px] laptopView:px-[90px]',
        { 'fixed bg-boxBlueTrans backdrop-blur-lg largeTablet:relative': bg },
      )}
    >
      <Logo />
      <Box className='hidden largeTablet:block'>
        <MenuNavigator />
      </Box>
      {menuOpened && (
        <Box className='animate-wobble fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-boxBlue largeTablet:hidden'>
          <MenuNavigator col />
        </Box>
      )}
      <Image
        src={menuIcon}
        className={classNames('relative largeTablet:hidden', {
          'rotate-0': menuOpened,
          'rotate-[-180deg]': !menuOpened,
        })}
        onClick={() => setMenuOpened((mo) => !mo)}
        alt='menu'
      />
    </Box>
  );
};

export default Header;
