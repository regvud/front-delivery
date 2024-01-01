import { createBrowserRouter } from 'react-router-dom';
import { DeliveryPage } from './pages/DeliveryPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { MainLayout } from './layouts/MainLayout';
import { CreateDeliveryPage } from './pages/CreateDeliveryPage';
import { DeliveryDetail } from './pages/DeliveryDetail';

export const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: 'deliveries',
        element: <DeliveryPage />,
      },
      {
        path: 'deliveries/:id',
        element: <DeliveryDetail />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'profile/delivery/create',
        element: <CreateDeliveryPage />,
      },
      {
        path: 'profile/delivery/:id',
        element: <DeliveryDetail />,
      },
    ],
  },
]);
