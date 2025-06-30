import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../mainlayout/RootLayout';
import Home from '../pages/Home';
import AuthLayout from '../AuthLayout/AuthLayout';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Coverage from '../pages/Coverage';
import SendParcel from '../pages/SendParcel';
import PrivateRoute from '../routes/PrivateRoute'
import DashboardLayout from '../dashboard/DashboardLayout';
import MyParcels from '../dashboard/MyParcels';
import Payment from '../dashboard/Payment';
import PaymentHistory from '../dashboard/PaymentHIstory';
import TrackParcel from '../dashboard/TrackParcel';

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
        },
        {
          path:'sendParcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
          loader: () => fetch('./serviceCentered.json')
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
  },
  {
    path:'/dashboard',
    element:<PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path:'myParcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component:Payment
      },
      {
        path: 'paymentHistory',
        Component:PaymentHistory
      },
      {
        path: 'track',
        Component: TrackParcel
      }
    ]
  }
]);

export default Router;