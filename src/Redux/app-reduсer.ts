import {AppThunkType} from "./redax-store";
import {getUserDataTC} from "./auth-reduсer";


const SET_INITIALISED = "APP/SET-INITIALISED"


let initialState: appInitialType = {
    initialized: false
}
export type appInitialType = {
    initialized: boolean
}

export type ActionTypeApp = ReturnType<typeof setInitialisedSuccessAC>

export const appReducer = (state: appInitialType = initialState, action: ActionTypeApp): appInitialType => {
    switch (action.type) {
        case SET_INITIALISED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


export const setInitialisedSuccessAC = () => {
    return {type: SET_INITIALISED} as const
}


export const initialiseAppTC = (): AppThunkType => {
    return async (dispatch) => {
        try {
            await dispatch(getUserDataTC())
            dispatch(setInitialisedSuccessAC())
        } catch (err) {
            console.log(err)
        }
    }
}


