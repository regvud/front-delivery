import { SubmitHandler, useForm } from 'react-hook-form';
import { Delivery } from '../types/deliveryTypes';
import { deliveryService } from '../services/deliveryService';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { ErrorHandler } from '../handlers/ErrorHandler';

const CreateDeliveryPage = () => {
  const { register, reset, handleSubmit } = useForm<Delivery>();
  const [error, setError] = useState<AxiosError | null>();

  const saveDelivery: SubmitHandler<Delivery> = async (delivery) => {
    try {
      await deliveryService.create(delivery);

      reset();
      setError(null);
    } catch (e) {
      const err = e as AxiosError;
      setError(err);
    }
  };
  return (
    <div>
      <h1>Delivery Create</h1>
      {error && <ErrorHandler error={error} />}

      <form
        onSubmit={handleSubmit(saveDelivery)}
        style={{ display: 'flex', flexFlow: 'column', width: '50%' }}
      >
        <input
          type="text"
          placeholder="department"
          {...register('department', { required: true })}
        />

        <input
          type="text"
          placeholder="receiver"
          {...register('receiver', { required: true })}
        />

        <input
          type="text"
          placeholder="item.label"
          {...register('item.label', { required: true })}
        />
        <input
          type="number"
          step=".01"
          placeholder="item.price"
          {...register('item.price', { required: true, min: 1 })}
        />

        <div>
          <label>
            <input
              type="radio"
              value={'small'}
              placeholder="item.size"
              {...register('item.size')}
            />
            small
          </label>
          <label>
            <input
              type="radio"
              value={'medium'}
              placeholder="item.size"
              {...register('item.size')}
            />
            medium
          </label>
          <label>
            <input
              type="radio"
              value={'large'}
              placeholder="item.size"
              {...register('item.size')}
            />
            large
          </label>
          <label>
            <input
              type="radio"
              value={'giant'}
              placeholder="item.size"
              {...register('item.size')}
            />
            giant
          </label>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export { CreateDeliveryPage };
