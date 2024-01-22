import React from 'react';
import { TitleFontLarge } from '@/components';
import { Box } from '@mui/material';
import Masonry from 'react-responsive-masonry';
import Image from 'next/image';
import { w1, w2, w3, w4, w5, w6, w7 } from '../../../../public/images/works';

const Works = () => {
  return (
    <Box className='relative flex w-full flex-col items-center gap-[80px]'>
      <TitleFontLarge title='Exploring Our Extensive Portfolio of Successful Campaigns and Measurable Results' />
      <Masonry gutter='25px' columnsCount={4} className='items-end'>
        {itemData.map((item, index) => (
          <Box
            className='relative cursor-pointer overflow-hidden rounded-[30px] bg-gradient-to-br from-transparent to-[#5a5f92] p-[7px] hover:bottom-3 '
            key={index}
          >
            <Image
              className='grayscale hover:grayscale-0'
              width={500}
              src={item.img}
              alt={item.title}
            />
          </Box>
        ))}
      </Masonry>
      <Box className='absolute bottom-0 left-0 h-[300px] w-[200%] bg-gradient-to-t from-bgBlue to-transparent' />
    </Box>
  );
};

const itemData = [
  {
    img: w1,
    title: 'Fern',
  },
  {
    img: w2,
    title: 'Snacks',
  },
  {
    img: w3,
    title: 'Mushrooms',
  },
  {
    img: w4,
    title: 'Tower',
  },
  {
    img: w5,
    title: 'Sea star',
  },
  {
    img: w1,
    title: 'Fern',
  },
  {
    img: w2,
    title: 'Snacks',
  },
  {
    img: w3,
    title: 'Mushrooms',
  },
  {
    img: w4,
    title: 'Tower',
  },
  {
    img: w6,
    title: 'Honey',
  },
  {
    img: w7,
    title: 'Basketball',
  },
  {
    img: w4,
    title: 'Tower',
  },
  {
    img: w5,
    title: 'Sea star',
  },
  {
    img: w1,
    title: 'Fern',
  },
  {
    img: w2,
    title: 'Snacks',
  },
  {
    img: w6,
    title: 'Honey',
  },
  {
    img: w7,
    title: 'Basketball',
  },
];

export default Works;
