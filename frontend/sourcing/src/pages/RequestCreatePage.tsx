import React from 'react';
import RequestForm from '../components/RequestForm';
import { Card } from 'shared/Card';

const RequestCreatePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Create Sourcing Request</h1>
        <RequestForm />
      </Card>
    </div>
  );
};

export default RequestCreatePage;