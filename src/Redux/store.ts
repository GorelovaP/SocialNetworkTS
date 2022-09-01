//памятка, как работает стор


import {AddPostActionCreator, ChangeNewPostActionCreator, profilePageReducer} from "./profilePage-reducer";
import {AddNewMessageActionCreator, dialogsPageReducer, SendNewMassageActionCreator} from "./dialogsPage-reducer";


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, value: "Post 1", like: 21},
                {id: 2, value: "This is 2 post", like: 44}
            ],
            newPostText: "it-camasutra",
            profile: null
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

    getState() {
        return this._state
    },
    subscribe(call: () => void) {
        this._onChange = call;
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._onChange()
    }
}

type ActionType =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostActionCreator>
    | ReturnType<typeof SendNewMassageActionCreator>
    | ReturnType<typeof AddNewMessageActionCreator>


type postType =
    {
        id: number
        value: string
        like: number
    }
type profilePageType =
    {
        posts: Array<postType>
        newPostText: string
    }

export type MyPostPageType =
    {
        posts: Array<postType>
        updatePostText: (text: string) => void;
        addPost: () => void;
        newPostText: string
    }
type dialogType =
    {
        id: number
        name: string
    }

type messageType =
    {
        id: number
        text: string
    }

export type MessageType = {
    text: string;
}
type dialogPageType =
    {
        dialogs: Array<dialogType>
        messages: Array<messageType>
        newMassageText: string
    }

export type DialogSPagesType = {
    AddMessageCallback: () => void;
    onChangeNewMessage: (text: string) => void
    dialogs: Array<dialogType>
    messages: Array<messageType>
    newMassageText: string
}


export type stateTypeRoot =
    {
        profilePage: profilePageType
        dialogsPage: dialogPageType
    }
export type stateTypeRootPage = {}
export type RootStatePageType = {
    profilePage?: profilePageType
    dialogsPage?: dialogPageType
}
export type stateType = {
    state: RootStatePageType
}







