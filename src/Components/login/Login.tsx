import {FormDataType, LoginForm} from "./form/LoginForm";
import {reduxForm} from "redux-form";


export const LoginPage = () => {
    const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

    const constSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={constSubmit}/>
        </div>
    )
}