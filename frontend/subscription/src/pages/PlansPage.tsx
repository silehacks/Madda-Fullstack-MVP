import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import PlanCard from '../components/PlanCard';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';

const fetchPlans = async () => {
  const response = await axios.get('/api/v1/plans');
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

const PlansPage = () => {
  const queryClient = useQueryClient();
  const { data: plans, error, isLoading } = useQuery('plans', fetchPlans);
  const { data: subscription } = useQuery('subscription');
  const mutation = useMutation(subscribe, {
    onSuccess: () => {
      queryClient.invalidateQueries('subscription');
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Subscription Plans</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan: any) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            currentPlan={subscription}
            onSelect={(planId) => mutation.mutate(planId)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansPage;