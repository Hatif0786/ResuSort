import Cookies from 'js-cookie';

export const cookieConfig = {
  expires: 7,
  secure: true,
  sameSite: 'strict'
};

export const setAuthCookies = (email, token) => {
  Cookies.set('isLoggedIn', 'true', cookieConfig);
  Cookies.set('userEmail', email, cookieConfig);
  if (token) {
    Cookies.set('userToken', token, cookieConfig);
  }
};

export const clearAuthCookies = () => {
  Cookies.remove('isLoggedIn');
  Cookies.remove('userEmail');
  Cookies.remove('userToken');
};

export const isAuthenticated = () => {
  return Cookies.get('isLoggedIn') === 'true';
}; 