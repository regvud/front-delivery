import { useForm } from 'react-hook-form';
import { Delivery } from '../types/deliveryTypes';

const CreateDeliveryPage = () => {
  const { register, setValue, reset, handleSubmit } = useForm<Delivery>();
  return <></>;
};

export { CreateDeliveryPage };
