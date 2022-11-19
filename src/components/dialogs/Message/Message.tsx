import s from "./Message.module.css";
import React from "react";

type MessageType = {
    text: string
    my?: boolean
}
export const Message = (props: MessageType) => {

    return (
        <div className={props.my ? s.messageMy : s.message}>{props.text}</div>
    );
}