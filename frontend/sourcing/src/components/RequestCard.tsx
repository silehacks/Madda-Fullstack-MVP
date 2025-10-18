import React from 'react';
import { Card } from 'shared/Card';

interface RequestCardProps {
  request: any;
  onClick: () => void;
}

export const RequestCard = ({ request, onClick }: RequestCardProps) => {
  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-bold">{request.materialName}</h3>
      <p>
        <strong>Category:</strong> {request.materialCategory}
      </p>
      <p>
        <strong>Quantity:</strong> {request.quantity} {request.unit}
      </p>
      <p>
        <strong>Status:</strong> {request.status}
      </p>
    </Card>
  );
};

export default RequestCard;