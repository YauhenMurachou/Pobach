import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "14df4201-237c-413e-a6c1-4357d4d19732" }
})

export const usersApi = {
  async getUsers(currentPage = 1, pageSize = 20) {
    const response = await instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
		return response.data
  },

  async followUsers(userId) {
    const response = await instance.post(`follow/${userId}`)
		return response.data
  },

  async unFollowUsers(userId) {
    const response = await instance.delete(`follow/${userId}`)
		return response.data
  },

  async setLogin() {
    const response = await instance.get(`auth/me`)
		return response.data
  },

  async login(email, password, rememberMe) {
    const response = await instance
			.post(`auth/login`, { email, password, rememberMe })
		return response.data
  },

  async logout() {
    const response = await instance.delete(`auth/login`)
		return response.data
  }
}

export const profileApi = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`)
		return response.data
  },

  async getStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`)
		return response.data
  },

  async updateStatus(status) {
    const response = await instance.put(`profile/status`, { status: status })
		return response.data
  },

  async sendPhoto(file) {
    const formData = new FormData()
    formData.append("image", file)
    const response = await instance
			.put(`profile/photo`, formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
		return response.data
  }
}

export const registrationApi = {
  async getRegistration(userId) {
    const response = await instance.get(`profile/${userId}`)
		return response.data
  }
}
