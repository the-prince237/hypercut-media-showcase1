import { BoxProps } from '@mui/material';

export type RegularBoxProps = Omit<BoxProps, 'children'> & {
  glazed?: boolean;
  row?: boolean;
  number: number;
  title: string;
  text?: string;
};
