const apiPath = '/api/v1';

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  loginPagePath: '/login',
  chatPagePath: '/',
  signupPagePath: '/signup',
};
