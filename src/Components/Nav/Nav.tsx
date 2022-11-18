import React from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import s from './Nav.module.css';
import {BsPersonCircle} from "react-icons/bs";
import {HiUsers} from "react-icons/hi";
import {RiMessage3Fill, RiSettings4Fill} from "react-icons/ri";
import {SiApplemusic} from "react-icons/si";
import {FaRegStarHalf} from "react-icons/fa";

type PropsType = {
    userId: string | null
}
export const Nav = (props: PropsType) => {
    const matchUserId = useMatch('/:routeKey/:userId');
    const match = useMatch('/:routeKey');

    return (<nav className={s.nav_area}>
            <div className={s.nav_container}>
                <div className={s.logo}>
                    <FaRegStarHalf/> SkyChat
                </div>
                <div
                    className={`${s.item} ${matchUserId?.params.userId == props.userId && matchUserId?.params.userId != undefined ? s.active : undefined}`}>
                    <BsPersonCircle className={s.item__icon}/>
                    <NavLink to={props.userId ? "/profile/" + props.userId : "/login"}>Profile</NavLink>
                </div>

                <div
                    className={`${s.item} ${match?.params.routeKey === "users" || (matchUserId?.params.userId != props.userId && matchUserId?.params.userId != undefined) ? s.active : undefined}`}>
                    <HiUsers className={s.item__icon}/>
                    <NavLink to={"/users"}>Find users</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "dialogs" ? s.active : undefined}`}>
                    <RiMessage3Fill className={s.item__icon}/>
                    <NavLink to={props.userId ? "/dialogs" : "/login"}>Massages</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "music" ? s.active : undefined}`}>
                    <SiApplemusic className={s.item__icon}/>
                    <NavLink to={"/music"}>Music</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "settings" ? s.active : undefined}`}>
                    <RiSettings4Fill className={s.item__icon}/>
                    <NavLink to={"/settings"}>Settings</NavLink>
                </div>
            </div>
        </nav>
    );
}

