import {AddPostAC} from "./profilePage-reducer";

const SEND_MESSAGE = "DIALOG/SEND-MESSAGE"


export type ActionTypeDialog = ReturnType<typeof AddPostAC>
    | ReturnType<typeof SendMessageAC>

export type dialogType = {
    id: number
    name: string
    messages: Array<messageType>
}
export type messageType = {
    id: number
    text: string
    my?: boolean
}
export type dialogPageType = {
    dialogs: Array<dialogType>
}

let initialState: dialogPageType = {
    dialogs: [
        {
            id: 1,
            name: "Polina",
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "My name is Polina, and you?"},
            ]
        },
        {
            id: 2,
            name: "Lena",
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "How are you?"},
            ]
        },
        {
            id: 3, name: "Nik", messages: [
                {id: 1, text: "Hi"},
            ]
        },
        {
            id: 4, name: "Tim", messages: [
                {id: 1, text: "HELLO!"},
            ]
        },
        {
            id: 5, name: "Gena", messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: ":)"},
            ]
        }
    ],

}
export const dialogsPageReducer = (state: dialogPageType = initialState, action: ActionTypeDialog) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.newMessageBody.length === 0 || action.newMessageBody.trim().length === 0) {
                return state
            }
            let newMessage: messageType = {
                id: new Date().getTime(),
                text: action.newMessageBody,
                my: true
            }

            let selectedDialog = state.dialogs.find(d => d.id == action.dialogId)
            if (selectedDialog) {
                selectedDialog.messages.push(newMessage)
            }
            return {
                ...state,
                dialogs: [...state.dialogs]
            }

        }
        default:
            return state
    }
}
export const SendMessageAC = (dialogId: number, newMessageBody: string) => {
    return {type: SEND_MESSAGE, newMessageBody, dialogId} as const
}

