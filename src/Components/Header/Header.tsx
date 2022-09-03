import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

export const Header = (props: AuthPropsType) => {
    return (<header className={s.header}>
        <img
            src="https://w7.pngwing.com/pngs/743/334/png-transparent-wildfire-flame-organization-others-orange-computer-logo.png"
            alt="Logo"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}> Login</NavLink>}
        </div>
    </header>);
}
