import React from 'react';

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PageSPagesType} from '../../Redux/store';
import {MyPostContainer} from "./MyPosts/MyPostContainer";


export const Pages = (props: PageSPagesType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>

        </div>
    );
}

