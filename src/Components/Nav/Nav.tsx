import React from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import s from './Nav.module.css';



export const Nav = () => {
    const match = useMatch('/:routeKey');

    return (<nav className={s.nav_area}>
            <div className={s.nav_container}>
                <div className={s.logo}>SkyChat</div>
                <div className={`${s.item} ${match?.params.routeKey === "pages" ? s.active : undefined}`}>
                    <img alt="item icon" className={s.item__icon}
                         src="https://cdn-icons-png.flaticon.com/512/3334/3334385.png"/>
                    <NavLink to={"/pages"}>Profile</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "users" ? s.active : undefined}`}>
                    <img alt="item icon" className={s.item__icon}
                         src="https://cdn-icons-png.flaticon.com/512/747/747410.png"/>
                    <NavLink to={"/users"}>Find users</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "dialogs" ? s.active : undefined}`}>
                    <img alt="item icon" className={s.item__icon}
                         src="https://cdn-icons-png.flaticon.com/512/3364/3364183.png"/>
                    <NavLink to={"/dialogs"}>Massages</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "music" ? s.active : undefined}`}>
                    <img alt="item icon" className={s.item__icon}
                         src="https://cdn-icons-png.flaticon.com/512/3747/3747233.png"/>
                    <NavLink to={"/music"}>Music</NavLink>
                </div>

                <div className={`${s.item} ${match?.params.routeKey === "settings" ? s.active : undefined}`}>
                    <img alt="item icon" className={s.item__icon}
                         src="https://cdn-icons-png.flaticon.com/512/900/900797.png"/>
                    <NavLink to={"/settings"}>Settings</NavLink>
                </div>

                <NavLink to={"premium"}>
                    <div className={s.PremiumBlock}>
                        <div className={s.PremiumBlock__text}>
                            Premium benefits right now
                        </div>
                        <div className={s.PremiumBlock__img}>
                            <img
                                className={s.PremiumBlock__img_star}
                                alt="Premium benefits right now - star"
                                src="https://cdn-icons-png.flaticon.com/512/616/616490.png"/>
                        </div>

                    </div>
                </NavLink>
            </div>
        </nav>
    );
}

