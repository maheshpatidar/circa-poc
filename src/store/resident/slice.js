import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  residentData: null,
  dashboardData: null,
  loading: false,
  hasErrors: false,
};

const ResidentsSlice = createSlice({
  name: 'residents',
  initialState,
  reducers: {
    getResidentData: state => {
      state.loading = true;
    },
    getResidentDataSuccess: (state, {payload}) => {
      state.residentData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getResidentDataFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },

    getDashboardData: state => {
      state.loading = true;
    },
    getDashboardDataSuccess: (state, {payload}) => {
      state.dashboardData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getDashboardDataFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getResidentData,
  getResidentDataSuccess,
  getResidentDataFailure,
  getDashboardData,
  getDashboardDataSuccess,
  getDashboardDataFailure,
} = ResidentsSlice.actions;

export default ResidentsSlice.reducer;
