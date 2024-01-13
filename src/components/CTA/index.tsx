import { Button } from '@mui/material';
import React from 'react';

const CTA = ({ small = false }: { small: boolean }) => {
  return (
    <Button
      className='bg-orange00 rounded-[40px] text-center font-[400] text-white'
      style={{
        width: small ? 166 : 285,
        height: small ? 46 : 64,
        fontSize: small ? 16 : 24,
      }}
      title='Get in touch'
    >
      Get In Touch
    </Button>
  );
};

export default CTA;
