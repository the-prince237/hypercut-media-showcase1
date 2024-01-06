import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const BluredRing = () => {
  const classes = useClasses();
  return <Box className={classes.gradientCircle} />;
};

const useClasses = makeStyles({
  gradientCircle: {
    background:
      'radial-gradient(circle, rgba(64,140,134,1) 0%, rgba(15,156,143,1) 52%, rgba(95,207,198,1) 100%);',
    width: '300px',
    height: '300px',
    position: 'absolute',
    borderRadius: '150px',
    left: '-150px',
    top: '50px',
  },
});

export default BluredRing;
