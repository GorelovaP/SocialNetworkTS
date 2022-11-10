import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import { Textarea } from "../../../common/formsControls/FormsControls";
import s from "./MyPostForm.module.css"


const maxLength2000 = maxLengthCreator(2000)

export type FormDataType = {
    postBody: string
}

export const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ Textarea}
                       name="postBody"
                       placeholder={"Enter your post"}
                       validate={[required, maxLength2000]}
                       className={s.field}
                />
            </div>
            <div>
                <button>Add new posts</button>
            </div>
        </form>
    )
}