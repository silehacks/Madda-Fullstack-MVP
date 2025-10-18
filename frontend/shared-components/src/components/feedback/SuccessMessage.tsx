import React from 'react';

interface SuccessMessageProps {
  message: string;
}

export const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <div className="p-4 text-white bg-green-500 rounded-md">
      {message}
    </div>
  );
};

export default SuccessMessage;