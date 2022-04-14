import {getDashboard, getResidents} from './services';
import {
  getDashboardData,
  getDashboardDataFailure,
  getDashboardDataSuccess,
  getResidentData,
  getResidentDataFailure,
  getResidentDataSuccess,
} from './slice';

export const fetchResidentData = () => {
  return async dispatch => {
    dispatch(getResidentData());
    const data = await getResidents();
    if (data?.error) {
      dispatch(getResidentDataFailure());
    } else {
      dispatch(getResidentDataSuccess(data.residentData));
      if (data.residentData?.id) {
        dispatch(fetchDashboardData(data.residentData?.id));
      }
    }
  };
};

export const fetchDashboardData = residentId => {
  return async dispatch => {
    dispatch(getDashboardData());
    const data = await getDashboard(residentId);
    if (data?.error) {
      dispatch(getDashboardDataFailure());
    } else {
      dispatch(getDashboardDataSuccess(data.dashboard));
    }
  };
};
