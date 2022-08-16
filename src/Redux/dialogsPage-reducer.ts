import {ActionType, dialogPageType, messageType} from "./state";

const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT"


export const dialogsPageReducer = (state: dialogPageType, action: ActionType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            state.newMassageText = action.newMassageText;
            return state
        }
        case CHANGE_MESSAGE_TEXT: {
            let newMessage: messageType = {
                id: new Date().getTime(),
                text: state.newMassageText,
            }
            state.messages.push(newMessage);
            state.newMassageText = "";
            return state
        }
        default:
            return state
    }
}
export const AddNewMessageActionCreator = () => {
    return {type: CHANGE_MESSAGE_TEXT} as const
}
export const SendNewMassageActionCreator = (newMassageText: string) => {
    return {type: SEND_MESSAGE, newMassageText: newMassageText} as const
}
