import { Delivery } from '../types/deliveryTypes';
import { DeliveryCard } from './DeliveryCard';

interface DeliveryMapComponentProps {
  array: Delivery[] | undefined;
  title?: string;
  detailed?: boolean;
}

const DeliveryMapComponent = ({
  array,
  title,
  detailed,
}: DeliveryMapComponentProps) => {
  return (
    <>
      {title && <h1>{title.toUpperCase()}</h1>}
      {array?.map((delivery) => (
        <div className="delivery-block" key={delivery.id}>
          <DeliveryCard
            key={delivery.id}
            delivery={delivery}
            detailed={detailed}
          />
        </div>
      ))}
    </>
  );
};

export { DeliveryMapComponent };
