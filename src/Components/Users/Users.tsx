import React, {useState} from "react";
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

    _renderPaginator = () => () => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let portionCount = Math.ceil(this.props.totalUsersCount / this.props.paginatorPortion)
        let [portionNumber, setPortionNumber] = useState<number>(1)
        let leftPortionPageNumber = (portionNumber - 1) * this.props.paginatorPortion + 1;
        let rightPortionPageNumber = portionNumber * this.props.paginatorPortion;

        let [leftDisable, setLeftDisable] = useState<boolean>(true)
        let [rightDisable, setRightDisable] = useState<boolean>(false)


        return <div>
            <button disabled={leftDisable} onClick={() => {
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
                                this.setCurrentPage(p)
                                console.log(portionNumber)
                            }}
                            className={`${s.page} ${this.props.currentPage === p ? s.selectedPage : ''}`}>{p}</span>
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
    }

    render() {
        const MyInlineHook = this._renderPaginator();

        return <div className={s.usersContainer}>
            <h2 className={s.usersContainer__logo}>Users</h2>
            <div className={s.actionBlock}> поиск, по региону и т д</div>
            <div><MyInlineHook/></div>
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
