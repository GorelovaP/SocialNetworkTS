import {reduxStateType} from "./redax-store";

export const getUsers = (state: reduxStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: reduxStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: reduxStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: reduxStateType) => {
    return state.usersPage.currentPage
}
export const getPaginatorPortion = (state: reduxStateType) => {
    return state.usersPage.paginatorPortion
}
export const getIsFetching = (state: reduxStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: reduxStateType) => {
    return state.usersPage.followingInProgress
}
