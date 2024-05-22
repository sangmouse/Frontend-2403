import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// literal string
export const getUserByID = createAsyncThunk("getUserByID", async (id) => {
  const data = await fetch(`https://reqres.in/api/users/${id}`);
  const userDetail = await data.json();
  return userDetail;
});

const initialState = {
  status: "idle",
  userDetail: null,
};

const userDetailSlice = createSlice({
  name: "detailOfUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserByID.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserByID.fulfilled, (state, action) => {
        state.status = "success";
        state.userDetail = action?.payload?.data;
      })
      .addCase(getUserByID.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default userDetailSlice.reducer;
