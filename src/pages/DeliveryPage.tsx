import { useQuery } from '@tanstack/react-query';
import { deliveryService } from '../services/deliveryService';
import { DeliveryCard } from '../components/DeliveryCard';

const DeliveryPage = () => {
  const { data: deliveries, isLoading } = useQuery({
    queryFn: () => deliveryService.getAll(),
    queryKey: ['deliveries'],
  });

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
