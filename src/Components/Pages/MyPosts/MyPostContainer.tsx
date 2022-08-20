import React from 'react';
import {AddPostActionCreator, ChangeNewPostActionCreator} from "../../../Redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import {StoreType} from "../../../Redux/redax-store";


type MyPostContainerType = {
    store: StoreType
}
export const MyPostContainer = (props: MyPostContainerType) => {

    let state = props.store.getState()

    const AddPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(ChangeNewPostActionCreator(text))
    }

    return (
        <MyPost updatePostText={onPostChange}
                addPost={AddPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
    );
}
