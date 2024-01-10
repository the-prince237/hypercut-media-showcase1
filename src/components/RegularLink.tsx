import { Box } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const RegularLink = (props: LinkProps) => {
  return (
    <Box className='relative flex'>
      <Box className='absolute top-[10px] h-[10px] w-[10px] rounded-full bg-red-700' />
      <Link className='font-bold text-black' {...props} />
    </Box>
  );
};

export default RegularLink;
