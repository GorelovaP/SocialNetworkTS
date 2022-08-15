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
            ]
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
            case "ADD-POST": {
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
            case "CHANGE-NEW-POST-TEXT": {
                this._state.profilePage.newPostText = action.newText;
                this._onChange();
                return
            }
            default:
                throw new Error("I don't understand this type")

        }
    }
}


type ActionType = AddPostActionType | ChangeNewPostActionType

export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangeNewPostActionType = {
    type: "CHANGE-NEW-POST-TEXT"
    newText: string;
}


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
        id: Number
        text: string
    }
export type dialogPageType =
    {
        dialogs: Array<dialogType>
        messages: Array<messageType>
    }

export type DialogSPagesType = {
    dialogsPage: dialogPageType

}
export type PageSPagesType = {
    profilePage: profilePageType
    dispatch: (action: ActionType) => void
    // addPost: (postMessage: string) => void
    // ChangeNewPostText: (NewText: string) => void

}
export type stateTypeRoot =
    {
        profilePage: profilePageType
        dialogsPage: dialogPageType
    }
export type stateTypeRootPage = {
    state: stateTypeRoot
    dispatch: (action: ActionType) => void
    // addPost: (postMessage: string) => void
    // ChangeNewPostText: (NewText: string) => void
}
export type RootStatePageType = {
    profilePage?: profilePageType
    dialogsPage?: dialogPageType

}
export type stateType = {
    state: RootStatePageType

}







