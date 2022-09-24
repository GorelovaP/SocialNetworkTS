import {AddNewMessageActionCreator, SendNewMassageActionCreator} from "./dialogsPage-reducer";
import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";


const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"
const SET_USER_PAGE = "SET-USER-PAGE"
const SET_STATUS = "SET-STATUS"

let initialState: profilePageType = {
    posts: [
        {id: 1, value: "Post 1", like: 21},
        {id: 2, value: "This is 2 post", like: 44}
    ],
    newPostText: "it-camasutra",
    profile: null,
    status: ""
}

export type profileType = null | {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}


export type profilePageType = {
    posts: Array<postType>
    newPostText: string
    profile: profileType
    status: string
}
export type postType = {
    id: number
    value: string
    like: number
}
export type ActionTypeProfilePage = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export const profilePageReducer = (state: profilePageType = initialState, action: ActionTypeProfilePage) => {
    switch (action.type) {
        case ADD_POST: {
            let newPosts: postType = {
                id: new Date().getTime(),
                value: state.newPostText,
                like: 33
            }
            let StateCopy = {...state, posts: [...state.posts]}
            StateCopy.posts.push(newPosts);
            StateCopy.newPostText = "";
            return StateCopy
        }
        case CHANGE_NEW_POST_TEXT: {
            let StateCopy = {...state} //не делаем глубокую копию, т к не меняем посты
            StateCopy.newPostText = action.newText;
            return StateCopy
        }
        case SET_USER_PAGE: {
            debugger
            return {...state, profile: action.page}
        }
        case SET_STATUS: {
            debugger
            return {...state, status: action.status}
        }

        default:
            return state
    }

}
export const AddPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const ChangeNewPostActionCreator = (newText: string) => {
    return {type: CHANGE_NEW_POST_TEXT, newText: newText} as const
}
export const setUserProfileAC = (page: any) => {
    return {type: SET_USER_PAGE, page: page} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status: status} as const
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
            if (data.resultCode === 0){
                dispatch(setStatusAC(status))
            }
        })
    }
}