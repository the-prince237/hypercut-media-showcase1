import { RegularBox, TextFontMedium, TextFontSmall, TitleFontMedium } from '@/components';
import { RegularBoxProps } from '@/components/types';
import { Box } from '@mui/material';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Services = () => {
  return (
    <Box
      id='services'
      className='relative flex w-full flex-col justify-between gap-[25px] laptopView:flex-row'
    >
      <Box className='absolute left-[-315px] h-[80px] w-[740px] rotate-[161deg] bg-[rgba(255,255,255,0.50)] blur-[250px]' />
      <Box className='absolute right-[-148px] top-[49px] h-[80px] w-[740px] bg-[#C76A0B] blur-[250px]' />
      <Box className='absolute bottom-[-101px] left-[-330.85px] h-[80px] w-[740px] rotate-[-161deg] bg-[#C76A0B] blur-[250px]' />
      <Box className='relative flex flex-col gap-[30px] minLaptop:max-w-[70%] laptopView:max-w-[380px]'>
        <TitleFontMedium title='Services' />
        <TextFontSmall title='With our comprehensive suite of social media marketing features, we empower your business to thrive in the online realm, driving growth, increasing brand visibility, and engaging your target audience effectively.' />
        <TextFontMedium title='Empowering Your Business with Cutting-Edge Social Media Marketing Capabilities' />
      </Box>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          0: 1,
          620: 2,
        }}
        className='relative w-full'
      >
        <Masonry columnsCount={2} gutter='20px' className='w-full items-end'>
          <ServicesBox
            title='Engaging Content Creation'
            number={1}
            text='Captivate your audience with compelling and informative content tailored to your brand.'
          />
          <ServicesBox
            title='Data-driven Insights'
            number={2}
            text='Gain valuable insights into your social media marketing efforts through comprehensive analytics and reporting.'
          />
          <ServicesBox
            title='Paid And Organic Meta and Tiktok Advertising'
            number={3}
            text='Boost your online visibility and attract organic and boosted traffic through effective social media advertising.'
          />
          <ServicesBox
            title='Social Media Mastery'
            number={4}
            text="Amplify your brand's presence and engage your audience across various social media platforms."
          />
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

const ServicesBox = (props: RegularBoxProps) => (
  <Box className='hover:drop-shadow-serviceBox'>
    <RegularBox {...props} row />
  </Box>
);

export default Services;
