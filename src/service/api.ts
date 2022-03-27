import axios from 'axios';

const api = axios.create({
  baseURL: 'http://44.200.156.154:8080/api',
  // baseURL: 'http://192.168.15.6:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
