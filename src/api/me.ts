import axios, { AxiosResponse, AxiosError } from 'axios';
import { ApiError } from './ApiError';
import endpoint from './endpoint.config';
import { setTokenInHeader } from './setTokenInHeader';

export function requestMe(): Promise<any> {
  setTokenInHeader();
  return new Promise<any>((resolve, reject) => {
    axios
      .get<any>(endpoint.auth.getMe())
      .then((resp: AxiosResponse) => resolve(resp.data))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });
}
