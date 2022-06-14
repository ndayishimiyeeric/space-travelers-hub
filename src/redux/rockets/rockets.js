import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

// const initialState = [];

export const getRockets = createAsyncThunk('mission/fetchMission', async () => {
  const response = await fetch(url);
  const data = await response.json();
  const rockets = data.map((rock) => (
    {
      id: rock.id,
      rocket_name: rock.rocket_name,
      description: rock.description,
      img: rock.flickr_images[0],
      active: false,
    }
  ));
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserve: (state, action) => state.map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, active: !rocket.active };
      }
      return rocket;
    }),
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => action.payload,
  },
});

export const { reserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
