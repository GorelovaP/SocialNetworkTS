import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import { Textarea } from "../../../common/formsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)

export type FormDataType = {
    postBody: string
}

export const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={  Textarea}
                       name="postBody"
                       placeholder={"Enter your post"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add new posts</button>
            </div>
        </form>
    )
}