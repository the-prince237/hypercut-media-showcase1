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
        'tablet:gap-[10px] laptopView:gap-[20px] laptopView:p-[25px] flex min-w-max items-start justify-start gap-[5px] rounded-[20px] p-[10px]',
        {
          'bg-boxBlueTrans backdrop-blur-md': props.glazed,
          'bg-boxBlue': !props.glazed,
          'flex-col': !props.row,
        },
      )}
      {...boxProps}
    >
      <Box className='minLaptop:h-[32px] minLaptop:w-[32px] minLaptop:text-[14px] laptopView:h-[46px] laptopView:w-[45px] laptopView:text-[16px] flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-solid border-white text-[12px]'>
        {number}
      </Box>
      <Box className='minLaptop:w-[320px] flex w-[200px] flex-1  flex-col items-start'>
        <TitleFontSmall title={title} />
        <TextFontSmall title={text} smallLeading />
      </Box>
    </Box>
  );
};

export default RegularBox;
