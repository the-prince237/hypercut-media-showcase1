import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import hypercut from '../../public/hypercut.png';

// const Left = () => (
//   <Box className='relative flex h-[300px] w-[130px] items-center justify-center overflow-hidden bg-white'>
//     <Box className='absolute left-[-26.5px] top-[-26.5px] h-[53px] w-[53px] rotate-45 bg-black' />
//     <Box className='absolute right-[-20px] top-[-20px] h-[40px] w-[40px] rotate-45 bg-black' />
//     <Box className='absolute bottom-[-106px] left-[-106px] h-[212px] w-[212px] rotate-45 bg-black' />
//     <Box className='absolute left-[45px] top-[45px] h-[245px] w-1/2 bg-black p-[20px]'>
//       <Box className='absolute right-[-12px] top-[-12px] h-[24px] w-[24px] rotate-45 bg-white' />
//       <Box className='relative h-full w-full bg-white'>
//         <Box className='absolute bottom-[-31px] left-[-31px] h-[62px] w-[62px] rotate-45 bg-black' />
//       </Box>
//     </Box>
//     <Box className='absolute bottom-[100px] right-0 h-[65px] w-[40px] bg-black py-[20px]'>
//       <Box className='h-full w-full bg-white' />
//     </Box>
//   </Box>
// );

// const Right = () => (
//   <Box className='relative flex h-[300px] w-[130px] items-center justify-center overflow-hidden bg-[#bbb]'>
//     <Box className='absolute right-[-26.5px] top-[-26.5px] h-[53px] w-[53px] rotate-45 bg-black' />
//     <Box className='absolute left-[-20px] top-[-20px] h-[40px] w-[40px] rotate-45 bg-black' />

//     <Box className='absolute bottom-[-106px] right-[-106px] h-[212px] w-[212px] rotate-45 bg-black' />
//     <Box className='absolute right-[45px] top-[45px] h-[245px] w-1/2 bg-black p-[20px]'>
//       <Box className='absolute left-[-12px] top-[-12px] h-[24px] w-[24px] rotate-45 bg-[#bbb]' />
//       <Box className='relative h-full w-full bg-[#bbb]'>
//         <Box className='absolute bottom-[-31px] right-[-31px] h-[62px] w-[62px] rotate-45 bg-black' />
//       </Box>
//     </Box>
//     <Box className='absolute bottom-[100px] left-0 h-[65px] w-[40px] bg-black py-[20px]'>
//       <Box className='h-full w-full bg-[#bbb]' />
//     </Box>
//   </Box>
// );

const Logo = () => {
  return (
    <Box className='relative flex justify-center'>
      <Image src={hypercut} width={45} alt='hypercut media' />
    </Box>
  );
};

export default Logo;
