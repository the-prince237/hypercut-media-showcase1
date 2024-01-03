'use client';

import { Hero, Plans, Services, Works } from '@/containers/Home';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default function Home() {
  const classes = useClasses();
  return (
    <Box className={classes.home}>
      <Hero />
      <Box className={classes.body}>
        <Works />
        <Services />
        <Plans />
      </Box>
    </Box>
  );
}

const useClasses = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    marginTop: '120vh',
  },
});
