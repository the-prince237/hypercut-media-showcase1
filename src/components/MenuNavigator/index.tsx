import { MenuFont, TextFontSmall } from '@/components';
import { Box } from '@mui/system';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

export const MenuDot = () => (
  <Box className='flex h-[16px] w-[24px] items-center justify-center'>
    <Box className='h-[5px] w-[5px] rounded-full bg-white' />
  </Box>
);

export const MenuLink = (props: LinkProps & { title: string; footer?: boolean }) => (
  <Link {...props}>
    {props.footer ? <TextFontSmall title={props.title} /> : <MenuFont title={props.title} />}
  </Link>
);

export const MenuNavigator = ({
  footer,
  col,
  close,
}: {
  footer?: boolean;
  col?: boolean;
  close?: any;
}) => (
  <Box className={classNames('flex items-center gap-[15px]', { 'flex-col': col })}>
    <MenuLink onClick={close} footer={footer} title='Services' href='#services' />
    <MenuDot />
    <MenuLink onClick={close} footer={footer} title='About Us' href='#aboutus' />
    <MenuDot />
    <MenuLink onClick={close} footer={footer} title='Features' href='#features' />
    <MenuDot />
    <MenuLink onClick={close} footer={footer} title='Our Works' href='#works' />
  </Box>
);
