import React from 'react';
import {Header} from "./Header";
import {setUserDataAC} from "../../Redux/auth-reduсer";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";
import {AuthAPI} from "../../api/api";


class HeaderContainerClC extends React.Component<AuthPropsType> {

    componentDidMount() {
        AuthAPI.isAuthGET()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setUserData(id, email, login)
                }
            })
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
    setUserData: (userId: string | null, email: string | null,
                  login: string | null) => void
}
export const HeaderContainer = connect(mapStateToProps, {setUserData: setUserDataAC})(HeaderContainerClC)
export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

