import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageSPagesType} from '../../Redux/store';
import MyPostContainer from "./MyPosts/MyPostContainer";
import s from "./Pages.module.css"


export const Pages = (props: PageSPagesType) => {


    return (
        <div className={s.pagesContainer}>
            <h2 className={s.pagesContainer__logo}>Profile</h2>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
}

