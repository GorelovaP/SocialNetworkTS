import React from "react";
import s from "./Users.module.css";
import standardIcon from "../assets/images/standardIcon.png";
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";

export class Users extends React.Component<UsersPagePropsType> {

    constructor(props: UsersPagePropsType) {
        super(props);
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

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.usersContainer}>
            <h2 className={s.usersContainer__logo}>Users</h2>
            <div className={s.actionBlock}> поиск, по региону и т д</div>
            <div>
                {pages.map(p => {
                        return <span
                            onClick={() => {
                                this.setCurrentPage(p)
                            }}
                            className={`${s.page} ${this.props.currentPage === p ? s.selectedPage : ''}`}>{p}</span>
                    }
                )}
            </div>
            <div className={s.usersBlock}>
                {
                    this.props.users.map(
                        u =>
                            <div className={s.usersBlock__user} key={u.id}>
                                <div className={s.usersBlock__user__avatar}>
                                    <img alt="ava" src={u.photos.small != null ? u.photos.small : standardIcon}
                                         className={s.img}/>
                                </div>

                                <div className={s.usersBlock__user__name}>{u.name}</div>
                                <div>{u.status}</div>

                                <div>
                                    {u.followed ? <button onClick={() => this.Unfollow(u.id)}> Unfollow</button> :
                                        <button onClick={() => this.Follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>

        </div>
    }
}
