import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlansPage from './pages/PlansPage';
import SubscriptionPage from './pages/SubscriptionPage';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <Routes>
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/subscription" element={<SubscriptionPage />} />
      <Route path="/billing" element={<BillingPage />} />
    </Routes>
  );
}

export default App;