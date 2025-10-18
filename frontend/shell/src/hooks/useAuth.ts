import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

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
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('auth_token'));

  const { data: user, isLoading: isUserLoading } = useQuery('profile', fetchProfile, {
    enabled: isLoggedIn,
  });

  useEffect(() => {
    const handleAuthChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsLoggedIn(customEvent.detail.loggedIn);
      if (customEvent.detail.loggedIn) {
        queryClient.invalidateQueries('profile');
      } else {
        queryClient.setQueryData('profile', null);
      }
    };

    window.addEventListener('auth-changed', handleAuthChange);
    return () => {
      window.removeEventListener('auth-changed', handleAuthChange);
    };
  }, [queryClient]);

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    queryClient.setQueryData('profile', null);
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: { loggedIn: false } }));
  };

  return { user, isUserLoading, isLoggedIn, logout };
};