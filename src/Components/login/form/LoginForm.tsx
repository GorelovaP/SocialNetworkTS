import React from "react";
import {Field, InjectedFormProps} from "redux-form";

// InjectedFormProps пропс, которые приходят из контейнерной компоненты


export type FormDataType= {
    login: string,
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field type="text" name={"login"} placeholder={"Login"} component={"input"}/>
            </div>
            <div>
                <Field type="text" name={"password"} placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field component="input" type="checkbox" name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>)
}