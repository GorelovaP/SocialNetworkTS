import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";
import standardIcon from "../assets/images/standardIcon.png"


export const Users = (props: UsersPagePropsType) => {
    let GetUsers = () => {
        if (props.users.length === 0) {
            debugger
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                props.setUsers(response.data.items)
            })
            debugger
        }
    }
    let Follow = (userId: number) => {
        props.follow(userId)
    }
    let Unfollow = (userId: number) => {
        props.unfollow(userId)

    }
    return (<div className={s.usersContainer}>
            <h2 className={s.usersContainer__logo}>Users</h2>
            <div className={s.actionBlock}> поиск, по региону и т д</div>
            <button onClick={GetUsers}>Get users</button>
            <div className={s.usersBlock}>
                {
                    props.users.map(
                        (u) =>
                            <div className={s.usersBlock__user} key={u.id}>
                                <div className={s.usersBlock__user__avatar}>
                                    <img alt="ava" src={u.photos.small != null ? u.photos.small : standardIcon}
                                         className={s.img}/>
                                </div>

                                <div className={s.usersBlock__user__name}>{u.name}</div>
                                <div>{u.status}</div>

                                <div>
                                    {u.followed ? <button onClick={() => Unfollow(u.id)}> Unfollow</button> :
                                        <button onClick={() => Follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>

        </div>
    )
}
