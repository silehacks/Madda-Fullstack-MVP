import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { Button, Input } from 'shared/Button';

const login = async (data: any) => {
  const response = await axios.post('/api/v1/auth/login', data);
  return response.data;
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useMutation(login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Logging in...' : 'Login'}
      </Button>
      {mutation.isError && (
        <p className="text-red-500">{(mutation.error as any).message}</p>
      )}
    </form>
  );
};

export default LoginForm;