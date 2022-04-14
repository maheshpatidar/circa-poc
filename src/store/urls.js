export const base_url =
  'https://azapp-coreservices-dev-008.azurewebsites.net/api/v5/';

export const endpoints = {
  login: () =>
    'https://deveppopay.b2clogin.com/deveppopay.onmicrosoft.com/B2C_1A_ROPC_Auth/oauth2/v2.0/token',
  getResidents: () => `${base_url}residents`,
  getResidentsDashboard: residentId =>
    `${base_url}residents/${residentId}/dashboard`,
};
