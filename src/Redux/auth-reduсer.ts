import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {AppThunkType} from "./redax-store";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET-USER-DATA"
const SET_ERROR = "SET-ERROR"
const RESET_USER_AUTH_DATA = "RESET-USER-AUTH-DATA"

let initialState: authInitialType = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
    error: ""
}
export type authInitialType = {
    data: {
        userId: string | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean,
    error: string
}

export type ActionTypeAuth =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof resetUserAuthDataAC>
    | ReturnType<typeof setErrorAC>

export const authReducer = (state: authInitialType = initialState, action: ActionTypeAuth): authInitialType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        case SET_ERROR: {
            return {...state, error: action.message}
        }
        case RESET_USER_AUTH_DATA: {
            return {
                data: {
                    userId: null,
                    email: null,
                    login: null
                },
                isAuth: false,
                error: ""
            }
        }
        default:
            return state
    }
}


export const setUserDataAC = (userId: string | null, email: string | null,
                              login: string | null) => ({
    type: SET_USER_DATA, data: {
        userId: userId,
        email: email,
        login: login
    }
} as const)

export const resetUserAuthDataAC = () => {
    return {type: RESET_USER_AUTH_DATA} as const
}

export const setErrorAC = (message: string) => {
    return {type: SET_ERROR, message} as const
}


export const getUserDataTC = () => {

    return (dispatch: Dispatch<ActionTypeAuth>) => {

        AuthAPI.isAuthGET()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserDataAC(id, email, login))
                }
            })

    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {

        AuthAPI.logIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserDataTC())
                } else {
                    // dispatch(setErrorAC(...data.data.messages))
                    dispatch(stopSubmit("login"))
                }
            })

    }
}

export const logoutTC = () => {
    debugger
    return (dispatch: Dispatch<ActionTypeAuth>) => {
        AuthAPI.logOut()
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    dispatch(resetUserAuthDataAC())
                }
            })

    }
}
