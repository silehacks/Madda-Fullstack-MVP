import React from 'react';
import { Card } from 'shared/Card';

export const BillingInfo = () => {
  return (
    <Card>
      <h3 className="text-xl font-bold">Billing Information</h3>
      <p>
        <strong>Payment Method:</strong> Visa ending in 1234
      </p>
      <p>
        <strong>Next Billing Date:</strong> October 25, 2025
      </p>
    </Card>
  );
};

export default BillingInfo;