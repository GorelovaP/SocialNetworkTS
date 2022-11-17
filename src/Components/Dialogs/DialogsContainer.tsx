import {SendMessageAC, dialogPageType} from "../../Redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";


type mapStateToPropsType = dialogPageType & { isAuth: boolean }
type mapDispatchPropsType = {
    SendMessage: (newMessageBody: string) => void,
    onChangeNewMessage: (newMassageText: string) => void
}
let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        SendMessage: SendMessageAC
    }),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer
export type DialogPagePropsType = mapStateToPropsType & mapDispatchPropsType