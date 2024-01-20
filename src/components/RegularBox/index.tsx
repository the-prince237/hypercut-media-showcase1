import { Box } from '@mui/material';
import classNames from 'classnames';
import { omit } from 'lodash';
import React from 'react';
import { TextFontSmall, TitleFontSmall } from '..';
import { RegularBoxProps } from '../types';

const RegularBox = (props: RegularBoxProps) => {
  const boxProps = omit(props, ['glazed', 'row']);
  const { number, title, text } = props;
  return (
    <Box
      className={classNames('bg-boxBlue flex items-start justify-start rounded-[20px] p-[25px]', {
        'gap-[20px] backdrop-blur-md': props.glazed,
        'flex-col gap-[15xp]': !props.row,
      })}
      {...boxProps}
    >
      <Box className='flex h-[46px] w-[45px] items-center justify-center rounded-full border-2 border-solid border-white text-[16px]'>
        {number}
      </Box>
      <Box className='flex w-[350px] flex-col items-start'>
        <TitleFontSmall title={title} />
        <TextFontSmall title={text} smallLeading />
      </Box>
    </Box>
  );
};

export default RegularBox;