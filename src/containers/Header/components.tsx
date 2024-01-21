import { MenuFont } from '@/components';
import { Box } from '@mui/system';
import Link, { LinkProps } from 'next/link';

export const MenuDot = () => (
  <Box className='flex h-[16px] w-[24px] items-center justify-center'>
    <Box className='h-[5px] w-[5px] rounded-full bg-white' />
  </Box>
);

export const HeaderLink = (props: LinkProps & { title: string }) => (
  <Link {...props}>
    <MenuFont title={props.title} />
  </Link>
);

export const MenuNavigator = () => (
  <Box className='flex items-center'>
    <HeaderLink title='Services' href='#services' />
    <MenuDot />
    <HeaderLink title='About Us' href='#aboutus' />
    <MenuDot />
    <HeaderLink title='Features' href='#features' />
    <MenuDot />
    <HeaderLink title='Our Works' href='#works' />
  </Box>
);
