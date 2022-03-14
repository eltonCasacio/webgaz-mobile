import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.228.236.222:8080/api',
  // baseURL: 'http://192.168.15.5:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
