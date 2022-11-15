import {AddPostAC, postType, profileType} from "../../../Redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {reduxStateType} from "../../../Redux/redax-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<postType>
    profile: profileType
    status: string
    loggedUserId: string | null,
}

let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        loggedUserId: state.auth.data.userId
    }

}
type  mapDispatchToPropsType = {
    addPost: (postBody: string) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postBody: string) => {
            dispatch(AddPostAC(postBody))
        }
    }

}
export let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export type MyPostPagePropsType = mapDispatchToPropsType & mapStateToPropsType