import axios, {AxiosInstance} from 'axios';

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: 'https://10.react.pages.academy/wtw',
  timeout: 5000,
});
