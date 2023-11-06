import { LoaderFunctionArgs } from '@remix-run/router/utils';
import CrudForm from 'common/crud/crud.form';
import { CrudContextInterface } from 'common/crud/crud.interface';
import { crudThunks } from 'common/crud/crud.thunks';
import Table from 'common/table/table';
import { deathDefault } from 'pages/death/death.default';
import deathFields from 'pages/death/death.fields';
import { DeathInterface } from 'pages/death/death.interface';
import DeathItem from 'pages/death/death.item';
import { deathSchema } from 'pages/death/death.schema';
import React, { createContext } from 'react';
import { RouteObject } from 'react-router-dom';

const name = '/death'; // front-end path
const url = '/certificates/death'; // backend path
const headers = ['Name', 'Burial Date', 'Created', 'Last Updated', 'Print', 'Delete'];
export const DeathContext = createContext<CrudContextInterface<DeathInterface>>({ url });


export const deathRoutes = (): RouteObject[] => {
  const { get, page, add, update, remove } = crudThunks<DeathInterface>({ url, defaultValue: deathDefault });

  const common = {
    loader: async (params: LoaderFunctionArgs) => get(params),
    handle: {
      basePath: name,
    },
  };

  const Form = <CrudForm redirectUrl={name} add={add} update={update} fields={deathFields} schema={deathSchema} />;

  return [
    {
      path: `${name}/:page?`,
      id: name,
      loader: (params: LoaderFunctionArgs) => page(params),
      element: (
        <DeathContext.Provider value={{ url, remove }}>
          <Table path={name} title="Death Certificates" headers={headers}>
            <DeathItem />
          </Table>
        </DeathContext.Provider>
      ),
      handle: {
        basePath: name,
      },
    },
    {
      path: `${name}/edit/:id`,
      element: Form,
      ...common,
    },
    {
      path: `${name}/new`, // react router dom v6 doesnt support regex paths
      element: Form,
      ...common,
    },
  ];
};
