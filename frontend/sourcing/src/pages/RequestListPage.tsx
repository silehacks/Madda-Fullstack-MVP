import React from 'react';
import RequestList from '../components/RequestList';
import SearchFilters from '../components/SearchFilters';

const RequestListPage = () => {
  const handleFilterChange = (filters: any) => {
    // TODO: Implement filtering logic
    console.log(filters);
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">Sourcing Marketplace</h1>
      <div className="mb-4">
        <SearchFilters onFilterChange={handleFilterChange} />
      </div>
      <RequestList />
    </div>
  );
};

export default RequestListPage;