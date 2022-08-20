import React from 'react';
import {AddNewMessageActionCreator, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../Redux/redax-store";

type DialogsContainerType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsContainerType) => {

    let state = props.store.getState()
    const onChangeNewMessage = (text: string) => {
        props.store.dispatch(SendNewMassageActionCreator(text))
    }
    const AddMessage = () => {
        props.store.dispatch(AddNewMessageActionCreator())
    }

    return (<Dialogs AddMessageCallback={AddMessage}
                     onChangeNewMessage={onChangeNewMessage}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMassageText={state.dialogsPage.newMassageText}/>)
}