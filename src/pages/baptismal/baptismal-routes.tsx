import Baptismal from 'pages/baptismal/baptismal';
import BaptismalForm from 'pages/baptismal/baptismal-form';
import { getBaptismal, getBaptisms } from 'pages/baptismal/baptismal.thunks';
import React from 'react';
import { RouteObject } from 'react-router-dom';

const common = {
  loader: getBaptismal,
  handle: {
    basePath: '/baptismal',
  },
};
export const baptismalRoutes: RouteObject[] = [
  {
    path: 'baptismal/:page?',
    id: 'baptismal',
    loader: getBaptisms,
    element: <Baptismal />,
    handle: {
      basePath: '/baptismal',
    },
  },
  {
    path: 'baptismal/edit/:id',
    element: <BaptismalForm />,
    ...common,
  },
  {
    path: 'baptismal/new', // react router dom v6 doesnt support regex paths
    element: <BaptismalForm />,
    ...common,
  },
];
