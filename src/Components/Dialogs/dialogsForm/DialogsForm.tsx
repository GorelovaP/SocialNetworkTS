import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators";
import s from "./dialogsForm.module.css"


export type FormDataType = {
    newMessageBody: string
}

const maxLength150 = maxLengthCreator(150)
const minLength1 = minLengthCreator(1)

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.dialogsForm}>

            <div className={s.fieldArea}>
                <Field component={Textarea}
                       name="newMessageBody"
                       validate={[minLength1, maxLength150, required]}
                       className={s.field}
                       placeholder={"Enter your message"}/>
            </div>
            <button className={s.submitBtn}>Send</button>
        </form>
    )
}