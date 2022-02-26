import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.228.223.73:8080/api',
  // baseURL: 'http://192.168.15.4:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
