import {ActionType, dialogPageType, messageType} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT"

let initialState ={
        dialogs: [
            {id: 1, name: "Polina"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Nik"},
            {id: 4, name: "Tim"},
            {id: 5, name: "Gena"}
        ],
        messages: [
            {id: 1, text: "Hi"},
            {id: 2, text: "How are you?"},
            {id: 3, text: "Bye"}
        ],
        newMassageText: ""
}
export const dialogsPageReducer = (state: dialogPageType = initialState, action: ActionType) => {
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
