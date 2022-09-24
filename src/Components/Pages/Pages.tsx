import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import s from "./Pages.module.css"
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {profileType} from "../../Redux/profilePage-reducer";


export type PageSPagesType = {
    profile: profileType,
    status: string,
    updateStatus: (status: string) => void
}
export const Pages = (props: PageSPagesType) => {

    return (
        <div className={s.pagesContainer}>
            <h2 className={s.pagesContainer__logo}>Profile</h2>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    );
}

