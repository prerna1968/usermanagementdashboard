import axios from 'axios';
import { apiEndPoints } from '../../constants/enum';

const API_URL = 'https://reqres.in/api';

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}${apiEndPoints.SIGNIN}`, { email, password });
  return response.data;
};

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}${apiEndPoints.SIGNUP}`, { email, password });
  return response.data;
};
