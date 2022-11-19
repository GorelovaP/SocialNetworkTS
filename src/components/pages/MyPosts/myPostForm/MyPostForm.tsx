import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, minLengthCreator} from "../../../../utils/validators";
import {Textarea} from "../../../common/formsControls/FormsControls";
import s from "./MyPostForm.module.css"


const maxLength2000 = maxLengthCreator(2000)
const minLength1 = minLengthCreator(1)

export type FormDataType = {
    postBody: string
}

export const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="postBody"
                       placeholder={"What's Your Mind ?"}
                       validate={[maxLength2000, minLength1]}
                       className={s.field}
                />
            </div>

            <div className={s.btnArea}>
                <button type={"submit"} className={s.submitBtn}>Add new posts</button>
            </div>
        </form>
    )
}