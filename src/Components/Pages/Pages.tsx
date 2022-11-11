import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import largeImg from "../assets/images/large.jpg"

import s from "./Pages.module.css"
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {profileType} from "../../Redux/profilePage-reducer";
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../routes/PagesRouters";
import avatar from "../assets/images/profile.png";
import {ProfileStatus} from "./profileStatus/ProfileStatus";


export type PageSPagesType = {
    profile: profileType,
    status: string,
    updateStatus: (status: string) => void
    isAuth: boolean
    loggedUserId: number
}


export const Pages = (props: PageSPagesType) => {
    const {userId} = useParams()

    if (!props.isAuth && userId === undefined) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div className={s.pagesContainer}>
            <div className={s.profileImageArea}>
                <div className={s.largeImgArea}>
                    <img src={props.profile !== null && props.profile.photos.large !== null
                        ? props.profile.photos.large
                        : largeImg}
                         alt="largeImg"
                         className={s.largeImg}
                    />
                    <img
                        src={props.profile !== null && props.profile.photos.small !== null
                            ? props.profile.photos.small
                            : avatar}
                        alt="Avatar"
                        className={s.avatar}
                    />
                </div>
                <div className={s.avatarArea}>
                    <div className={s.nameArea}>
                        <h2 className={s.fullName}>{props.profile !== null && props.profile.fullName}</h2>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus} userId={userId} loggedUserId={props.loggedUserId}/>
                    </div>
                </div>
            </div>
            <div className={s.mainInformationArea}>
                <MyPostContainer/>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

