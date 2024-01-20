import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

export const MenuFont = (props: TypographyProps) => (
  <Typography className='text-[16px] font-[400] text-white' {...props}>
    {props.title}
  </Typography>
);

export const TextFontSmall = (props: TypographyProps & { smallLeading?: boolean }) => (
  <Typography
    className={classNames('text-[16px] font-[400] leading-[36px] text-purpleLight', {
      'leading-[28px]': props.smallLeading,
    })}
  >
    {props.title}
  </Typography>
);

export const TextFontMedium = (props: TypographyProps) => (
  <Typography className='text-[24px] font-[400] leading-[45px] text-white'>
    {props.title}
  </Typography>
);

export const TitleFontSmall = (props: TypographyProps) => (
  <Typography className='text-[20px] font-[400] leading-[36px] text-white'>
    {props.title}
  </Typography>
);

export const TitleFontMedium = (props: TypographyProps) => (
  <Typography className='text-[40px] font-[400] leading-[70px] text-white'>
    {props.title}
  </Typography>
);

export const TitleFontLarge = (props: TypographyProps) => (
  <Typography className='max-w-[1200px] text-center text-[48px] leading-[70px] text-[400] text-white'>
    {props.title}
  </Typography>
);
