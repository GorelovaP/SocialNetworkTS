import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {AppThunkType} from "./redax-store";


const SET_USER_DATA = "SET-USER-DATA"
const RESET_USER_AUTH_DATA = "RESET-USER-AUTH-DATA"

let initialState: authInitialType = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false
}
export type authInitialType = {
    data: {
        userId: string | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean
}

export type ActionTypeAuth = ReturnType<typeof setUserDataAC> | ReturnType<typeof resetUserAuthDataAC>

export const authReducer = (state: authInitialType = initialState, action: ActionTypeAuth): authInitialType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        }
        case RESET_USER_AUTH_DATA: {
            debugger
            return {
                data: {
                    userId: null,
                    email: null,
                    login: null
                },
                isAuth: false
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
