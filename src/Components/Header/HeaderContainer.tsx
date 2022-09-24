import React from 'react';
import {Header} from "./Header";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {getUserDataTC} from "../../Redux/auth-reduсer";


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
}
export const HeaderContainer = connect(mapStateToProps, {getUserData: getUserDataTC})(HeaderContainerClC)
export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

