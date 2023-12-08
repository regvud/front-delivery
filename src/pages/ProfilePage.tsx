import { useQuery } from '@tanstack/react-query';
import { authService } from '../services/authService';
import { ProfileCard } from '../components/ProfileCard';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { UserDeliveries } from '../components/UserDeliveries';

const ProfilePage = () => {
  const [showUserDeliveries, setShowUserDeliveries] = useState(false);

  const {
    data: profile,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => authService.profile(),
    queryKey: ['profile'],
  });

  const showDeliveries = () => {
    setShowUserDeliveries((prev) => !prev);
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

          <button onClick={showDeliveries}>Deliveries</button>
          {showUserDeliveries && <UserDeliveries />}
        </>
      )}
    </>
  );
};

export { ProfilePage };
