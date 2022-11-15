import {AddPostAC} from "./profilePage-reducer";

const SEND_MESSAGE = "SEND-MESSAGE"


export type ActionTypeDialog = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SendMessageAC>

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
    ]
}
export const dialogsPageReducer = (state: dialogPageType = initialState, action: ActionTypeDialog) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage: messageType = {
                id: new Date().getTime(),
                text: action.newMessageBody,
            }
            let StateCopy = {...state, messages: [...state.messages]}
            StateCopy.messages.push(newMessage);
            return StateCopy
        }
        default:
            return state
    }
}
export const SendMessageAC = (newMessageBody:string) => {
    return {type: SEND_MESSAGE ,newMessageBody: newMessageBody } as const
}

