import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchPlans = async () => {
  const response = await axios.get('/api/v1/plans');
  return response.data;
};

const fetchSubscription = async () => {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  const response = await axios.get('/api/v1/subscriptions/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const subscribe = async (planId: number) => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.post(
    '/api/v1/subscriptions',
    { planId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const useSubscription = () => {
  const queryClient = useQueryClient();

  const { data: plans, isLoading: arePlansLoading } = useQuery('plans', fetchPlans);
  const { data: subscription, isLoading: isSubscriptionLoading } = useQuery(
    'subscription',
    fetchSubscription
  );

  const subscribeMutation = useMutation(subscribe, {
    onSuccess: () => {
      queryClient.invalidateQueries('subscription');
      window.dispatchEvent(new CustomEvent('subscription-updated'));
    },
  });

  return {
    plans,
    arePlansLoading,
    subscription,
    isSubscriptionLoading,
    subscribe: subscribeMutation.mutate,
    isSubscribing: subscribeMutation.isLoading,
    subscribeError: subscribeMutation.error,
  };
};