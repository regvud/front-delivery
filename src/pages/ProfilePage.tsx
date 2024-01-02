import { authService } from '../services/authService';
import { ProfileCard } from '../components/ProfileCard';
import { useEffect, useState } from 'react';
import { UserDeliveries } from '../components/UserDeliveries';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [showUserDeliveries, setShowUserDeliveries] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('access');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Function to render content when token is present
  const renderProfile = () => {
    const {
      data: profile,
      error,
      isLoading,
    } = useFetch(authService.profile(), ['profile']);

    if (error) return <h1>{error?.message}</h1>;
    if (isLoading) return <h1>Loading...</h1>;

    return (
      <>
        <h1>Profile</h1>
        <hr />
        {profile && <ProfileCard profile={profile} />}
        <button onClick={() => navigate('delivery/create')}>
          Send delivery
        </button>
        <button onClick={() => setShowUserDeliveries((prev) => !prev)}>
          My deliveries
        </button>
        {showUserDeliveries && <UserDeliveries />}
      </>
    );
  };

  // If there is no token, return null to prevent rendering the content
  if (!token) {
    return null;
  }

  // Render the content when the token is present
  return renderProfile();
};

export { ProfilePage };
