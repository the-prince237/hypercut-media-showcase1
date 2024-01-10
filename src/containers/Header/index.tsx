'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Quicksand } from 'next/font/google';
import classNames from 'classnames';
import metaBlack from '../../../public/icons/meta_black.png';
import Image from 'next/image';
import { RegularLink } from '@/components';

export const quicksandLight = Quicksand({ weight: '300', subsets: ['latin'] });
const quicksandBold = Quicksand({ weight: '700', subsets: ['latin'] });

const Header = () => {
  return (
    <Box className='fixed z-[10] flex h-[100px] w-screen items-center justify-between px-[50px] py-0 backdrop-blur-[5px]'>
      <Box className='flex cursor-pointer items-center hover:scale-[1.1]'>
        <Typography className={classNames(quicksandLight.className, 'flex text-[24px]')}>
          Hypercut
        </Typography>

        <Image
          src={metaBlack}
          alt='meta'
          style={{
            height: 30,
            width: 30,
            objectFit: 'contain',
          }}
        />
        <Typography className={classNames(quicksandBold.className, 'flex text-[24px]')}>
          edia
        </Typography>
      </Box>

      <Box className='relative flex flex-row gap-[15px]'>
        <RegularLink href='/work'>Notre Travail</RegularLink>
        <RegularLink href='/data'>Nos Services</RegularLink>
        <RegularLink href='/pricing'>Pricing</RegularLink>
        <RegularLink href='/contact'>Contact Us</RegularLink>
      </Box>
    </Box>
  );
};

export default Header;
