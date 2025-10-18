import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';

const LoginPage = React.lazy(() => import('auth/LoginPage'));
const RegisterPage = React.lazy(() => import('auth/RegisterPage'));
const ProfilePage = React.lazy(() => import('auth/ProfilePage'));
const RequestListPage = React.lazy(() => import('sourcing/RequestListPage'));
const RequestCreatePage = React.lazy(() => import('sourcing/RequestCreatePage'));
const RequestDetailPage = React.lazy(() => import('sourcing/RequestDetailPage'));
const MyRequestsPage = React.lazy(() => import('sourcing/MyRequestsPage'));
const PlansPage = React.lazy(() => import('subscription/PlansPage'));
const SubscriptionPage = React.lazy(() => import('subscription/SubscriptionPage'));
const BillingPage = React.lazy(() => import('subscription/BillingPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<RequestListPage />} />
          <Route path="/sourcing/new" element={<RequestCreatePage />} />
          <Route path="/sourcing/:id" element={<RequestDetailPage />} />
          <Route path="/my-requests" element={<MyRequestsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;