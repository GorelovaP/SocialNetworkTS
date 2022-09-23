import {AddPostActionCreator, ChangeNewPostActionCreator} from "./profilePage-reducer";

const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT"

export type ActionTypeDialog = ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>

export type dialogType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    text: string
}
export type dialogPageType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMassageText: string
}

let initialState: dialogPageType = {
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
export const dialogsPageReducer = (state: dialogPageType = initialState, action: ActionTypeDialog) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let StateCopy = {...state}
            StateCopy.newMassageText = action.newMassageText;
            return StateCopy
        }
        case CHANGE_MESSAGE_TEXT: {
            let newMessage: messageType = {
                id: new Date().getTime(),
                text: state.newMassageText,
            }
            let StateCopy = {...state, messages: [...state.messages]}
            StateCopy.messages.push(newMessage);
            StateCopy.newMassageText = "";
            return StateCopy
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
