import React from "react"
import s from "./Users.module.css";
import standardIcon from "../assets/images/standardIcon.png";
import {userType} from "../../Redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number;
    pageSize: number;
    paginatorPortion: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
    users: Array<userType>;
    Unfollow: (id: number) => void;
    Follow: (id: number) => void;

}

export const Users = (props: UsersType) => {

    return (
        <div className={s.usersContainer}>

            <h2 className={s.usersContainer__logo}>Users</h2>
            <div className={s.actionBlock}> поиск, по региону и т д</div>
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
                                <div>{u.status}</div>

                                <div>
                                    {u.followed ? <
                                            button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "62d66d69-02d1-48f4-85bd-ecfe61bb9699"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.Unfollow(u.id)
                                                    }
                                                })

                                        }}> Unfollow</button> :
                                        <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "62d66d69-02d1-48f4-85bd-ecfe61bb9699"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.Follow(u.id)
                                                    }
                                                })

                                        }}> Folow </button>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>

        </div>
    )


}