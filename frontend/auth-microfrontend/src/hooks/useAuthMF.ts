import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const login = async (data: any) => {
  const response = await axios.post('/api/v1/auth/login', data);
  localStorage.setItem('auth_token', response.data.token);
  return response.data;
};

const register = async (data: any) => {
  const response = await axios.post('/api/v1/auth/register', data);
  return response.data;
};

const fetchProfile = async () => {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  const response = await axios.get('/api/v1/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading: isUserLoading } = useQuery('profile', fetchProfile);

  const loginMutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      window.dispatchEvent(new CustomEvent('auth-changed', { detail: { loggedIn: true } }));
    },
  });

  const registerMutation = useMutation(register);

  const logout = () => {
    localStorage.removeItem('auth_token');
    queryClient.setQueryData('profile', null);
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: { loggedIn: false } }));
  };

  return {
    user,
    isUserLoading,
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isLoading,
    loginError: loginMutation.error,
    register: registerMutation.mutate,
    isRegistering: registerMutation.isLoading,
    registerError: registerMutation.error,
    logout,
  };
};