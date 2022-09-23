const SET_USER_DATA = "SET-USER-DATA"

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

export type ActionTypeAuth = ReturnType<typeof setUserDataAC>
export const authReduсer = (state: authInitialType = initialState, action: ActionTypeAuth): authInitialType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: {...action.data},
                isAuth: true
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

