import React from 'react';

import s from './Post.module.css';
import {postType} from "../../../../Redux/profilePage-reducer";


export const Post = (props: postType) => {
    return (

        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/7/kot_6768.jpg" alt="Avatarka"/>
            <span>{props.value}</span>
            <div>
                <span>
                    {"dfdfk" + props.like}
                </span>
            </div>
        </div>

    );
}

