import React from 'react';

interface UsageMeterProps {
  used: number;
  limit: number;
}

export const UsageMeter = ({ used, limit }: UsageMeterProps) => {
  const percentage = (used / limit) * 100;

  return (
    <div>
      <h4 className="text-lg font-bold">Request Usage</h4>
      <p>
        {used} / {limit} requests used
      </p>
      <div className="w-full bg-gray-200 rounded-full">
        <div
          className="h-4 bg-blue-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default UsageMeter;