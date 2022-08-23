import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import s from './Users.module.css';

export const Users = (props: UsersPagePropsType) => {
    console.log(props.users)
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: false,
                fullName: "Polina",
                status: "Hi",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: true,
                fullName: "Alina",
                status: "jfjf",
                location: {city: "NNN", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: false,
                fullName: "Masha",
                status: "f,fkf",
                location: {city: "DDD", country: "Belarus"}
            },
            {
                id: 4,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: false,
                fullName: "Sasha",
                status: "asas",
                location: {city: "SSS", country: "Belarus"}
            },
            {
                id: 5,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: false,
                fullName: "Andrey",
                status: "asssss",
                location: {city: "LLL", country: "Belarus"}
            },
            {
                id: 6,
                photoUrl: "https://get.pxhere.com/photo/man-sun-photography-male-guy-portrait-ceremony-photograph-portrait-photography-1409817.jpg",
                followed: false,
                fullName: "Vika",
                status: "asassas",
                location: {city: "NNN", country: "Belarus"}
            }
        ])
    }

    let Follow = (userId: number) => {
        props.follow(userId)
    }
    let Unfollow = (userId: number) => {
        props.unfollow(userId)

    }
    return (<div>
            <div>d</div>
            <div>
                {
                    props.users.map(
                        (u) =>
                            <div key={u.id}>
                                <div>
                                    <img alt="ava" src={u.photoUrl} className={s.img}/>
                                </div>
                                <div>
                                    {u.followed ? <button onClick={() => Unfollow(u.id)}> Unfollow</button> :
                                        <button onClick={() => Follow(u.id)}>Follow</button>
                                    }

                                </div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                    )
                }
            </div>

        </div>
    )
}
