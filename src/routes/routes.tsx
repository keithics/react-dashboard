import App from 'App';
import {RootBoundary} from 'components/errors/root-boundary';
import {getToken} from 'lib/auth';
import {baptismalRoutes} from 'pages/baptismal/baptismal-routes';
import Login from 'pages/user/login';
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RootBoundary />,
        loader: getToken,
        children:[
            ...baptismalRoutes
        ]
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
