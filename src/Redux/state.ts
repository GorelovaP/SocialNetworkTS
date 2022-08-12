let onChange = () => {
    console.log("ff")
}

export const subscribe = (call: () => void) => {
    onChange = call;
}

export type postType =
    {
        id: number
        value: string
        like: Number
    }
export type profilePageType =
    {
        posts: Array<postType>
        newPostText: string

    }

export type MyPostPageType =
    {
        posts: Array<postType>
        addPost: (postMessage: string) => void
        newPostText: string
        ChangeNewPostText: (NewText: string) => void
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
    addPost: (postMessage: string) => void
    ChangeNewPostText: (NewText: string) => void

}
export type stateTypeRoot =
    {
        profilePage: profilePageType
        dialogsPage: dialogPageType
    }
export type stateTypeRootPage = {
    state: stateTypeRoot
    addPost: (postMessage: string) => void
    ChangeNewPostText: (NewText: string) => void
}
export type RootStatePageType = {
    profilePage?: profilePageType
    dialogsPage?: dialogPageType

}
export type stateType = {
    state: RootStatePageType

}


export let state: stateTypeRoot =
    {
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

    }
export let AddPosts = () => {
    debugger
    let newPosts: postType = {
        id: new Date().getTime(),
        value: state.profilePage.newPostText,
        like: 33
    }
    state.profilePage.posts.push(newPosts);
    state.profilePage.newPostText = "";
    onChange();
}

export let ChangeNewPostText = (NewText: string) => {
    state.profilePage.newPostText = NewText;
    onChange();
}