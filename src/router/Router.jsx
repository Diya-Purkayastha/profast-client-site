import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../mainlayout/RootLayout';
import Home from '../pages/Home';

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
            
        }
    ]
  },
]);

export default Router;