import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="p-4 text-white bg-red-500 rounded-md">
      {message}
    </div>
  );
};

export default ErrorMessage;