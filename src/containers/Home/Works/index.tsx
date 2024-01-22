import React from 'react';
import { TitleFontLarge } from '@/components';
import { Box } from '@mui/material';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { itemData } from './data';

const Works = () => {
  return (
    <Box className='relative left-0 flex w-full flex-col items-center gap-[80px]'>
      <Box className='max-w-[70%]'>
        <TitleFontLarge title='Exploring Our Extensive Portfolio of Successful Campaigns and Measurable Results' />
      </Box>
      <Box className='absolute right-[-150px] top-[500px] h-[710.399px] w-[1001.792px] rotate-[-33.6deg] rounded-[249.471px] bg-[rgba(199,106,11,0.20)]  blur-[250px]' />

      <Box className='absolute left-[-100px] top-[1980px] h-[80px] w-[944px] rotate-[-130.218deg] bg-blue-500 blur-[250px]' />
      <Box className='absolute right-[40%] top-[2080px] h-[300px] w-[944px] rotate-[-130.218deg] bg-yellow-500 blur-[250px]' />
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          1024: 4,
          760: 3,
          500: 2,
        }}
        className='w-[115%]'
      >
        <Masonry columnsCount={4} className='items-end'>
          {itemData.map((item, index) => (
            <Box
              className='relative bottom-0 m-[5px] cursor-pointer overflow-hidden bg-gradient-to-br from-transparent to-[#5a5f92] p-[7px] hover:bottom-[10px]'
              key={index}
            >
              <Image
                className='grayscale-[85%] hover:grayscale-0'
                width={500}
                src={item}
                alt='galery item'
              />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Box className='absolute bottom-0 left-0 h-[300px] w-[200%] bg-gradient-to-t from-bgBlue to-transparent' />
    </Box>
  );
};

export default Works;
