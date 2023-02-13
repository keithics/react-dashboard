import {LoaderFunctionArgs} from '@remix-run/router/utils';
import Baptismal from 'pages/baptismal/baptismal';
import BaptismalForm from 'pages/baptismal/baptismal-form';
import {BaptismalConfirmation} from 'pages/baptismal/baptismal.interface';
import {getBaptismal, getBaptisms} from 'pages/baptismal/baptismal.thunks';
import React from 'react';
import {RouteObject} from 'react-router-dom';

export const baptismalRoutes = (type:BaptismalConfirmation): RouteObject[] => {
  const common = {
    loader: async (params:LoaderFunctionArgs) => getBaptismal(type, params),
    handle: {
      basePath: `/${type}`,
    },
  };

  return [
    {
      path: `${type}/:page?`,
      id: type,
      loader: (params:LoaderFunctionArgs) => getBaptisms(type, params),
      element: <Baptismal />,
      handle: {
        basePath: `/${type}`,
      },
    },
    {
      path: `${type}/edit/:id`,
      element: <BaptismalForm />,
      ...common,
    },
    {
      path: `${type}/new`, // react router dom v6 doesnt support regex paths
      element: <BaptismalForm />,
      ...common,
    },
  ];
};
