import AuthSlice, {resetAuth} from 'store/auth/slice';
import ResidentsSlice from 'store/resident/slice';

export default {
  auth: AuthSlice,
  residents: ResidentsSlice,
};

export const setUserLogout = dispatch => {
  dispatch(resetAuth());
};
