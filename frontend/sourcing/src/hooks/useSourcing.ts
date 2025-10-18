import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchRequests = async () => {
  const response = await axios.get('/api/v1/sourcing');
  return response.data;
};

const fetchRequest = async (id: string) => {
  const response = await axios.get(`/api/v1/sourcing/${id}`);
  return response.data;
};

const createRequest = async (data: any) => {
  const token = localStorage.getItem('auth_token');
  const response = await axios.post('/api/v1/sourcing', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const useSourcing = () => {
  const queryClient = useQueryClient();

  const { data: requests, isLoading: areRequestsLoading } = useQuery('requests', fetchRequests);

  const useRequest = (id: string) => {
    return useQuery(['request', id], () => fetchRequest(id));
  };

  const createRequestMutation = useMutation(createRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries('requests');
      window.dispatchEvent(new CustomEvent('request-created'));
    },
  });

  return {
    requests,
    areRequestsLoading,
    useRequest,
    createRequest: createRequestMutation.mutate,
    isCreatingRequest: createRequestMutation.isLoading,
    createRequestError: createRequestMutation.error,
  };
};