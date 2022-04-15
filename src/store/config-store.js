import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from 'store/slices';

import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({...reducers});

const middleware = [thunk, __DEV__ && createLogger({collapsed: true})].filter(
  Boolean,
);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});
