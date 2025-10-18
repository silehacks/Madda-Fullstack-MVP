import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequestListPage from './pages/RequestListPage';
import RequestCreatePage from './pages/RequestCreatePage';
import RequestDetailPage from './pages/RequestDetailPage';
import MyRequestsPage from './pages/MyRequestsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RequestListPage />} />
      <Route path="/new" element={<RequestCreatePage />} />
      <Route path="/:id" element={<RequestDetailPage />} />
      <Route path="/my-requests" element={<MyRequestsPage />} />
    </Routes>
  );
}

export default App;