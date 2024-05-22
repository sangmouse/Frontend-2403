import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = await fetch("https://reqres.in/api/users");
  const userList = await data.json();
  return userList?.data;
});

const initialState = {
  status: "idle",
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, function (state, action) {
        state.status = "success";
        state.users = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;

// status: idle, loading, success, failed
