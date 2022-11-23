import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(url);
    const data = await response.json();

    const missions = data.map((mission) => ({
      reserved: false,
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }));
    return missions;
  },
);

const initialState = [];

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => state.map((mission) => {
      if (mission.id !== action.payload) {
        return mission;
      }
      return { ...mission, reserved: !mission.reserved };
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveMission } = missionSlice.actions;
export default missionSlice.reducer;
