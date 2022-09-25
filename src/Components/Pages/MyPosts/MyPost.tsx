import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {MyPostPagePropsType} from "./MyPostContainer";
import {reduxForm} from "redux-form";
import {FormDataType, MyPostForm} from "./myPostForm/MyPostForm";


export const MyPost = (props: MyPostPagePropsType) => {

    const AddPostFormRedux = reduxForm<FormDataType>({form: "PostForm"})(MyPostForm)


    const addPost = (formData: FormDataType) => {
        console.log(formData)
        props.addPost(formData.postBody)
    }

    let postElements = props.posts.map(p => <Post key={p.id} id={p.id} value={p.value} like={p.like}/>)

    return (

        <div className={s.postsBlock}>
            <h2>my posts</h2>

            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
