import {SendMessageAC} from "./dialogsPage-reducer";
import {Dispatch} from "redux";
import {ProfileAPI, ProfileInfoType} from "../api/api";
import {AppThunkType} from "./redax-store";


const ADD_POST = "ADD-POST"
const SET_USER_PAGE = "SET-USER-PAGE"
const SET_STATUS = "SET-STATUS"
const CHANGE_PROFILE_INFO = "CHANGE_PROFILE_INFO"

let initialState: profilePageType = {
    posts: [
        {id: 1, value: "Post 1", like: 21},
        {
            id: 2,
            value: "This is 2 post. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            like: 44
        }
    ],
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        }
    },
    status: ""
}

export type profileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}


export type profilePageType = {
    posts: Array<postType>
    profile: profileType
    status: string
}
export type postType = {
    id: number
    value: string
    like: number
}
export type ActionTypeProfilePage = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof SendMessageAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof changeProfileInfoAC>

export const profilePageReducer = (state: profilePageType = initialState, action: ActionTypeProfilePage) => {
    switch (action.type) {
        case ADD_POST: {
            let newPosts: postType = {
                id: new Date().getTime(),
                value: action.postBody,
                like: 33
            }
            let StateCopy = {...state, posts: [...state.posts]}
            StateCopy.posts.push(newPosts);
            return StateCopy
        }
        case SET_USER_PAGE: {
            return {...state, profile: action.page}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case CHANGE_PROFILE_INFO: {
            debugger
            let profileInfo = {
                aboutMe: action.date.AboutMe,
                contacts: {
                    facebook: action.date.contacts.facebook,
                    website: action.date.contacts.website,
                    vk: action.date.contacts.vk,
                    twitter: action.date.contacts.twitter,
                    instagram: action.date.contacts.instagram,
                    youtube: action.date.contacts.youtube,
                    github: action.date.contacts.github,
                    mainLink: action.date.contacts.mainLink
                },
                lookingForAJob: action.date.lookingForAJob,
                lookingForAJobDescription: action.date.LookingForAJobDescription,
                fullName: action.date.FullName,
                userId: action.date.userId,
                photos: {
                    small: state.profile.photos.small,
                    large: state.profile.photos.large
                }
            }
            return {...state, profile: {...profileInfo, contacts: {...profileInfo.contacts}}}
        }

        default:
            return state
    }

}
export const AddPostActionCreator = (postBody: string) => {
    return {type: ADD_POST, postBody: postBody} as const
}

export const setUserProfileAC = (page: any) => {
    return {type: SET_USER_PAGE, page: page} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status: status} as const
}
export const changeProfileInfoAC = (date: ProfileInfoType) => {
    debugger
    return {type: CHANGE_PROFILE_INFO, date: date} as const
}

export const getUsersProfileTC = (userId: number) => {

    return (dispatch: Dispatch<ActionTypeProfilePage>) => {

        ProfileAPI.getUsersProfileGET(userId).then(data => {
            dispatch(setUserProfileAC(data))
        })
    }
}
export const getStatusTC = (userId: number) => {

    return (dispatch: Dispatch<ActionTypeProfilePage>) => {

        ProfileAPI.getStatusUserProfileStatus(userId).then(data => {
            dispatch(setStatusAC(data))
        })
    }
}
export const updateStatusTC = (status: string) => {

    return (dispatch: Dispatch<ActionTypeProfilePage>) => {

        ProfileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
    }
}
export const updateProfileInformationTC = (date: ProfileInfoType): AppThunkType => {

    return (dispatch) => {
        console.log(date)
        ProfileAPI.updateProfileInformation(date).then(data => {
            if (data.resultCode === 0) {
                debugger
                dispatch(changeProfileInfoAC(date))
            }
        })
    }
}