import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/formsControls/FormsControls";
import {required} from "../../../utils/validators";
import s from "../../common/formsControls/FormControls.module.css"

// InjectedFormProps пропс, которые приходят из контейнерной компоненты


export type FormDataType = {
    email: string,
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field type="text"
                       name={"email"}
                       validate={[required]}
                       placeholder={"Email"}
                       component={Input}/>
            </div>
            <div>
                <Field type="password"
                       name={"password"}
                       validate={[required]}
                       placeholder={"Password"}
                       component={Input}/>
            </div>
            <div>
                <Field component="input" type="checkbox" name={"rememberMe"}/> remember me
            </div>
            <div className={s.formError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    </div>)
}