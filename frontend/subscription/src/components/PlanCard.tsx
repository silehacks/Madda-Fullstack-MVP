import React from 'react';
import { Card } from 'shared/Card';
import { Button } from 'shared/Button';

interface PlanCardProps {
  plan: any;
  onSelect: (planId: number) => void;
  currentPlan?: any;
}

export const PlanCard = ({ plan, onSelect, currentPlan }: PlanCardProps) => {
  const isCurrentPlan = currentPlan?.plan.id === plan.id;

  return (
    <Card>
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="text-2xl font-bold">${plan.price}/month</p>
      <p>{plan.requestLimit} requests per month</p>
      <Button
        onClick={() => onSelect(plan.id)}
        disabled={isCurrentPlan}
        className={isCurrentPlan ? 'bg-gray-400' : ''}
      >
        {isCurrentPlan ? 'Current Plan' : 'Select Plan'}
      </Button>
    </Card>
  );
};

export default PlanCard;