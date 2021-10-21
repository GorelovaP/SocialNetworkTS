import React from 'react';
import {MyPostPageType} from '../../../Redux/state';
import s from './MyPost.module.css';
import {Post} from "./Post/Post";


export const MyPost = (props: MyPostPageType) => {



    debugger
    const AddPost = () => {
       {
            props.addPost(props.newPostText)
        }
    }

    let postElements = props.posts.map(p => <Post id={p.id} value={p.value} like={p.like}/>)

    return (

        <div className={s.postsBlock}>
            <h2>my posts</h2>
            <div><textarea onChange={(e)=>{props.ChangeNewPostText(e.currentTarget.value)}} value={props.newPostText}/></div>
            <div>
                <button onClick={AddPost}>new posts</button>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
