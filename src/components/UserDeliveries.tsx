import { deliveryService } from '../services/deliveryService';
import { AxiosError } from 'axios';
import { useFetch } from '../hooks/useFetch';
import { DeliveryMapComponent } from './DeliveryMapComponent';

const UserDeliveries = () => {
  const {
    data: userDeliveries,
    error,
    isLoading,
  } = useFetch(deliveryService.getUserDeliveries(), ['userDeliveries']);

  if (error as AxiosError) {
    return <h1>{error?.message}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <>
          {userDeliveries?.receiving.length !== 0 && (
            <DeliveryMapComponent
              array={userDeliveries?.receiving}
              title="receiving"
            />
          )}
          {userDeliveries?.sending.length !== 0 && (
            <DeliveryMapComponent
              array={userDeliveries?.sending}
              title="sending"
            />
          )}
        </>
      )}
    </>
  );
};

export { UserDeliveries };
