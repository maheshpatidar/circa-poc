import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from 'store/slices';

const rootReducer = combineReducers({...reducers});

const middleware = [thunk, __DEV__ && createLogger({collapsed: true})].filter(
  Boolean,
);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});
