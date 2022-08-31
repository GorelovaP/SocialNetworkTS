import {AddNewMessageActionCreator, dialogPageType, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";


let mapStateToProps = (state: reduxStateType): dialogPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMassageText: state.dialogsPage.newMassageText
    }
}
export const DialogsContainer = connect(mapStateToProps, {
    AddMessageCallback: AddNewMessageActionCreator,
    onChangeNewMessage: SendNewMassageActionCreator
})(Dialogs)