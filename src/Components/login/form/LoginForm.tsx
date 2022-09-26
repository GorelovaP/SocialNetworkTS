import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/formsControls/FormsControls";
import {required} from "../../../utils/validators";

// InjectedFormProps пропс, которые приходят из контейнерной компоненты


export type FormDataType = {
    login: string,
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field type="text"
                       name={"login"}
                       validate={[required]}
                       placeholder={"Login"}
                       component={Input}/>
            </div>
            <div>
                <Field type="text"
                       name={"password"}
                       validate={[required]}
                       placeholder={"Password"}
                       component={Input}/>
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