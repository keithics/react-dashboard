import { ReactNode } from 'react';

export interface MainTableInterface {
  basePath: string;
  title: string;
  headers: string[];
  children: ReactNode;
  link?: string;
}
