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

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setBg(true) : setBg(false);
    });
  });

  return (
    <Box
      className={classNames(
        'largeTablet:relative z-10 flex h-[80px] w-full items-center justify-between px-[45px] tablet:h-[100px] tablet:px-[64px] minLaptop:h-[150px] laptopView:px-[90px]',
        { 'largeTablet:relative fixed bg-boxBlueTrans backdrop-blur-lg': bg },
      )}
    >
      <Logo />
      <Box className='largeTablet:block hidden'>
        <MenuNavigator />
      </Box>
      {menuOpened && (
        <Box className='animate-wobble largeTablet:hidden fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-boxBlue'>
          <MenuNavigator close={() => setMenuOpened(false)} col />
        </Box>
      )}
      <Image
        src={menuIcon}
        className={classNames('largeTablet:hidden relative', {
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
