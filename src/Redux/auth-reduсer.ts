import {Dispatch} from "redux";
import {AuthAPI, SecurityAPI} from "../api/api";
import {AppThunkType} from "./redax-store";


const SET_USER_DATA = "AUTH/SET-USER-DATA"
const RESET_USER_AUTH_DATA = "AUTH/RESET-USER-AUTH-DATA"
const SET_ERROR_MASSAGE = "AUTH/SET-ERROR-MASSAGE"
const SET_CAPTCHA = "AUTH/SET-CAPTCHA"

let initialState: authInitialType = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
    errorMassage: "",
    captcha: ""
}
export type authInitialType = {
    data: {
        userId: string | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean,
    errorMassage: string
    captcha: string
}

export type ActionTypeAuth =
    ReturnType<typeof setUserDataAC>
    | ReturnType<typeof resetUserAuthDataAC>
    | ReturnType<typeof setErrorMassageAC>
    | ReturnType<typeof setCaptchaAC>

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
                errorMassage: "",
                captcha: ""
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state, captcha: action.captcha
            }
        }
        case SET_ERROR_MASSAGE: {
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
export const setCaptchaAC = (captcha: string) => {
    return {type: SET_CAPTCHA, captcha} as const
}


export const getUserDataTC = () => {

    return async (dispatch: Dispatch<ActionTypeAuth>) => {
        try {
            let data = await AuthAPI.isAuthGET()

            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserDataAC(id, email, login))
            }
        } catch (err) {

        }

    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunkType => {

    return async (dispatch) => {
        try {
            let data = await AuthAPI.logIn(email, password, rememberMe, captcha)
            if (data.resultCode === 0) {
                dispatch(getUserDataTC())
                dispatch(setErrorMassageAC(""))
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaTC())
                }
                let message = data.messages.length > 0 ? data.messages[0] : "Check login or password"
                dispatch(setErrorMassageAC(message))
                setTimeout(() => {
                    dispatch(setErrorMassageAC(""))
                }, 7000)
            }


            //сделать позже капчу, если резалт код 10 !!!!!!!!!!!
        } catch (err) {

        }
    }
}

export const logoutTC = () => {
    return async (dispatch: Dispatch<ActionTypeAuth>) => {
        try {
            let data = await AuthAPI.logOut()

            if (data.resultCode === 0) {
                dispatch(resetUserAuthDataAC())
            }

        } catch (err) {

        }
    }
}

export const getCaptchaTC = () => {
    return async (dispatch: Dispatch<ActionTypeAuth>) => {
        try {
            let data = await SecurityAPI.getCaptchaURL()
            const captcha = data.data.url
            dispatch(setCaptchaAC(captcha))
        } catch (err) {

        }
    }
}
