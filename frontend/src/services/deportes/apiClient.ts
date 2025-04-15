// apiClient.js
import axios from 'axios';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/722804';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Removed TypeScript-specific 'declare module' block as it is not valid in JavaScript files.
export default apiClient;