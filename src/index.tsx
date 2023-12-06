import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/reactQuery';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
);
