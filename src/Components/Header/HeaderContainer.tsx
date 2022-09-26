import React from 'react';
import {Header} from "./Header";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {getUserDataTC, logoutTC} from "../../Redux/auth-reduсer";


class HeaderContainerClC extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props}/>
    }

}

type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
const mapStateToProps = (state: reduxStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

type mapDispatchToPropsType = {
    getUserData: () => void
    logOut: ()=> void
}
export const HeaderContainer = connect(mapStateToProps, {
    getUserData: getUserDataTC,
    logOut: logoutTC
})(HeaderContainerClC)
export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

