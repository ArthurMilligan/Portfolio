import axios from 'axios';

const apiUrl = '/api';

const AxiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 40000,
});

export default AxiosInstance;
