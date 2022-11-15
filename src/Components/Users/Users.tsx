import React from "react"
import s from "./Users.module.css";
import standardIcon from "../assets/images/standardIcon.png";
import {userType} from "../../Redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {NavLink} from "react-router-dom";


type UsersType = {
    totalUsersCount: number;
    pageSize: number;
    paginatorPortion: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
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
                       paginatorPortion={props.paginatorPortion} setCurrentItem={props.setCurrentPage}
                       currentItem={props.currentPage}/>

            <div className={s.usersBlock}>
                {
                    props.users.map(
                        u =>
                            <div className={s.usersBlock__user} key={u.id}>
                                <div className={s.usersBlock__user__avatar}>
                                    <NavLink to={"/profile/" + u.id}>
                                        <img alt="ava" src={u.photos.small != null ? u.photos.small : standardIcon}
                                             className={s.img}/>
                                    </NavLink>
                                </div>

                                <div className={s.usersBlock__user__name}>{u.name}</div>
                                <div className={s.usersBlock__user__status}>{u.status}</div>

                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress
                                            .some(id => id === u.id)}
                                                  className={s.unfollow}
                                                  onClick={() => {
                                                      props.unfollowThunk(u.id)
                                                  }}>Unfollow</button> :
                                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                className={s.follow}
                                                onClick={() => {
                                                    props.followThunk(u.id)
                                                }}> Follow </button>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>

        </div>
    )


}