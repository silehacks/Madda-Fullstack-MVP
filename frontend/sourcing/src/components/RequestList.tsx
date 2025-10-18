import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import RequestCard from './RequestCard';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const fetchRequests = async () => {
  const response = await axios.get('/api/v1/sourcing');
  return response.data;
};

export const RequestList = () => {
  const { data, error, isLoading } = useQuery('requests', fetchRequests);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  return (
    <div className="space-y-4">
      {data.map((request: any) => (
        <RequestCard
          key={request.id}
          request={request}
          onClick={() => navigate(`/${request.id}`)}
        />
      ))}
    </div>
  );
};

export default RequestList;