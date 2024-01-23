import { RegularBox } from '@/components';
import { RegularBoxProps } from '@/components/types';

export const HeroBox = (props: Omit<RegularBoxProps, 'glazed' | 'row'>) => (
  <RegularBox glazed row {...props} />
);
