import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080", // URL onde o backend está rodando
});

export default api;
