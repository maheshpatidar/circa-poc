import {login} from './services';
import {getAuthData, getAuthDataFailure, getAuthDataSuccess} from './slice';

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
