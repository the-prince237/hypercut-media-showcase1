import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

export const MenuFont = (props: TypographyProps) => (
  <Typography className='text-[16px] font-[400] text-white' {...props}>
    {props.title}
  </Typography>
);

export const TextFontSmall = (props: TypographyProps & { smallLeading?: boolean }) => (
  <Typography
    className={classNames('text-purpleLight text-[16px] font-[400] leading-[36px]', {
      'leading-[28px]': props.smallLeading,
    })}
  >
    {props.title}
  </Typography>
);

export const TitleFontSmall = (props: TypographyProps) => (
  <Typography className='text-[20px] font-[400] leading-[36px] text-white'>
    {props.title}
  </Typography>
);
