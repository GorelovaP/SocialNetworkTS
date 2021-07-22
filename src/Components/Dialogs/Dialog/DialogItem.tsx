import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import { dialogType } from "../../../Redux/state";


 export const DialogItem = (props:dialogType) => {
    return (
        <div >
            <NavLink className={s.dialog + ' ' + s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>

        </div>);
}