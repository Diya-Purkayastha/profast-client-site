import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../mainlayout/RootLayout';
import Home from '../pages/Home';
import AuthLayout from '../AuthLayout/AuthLayout';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Coverage from '../pages/Coverage';

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component:Home
        },
        {
          path:'/coverage',
          Component: Coverage
        }
        
    ]
  },
  {
    path: '/',
    Component:AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component:Register
      }
    ]
  }
]);

export default Router;