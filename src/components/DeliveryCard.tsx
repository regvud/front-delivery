import { Delivery } from '../types/deliveryType';

interface DeliveryCardProps {
  delivery: Delivery;
}

const DeliveryCard = ({ delivery }: DeliveryCardProps) => {
  return (
    <>
      <hr />
      <h3>{delivery.id}</h3>
      <h3>{delivery.item.label}</h3>
      <h3>{delivery.receiver}</h3>
      <h3>{delivery.sender}</h3>
    </>
  );
};

export { DeliveryCard };
