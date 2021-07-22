import s from "./Message.module.css";
import React, {RefObject} from "react";

type MessageType={
    text:string;
}


export const Message=(props:MessageType)=>{
    let newSMS: RefObject<HTMLTextAreaElement> = React.createRef();


    return(
   <div> <div className={s.message}>{props.text}</div>
    <textarea ref={newSMS}></textarea>
    <button onClick={()=>{ let text = newSMS.current?.value;
        return alert(text)
    }
    }>Отправить смс</button>
   </div>
    );
}