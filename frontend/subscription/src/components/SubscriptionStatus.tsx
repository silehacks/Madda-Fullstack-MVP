import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Card } from 'shared/Card';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';

const fetchSubscription = async () => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.get('/api/v1/subscriptions/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const SubscriptionStatus = () => {
  const { data, error, isLoading } = useQuery('subscription', fetchSubscription);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  if (!data) {
    return <p>No active subscription.</p>;
  }

  return (
    <Card>
      <h3 className="text-xl font-bold">My Subscription</h3>
      <p>
        <strong>Plan:</strong> {data.planName}
      </p>
      <p>
        <strong>Status:</strong> {data.status}
      </p>
      <p>
        <strong>End Date:</strong> {new Date(data.endDate).toLocaleDateString()}
      </p>
    </Card>
  );
};

export default SubscriptionStatus;