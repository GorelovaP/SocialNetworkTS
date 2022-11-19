import {AddPostAC, deletePostAC, profilePageReducer, profilePageType} from "./profilePage-reducer";

let state: profilePageType = {
    posts: [
        {id: 1, value: "Post 1", like: 21,  isLiked: false},
        {
            id: 2,
            value: "This is 2 post. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            like: 44,
            isLiked: false
        }
    ],
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        },
        isChanged:false
    },
    status: ""
}


it("post length should be increased", () => {
    let action = AddPostAC("test 1")

    let newState = profilePageReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it("post 0 value should have expected result", () => {
    let action = AddPostAC("test 1")

    let newState = profilePageReducer(state, action)

    expect(newState.posts[0].value).toBe("test 1")
})

it("post length after delete  shouldn't be decrement if id is incorrect", () => {
    let action = deletePostAC(10000)

    let newState = profilePageReducer(state, action)

    expect(newState.posts.length).toBe(2)
})