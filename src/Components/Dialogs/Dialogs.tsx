import React from 'react';
import {DialogItem} from './Dialog/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogPagePropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom"


export const Dialogs = (props: DialogPagePropsType) => {


    const onChangeNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeNewMessage(e.currentTarget.value)
    }
    const AddMessage = () => {
        props.AddMessageCallback()
    }


    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} text={m.text}/>)


    if (!props.isAuth) return <Navigate to={"/login"}/>
    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsElements}
        </div>
        <div className={s.massages}>
            {messagesElements}
            <div>
                <div>
                      <textarea onChange={onChangeNewMessage} value={props.newMassageText}
                                placeholder={"enter a new message"}> </textarea>
                </div>
                <button onClick={AddMessage}>Отправить смс</button>
            </div>
        </div>
    </div>)
}