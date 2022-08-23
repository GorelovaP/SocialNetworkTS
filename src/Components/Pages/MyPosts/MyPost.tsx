import React, {ChangeEvent} from 'react';
import {MyPostPageType} from '../../../Redux/store';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


export const MyPost = (props: MyPostPageType) => {

    debugger

    let onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(event.currentTarget.value)
    }
    let postElements = props.posts.map(p => <Post key={p.id} id={p.id} value={p.value} like={p.like}/>)

    return (

        <div className={s.postsBlock}>
            <h2>my posts</h2>
            <div><textarea onChange={onChange} value={props.newPostText}/></div>
            <div>
                <button onClick={props.addPost}>new posts</button>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
