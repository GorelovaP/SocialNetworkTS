import React from "react";
import s from "../../common/formsControls/FormControls.module.css"
import style from "./LoginForm.module.css"
import {useFormik} from "formik";

// InjectedFormProps пропс, которые приходят из контейнерной компоненты

type LoginFormPropsType = {
    sendData: (data: dataType) => void
    message: string
    captcha: string
}
export type dataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string
}
export const LoginForm = (props: LoginFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
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
            props.sendData(values)
            // formik.resetForm();
        }
    })

    return (<div>
        <form name="login" onSubmit={formik.handleSubmit}>
            <div>
                <label className={style.label}>Email</label>
                <input type="text"
                       placeholder={"type here your email..."}
                       className={style.styledInput}
                       {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email &&
                <div className={s.formError}>{formik.errors.email}</div>}
            </div>
            <div>
                <label className={style.label}>Password</label>
                <input
                    type="password"
                    className={style.styledInput}
                    placeholder={"type here your password..."}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password &&
                <div className={s.formError}>{formik.errors.password}</div>}
            </div>
            <div>
                <label> Remember me
                    <input type={"checkbox"}
                           {...formik.getFieldProps("rememberMe")}
                           className={style.checkBox}
                           checked={formik.values.rememberMe}/>
                </label>
            </div>
            {props.captcha && <div className={s.captchaArea}>
                <img src={props.captcha} alt={"captcha"}/>
            </div>}
            {props.captcha && <>
                <label className={style.label}>Сaptcha</label>
                <input
                    type="text"
                    className={style.styledInput}
                    placeholder={"type here captcha"}
                    required={true}
                    {...formik.getFieldProps("captcha")}
                />
            </>}
            <div>
                <button className={style.submitBtn} type={"submit"}>Login</button>
            </div>
            {props.message.length > 0 && <div className={s.formMainError}> {props.message}</div>}

        </form>
    </div>)
}