import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type ProfileSliceValue = {
  username: string;
};

const initialState: ProfileSliceValue = {
  username: nanoid(),
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUpdateProfile: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUpdateProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
