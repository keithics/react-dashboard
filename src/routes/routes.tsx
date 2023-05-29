import App from 'App';
import { RootBoundary } from 'components/errors/root-boundary';
import { getToken } from 'lib/auth';
import { baptismalRoutes } from 'pages/baptismal/baptismal.routes';
import { BaptismalConfirmation } from 'pages/baptismal/baptismal.interface';
import { deathRoutes } from 'pages/death/death.routes';
import Settings from 'pages/settings/settings';
import { getSettings } from 'pages/settings/settings.thunks';
import Login from 'pages/user/login';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { marriageRoutes } from '../pages/marriage/marriage.routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RootBoundary />,
    loader: getToken,
    children: [
      ...baptismalRoutes(BaptismalConfirmation.BAPTISMAL),
      ...baptismalRoutes(BaptismalConfirmation.CONFIRMATION),
      ...deathRoutes(),
      ...marriageRoutes(),
      {
        path: `settings`,
        loader: () => getSettings(),
        element: <Settings />,
      },
    ],
  },
  {
    path: '/user',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
