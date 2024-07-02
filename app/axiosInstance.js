import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // URL base de tu servidor Express
  timeout: 5000, // Tiempo máximo de espera
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;