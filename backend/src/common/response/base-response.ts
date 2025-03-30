export interface BaseResponse<T> {
  status: 'success' | 'error';
  statusCode: number;
  message?: string;
  data?: T;
}
