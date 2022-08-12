import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';


export const Nav = () => {
    return (<nav className={s.nav}>
            <div className={s.item}><NavLink to={"/pages"} className={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink className={s.active} to={"/dialogs"}>Massages</NavLink></div>
            <div className={`${s.item} ${s.active}`}><NavLink className={s.active} to={"/music"}>Music</NavLink></div>
            <div className={s.item}><NavLink className={s.active} to={"/settings"}>Settings</NavLink></div>
        </nav>
    );
}

