import { instance } from 'src/api/api';

export const usersApi = {
  async getUsers(
    currentPage = 1,
    pageSize = 100,
    name?: string,
    friend?: boolean
  ) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}${
        name ? `&term=${name}` : ''
      }${friend ? `&friend=${friend}` : ''}`
    );
    return response.data;
  },

  async getFriends(currentPage = 1, pageSize = 100, name?: string) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}${
        name ? `&term=${name}` : ''
      }${`&friend=true`}`
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
