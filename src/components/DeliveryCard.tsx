import { Delivery } from '../types/deliveryTypes';

interface DeliveryCardProps {
  delivery: Delivery;
}

const DeliveryCard = ({ delivery }: DeliveryCardProps) => {
  return (
    <>
      <hr />
      <h3>Receiver: {delivery.receiver}</h3>
      <h3>Sender: {delivery.sender}</h3>
      <div>
        <h2>Item</h2>
        <h3>Label: {delivery.item.label}</h3>
        <h3>Price: {delivery.item.price}</h3>
        <h3>Size: {delivery.item.size}</h3>
      </div>
    </>
  );
};

export { DeliveryCard };
