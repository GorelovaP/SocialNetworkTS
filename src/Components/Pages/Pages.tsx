import React from 'react';
import {MyPost} from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageSPagesType} from '../../Redux/state';


export const Pages = (props:PageSPagesType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPost posts={props.profilePage?.posts || []}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
            />
        </div>
    );
}

