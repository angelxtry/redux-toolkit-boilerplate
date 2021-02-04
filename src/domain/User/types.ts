/* eslint-disable camelcase */
export interface LoginRequestPayload {
  payload: {
    users: {
      email: string;
      password: string;
    };
  };
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  token: string;
  is_admin: boolean;
  is_manager: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
  isManager: boolean;
}

export interface UserState {
  isLoading: boolean;
  isLoggedIn: boolean;
  userInfo: User;
  error: string;
}
