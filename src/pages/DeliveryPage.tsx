import { deliveryService } from '../services/deliveryService';
import { DeliveryCard } from '../components/DeliveryCard';
import { useFetch } from '../hooks/useFetch';

const DeliveryPage = () => {
  const { data: deliveries, isLoading } = useFetch(deliveryService.getAll(), [
    'deliveries',
  ]);

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
