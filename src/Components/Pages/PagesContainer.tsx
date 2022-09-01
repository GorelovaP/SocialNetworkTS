import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";

import React from "react";
import axios from "axios";
import {Pages} from "./Pages";
import {profileType, setUserProfileAC} from "../../Redux/profilePage-reducer";


export class PagesContainerCC extends React.Component<UsersPagePropsType> {


    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            <Pages {...this.props} profile={this.props.profile}/>
        </>
    }
}

let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

type  mapDispatchToPropsType = { setUserProfile: (profile: profileType) => void }

type mapStateToPropsType = { profile: profileType }


export const PagesContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
})(PagesContainerCC)

export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType