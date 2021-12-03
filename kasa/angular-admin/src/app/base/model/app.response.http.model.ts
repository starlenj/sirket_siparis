export interface AppHttpResponse {
  success ?: boolean;
  status ?: number;
  data ?: any;
  message ?: string;
  errorMessage ?: string;
  error ?: {
    message: string,
    statusCode: number,
  };
}
