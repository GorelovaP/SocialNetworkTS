import {ActionType, postType, profilePageType} from "./state";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"


export const profilePageReducer = (state: profilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPosts: postType = {
                id: new Date().getTime(),
                value: state.newPostText,
                like: 33
            }
            state.posts.push(newPosts);
            state.newPostText = "";
            return state
        }
        case CHANGE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state
        }
        default:
            return state
    }

}
export const AddPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const ChangeNewPostActionCreator = (newText: string) => {
    return {type: CHANGE_NEW_POST_TEXT, newText: newText} as const
}