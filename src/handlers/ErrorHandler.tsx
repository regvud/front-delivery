import { AxiosError } from 'axios';

interface ErrorHandlerProps {
  error: AxiosError | undefined;
}

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  return (
    <h3>{`${JSON.stringify(error?.response?.data) || 'Unknown error'}`}</h3>
  );
};

export { ErrorHandler };
