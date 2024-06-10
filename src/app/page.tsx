'use client';

import { ContactUs, Footer, Header } from '@/containers';
import { Hero, Services, Works } from '@/containers/Home';
import styles from '@/styles';
import { Box } from '@mui/material';
import classNames from 'classnames';
import './globals.css';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

export default function Home() {
  useEffect(() => {
    hotjar.initialize({ id: 5017930, sv: 6 });
  }, []);

  return (
    <Box className='flex flex-col gap-[150px] overflow-x-hidden'>
      <Header />
      {/* Lamp Effect and Floating navbar */}
      <Hero />
      {/* Hero Paralax */}
      <Works />
      {/* Hero paralax */}
      {/* <Slogan />
        Text Reveal Card
      */}
      <Box className={classNames('flex w-full flex-col gap-[150px]', styles.pagePadder)}>
        <Services />
        {/* Meteors (on hover) */}
        {/* <Team />
          Animated tooltip
         */}
        {/* 
            <Testimonies />
            Infinite Moving Cards and card Hover Effect
         */}
        <ContactUs />
        {/* Container Scroll Animation */}
      </Box>
      <Footer />
      {/* Background boxes on a side of it */}
    </Box>
  );
}
