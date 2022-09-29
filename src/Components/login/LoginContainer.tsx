import {connect} from "react-redux";
import {reduxStateType} from "../../Redux/redax-store";
import {authInitialType, loginTC, logoutTC} from "../../Redux/auth-reduсer";
import {LoginPage} from "./LoginPage";


const mapStateToProps = (state: reduxStateType): authInitialType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}

type  mapDispatchToPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean) => void
    logOut: () => void;
}

export const LoginContainer = connect(mapStateToProps, {
    logIn: loginTC,
    logOut: logoutTC
})(LoginPage)

export type UsersPagePropsType = authInitialType & mapDispatchToPropsType