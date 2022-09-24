import {AddNewMessageActionCreator, dialogPageType, SendNewMassageActionCreator} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";


type mapStateToPropsType = dialogPageType & { isAuth: boolean }
type mapDispatchPropsType = {
    AddMessageCallback: () => void,
    onChangeNewMessage: (newMassageText: string) => void
}
let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMassageText: state.dialogsPage.newMassageText,
        isAuth: state.auth.isAuth
    }
}


export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        AddMessageCallback: AddNewMessageActionCreator,
        onChangeNewMessage: SendNewMassageActionCreator
    }),
    withAuthRedirect
)(Dialogs)

export type DialogPagePropsType = mapStateToPropsType & mapDispatchPropsType