import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

export const register = (formData: any) => API.post('/auth/register', formData);
export const login = (formData: any) => API.post('/auth/login', formData);
export const logout = () => API.post('/auth/logout');
export const getUser = () => API.get('/auth/user');
