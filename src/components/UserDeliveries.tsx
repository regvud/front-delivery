import { deliveryService } from '../services/deliveryService';
import { AxiosError } from 'axios';
import { DeliveryCard } from './DeliveryCard';
import { useFetch } from '../hooks/useFetch';

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
            <div className="delivery-table">
              <h2>Receiving</h2>
              {userDeliveries?.receiving?.map((delivery) => (
                <div className="delivery-block" key={delivery.id}>
                  <DeliveryCard key={delivery.id} delivery={delivery} />
                </div>
              ))}
            </div>
          )}
          {userDeliveries?.sending.length !== 0 && (
            <div className="delivery-table">
              <h2>Sending</h2>
              {userDeliveries?.sending.map((delivery) => (
                <div className="delivery-block" key={delivery.id}>
                  <DeliveryCard key={delivery.id} delivery={delivery} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export { UserDeliveries };
