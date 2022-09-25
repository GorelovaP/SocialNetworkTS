import React from 'react';
import {DialogItem} from './Dialog/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogPagePropsType} from "./DialogsContainer";
import {DialogsForm, FormDataType} from "./dialogsForm/DialogsForm";
import {reduxForm} from "redux-form";


export const Dialogs = (props: DialogPagePropsType) => {

    const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(DialogsForm)


    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} text={m.text}/>)

    const onSubmitDialogFormSubmit = (formData: FormDataType) => {
        props.SendMessage(formData.newMessageBody)
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogsElements}
        </div>
        <div className={s.massages}>
            {messagesElements}
        </div>
        <AddMessageFormRedux onSubmit={onSubmitDialogFormSubmit}/>
    </div>)
}