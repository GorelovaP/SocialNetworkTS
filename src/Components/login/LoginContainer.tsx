import {connect} from "react-redux";
import {reduxStateType} from "../../Redux/redax-store";
import {authInitialType, loginTC, logoutTC} from "../../Redux/auth-reduсer";
import {LoginPage} from "./LoginPage";


const mapStateToProps = (state: reduxStateType): authInitialType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
        errorMassage: state.auth.errorMassage,
        captcha: state.auth.captcha

    }
}

type  mapDispatchToPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    logOut: () => void;
}

export const LoginContainer = connect(mapStateToProps, {
    logIn: loginTC,
    logOut: logoutTC
})(LoginPage)

export default LoginContainer
export type UsersPagePropsType = authInitialType & mapDispatchToPropsType