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
      className={classNames(
        'flex min-w-max items-start justify-start gap-[15px] rounded-[20px] p-[15px] laptopView:gap-[20px] laptopView:p-[25px]',
        {
          'bg-boxBlueTrans backdrop-blur-md': props.glazed,
          'bg-boxBlue': !props.glazed,
          'flex-col': !props.row,
        },
      )}
      {...boxProps}
    >
      <Box className='flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-solid border-white text-[14px]  laptopView:h-[45px] laptopView:w-[45px] laptopView:text-[16px]'>
        {number}
      </Box>
      <Box className='flex w-[200px] flex-1 flex-col  items-start minLaptop:w-[320px]'>
        <TitleFontSmall title={title} />
        <TextFontSmall title={text} smallLeading />
      </Box>
    </Box>
  );
};

export default RegularBox;
