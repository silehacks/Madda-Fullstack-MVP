import React from 'react';
import BillingInfo from '../components/BillingInfo';

const BillingPage = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Billing</h1>
      <BillingInfo />
    </div>
  );
};

export default BillingPage;