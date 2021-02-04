import React from 'react';
import { Redirect } from 'react-router-dom';
import { useRootState } from '../../hooks';
import { LoginForm } from './LoginForm';
import { userSelector } from './userSlice';

export function LoginContainer(): JSX.Element {
  const isLoggedIn = useRootState(state => userSelector.isLoggedIn(state));
  const { isAdmin } = useRootState(state => userSelector.userInfo(state));

  // 로그인 실패
  if (!isLoggedIn) return <LoginForm />;

  // admin 로그인 성공
  if (isAdmin) return <Redirect to="/admin" />;

  // 일반 로그인 성공
  return <Redirect to="/report" />;
}
