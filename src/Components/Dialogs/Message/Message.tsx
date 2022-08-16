import s from "./Message.module.css";
import React from "react";
import {MessageType} from "../../../Redux/state";


export const Message = (props: MessageType) => {


    return (
        <div>
            <div className={s.message}>{props.text}</div>
        </div>
    );
}