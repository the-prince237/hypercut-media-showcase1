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
    <Box className='minLaptop:p-[7px] w-full rounded-[40px] bg-gradient-to-tl from-transparent to-[#5a5f92] p-[4px] drop-shadow-2xl'>
      <Box className='minLaptop:px-[35px] laptopView:px-[64px] relative w-full overflow-hidden rounded-[38px] bg-boxBlue px-[25px]'>
        <CTAShapes />
        <Box className='minLaptop:gap-[25px] minLaptop:py-[35px] laptopView:py-[50px] flex h-full w-full flex-col justify-center gap-[15px] py-[25px]'>
          <Typography className='tablet:text-[30px] minLaptop:text-[34px] minLaptop:font-[700] minLaptop:leading-[46px] w-[600px] max-w-full text-wrap text-[25px] font-[700] text-white'>
            Nous vous répondons après <br />
            <span className='font-[900] text-orange00'>2 heures ou moins</span>
          </Typography>
          <Box className='flex flex-wrap gap-[15px]'>
            {contactOptions.map((option, index) => (
              <ContactBtn key={index} {...option} />
            ))}
          </Box>
          <Box className='minLaptop:pr-4 minLaptop:gap-[25px] flex w-fit items-center gap-[10px] rounded-full border-[7px] border-solid border-[#5a5f92] bg-white p-[5px] pr-2'>
            <Box className='rounded-full bg-orange00 p-[15px] drop-shadow-phoneIcon'>
              <Image
                className='minLaptop:h-[30px] minLaptop:w-[30px] h-[20px] w-[20px]'
                src={phoneRIcon}
                alt='phone'
              />
            </Box>
            <Typography className='tablet:text-[16px] minLaptop:text-[18px] text-[14px] font-bold text-[#5a5f92]'>
              +237 655 061 836
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CTABanner;
