import {AddPostActionCreator, profilePageType} from "../../../Redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {reduxStateType} from "../../../Redux/redax-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: reduxStateType): profilePageType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }

}
type  mapDispatchToPropsType = {
    addPost: (postBody: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postBody: string) => {
            dispatch(AddPostActionCreator(postBody))
        }
    }

}
export let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export type MyPostPagePropsType = mapDispatchToPropsType & profilePageType