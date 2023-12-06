import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { DeliveryPage } from './pages/DeliveryPage';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DeliveryPage />,
      },
    ],
  },
]);
