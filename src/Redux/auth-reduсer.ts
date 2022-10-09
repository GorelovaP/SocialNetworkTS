import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {AppThunkType} from "./redax-store";


const SET_USER_DATA = "SET-USER-DATA"
const RESET_USER_AUTH_DATA = "RESET-USER-AUTH-DATA"
const SET_ERROR_MASSAGE = "SET-ERROR-MASSAGE"

let initialState: authInitialType = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
    errorMassage: ""
}
export type authInitialType = {
    data: {
        userId: string | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean,
    errorMassage: string
}

export type ActionTypeAuth =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof resetUserAuthDataAC>
    | ReturnType<typeof setErrorMassageAC>

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
            return {
                data: {
                    userId: null,
                    email: null,
                    login: null
                },
                isAuth: false,
                errorMassage: ""
            }
        }
        case SET_ERROR_MASSAGE: {
            debugger
            return {
                ...state,
                errorMassage: action.message
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
export const setErrorMassageAC = (message: string) => {
    return {type: SET_ERROR_MASSAGE, message} as const
}


export const getUserDataTC = () => {

    return (dispatch: Dispatch<ActionTypeAuth>) => {

        return AuthAPI.isAuthGET()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setUserDataAC(id, email, login))
                }
            });


    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {

    return (dispatch) => {

        AuthAPI.logIn(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserDataTC())
                    dispatch(setErrorMassageAC(""))
                } else {
                    debugger
                    let message = data.messages.length > 0 ? data.messages[0] : "Check login or password"
                    dispatch(setErrorMassageAC(message))
                    setTimeout(() => {
                        dispatch(setErrorMassageAC(""))
                    }, 7000)
                }
                //сделать позже капчу, если резалт код 10 !!!!!!!!!!!
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
