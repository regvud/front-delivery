import { deliveryService } from '../services/deliveryService';
import { DeliveryCard } from '../components/DeliveryCard';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const DeliveryPage = () => {
  const navigate = useNavigate();

  const {
    data: deliveries,
    isLoading,
    error,
  } = useFetch(deliveryService.getAll(), ['deliveries']);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      {deliveries?.results.map((delivery) => (
        <DeliveryCard
          key={delivery.id}
          delivery={delivery}
          navigateFunc={() => navigate(`${delivery.id}`, { state: delivery })}
        />
      ))}
    </>
  );
};

export { DeliveryPage };
