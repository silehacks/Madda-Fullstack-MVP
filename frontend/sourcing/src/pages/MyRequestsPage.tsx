import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import RequestCard from '../components/RequestCard';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const fetchMyRequests = async () => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.get('/api/v1/sourcing/my-requests', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const MyRequestsPage = () => {
  const { data, error, isLoading } = useQuery('my-requests', fetchMyRequests);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">My Sourcing Requests</h1>
      <div className="space-y-4">
        {data.map((request: any) => (
          <RequestCard
            key={request.id}
            request={request}
            onClick={() => navigate(`/${request.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRequestsPage;