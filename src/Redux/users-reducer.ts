const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"

type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export type UsersPageType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    paginatorPortion: number
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
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    paginatorPortion: 10

}
export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
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
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT : {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        default :
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId: userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId: userId} as const
}
export const setUsersAC = (users: userType[]) => {
    return {type: SET_USERS, users: users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: SET_TOTAL_COUNT, totalUsersCount: totalUsersCount} as const
}