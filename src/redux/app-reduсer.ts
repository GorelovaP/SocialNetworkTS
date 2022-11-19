import {AppThunkType} from "./redax-store";
import {getUserDataTC} from "./auth-reduсer";


const SET_INITIALISED = "APP/SET-INITIALISED"
const SET_APP_ERROR = "APP/SET-APP-ERROR"


let initialState: appInitialType = {
    initialized: false,
    error: ""
}
export type appInitialType = {
    initialized: boolean
    error: string
}

export type ActionTypeApp = ReturnType<typeof setInitialisedSuccessAC> | ReturnType<typeof setAppErrorAC>

export const appReducer = (state: appInitialType = initialState, action: ActionTypeApp): appInitialType => {
    switch (action.type) {
        case SET_INITIALISED: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_APP_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state
    }
}


export const setInitialisedSuccessAC = () => {
    return {type: SET_INITIALISED} as const
}
export const setAppErrorAC = (error: string) => {
    return {type: SET_APP_ERROR, error} as const
}


export const initialiseAppTC = (): AppThunkType => {
    return async (dispatch) => {
        try {
            await dispatch(getUserDataTC())
            dispatch(setInitialisedSuccessAC())
        } catch (err) {
            dispatch(setAppErrorAC('Something went wrong...'))
        }
    }
}


