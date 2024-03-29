import React from 'react';

import s from './Post.module.css';
import avatar from "../../../assets/images/profile.png";
import {AiFillDelete, AiTwotoneHeart} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/redax-store";
import {deletePostAC, putLikeAC} from "../../../../redux/profilePage-reducer";


type PropsType = {
    id: number
    value: string
    like: number
    isLiked: boolean
    img: string | null
    isMyProfile: boolean
}

export const Post = (props: PropsType) => {
    let avatarka = props.img ? props.img : avatar
    const dispatch = useDispatch<AppDispatch>()


    const deletePost = (id: number) => {
        dispatch(deletePostAC(id))
    }
    const putLike = (id: number) => {
        dispatch(putLikeAC(id))
    }
    return (
        <div className={s.item}>
            <div className={s.itemArea}>
                <img className={s.avatar} src={avatarka} alt="Avatarka"/>
                <span className={s.text}> {props.value}</span>
            </div>

            <span className={s.like}>
                {props.isMyProfile && <span>
                <AiFillDelete onClick={() => deletePost(props.id)} className={s.deleteIcon}/>
            </span>}
                <AiTwotoneHeart className={`${s.likeIcon} ${props.isLiked ? s.active : null}`}
                                onClick={() => putLike(props.id)}/>
                {props.like}
                </span>
        </div>

    );
}

