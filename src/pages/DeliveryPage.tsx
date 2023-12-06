import { useQuery } from '@tanstack/react-query';
import { deliveryService } from '../services/deliveryService';
import { DeliveryCard } from '../components/DeliveryCard';
import { AxiosError } from 'axios';

const DeliveryPage = () => {
  const {
    data: deliveries,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => deliveryService.getAll(),
    queryKey: ['deliveries'],
  });

  if (error as AxiosError) {
    console.error(error);
  }

  return (
    <>
      {isLoading ? (
        <h1>...Loading</h1>
      ) : (
        deliveries?.results.map((delivery) => {
          return <DeliveryCard delivery={delivery} key={delivery.id} />;
        })
      )}
    </>
  );
};

export { DeliveryPage };
