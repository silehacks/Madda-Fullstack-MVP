import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { Button, Input } from 'shared/Button';

const createRequest = async (data: any) => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.post('/api/v1/sourcing', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const RequestForm = () => {
  const [materialCategory, setMaterialCategory] = useState('CEMENT');
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');
  const mutation = useMutation(createRequest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ materialCategory, materialName, quantity, unit });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Material Name"
        value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Input
        type="text"
        placeholder="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <select value={materialCategory} onChange={(e) => setMaterialCategory(e.target.value)}>
        <option value="CEMENT">Cement</option>
        <option value="STEEL">Steel</option>
        <option value="BRICKS">Bricks</option>
        <option value="SAND">Sand</option>
        <option value="AGGREGATE">Aggregate</option>
        <option value="WOOD">Wood</option>
        <option value="PAINT">Paint</option>
        <option value="ELECTRICAL">Electrical</option>
        <option value="PLUMBING">Plumbing</option>
      </select>
      <Button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Creating...' : 'Create Request'}
      </Button>
      {mutation.isError && (
        <p className="text-red-500">{(mutation.error as any).message}</p>
      )}
    </form>
  );
};

export default RequestForm;