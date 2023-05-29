import { LoaderFunctionArgs } from '@remix-run/router/utils';
import CrudForm from 'common/crud/crud.form';
import { CrudContextInterface } from 'common/crud/crud.interface';
import { crudThunks } from 'common/crud/crud.thunks';
import Table from 'common/table/table';
import { marriageDefault } from 'pages/marriage/marriage.default';
import marriageFields from 'pages/marriage/marriage.fields';
import { MarriageInterface } from 'pages/marriage/marriage.interface';
import MarriageItem from 'pages/marriage/marriage.item';
import { marriageSchema } from 'pages/marriage/marriage.schema';
import React, { createContext } from 'react';
import { RouteObject } from 'react-router-dom';

const name = '/marriage'; // front-end path
const url = '/certificates/marriage'; // backend path
const headers = ['Bride Name','Groom Name', 'Occasion Date', 'Created', 'Last Updated', 'Print', 'Delete'];
export const MarriageContext = createContext<CrudContextInterface<MarriageInterface>>({ url });


export const marriageRoutes = (): RouteObject[] => {
  const { get, page, add, update, remove } = crudThunks<MarriageInterface>({ url, defaultValue: marriageDefault });

  const common = {
    loader: async (params: LoaderFunctionArgs) => get(params),
    handle: {
      basePath: name,
    },
  };

  const Form = <CrudForm redirectUrl={name} add={add} update={update} fields={marriageFields} schema={marriageSchema} />;

  return [
    {
      path: `${name}/:page?`,
      id: name,
      loader: (params: LoaderFunctionArgs) => page(params),
      element: (
        <MarriageContext.Provider value={{ url, remove }}>
          <Table path={name} title="Marriage Certifications" headers={headers}>
            <MarriageItem />
          </Table>
        </MarriageContext.Provider>
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
