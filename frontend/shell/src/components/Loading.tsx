import React from 'react';
import { LoadingSpinner } from 'shared/LoadingSpinner';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;