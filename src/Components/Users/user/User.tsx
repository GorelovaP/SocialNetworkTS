import React from "react"
import s from "./User.module.css";
import standardIcon from "../../assets/images/standardIcon.png"
import {NavLink} from "react-router-dom";


type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    smallPhoto: string
    followingInProgress: number[];
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void

}

export const User = (props: UsersType) => {
    return (
        <div className={s.usersBlock__user} key={props.id}>
            <div className={s.usersBlock__user__avatar}>
                <NavLink to={"/profile/" + props.id}>
                    <img alt="ava" src={props.smallPhoto != null ? props.smallPhoto : standardIcon}
                         className={s.img}/>
                </NavLink>
            </div>

            <div className={s.usersBlock__user__name}>{props.name}</div>
            <div className={s.usersBlock__user__status}>{props.status}</div>

            <div>
                {props.followed
                    ? <button disabled={props.followingInProgress
                        .some(id => id === props.id)}
                              className={s.unfollow}
                              onClick={() => {
                                  props.unfollowThunk(props.id)
                              }}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                            className={s.follow}
                            onClick={() => {
                                props.followThunk(props.id)
                            }}> Follow </button>
                }
            </div>
        </div>
    )
}