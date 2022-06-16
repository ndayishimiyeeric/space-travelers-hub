import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMissions = createAsyncThunk('Missions.js/fetchMission', async () => {
  const response = await fetch(missionUrl);
  const data = await response.json();
  const missions = data.map((mission) => (
    {
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      active: false,
    }
  ));
  return missions;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserve: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, active: !mission.active };
      }
      return mission;
    }),
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { reserve } = missionsSlice.actions;
export default missionsSlice.reducer;
