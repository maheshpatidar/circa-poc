import {store} from 'store/config-store';
const token = store.getState().auth?.authData?.id_token;

const AuthHeader = {
  'Content-type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export default AuthHeader;
