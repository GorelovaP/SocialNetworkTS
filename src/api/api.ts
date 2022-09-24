import axios from "axios";


const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "62d66d69-02d1-48f4-85bd-ecfe61bb9699"
        }
    }
)


export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

export const FollowAPI = {
    followUsersPOST(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUsersDELETE(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const ProfileAPI = {
    getUsersProfileGET(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}


export const AuthAPI = {
    isAuthGET() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}



