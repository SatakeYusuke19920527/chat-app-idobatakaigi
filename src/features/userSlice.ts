import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { UserType } from '../types/UserType';

type InitialStateType = {
  value: UserType
}

const initialState:InitialStateType = {
  value: {
    uid: "",
    email: "",
    displayName: "",
    photoUrl: "",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState.value
    },
    updateUserProfile: (state, action: PayloadAction<UserType>) => {
      state.value.displayName = action.payload.displayName;
    }
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;