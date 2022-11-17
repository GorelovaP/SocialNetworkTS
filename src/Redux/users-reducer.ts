import {FollowAPI, UsersAPI} from "../api/api";
import {Dispatch} from "redux";


const FOLLOW = "USERS/FOLLOW"
const UNFOLLOW = "USERS/UNFOLLOW"
const SET_USERS = "USERS/SET-USERS"
const SET_CURRENT_PAGE_AND_PORTION = "USERS/SET-CURRENT-PAGE-AND-PORTION"
const SET_TOTAL_COUNT = "USERS/SET-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = "USERS/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "USERS/TOGGLE-IS-FOLLOWING-PROGRESS"

export type ActionTypeUser = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAndPortionAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setToggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>


export type UsersPageType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number,
    currentPortion: number,
    paginatorPortion: number,
    isFetching: boolean,
    followingInProgress: number[]
}


export type userType = {
    name: string,
    id: number,
    photoUrl: string,
    photos: {
        small: string,
        large: string
    }
    status: string,
    followed: boolean,
}


let initialState: UsersPageType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    currentPortion:1,
    paginatorPortion: 10,
    isFetching: false,
    followingInProgress: []

}
export const usersReducer = (state: UsersPageType = initialState, action: ActionTypeUser): UsersPageType => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case  UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE_AND_PORTION: {
            return {
                ...state, currentPage: action.currentPage, currentPortion: action.currentPortion
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)// filter - возвращает копию нового массива
            }
        }


        default :
            return state
    }
}


export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsersAC = (users: userType[]) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPageAndPortionAC = (currentPage: number, currentPortion: number) => {
    return {type: SET_CURRENT_PAGE_AND_PORTION, currentPage, currentPortion} as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: SET_TOTAL_COUNT, totalUsersCount} as const
}
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgressAC = (userId: number, isFetching: boolean) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching} as const
}

//type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return async (dispatch: Dispatch<ActionTypeUser>) => {
        try {
            dispatch(setToggleIsFetchingAC(true))

            let data = await UsersAPI.getUsers(currentPage, pageSize)
            dispatch(setToggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))

        } catch (err) {

        } finally {
            setTimeout(() => dispatch(setToggleIsFetchingAC(false)), 400)
        }
    }

}

export const followTC = (userId: number) => {

    return async (dispatch: Dispatch<ActionTypeUser>) => {
        try {
            dispatch(toggleFollowingProgressAC(userId, true))

            let data = await FollowAPI.followUsersPOST(userId)

            if (data.resultCode === 0) {
                dispatch(followAC(userId))
            }

        } catch (err) {

        } finally {
            dispatch(toggleFollowingProgressAC(userId, false))
        }

    }
}

export const unfollowTC = (userId: number) => {

    return async (dispatch: Dispatch<ActionTypeUser>) => {
        try {
            dispatch(toggleFollowingProgressAC(userId, true))
            let data = await FollowAPI.unfollowUsersDELETE(userId)
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }

        } catch (err) {

        } finally {
            dispatch(toggleFollowingProgressAC(userId, false))
        }


    }
}

