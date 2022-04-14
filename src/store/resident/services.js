import {endpoints} from 'store/urls';
import AuthHeader from 'store/auth-header';

export const getResidents = () => {
  return fetch(endpoints.getResidents(), {
    method: 'GET',
    headers: AuthHeader,
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => {
      console.log(error);
      return {error: error};
    });
};

export const getDashboard = residentId => {
  return fetch(endpoints.getResidentsDashboard(residentId), {
    method: 'GET',
    headers: AuthHeader,
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => {
      console.log(error);
      return {error: error};
    });
};
