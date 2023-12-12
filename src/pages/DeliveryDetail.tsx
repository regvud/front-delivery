import { useLocation } from 'react-router-dom';
import { DeliveryCard } from '../components/DeliveryCard';

const DeliveryDetail = () => {
  const { state: delivery } = useLocation();

  return (
    <>
      <DeliveryCard delivery={delivery} detailed={true} />
    </>
  );
};

export { DeliveryDetail };
