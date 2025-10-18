import React from 'react';
import LoginForm from '../components/LoginForm';
import { Card } from 'shared/Card';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Login</h1>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;