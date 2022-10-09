import {dataType, LoginForm} from "./form/LoginForm";
import {UsersPagePropsType} from "./LoginContainer";
import {Navigate} from "react-router-dom";


export const LoginPage = (props: UsersPagePropsType) => {


    const constSubmit = (formData: dataType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>login</h1>
            <LoginForm sendData={constSubmit} message={props.errorMassage}/>
        </div>
    )
}