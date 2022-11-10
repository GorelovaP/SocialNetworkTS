import {dataType, LoginForm} from "./form/LoginForm";
import {UsersPagePropsType} from "./LoginContainer";
import {Navigate} from "react-router-dom";
import s from "./Login.module.css"
import {PATH} from "../../routes/PagesRouters";


export const LoginPage = (props: UsersPagePropsType) => {


    const constSubmit = (formData: dataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={PATH.PROFILE}/>
    }

    return (
        <div className={s.loginMAinWrapper}>
            <div className={s.loginContainer}>
                <h1>login</h1>
                <LoginForm sendData={constSubmit} message={props.errorMassage}/>
            </div>
            <div className={s.testData}>
                <p>Test account data: Email: free@samuraijs.com Password: free</p>

            </div>
        </div>

    )
}