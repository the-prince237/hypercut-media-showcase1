'use client';

import { ContactUs } from '@/containers';
import { Hero, Services, Works } from '@/containers/Home';
import styles from '@/styles';
import { Box } from '@mui/material';
import classNames from 'classnames';

export default function Home() {
  return (
    <Box className='flex flex-col'>
      <Hero />
      <Box
        className={classNames(
          'mt-[100vh] flex flex-col gap-[100px] overflow-x-hidden minLaptop:mt-[120vh] laptopView:mt-[150vh]',
        )}
      >
        <Works />
        <Box
          className={classNames(
            'relative flex flex-col gap-[100px] overflow-x-hidden',
            styles.pagePadder,
          )}
        >
          <Services />
          <ContactUs />
        </Box>
      </Box>
    </Box>
  );
}
