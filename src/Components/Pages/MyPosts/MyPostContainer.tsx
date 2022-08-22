import React from 'react';
import {AddPostActionCreator, ChangeNewPostActionCreator} from "../../../Redux/profilePage-reducer";
import {MyPost} from "./MyPost";
import StoreContext from "../../../StoreContext";

export const MyPostContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const AddPost = () => {
                        store.dispatch(AddPostActionCreator())
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(ChangeNewPostActionCreator(text))
                    }

                    return (
                        <MyPost updatePostText={onPostChange}
                                addPost={AddPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
                    )
                }

            }
        </StoreContext.Consumer>
    );
}
