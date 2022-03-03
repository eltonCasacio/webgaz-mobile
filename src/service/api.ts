import axios from 'axios';
import env from 'react-native-dotenv';

const api = axios.create({
  baseURL: env.API_URL_LOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
