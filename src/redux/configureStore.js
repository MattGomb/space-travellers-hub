import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
