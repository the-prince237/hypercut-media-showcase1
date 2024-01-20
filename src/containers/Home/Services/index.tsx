import { RegularBox, TextFontMedium, TextFontSmall, TitleFontMedium } from '@/components';
import { RegularBoxProps } from '@/components/types';
import { Box } from '@mui/material';
import React from 'react';
import Masonry from 'react-responsive-masonry';

const Services = () => {
  return (
    <Box className='relative flex w-full justify-between gap-[25px]'>
      <Box className='absolute left-[-150px] h-[80px] w-[740px] rotate-[161deg] bg-[#C76A0B] blur-[150px]' />
      <Box className='flex max-w-[391.346px] flex-col gap-[30px]'>
        <TitleFontMedium title='Services' />
        <TextFontSmall title='With our comprehensive suite of digital marketing features, we empower your business to thrive in the online realm, driving growth, increasing brand visibility, and engaging your target audience effectively.' />
        <TextFontMedium title='Empowering Your Business with Cutting-Edge Digital Marketing Capabilities' />
      </Box>
      <Masonry columnsCount={2} gutter='40px'>
        <ServicesBox
          title='Engaging Content Creation'
          number={1}
          text='Captivate your audience with compelling and informative content tailored to your brand.'
        />
        <ServicesBox
          title='Data-driven Insights'
          number={2}
          text='Gain valuable insights into your digital marketing efforts through comprehensive analytics and reporting.'
        />
        <ServicesBox
          title='Search Engine Dominance'
          number={3}
          text='Boost your online visibility and attract organic traffic through effective search engine optimization (SEO) strategies.'
        />
        <ServicesBox
          title='Social Media Mastery'
          number={4}
          text="Amplify your brand's presence and engage your audience across various social media platforms."
        />
      </Masonry>
    </Box>
  );
};

const ServicesBox = (props: RegularBoxProps) => (
  <Box className='hover:drop-shadow-serviceBox'>
    <RegularBox {...props} row />
  </Box>
);

export default Services;
