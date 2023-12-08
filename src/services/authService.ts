import { urls } from '../constants/urls';
import { Profile, UserLogin } from '../types/userTypes';
import { apiService } from './apiService';

export const authService = {
  login: (user: UserLogin) => apiService.post(urls.auth.login, user),
  profile: () =>
    apiService.get<Profile>(urls.auth.profile).then((res) => res.data),
};
