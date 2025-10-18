import React from 'react';
import SubscriptionStatus from '../components/SubscriptionStatus';
import UsageMeter from '../components/UsageMeter';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LoadingSpinner } from 'shared/LoadingSpinner';

const fetchMyRequests = async () => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.get('/api/v1/sourcing/my-requests', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const SubscriptionPage = () => {
  const { data: requests, isLoading } = useQuery('my-requests', fetchMyRequests);
  const { data: subscription } = useQuery('subscription');

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">My Subscription</h1>
      <SubscriptionStatus />
      {subscription && (
        <UsageMeter used={requests?.length || 0} limit={subscription.plan.requestLimit} />
      )}
    </div>
  );
};

export default SubscriptionPage;