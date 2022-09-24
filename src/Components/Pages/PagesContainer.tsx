import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";

import React, {ComponentType} from "react";
import {Pages} from "./Pages";
import {getStatusTC, getUsersProfileTC, profileType, updateStatusTC} from "../../Redux/profilePage-reducer";


import {NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";

// @ts-ignore
import {RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
            userId = 25315
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return <>
            <Pages {...this.props} profile={this.props.profile} status={this.props.status}
                   updateStatus={this.props.updateStatus}/>
        </>
    }
}


let mapStateToProps = (state: reduxStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

type  mapDispatchToPropsType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type mapStateToPropsType = {
    profile: profileType,
    isAuth?: boolean,
    status: string
}


export const PagesContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUsersProfile: getUsersProfileTC, getStatus: getStatusTC, updateStatus: updateStatusTC
    }),
    withRouter,
    withAuthRedirect
)(PagesContainerCC)

export type PagesPagePropsType = mapStateToPropsType & mapDispatchToPropsType