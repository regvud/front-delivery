import { useQuery } from '@tanstack/react-query';
import { deliveryService } from '../services/deliveryService';
import { AxiosError } from 'axios';
import { DeliveryCard } from './DeliveryCard';

const UserDeliveries = () => {
  const {
    data: userDeliveries,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => deliveryService.getUserDeliveries(),
    queryKey: ['userDeliveries'],
  });

  if (error as AxiosError) {
    return <h1>{error?.message}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>...loading</h1>
      ) : (
        <>
          <div>
            <h2>Receiving</h2>
            {userDeliveries?.receiving.map((delivery) => (
              <DeliveryCard key={delivery.id} delivery={delivery} />
            ))}
          </div>
          <div>
            <h2>Sending</h2>
            {userDeliveries?.sending.map((delivery) => (
              <DeliveryCard key={delivery.id} delivery={delivery} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export { UserDeliveries };
