import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    items: ["User ID: 1", "Username:Fumika", "User ID:"],
  },
  reducers: {},
});

export default userSlice;
