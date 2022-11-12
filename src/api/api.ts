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
    },
    getStatusUserProfileStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    updateProfileInformation(data:ProfileInfoType) {
        return instance.put(`profile`, {...data}).then(response => response.data)
    }

}


export const AuthAPI = {
    isAuthGET() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    logIn(email: string, password: string, rememberMe?: boolean) {
        if (!rememberMe) rememberMe = false

        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logOut() {

        return instance.delete(`auth/login`).then(response => response.data)
    },
}


export type ProfileInfoType = {
    userId: number
    AboutMe: string
    lookingForAJob:boolean
    LookingForAJobDescription: string
    FullName: string
    contacts: {
        github?: string
        instagram?:string
        vk?: string
        facebook?: string
        twitter?: string
        website?: string
        youtube?: string
        mainLink?: string
    }
}