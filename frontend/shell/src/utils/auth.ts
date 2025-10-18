export const getToken = () => {
  return localStorage.getItem('auth_token');
};

export const setToken = (token: string) => {
  localStorage.setItem('auth_token', token);
};

export const removeToken = () => {
  localStorage.removeItem('auth_token');
};