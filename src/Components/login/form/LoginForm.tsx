import React from "react";
import s from "../../common/formsControls/FormControls.module.css"
import {useFormik} from "formik";

// InjectedFormProps пропс, которые приходят из контейнерной компоненты

type LoginFormPropsType = {
    sendData: (data: dataType) => void
    message: string
}
export type dataType = {
    email: string
    password: string
    rememberMe: boolean
}
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
export const LoginForm = (props: LoginFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.email) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = "Need to be more then 3 symbols"
            }
            return errors
        },
        onSubmit: values => {
            console.log(values)
            // dispatch(loginTC(values))
            props.sendData(values)
            formik.resetForm();
        }
    })

    return (<div>
        <form name="login" onSubmit={formik.handleSubmit}>
            <div>
                <input type="text"
                       placeholder={"Email"}
                       {...formik.getFieldProps("email")}
                    // name="email"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email &&
                <div className={s.formError}>{formik.errors.email}</div>}
            </div>
            <div>
                <input
                    type="password"
                    placeholder={"Password"}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password &&
                <div className={s.formError}>{formik.errors.password}</div>}
            </div>
            <div>
                <label> Remember me
                    <input type={"checkbox"}
                           {...formik.getFieldProps("rememberMe")}
                           checked={formik.values.rememberMe}/>
                </label>
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
            {props.message.length > 0 && <div className={s.formError}> {props.message}</div>}
        </form>
    </div>)
}