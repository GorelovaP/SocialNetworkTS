import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


export const Nav = () =>{
    return( <nav className={s.nav}>
            <div className={s.item}><NavLink  to={"/pages"} activeClassName={s.active}>Profile</NavLink></div>
            <div  className={s.item}><NavLink activeClassName={s.active} to={"/dialogs"}>Massages</NavLink></div>
            <div  className={`${s.item} ${s.active}`}><NavLink activeClassName={s.active} to={"/music"}>Music</NavLink></div>
            <div  className={s.item}><NavLink activeClassName={s.active} to={"/settings"}>Settings</NavLink></div>
        </nav>
    );
}

