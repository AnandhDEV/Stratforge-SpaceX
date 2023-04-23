import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { getMethod } from "../../api/Instance";
import { endpoints } from "../../api/endpoints";

const initialState = {
  UpcomingLaunches: [],
  loading: false,
  historys: [],
};

export const GetHomepageContents = createAsyncThunk(
  "homeSlice/GetHomepageContents",
  async () => {
    try {
      const [upcomingLaunches, historys] = await Promise.all([
        getMethod(endpoints.getLaunchesUpcoming),
        getMethod(endpoints.getHistory),
      ]);

      return {
        launches: upcomingLaunches.data ?? [],
        historys: historys.data ?? [],
      };
    } catch (error) {
      console.log(error);
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetHomepageContents.fulfilled, (state, { payload }) => {
        let { launches, historys } = payload;
        console.log(payload);
        state.UpcomingLaunches = launches;
        state.historys = historys;
        state.loading = false;
      })
      .addCase(GetHomepageContents.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetHomepageContents.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default homeSlice.reducer;
