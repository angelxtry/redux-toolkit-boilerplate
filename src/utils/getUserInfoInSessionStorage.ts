import { User } from '../domain/User';
import { SESSION_STORAGE_KEY } from './constant';

export const PARAM_NAME = 'name';
export const PARAM_TOKEN = 'token';

export function getUserInfoInSessionStorage(param: 'token'): string | null {
  const userInfoString = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!userInfoString) return null;

  const userInfo: User = JSON.parse(userInfoString);

  return userInfo[param];
}
