// First we need to import axios.js
import axios from 'axios';

// Next we make an 'instance' of it
const axiosReq = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_KEY,
});

axiosReq.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosReq;
