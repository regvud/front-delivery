import { createBrowserRouter } from 'react-router-dom';
import { DeliveryPage } from './pages/DeliveryPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { MainLayout } from './layouts/MainLayout';

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
        path: 'deliveries',
        element: <DeliveryPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);
