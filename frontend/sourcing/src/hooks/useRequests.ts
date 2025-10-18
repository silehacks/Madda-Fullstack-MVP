import { useQuery } from 'react-query';
import axios from 'axios';

const fetchRequests = async () => {
  const response = await axios.get('/api/v1/sourcing');
  return response.data;
};

const fetchMyRequests = async () => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.get('/api/v1/sourcing/my-requests', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const useRequests = () => {
  const { data: allRequests, isLoading: areAllRequestsLoading } = useQuery('all-requests', fetchRequests);
  const { data: myRequests, isLoading: areMyRequestsLoading } = useQuery('my-requests', fetchMyRequests);

  return {
    allRequests,
    areAllRequestsLoading,
    myRequests,
    areMyRequestsLoading,
  };
};