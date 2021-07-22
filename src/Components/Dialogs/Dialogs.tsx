import React from 'react';
import {DialogSPagesType} from '../../Redux/state';
import {DialogItem} from './Dialog/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';



export const Dialogs = (props:DialogSPagesType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem  name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message text={m.text}/>)


    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsElements}
        </div>
        <div className={s.massages}>
            {messagesElements}
        </div>
    </div>)
}