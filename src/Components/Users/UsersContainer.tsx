import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    userType
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


class UsersContainerClassComp extends React.Component<UsersPagePropsType> {

    constructor(props: UsersPagePropsType) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    Follow = (userId: number) => {
        this.props.follow(userId)
    }
    Unfollow = (userId: number) => {
        this.props.unfollow(userId)
    }
    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            paginatorPortion={this.props.paginatorPortion}
            setCurrentPage={this.setCurrentPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            Unfollow={this.Unfollow}
            Follow={this.Follow}/>
    }
}

let mapStateToProps = (state: reduxStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        paginatorPortion: state.usersPage.paginatorPortion
    }
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: userType[]) => void;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClassComp)
export  type UsersPagePropsType = UsersPageType & mapDispatchToPropsType