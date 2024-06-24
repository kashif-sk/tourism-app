import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const AxiosRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  // Set common request headers here

  return config;
};

const AxiosResponseInterceptor = {
  result(response: AxiosResponse) {
    // custom response handling here
    return response;
  },

  error(errorResponse: AxiosError<any>) {
    // custom error handling here
    return Promise.reject(errorResponse);
  },
};

axios.defaults.timeout = 60000;
axios.defaults.baseURL = ''; //baseURL to be set here
axios.interceptors.request.use(AxiosRequestInterceptor);
axios.interceptors.response.use(
  AxiosResponseInterceptor.result,
  AxiosResponseInterceptor.error,
);
