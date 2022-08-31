import React, {useState} from "react"
import s from "./Users.module.css";
import standardIcon from "../assets/images/standardIcon.png";
import {userType} from "../../Redux/users-reducer";

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
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(props.totalUsersCount / props.paginatorPortion)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.paginatorPortion + 1;
    let rightPortionPageNumber = portionNumber * props.paginatorPortion;

    let [leftDisable, setLeftDisable] = useState<boolean>(true)
    let [rightDisable, setRightDisable] = useState<boolean>(false)

    return (
        <div className={s.usersContainer}>
            <h2 className={s.usersContainer__logo}>Users</h2>
            <div className={s.actionBlock}> поиск, по региону и т д</div>
            <div>
                <button disabled={leftDisable} onClick={() => {
                    if (portionNumber === 2) {
                        setPortionNumber(portionNumber - 1)
                        setLeftDisable(true)
                    }
                    if (portionNumber > 1) {
                        setPortionNumber(portionNumber - 1)
                    } else {
                        setLeftDisable(true)
                        setRightDisable(false)
                    }
                }}>-
                </button>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                            return <span
                                key={p}
                                onClick={() => {
                                    props.setCurrentPage(p)
                                    console.log(portionNumber)
                                }}
                                className={`${s.page} ${props.currentPage === p ? s.selectedPage : ''}`}>{p}</span>
                        }
                    )}

                <button
                    disabled={rightDisable}
                    onClick={() => {
                        if (portionNumber >= portionCount - 1) {
                            setRightDisable(true)
                        } else {
                            setPortionNumber(portionNumber + 1)
                            setLeftDisable(false)
                            console.log(portionNumber)
                        }
                    }}>+
                </button>
            </div>
            <div className={s.usersBlock}>
                {
                    props.users.map(
                        u =>
                            <div className={s.usersBlock__user} key={u.id}>
                                <div className={s.usersBlock__user__avatar}>
                                    <img alt="ava" src={u.photos.small != null ? u.photos.small : standardIcon}
                                         className={s.img}/>
                                </div>

                                <div className={s.usersBlock__user__name}>{u.name}</div>
                                <div>{u.status}</div>

                                <div>
                                    {u.followed ? <button onClick={() => props.Unfollow(u.id)}> Unfollow</button> :
                                        <button onClick={() => props.Follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>

        </div>
    )


}