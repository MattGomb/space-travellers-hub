import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsList = await response.json();

  const rocketsInfo = rocketsList.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
    reserved: false,
  }));
  return rocketsInfo;
});

const initialState = [];

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserve: (state, action) => state.map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions } = rocketsSlice;
export const { rocketReserve } = rocketsSlice.actions;
export { actions, fetchRockets };
export default rocketsSlice.reducer;
