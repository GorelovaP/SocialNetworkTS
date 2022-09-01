import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";

import React, {ComponentType} from "react";
import axios from "axios";
import {Pages} from "./Pages";
import {profileType, setUserProfileAC} from "../../Redux/profilePage-reducer";


import {NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";

// @ts-ignore
import {RouteComponentProps} from 'react-router-dom';

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;

export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component{...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}// самодельный WithRouter

type PathParamsType = { useId: number; }
type CommonPropsType = RouteComponentProps<PathParamsType> & PagesPagePropsType // типизация для withRouter

export class PagesContainerCC extends React.Component<CommonPropsType> {


    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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


export const PagesContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withRouter(PagesContainerCC));

export type PagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType