import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'rtk/store';
import { PURGE } from 'redux-persist';
import { UserDataInterface } from 'pages/user/user.interface';

const initialState: UserDataInterface = {
  email: '',
  gravatar: '',
  isAdmin: false,
  roles: [],
  isLoggedIn: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setUserData: (state: Draft<UserDataInterface>, action: PayloadAction<UserDataInterface>) => {
      return {
        ...state,
        isLoggedIn:true
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { logout, setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
