import React from 'react';

export interface TableInterface {
  headers: string[];
  path: string;
  title: string;
  children: React.ReactElement;
}
