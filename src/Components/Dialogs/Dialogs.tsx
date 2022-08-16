import React from 'react';
import { DialogSPagesType} from '../../Redux/state';
import {DialogItem} from './Dialog/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {AddNewMessageActionCreator, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";


export const Dialogs = (props: DialogSPagesType) => {


    const onChangeNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(SendNewMassageActionCreator(e.currentTarget.value))
    }
    const AddMessage = () => {
        props.dispatch(AddNewMessageActionCreator())
    }


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.text}/>)


    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsElements}
        </div>
        <div className={s.massages}>
            {messagesElements}
            <div>
                <div>
                      <textarea onChange={onChangeNewMessage} value={props.dialogsPage.newMassageText}
                                placeholder={"enter a new message"}> </textarea>
                </div>
                <button onClick={AddMessage}>Отправить смс</button>
            </div>
        </div>
    </div>)
}