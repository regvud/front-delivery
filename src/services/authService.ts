import { urls } from '../constants/urls';
import { UserLogin } from '../types/userLoginType';
import { apiService } from './apiService';

export const authService = {
  login: (user: UserLogin) => apiService.post(urls.auth.login, user),
};
