'use client';

import { ContactUs, Footer, Header } from '@/containers';
import { Hero, Services, Works } from '@/containers/Home';
import styles from '@/styles';
import { Box } from '@mui/material';
import classNames from 'classnames';
import './globals.css';

export default function Home() {
  return (
    <Box className='flex flex-col overflow-x-hidden'>
      <Header />
      <Hero />
      <Works />
      <Box className={classNames('w-full', styles.pagePadder)}>
        <Services />
        <ContactUs />
      </Box>
      <Footer />
    </Box>
  );
}
