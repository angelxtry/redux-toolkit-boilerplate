import { AxiosError } from 'axios';

interface IApiError {
  status: string;
  statusCode: number;
  errorMessage: string;
}

export class ApiError implements IApiError {
  status = '';

  statusCode = 0;

  errorMessage = '';

  constructor(err: AxiosError) {
    if (err.response) {
      this.status = err.response.data.status;
      this.statusCode = err.response.status;
      this.errorMessage = err.response.data.errorMessage;
    }
  }
}
