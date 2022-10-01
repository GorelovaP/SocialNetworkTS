import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";

import {
    followAC, followTC, getUsersThunkCreator,
    setCurrentPageAC, setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unfollowAC, unfollowTC,
    UsersPageType,
    userType
} from "../../Redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getPaginatorPortion,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../Redux/users-selectors";


class UsersContainerClassComp extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    Follow = (userId: number) => {
        this.props.follow(userId)
    }
    Unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }
    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsersThunk(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                paginatorPortion={this.props.paginatorPortion}
                setCurrentPage={this.setCurrentPage}
                currentPage={this.props.currentPage}
                users={this.props.users}

                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state: reduxStateType): UsersPageType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         paginatorPortion: state.usersPage.paginatorPortion,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: reduxStateType): UsersPageType => {
    return { //достаем данные при помощи селекторов(функции-обертки)
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        paginatorPortion: getPaginatorPortion(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

type  mapDispatchToPropsType =
    {
        follow: (userId: number) => void,
        unfollow: (userId: number) => void,
        setUsers: (users: userType[]) => void,
        setCurrentPage: (currentPage: number) => void,
        setTotalUsersCount: (totalUsersCount: number) => void,
        setToggleIsFetching: (isFetching: boolean) => void,
        getUsersThunk: (currentPage: number, pageSize: number) => void
        followThunk: (userId: number) => void
        unfollowThunk: (userId: number) => void
    }

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setToggleIsFetching: setToggleIsFetchingAC,
    setToggleFollowingProgress: toggleFollowingProgressAC,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followTC,
    unfollowThunk: unfollowTC
})(UsersContainerClassComp)

export type UsersPagePropsType = UsersPageType & mapDispatchToPropsType