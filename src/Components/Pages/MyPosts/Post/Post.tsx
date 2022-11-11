import React from 'react';

import s from './Post.module.css';
import avatar from "../../../assets/images/profile.png";
import {AiTwotoneHeart} from "react-icons/ai";


type PropsType = {
    id: number
    value: string
    like: number
    img: string | null
}

export const Post = (props: PropsType) => {

    let avatarka = props.img ? props.img : avatar
    return (

        <div className={s.item}>
            <div className={s.itemArea}>
                <img className={s.avatar} src={avatarka} alt="Avatarka"/>
                <span className={s.text}> {props.value}</span>
            </div>
            <span className={s.like}>
                    <AiTwotoneHeart className={s.likeIcon}/>
                {props.like}
                </span>
        </div>

    );
}

