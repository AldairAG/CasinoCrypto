// apiClient.js
import axios from 'axios';
import {store} from '../../Store/store'; // Importa tu store de Redux

const BASE_URL = 'http://localhost:8080/cc'; // ajusta la URL

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token JWT
apiClient.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token; // Obtener el token del estado global
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default apiClient;