import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-rick-and-morty.herokuapp.com'
});

export default api;