import React from 'react';
import axios from 'axios';

const instance = axios.create(
	{
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers: { 'API-KEY': '14df4201-237c-413e-a6c1-4357d4d19732' }
	}
)

export const usersApi = {
	getUsers(currentPage = 1, pageSize = 20) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
		)
	},

	followUsers(userId) {
		return (
			instance.post(`follow/${userId}`).then(response => response.data)
		)
	},

	unFollowUsers(userId) {
		return (
			instance.delete(`follow/${userId}`).then(response => response.data)
		)
	},

	setLogin() {
		return (
			instance.get(`auth/me`).then(response => response.data)
		)
	},

	login(email, password, rememberMe) {
		return (
			instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
		)
	},

	logout() {
		return (
			instance.delete(`auth/login`).then(response => response.data)
		)
	}
}

export const profileApi = {
	getProfile(userId) {
		return (
			instance.get(`profile/${userId}`).then(response => response.data)
		)
	},

	getStatus(userId) {
		return (
			instance.get(`profile/status/${userId}`).then(response => response.data)
		)
	},

	updateStatus(status) {
		return (
			instance.put(`profile/status`, { status: status }).then(response => response.data)
		)
	}
}

export const registrationApi = {
	getRegistration(userId) {
		return (
			instance.get(`profile/${userId}`).then(response => response.data)
		)
	}
}
