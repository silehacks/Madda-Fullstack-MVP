import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Card } from 'shared/Card';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Register</h1>
        <RegisterForm />
      </Card>
    </div>
  );
};

export default RegisterPage;