import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Card } from 'shared/Card';
import { LoadingSpinner } from 'shared/LoadingSpinner';
import { ErrorMessage } from 'shared/ErrorMessage';

const fetchProfile = async () => {
  const response = await axios.get('/api/v1/users/me');
  return response.data;
};

export const Profile = () => {
  const { data, error, isLoading } = useQuery('profile', fetchProfile);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={(error as any).message} />;

  return (
    <Card>
      <h2 className="text-2xl font-bold">Profile</h2>
      <p>
        <strong>Company Name:</strong> {data.companyName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Status:</strong> {data.status}
      </p>
      <p>
        <strong>Subscription Tier:</strong> {data.subscriptionTier}
      </p>
    </Card>
  );
};

export default Profile;