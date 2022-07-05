import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'http://localhost:3000',
});

export default baseUrl;
