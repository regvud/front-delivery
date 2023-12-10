import { AxiosError } from 'axios';

interface ErrorHandlerProps {
  error: AxiosError;
}

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  return <>{error.response?.data}</>;
};

export { ErrorHandler };
