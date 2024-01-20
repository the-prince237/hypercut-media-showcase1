import { RegularBox } from '@/components';
import { RegularBoxProps } from '@/components/types';

export const HeroBox = (props: Omit<RegularBoxProps, 'glazed' | 'row'>) => (
  <RegularBox position='absolute' glazed row {...props} />
);
