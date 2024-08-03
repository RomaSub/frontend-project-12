const apiPath = '/api/v1';

export const getRoutes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  signUpPath: () => [apiPath, 'signup'].join('/'),
  chatPagePath: () => '/',
  loginPagePath: () => '/login',
  signUpPagePath: () => '/signup',
};
