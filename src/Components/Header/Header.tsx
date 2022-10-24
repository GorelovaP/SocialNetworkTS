import React from 'react';
import s from './Header.module.css';
import {useNavigate} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";
import {PATH} from "../../routes/PagesRouters";


export const Header = (props: AuthPropsType) => {
    let navigate = useNavigate()
    const goToLogin = () => {
        navigate(PATH.LOGIN)
    }

    return (<header className={s.header}>

        {props.isAuth ? <div className={s.right}>
            {props.login}
            <button className={s.styledLogBtn} onClick={props.logOut}>Log out</button>
        </div> : <div className={s.right}>
            <button className={s.styledLogBtn} onClick={goToLogin}>Login</button>
        </div>
        }


    </header>);
}
