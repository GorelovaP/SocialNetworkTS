import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";

import React, {ComponentType} from "react";
import {Pages} from "./Pages";
import {getUsersProfileTC, profileType} from "../../Redux/profilePage-reducer";


import {NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";

// @ts-ignore
import {RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUsersProfile(userId)

    }

    render() {

        return <>
            <Pages {...this.props} profile={this.props.profile}/>
        </>
    }
}


let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

type  mapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
}

type mapStateToPropsType = {
    profile: profileType,
    isAuth?: boolean
}


export const PagesContainer = withAuthRedirect(connect(mapStateToProps, {
        getUsersProfile: getUsersProfileTC
    })(withRouter(PagesContainerCC))
)

export type PagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType