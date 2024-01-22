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
        'flex items-start justify-start gap-[5px] rounded-[20px] p-[10px] tablet:gap-[10px] laptopView:gap-[20px] laptopView:p-[25px]',
        {
          'bg-boxBlueTrans backdrop-blur-md': props.glazed,
          'bg-boxBlue': !props.glazed,
          'flex-col': !props.row,
        },
      )}
      {...boxProps}
    >
      <Box className='flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-solid border-white text-[12px] minLaptop:h-[32px] minLaptop:w-[32px] minLaptop:text-[14px] laptopView:h-[46px] laptopView:w-[45px] laptopView:text-[16px]'>
        {number}
      </Box>
      <Box className='flex max-w-[350px] flex-col items-start'>
        <TitleFontSmall title={title} />
        <TextFontSmall title={text} smallLeading />
      </Box>
    </Box>
  );
};

export default RegularBox;
