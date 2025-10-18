import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'shared/Card';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';

const fetchRequest = async (id: string) => {
  const response = await axios.get(`/api/v1/sourcing/${id}`);
  return response.data;
};

const RequestDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery(['request', id], () => fetchRequest(id!));

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  return (
    <div className="p-4">
      <Card>
        <h1 className="mb-4 text-3xl font-bold">{data.materialName}</h1>
        <p>
          <strong>Category:</strong> {data.materialCategory}
        </p>
        <p>
          <strong>Quantity:</strong> {data.quantity} {data.unit}
        </p>
        <p>
          <strong>Status:</strong> {data.status}
        </p>
        <p>
          <strong>Created At:</strong> {new Date(data.createdAt).toLocaleDateString()}
        </p>
      </Card>
    </div>
  );
};

export default RequestDetailPage;