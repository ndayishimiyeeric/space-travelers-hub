import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import reducerMission from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: reducerMission,
  },
});

export default store;
