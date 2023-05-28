import {LoaderFunctionArgs} from '@remix-run/router/utils';
import {crudThunks} from 'common/crud/crud.thunks';
import Table from 'common/table/table';
import {useBasePath} from 'lib/route-handle';
import BaptismalForm from 'pages/baptismal/baptismal.form';
import {deathDefault} from 'pages/death/death.default';
import {DeathInterface} from 'pages/death/death.interface';
import React from 'react';
import {RouteObject} from 'react-router-dom';

export const deathRoutes = (): RouteObject[] => {
  const {get,add,remove,update,page} = crudThunks<DeathInterface>({url:'certificates/death',defaultValue:deathDefault})
  const headers = ["firstName","LastName"]
  const common = {
    loader: async (params: LoaderFunctionArgs) => get(params),
    handle: {
      basePath: `/death`,
    },
  };

  return [
    {
      path: `death/:page?`,
      id: 'death',
      loader: (params: LoaderFunctionArgs) => page(params),
      element: <Table path="death" title="Death Certifications" headers={headers} />,
      handle: {
        basePath: `/death`,
      },
    },
    {
      path: `death/edit/:id`,
      element: <BaptismalForm />,
    //  ...common,
    },
    {
      path: `death/new`, // react router dom v6 doesnt support regex paths
      element: <BaptismalForm />,
      ...common,
    },
  ];
};
