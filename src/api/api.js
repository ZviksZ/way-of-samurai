import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
    headers: {
        'API-KEY': 'c4b7657d-5c8a-45b0-996f-3cbb21003e6c'
    }    
})

export const userAPI = {
    getUsers(currentPage, pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    }
}
export const authAPI = {
    getMyProfile() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(login, password, rememberMe) {
        return instance.post(`auth/login`, {
            email: login,
            password: password,
            rememberMe: rememberMe
        })
    },
    logout() {
        return instance.post(`auth/logout`)
    }
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}


 
