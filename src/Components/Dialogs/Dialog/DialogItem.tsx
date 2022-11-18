import s from "./DialogItem.module.css";
import {NavLink, useParams} from "react-router-dom";
import React from "react";
import {dialogType} from "../../../Redux/dialogsPage-reducer";


export const DialogItem = (props: dialogType) => {
    const {userId} = useParams()

    return (
        <>
            <NavLink className={`${s.dialog} ${+userId! === props.id && s.active}`}
                     to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </>);
}