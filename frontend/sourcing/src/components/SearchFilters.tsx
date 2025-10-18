import React from 'react';

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <input
        type="text"
        name="keyword"
        placeholder="Search..."
        onChange={handleFilterChange}
        className="px-3 py-2 border rounded"
      />
      <select name="materialCategory" onChange={handleFilterChange} className="px-3 py-2 border rounded">
        <option value="">All Categories</option>
        <option value="CEMENT">Cement</option>
        <option value="STEEL">Steel</option>
      </select>
      <select name="status" onChange={handleFilterChange} className="px-3 py-2 border rounded">
        <option value="">All Statuses</option>
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="CLOSED">Closed</option>
      </select>
    </div>
  );
};

export default SearchFilters;