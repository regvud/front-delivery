import { Delivery } from '../types/deliveryTypes';
import css from './styles/DiliveryCard.module.css';
interface DeliveryCardProps {
  delivery: Delivery;
  navigateFunc?: () => void;
  detailed?: boolean;
}

const DeliveryCard = ({
  delivery,
  navigateFunc,
  detailed,
}: DeliveryCardProps) => {
  const toDetails = () => {
    navigateFunc && navigateFunc();
  };

  return (
    <div className={css.deliveryDetailsContainer}>
      {detailed ? (
        <>
          <h3>ID: {delivery.id}</h3>
          <h3>Status: {delivery.status}</h3>
          <h3>Receiver: {delivery.receiver}</h3>
          <h3>Sender: {delivery.sender}</h3>

          <div>
            <h2>Item</h2>
            <h3>Label: {delivery.item.label}</h3>
            <h3>Price: {delivery.item.price}</h3>
            <h3>Size: {delivery.item.size}</h3>
          </div>
        </>
      ) : (
        <>
          <h3>ID: {delivery.id}</h3>
          <h3>Status: {delivery.status}</h3>

          <div>
            <h2>Item</h2>
            <h3>Label: {delivery.item.label}</h3>
          </div>

          <button onClick={toDetails}>Details</button>
        </>
      )}
    </div>
  );
};

export { DeliveryCard };
