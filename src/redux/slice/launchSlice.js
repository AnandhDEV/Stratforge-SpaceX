import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { getMethod } from "../../api/Instance";
import { endpoints } from "../../api/endpoints";

const initialState = {
  Launches: [],
  loading: false,
  launchDetialbyId: {},
};

export const GetAllLaunches = createAsyncThunk(
  "launches/GetAllLaunches",
  async () => {
    try {
      const res = await getMethod(endpoints.getLaunches);
      console.log(res);
      return res.data ?? [];
    } catch (error) {
      console.log(error);
    }
  }
);

export const GetLauncheById = createAsyncThunk(
  "launches/GetLauncheById",
  async (id) => {
    try {
      const res = await getMethod(endpoints.getLaunchesbyId(id));
      console.log(res);
      return res.data ?? {};
    } catch (error) {
      console.log(error);
    }
  }
);

export const launchSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    setLoading: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(GetAllLaunches.fulfilled, (state, action) => {
        state.Launches = action.payload;
        state.loading = false;
      })
      .addCase(GetAllLaunches.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAllLaunches.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(GetLauncheById.fulfilled, (state, action) => {
        state.launchDetialbyId = action.payload;
      })
      .addCase(GetLauncheById.pending, (state, action) => {})
      .addCase(GetLauncheById.rejected, (state, action) => {});
  },
});

export const { setLoading } = launchSlice.actions;

export default launchSlice.reducer;
