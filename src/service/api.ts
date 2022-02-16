import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://api.devmaykinho.click/api/',
  baseURL: 'http://192.168.15.4:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
