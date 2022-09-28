import {FormDataType, LoginForm} from "./form/LoginForm";
import {reduxForm} from "redux-form";
import {UsersPagePropsType} from "./LoginContainer";
import {Navigate} from "react-router-dom";


export const LoginPage = (props: UsersPagePropsType) => {
    const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

    const constSubmit = (formData: FormDataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm error={props.error} onSubmit={constSubmit}/>
        </div>
    )
}