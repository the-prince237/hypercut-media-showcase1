import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

export const MenuFont = (props: TypographyProps) => (
  <Typography className='text-[14px] font-[800] text-white tablet:text-[16px]' {...props}>
    {props.title}
  </Typography>
);

export const TextFontSmall = (props: TypographyProps & { smallLeading?: boolean }) => (
  <Typography
    className={classNames(
      'text-[12px] font-[500] text-purpleLight tablet:text-[14px] minLaptop:text-[16px] minLaptop:leading-[36px]',
      {
        'leading-[28px]': props.smallLeading,
      },
    )}
  >
    {props.title}
  </Typography>
);

export const TextFontMedium = (props: TypographyProps) => (
  <Typography className='text-[18px] font-[600] text-white tablet:text-[21px] minLaptop:text-[24px] minLaptop:leading-[45px]'>
    {props.title}
  </Typography>
);

export const TitleFontSmall = (props: TypographyProps) => (
  <Typography className='text-[15px] font-[700] text-white tablet:text-[18.5px] minLaptop:text-[20px] minLaptop:leading-[36px]'>
    {props.title}
  </Typography>
);

export const TitleFontMedium = (props: TypographyProps) => (
  <Typography className='text-[24px] font-[700] text-white tablet:text-[28px] minLaptop:text-[34px] minLaptop:leading-[70px] laptopView:text-[40px]'>
    {props.title}
  </Typography>
);

export const TitleFontLarge = (props: TypographyProps) => (
  <Typography className='max-w-[1200px] text-center text-[30px] font-[700] text-white tablet:text-[36px] minLaptop:text-[42px] minLaptop:leading-[70px] laptopView:text-[48px]'>
    {props.title}
  </Typography>
);
