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
    <Box className='w-full rounded-[40px] bg-gradient-to-tl from-transparent to-[#5a5f92] p-[4px] drop-shadow-2xl minLaptop:p-[7px]'>
      <Box className='relative w-full overflow-hidden rounded-[38px] bg-boxBlue px-[25px] minLaptop:px-[35px] laptopView:px-[64px]'>
        <CTAShapes />
        <Box className='flex h-full w-full flex-col justify-center gap-[15px] py-[25px] minLaptop:gap-[25px] minLaptop:py-[35px] laptopView:py-[50px]'>
          <Typography className='w-[600px] max-w-full text-wrap text-[25px] font-[500] text-white tablet:text-[30px] minLaptop:text-[34px] minLaptop:font-[700] minLaptop:leading-[46px]'>
            Nous vous répondons sous{' '}
            <span className='font-[400] text-orange00'>
              <span className='font-[700]'>02 heures</span> ou moins
            </span>
          </Typography>
          <Box className='flex flex-wrap gap-[15px]'>
            {contactOptions.map((option, index) => (
              <ContactBtn key={index} {...option} />
            ))}
          </Box>
          <Box className='flex w-fit items-center gap-[10px] rounded-full border-[7px] border-solid border-[#5a5f92] bg-white p-[5px] pr-2 minLaptop:gap-[25px] minLaptop:pr-4'>
            <Box className='rounded-full bg-orange00 p-[15px] drop-shadow-phoneIcon'>
              <Image
                className='h-[20px] w-[20px] minLaptop:h-[30px] minLaptop:w-[30px]'
                src={phoneRIcon}
                alt='phone'
              />
            </Box>
            <Typography className='text-[14px] font-bold text-[#5a5f92] tablet:text-[16px] minLaptop:text-[18px]'>
              +237 673 080 527
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CTABanner;
