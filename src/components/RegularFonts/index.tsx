import { Typography, TypographyProps } from '@mui/material';

export const MenuFont = (props: TypographyProps) => (
  <Typography className='text-[16px] font-[400] text-white' {...props}>
    {props.title}
  </Typography>
);
