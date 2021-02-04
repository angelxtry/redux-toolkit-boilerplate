/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { LoginRequestPayload, User, UserResponse, UserState } from './types';
import { COUNTRY_GROUP_OPTION, COUNTRY_OPTION, SESSION_STORAGE_KEY } from '../../utils/constant';

export const initialState: UserState = {
  isLoading: false,
  isLoggedIn: false,
  userInfo: {
    id: -1,
    name: '',
    email: '',
    token: '',
    isAdmin: false,
    isManager: false,
  },
  error: '',
};

const name = 'USER';

function setLoginPayload(state: UserState, payload: UserResponse) {
  const { id, email, token, is_admin, is_manager } = payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.userInfo.id = id;
  state.userInfo.email = email;
  state.userInfo.token = token;
  state.userInfo.isAdmin = is_admin;
  state.userInfo.isManager = is_manager;
}

const slice = createSlice({
  name,
  initialState,
  reducers: {
    requestLogin: {
      reducer(state) {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.error = '';
      },
      prepare(email: string, password: string): LoginRequestPayload {
        return { payload: { users: { email, password } } };
      },
    },
    successLogin: (state, { payload }: { payload: UserResponse }) => {
      setLoginPayload(state, payload);
    },
    failLogin: (state, { payload }: { payload: string }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    requestLogout: state => {
      state.isLoggedIn = false;
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(COUNTRY_OPTION);
      sessionStorage.removeItem(COUNTRY_GROUP_OPTION);
    },
    requestMe: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = '';
    },
    successMe: (state, { payload }: { payload: UserResponse }) => {
      setLoginPayload(state, payload);
    },
    // TODO failMe 추가
  },
});

const selectIsLoggedIn = createSelector(
  (state: UserState) => state.isLoggedIn,
  isLoggedIn => isLoggedIn
);

const selectUserInfo = createSelector(
  (state: UserState) => state.userInfo,
  userInfo => userInfo
);

const selectLoginState = createSelector(
  (state: UserState) => ({ isLoggedIn: state.isLoggedIn, error: state.error }),
  ({ isLoggedIn, error }) => ({ isLoggedIn, error })
);

export const LOGIN = slice.name;

// TODO
// isLoggedIn을 삭제하고 getLoginState로 대체하자.
export const userSelector: {
  isLoggedIn: (state: RootState) => boolean;
  userInfo: (state: RootState) => User;
  getLoginState: (state: RootState) => { isLoggedIn: boolean; error: string };
} = {
  isLoggedIn: (state: RootState): boolean => selectIsLoggedIn(state.userReducer),
  userInfo: (state: RootState): User => selectUserInfo(state.userReducer),
  getLoginState: (state: RootState) => selectLoginState(state.userReducer),
};

export const userReducer = slice.reducer;
export const userActions = slice.actions;
