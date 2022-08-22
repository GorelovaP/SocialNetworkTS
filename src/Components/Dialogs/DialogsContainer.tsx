import React from 'react';
import {AddNewMessageActionCreator, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";

import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState()
            const onChangeNewMessage = (text: string) => {
               store.dispatch(SendNewMassageActionCreator(text))
            }
            const AddMessage = () => {
                store.dispatch(AddNewMessageActionCreator())
            }
            return (<Dialogs AddMessageCallback={AddMessage}
                             onChangeNewMessage={onChangeNewMessage}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMassageText={state.dialogsPage.newMassageText}/>)
        }}
    </StoreContext.Consumer>
}