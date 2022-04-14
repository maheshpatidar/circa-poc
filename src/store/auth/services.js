import {endpoints} from 'store/urls';

export const login = () => {
  const formData = new FormData();
  formData.append('client_id', '742dbeaa-009e-425b-875b-cb2dcc18fee4');
  formData.append('grant_type', 'password');
  formData.append(
    'scope',
    'openid 742dbeaa-009e-425b-875b-cb2dcc18fee4 offline_access profile',
  );
  formData.append('username', 'qa_user+60001@wearecirca.com');
  formData.append('password', 'Password@123');
  formData.append('response_type', 'token id_token');

  return fetch(endpoints.login(), {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then(res => res)
    .catch(error => {
      return {error: error};
    });
};
