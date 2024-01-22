import { Box, Typography } from '@mui/material';
import React from 'react';
import { CTAShapes } from './components';
import Link from 'next/link';
import Image from 'next/image';
import { contactOptionProps } from './types';
import { contactOptions } from './data';
import { phoneRIcon } from '../../../public/icons';

const ContactBtn = ({ href, icon, name }: contactOptionProps) => (
  <Link
    href={href}
    className='rounded-full bg-gradient-to-tl from-transparent to-[#5a5f92] p-[3px] opacity-[0.8] hover:opacity-[1]'
    target='_blank'
  >
    <Image src={icon} alt={name} className='h-[60px] w-[60px]' />
  </Link>
);

const CTABanner = () => {
  return (
    <Box className='w-full rounded-[40px] bg-gradient-to-tl from-transparent to-[#5a5f92] p-[7px] drop-shadow-2xl'>
      <Box className='relative h-[465.162px] w-full overflow-hidden rounded-[38px] bg-boxBlue px-[64px]'>
        <CTAShapes />
        <Box className='flex h-full w-full flex-col justify-center gap-[25px] py-[50px]'>
          <Typography className='w-[600px] text-[25px] font-[700] text-white tablet:text-[30px] minLaptop:text-[34px] minLaptop:font-[700] minLaptop:leading-[46px]'>
            Nous vous répondons après <br />
            <span className='font-[900] text-orange00'>2 heures ou moins</span>
          </Typography>
          <Box className='flex gap-[15px]'>
            {contactOptions.map((option, index) => (
              <ContactBtn key={index} {...option} />
            ))}
          </Box>
          <Box className='flex w-fit items-center gap-[25px] rounded-full border-[7px] border-solid border-[#5a5f92] bg-white p-[5px]  pr-4'>
            <Box className='rounded-full bg-orange00 p-[15px] drop-shadow-phoneIcon'>
              <Image className='h-[30px] w-[30px]' src={phoneRIcon} alt='phone' />
            </Box>
            <Typography className='text-[18px] font-bold text-[#5a5f92]'>
              +237 655 061 836
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CTABanner;
