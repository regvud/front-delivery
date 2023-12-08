import { createBrowserRouter } from 'react-router-dom';
import { DeliveryPage } from './pages/DeliveryPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';

export const router = createBrowserRouter([
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
]);
