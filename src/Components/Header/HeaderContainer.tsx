import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setUserDataAC} from "../../Redux/auth-reduсer";
import {reduxStateType} from "../../Redux/redax-store";
import {connect} from "react-redux";


class HeaderContainerClC extends React.Component<AuthPropsType> {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
        ).then(response => {

            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
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

