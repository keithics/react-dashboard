import App from 'App';
import {RootBoundary} from 'components/errors/root-boundary';
import {getToken} from 'lib/auth';
import Baptismal from 'pages/baptismal/baptismal';
import BaptismalForm from 'pages/baptismal/baptismal-form';
import {getBaptismal, getBaptisms} from 'pages/baptismal/baptismal.thunks';
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
            {
                path:'baptism/:page?',
                element: <Baptismal />,
                loader:  getBaptisms
            },
            {
                path:'baptism/edit/:id',
                element:<BaptismalForm />,
                loader:getBaptismal
            },
            {
                path:'baptism/new', // react router dom v6 doesnt support regex paths
                element:<BaptismalForm />,
                loader:getBaptismal
            },

            {
                path:'billing'
            }
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
