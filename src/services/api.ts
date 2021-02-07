import axios from 'axios'

const api = axios.create({
  baseURL: "https://mobile-marvel-backend-v1.herokuapp.com/",
});

export default api;

 
