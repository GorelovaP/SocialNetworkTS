import React from "react"
import s from "./Users.module.css";
import {userType} from "../../redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./user/User";


type UsersType = {
    totalUsersCount: number;
    pageSize: number;
    paginatorPortion: number;
    setCurrentPageAndPortion: (page: number, portionNumber: number) => void;
    currentPage: number;
    currentPortion: number;
    users: Array<userType>;
    followingInProgress: number[];
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
}

export const Users = (props: UsersType) => {

    return (
        <div className={s.usersContainer}>

            <h2 className={s.usersContainer__logo}>Users</h2>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       paginatorPortion={props.paginatorPortion} setCurrentItem={props.setCurrentPageAndPortion}
                       currentItem={props.currentPage} currentPortion={props.currentPortion}/>

            <div className={s.usersBlock}>
                {
                    props.users.map(
                        u => <User id={u.id}
                                   key={u.id}
                                   followed={u.followed}
                                   smallPhoto={u.photos.small}
                                   name={u.name}
                                   status={u.status}
                                   followingInProgress={props.followingInProgress}
                                   followThunk={props.followThunk}
                                   unfollowThunk={props.unfollowThunk}
                        />
                    )}
            </div>

        </div>
    )


}