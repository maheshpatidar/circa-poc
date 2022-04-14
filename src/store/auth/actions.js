import {getAuthData, getAuthDataFailure, getAuthDataSuccess} from './slice';
import {login} from './services';

export const fetchLoginData = () => {
  return async dispatch => {
    dispatch(getAuthData());
    const data = await login();
    if (data?.error) {
      dispatch(getAuthDataFailure());
    } else {
      dispatch(getAuthDataSuccess(data));
    }
  };
};
