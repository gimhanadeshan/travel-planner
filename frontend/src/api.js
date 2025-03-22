import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const createTrip = (tripData) => API.post('/trips', tripData);
export const getTrips = () => API.get('/trips');