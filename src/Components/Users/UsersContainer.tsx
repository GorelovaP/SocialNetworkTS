import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, userType} from "../../Redux/users-reducer";
import {Users} from "./Users";


let mapStateToProps = (state: reduxStateType): UsersPageType => {
    return {
        users: state.usersPage.users
    }
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: userType[]) => void;

}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: userType[]) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export  type UsersPagePropsType = UsersPageType & mapDispatchToPropsType