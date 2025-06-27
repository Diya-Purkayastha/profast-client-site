import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './router/Router.jsx'
import 'aos/dist/aos.css'; 
import Aos from 'aos'
import AuthProvider from './provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
Aos.init();

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto'>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
          <RouterProvider router={Router}></RouterProvider>
       </AuthProvider>
      </QueryClientProvider>
       
   </div>
  </StrictMode>,
)
