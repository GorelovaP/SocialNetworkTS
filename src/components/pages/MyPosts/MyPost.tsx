import React, {PureComponent} from 'react';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";
import {MyPostPagePropsType} from "./MyPostContainer";
import {reduxForm} from "redux-form";
import {FormDataType, MyPostForm} from "./myPostForm/MyPostForm";


export class MyPost extends PureComponent<MyPostPagePropsType> {

    // shouldComponentUpdate(nextProps: Readonly<MyPostPagePropsType>, nextState: Readonly<{}>): boolean {
    //     return nextProps != this.props || nextState != this.state
    // }

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
                  img={this.props.profile && this.props.profile.photos.small}
                  isLiked={p.isLiked}
                  isMyProfile={this.props.profile.userId == +this.props.loggedUserId!}
            />)
        let name
        if (this.props.profile) {
            name = this.props.profile.fullName
        }
        return (
            <div className={s.postsBlock}>
                <h2> {name} posts</h2>
                {this.props.profile.userId == +this.props.loggedUserId! && <AddPostFormRedux onSubmit={addPost}/>}
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    }
}
