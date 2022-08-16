import {AddPostActionCreator, ChangeNewPostActionCreator, profilePageReducer} from "./profilePage-reducer";
import {AddNewMessageActionCreator, dialogsPageReducer, SendNewMassageActionCreator} from "./dialogsPage-reducer";


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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._onChange()
    }
}

export type ActionType =
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
        newPostText
            :
            string
    }

export type MyPostPageType =
    {
        posts: Array<postType>
        dispatch: (action: ActionType) => void
        newPostText: string
    }
export type dialogType =
    {
        id: number
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







