import React from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {MyPostPagePropsType} from "./MyPostContainer";
import {reduxForm} from "redux-form";
import {FormDataType, MyPostForm} from "./myPostForm/MyPostForm";


export class MyPost extends React.Component<MyPostPagePropsType> {
    render() {

        const AddPostFormRedux = reduxForm<FormDataType>({form: "PostForm"})(MyPostForm)


        const addPost = (formData: FormDataType) => {
            this.props.addPost(formData.postBody)
        }

        let postElements = this.props.posts.map(p =>
            <Post key={p.id}
                  id={p.id}
                  value={p.value}
                  like={p.like}
                  img={this.props.profile && this.props.profile.photos.small }/>)
        let name
        if (this.props.profile) {
            name = this.props.profile.fullName
        }

        return (
            <div className={s.postsBlock}>
                <h2> {name} posts</h2>

                <AddPostFormRedux onSubmit={addPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    }
}
