import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import s from "./Pages.module.css"
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {profileType} from "../../Redux/profilePage-reducer";
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../routes/PagesRouters";


export type PageSPagesType = {
    profile: profileType,
    status: string,
    updateStatus: (status: string) => void
    isAuth: boolean
}


export const Pages = (props: PageSPagesType) => {
    const {userId} = useParams()

    if (!props.isAuth && userId === undefined) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={s.pagesContainer}>
            <h2 className={s.pagesContainer__logo}>Profile</h2>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    );
}

