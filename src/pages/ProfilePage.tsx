import { authService } from '../services/authService';
import { ProfileCard } from '../components/ProfileCard';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { UserDeliveries } from '../components/UserDeliveries';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showUserDeliveries, setShowUserDeliveries] = useState(false);
  const navigate = useNavigate();

  const {
    data: profile,
    error,
    isLoading,
  } = useFetch(authService.profile(), ['profile']);

  const showDeliveries = () => {
    setShowUserDeliveries((prev) => !prev);
  };

  const toCreateDeliveryPage = () => {
    navigate('delivery/create');
  };

  if (error as AxiosError) {
    return <h1>{error?.message}</h1>;
  }

  return (
    <>
      <h1>Profile</h1>
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <hr />
          {profile && <ProfileCard profile={profile} />}

          <button onClick={toCreateDeliveryPage}>Create delivery</button>
          <button onClick={showDeliveries}>Deliveries</button>
          {showUserDeliveries && <UserDeliveries />}
        </>
      )}
    </>
  );
};

export { ProfilePage };
