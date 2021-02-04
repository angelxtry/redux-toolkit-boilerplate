import axios from 'axios';
import { getUserInfoInSessionStorage, PARAM_TOKEN } from '../utils';

export const setTokenInHeader = (): void => {
  const token = getUserInfoInSessionStorage(PARAM_TOKEN);

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
