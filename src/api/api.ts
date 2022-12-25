import axios from 'axios';
import { ProfileType } from '../types';

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'dfa9082f-57f9-4359-8c49-339d0a7e601b3' },
});

export const usersApi = {
  async getUsers(currentPage = 1, pageSize = 20) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },

  async followUsers(userId: number) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },

  async unFollowUsers(userId: number) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },

  async setLogin() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },

  async login(
    email: string | null,
    password: string | null,
    rememberMe: boolean | null,
    captcha: string | null
  ) {
    const response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
    return response.data;
  },

  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },

  async getCaptchaUrl() {
    const response = await instance.get(`/security/get-captcha-url`);
    return response.data;
  },
};

export const profileApi = {
  async getProfile(userId: number | null) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getStatus(userId: number) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },

  async updateStatus(status: string) {
    const response = await instance.put(`profile/status`, { status: status });
    return response.data;
  },

  async editProfileInfo(profile: ProfileType) {
    const response = await instance.put(`profile`, profile);
    return response.data;
  },

  async sendPhoto(file: string | Blob) {
    const formData = new FormData();
    formData.append('image', file);
    const response = await instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export const registrationApi = {
  async getRegistration(userId: number) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
};
