import {reduxStateType} from "../../redux/redax-store";
import {connect} from "react-redux";

import {
    followAC, followTC, getUsersThunkCreator,
    setCurrentPageAndPortionAC, setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unfollowAC, unfollowTC,
    UsersPageType,
    userType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage, getCurrentPortion, getFollowingInProgress, getIsFetching,
    getPageSize,
    getPaginatorPortion,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";


class UsersContainerClassComp extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize)
    }

    Follow = (userId: number) => {
        this.props.follow(userId)
    }
    Unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }
    setCurrentPageAndPortion = (currentPage: number, portionNumber: number) => {
        const {pageSize} = this.props
        this.props.setCurrentPageAndPortion(currentPage, portionNumber)
        this.props.getUsersThunk(currentPage, pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                paginatorPortion={this.props.paginatorPortion}
                setCurrentPageAndPortion={this.setCurrentPageAndPortion}
                currentPage={this.props.currentPage}
                currentPortion={this.props.currentPortion}
                users={this.props.users}

                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: reduxStateType): UsersPageType => {
    return { //достаем данные при помощи селекторов(функции-обертки)
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        currentPortion: getCurrentPortion(state),
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
        setCurrentPageAndPortion: (currentPage: number, portionNumber: number) => void,
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
    setCurrentPageAndPortion: setCurrentPageAndPortionAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setToggleIsFetching: setToggleIsFetchingAC,
    setToggleFollowingProgress: toggleFollowingProgressAC,
    getUsersThunk: getUsersThunkCreator,
    followThunk: followTC,
    unfollowThunk: unfollowTC
})(UsersContainerClassComp)

export type UsersPagePropsType = UsersPageType & mapDispatchToPropsType