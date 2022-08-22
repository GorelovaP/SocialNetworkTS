import React from 'react';
import {AddNewMessageActionCreator, dialogPageType, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: reduxStateType): dialogPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMassageText: state.dialogsPage.newMassageText
    }
}
type mapDispatchToPropsType = {
    AddMessageCallback: () => void,
    onChangeNewMessage: (text: string) => void

}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        AddMessageCallback: () => dispatch(AddNewMessageActionCreator()),
        onChangeNewMessage: (text: string) => dispatch(SendNewMassageActionCreator(text))
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)