import React from 'react';
import {profileType} from "../../../Redux/profilePage-reducer";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile: profileType
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large !== null
                        ? props.profile.photos.large
                        : "https://static4.depositphotos.com/1001944/371/i/600/depositphotos_3717756-stock-photo-fire-isolated-over-black-background.jpg"}
                    alt="Картинка"/>
            </div>
            <div>
                <span>fullName:</span>
                <span>{props.profile.fullName}</span>
            </div>
            <div>
                <span>aboutMe:</span>
                <span>{props.profile.aboutMe}</span>
            </div>
            <div>
                <span>lookingForAJob:</span>
                <span>{props.profile.lookingForAJob ? "+" : "-"}</span>
            </div>
            <div>
                <span>lookingForAJobDescription:</span>
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>

            <div>
                <div>
                    Contacts
                    <div>
                        <span>facebook:</span>
                        <span>{props.profile.contacts.facebook !== null ? props.profile.contacts.facebook : "-"}</span>
                    </div>
                    <div>
                        <span>website:</span>
                        <span>{props.profile.contacts.website !== null ? props.profile.contacts.website : "-"}</span>
                    </div>
                    <div>
                        <span>vk:</span>
                        <span>{props.profile.contacts.vk !== null ? props.profile.contacts.vk : "-"}</span>
                    </div>
                    <div>
                        <span>twitter:</span>
                        <span>{props.profile.contacts.twitter !== null ? props.profile.contacts.twitter : "-"}</span>
                    </div>
                    <div>
                        <span>instagram:</span>
                        <span>{props.profile.contacts.instagram !== null ? props.profile.contacts.instagram : "-"}</span>
                    </div>
                    <div>
                        <span>youtube:</span>
                        <span>{props.profile.contacts.youtube !== null ? props.profile.contacts.youtube : "-"}</span>
                    </div>
                    <div>
                        <span>github:</span>
                        <span>{props.profile.contacts.github !== null ? props.profile.contacts.github : "-"}</span>
                    </div>
                    <div>
                        <span>mainLink:</span>
                        <span>{props.profile.contacts.mainLink !== null ? props.profile.contacts.mainLink : "-"}</span>
                    </div>


                </div>
            </div>
        </div>
    );
}

