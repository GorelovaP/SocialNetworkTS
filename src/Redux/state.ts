const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT"

export let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, value: "Post 1", like: 21},
                {id: 2, value: "This is 2 post", like: 44}
            ],
            newPostText: "it-camasutra"
        },
        dialogsPage: {
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
        },
    },
    _onChange() {
        console.log("State changed")
    },

    getSate() {
        return this._state
    },
    subscribe(call: () => void) {
        this._onChange = call;
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case ADD_POST: {
                let newPosts: postType = {
                    id: new Date().getTime(),
                    value: this._state.profilePage.newPostText,
                    like: 33
                }
                this._state.profilePage.posts.push(newPosts);
                this._state.profilePage.newPostText = "";
                this._onChange();
                return
            }
            case CHANGE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText;
                this._onChange();
                return
            }
            case SEND_MESSAGE: {
                this._state.dialogsPage.newMassageText = action.newMassageText;
                this._onChange();
                return
            }
            case CHANGE_MESSAGE_TEXT: {
                let newMessage: messageType = {
                    id: new Date().getTime(),
                    text: this._state.dialogsPage.newMassageText,
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMassageText = "";
                this._onChange();
                return
            }


            default:
                throw new Error("I don't understand this type")

        }
    }
}
export const AddPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const ChangeNewPostActionCreator = (newText: string) => {
    return {type: CHANGE_NEW_POST_TEXT, newText: newText} as const
}
export const AddNewMessageActionCreator = () => {
    return {type: CHANGE_MESSAGE_TEXT} as const
}
export const SendNewMassageActionCreator = (newMassageText: string) => {
    return {type: SEND_MESSAGE, newMassageText: newMassageText} as const
}

type ActionType =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>


export type postType =
    {
        id: number
        value: string
        like: number
    }
export type profilePageType =
    {
        posts: Array<postType>
        newPostText: string

    }

export type MyPostPageType =
    {
        posts: Array<postType>
        dispatch: (action: ActionType) => void
        newPostText: string
    }
export type dialogType =
    {
        id: Number
        name: string
    }

export type messageType =
    {
        id: number
        text: string
    }

export type MessageType = {
    text: string;
}
export type dialogPageType =
    {
        dialogs: Array<dialogType>
        messages: Array<messageType>
        newMassageText: string
    }

export type DialogSPagesType = {
    dialogsPage: dialogPageType
    dispatch: (action: ActionType) => void
}

export type PageSPagesType = {
    profilePage: profilePageType
    dispatch: (action: ActionType) => void
}
export type stateTypeRoot =
    {
        profilePage: profilePageType
        dialogsPage: dialogPageType
    }
export type stateTypeRootPage = {
    state: stateTypeRoot
    dispatch: (action: ActionType) => void
}
export type RootStatePageType = {
    profilePage?: profilePageType
    dialogsPage?: dialogPageType
}
export type stateType = {
    state: RootStatePageType
}







