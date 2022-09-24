import {AddPostActionCreator, ChangeNewPostActionCreator, profilePageType} from "../../../Redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {reduxStateType} from "../../../Redux/redax-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: reduxStateType): profilePageType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }

}
type  mapDispatchToPropsType = {
    updatePostText: (text: string) => void
    addPost: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updatePostText: (text: string) => {
            dispatch(ChangeNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(AddPostActionCreator())
        }
    }

}
export let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export type MyPostPagePropsType = mapDispatchToPropsType & profilePageType