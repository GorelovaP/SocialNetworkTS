import s from "./Message.module.css";
import React from "react";

 type MessageType = {
    text: string;
}
export const Message = (props: MessageType) => {


    return (
        <div>
            <div className={s.message}>{props.text}</div>
        </div>
    );
}