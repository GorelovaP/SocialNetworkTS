import React, {ChangeEvent, useRef} from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import largeImg from "../assets/images/large.jpg"

import s from "./Pages.module.css"
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {profileType} from "../../redux/profilePage-reducer";
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../routes/PagesRouters";
import avatar from "../assets/images/profile.png";
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import {MdPhotoCamera} from "react-icons/md";


export type PageSPagesType = {
    profile: profileType,
    status: string,
    updateStatus: (status: string) => void
    isAuth: boolean
    loggedUserId: number
    savePhoto: (file: File) => void
}


export const Pages = (props: PageSPagesType) => {

    const {userId} = useParams()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            props.savePhoto(file)
        }
    };
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };


    if (!props.isAuth && (userId == "null" || !userId)) {
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
                    <div className={s.avatarWrapper}>
                        <img
                            src={props.profile.photos.small !== null
                                ? props.profile.photos.small
                                : avatar}
                            alt="Avatar"
                            className={s.avatar}
                        />
                        {props.profile.userId === props.loggedUserId && <div className={s.smallImgBtnArea}>
                            <button className={s.smallImgBtn} onClick={selectFileHandler}><MdPhotoCamera color="white"/>
                            </button>
                            <input
                                style={{display: 'none'}}
                                accept=".jpg,.jpeg,.png"
                                ref={inputRef}
                                type="file"
                                onChange={uploadHandler}
                            />
                        </div>}
                    </div>
                </div>
                <div className={s.avatarArea}>
                    <div className={s.nameArea}>
                        <h2 className={s.fullName}>{props.profile.fullName}</h2>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId}
                                       loggedUserId={props.loggedUserId}/>
                    </div>
                </div>
            </div>
            <div className={s.mainInformationArea}>
                <MyPostContainer/>
                {props.profile.fullName !== "" &&
                <ProfileInfo profile={props.profile} status={props.status} loggedUserId={props.loggedUserId}/>}
            </div>
        </div>
    );
}

