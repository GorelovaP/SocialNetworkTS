import React from "react";
import {Field, InjectedFormProps} from "redux-form";


export type FormDataType = {
    postBody: string
}

export const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="postBody" placeholder={"Enter your post"}/>
            </div>
            <div>
                <button>Add new posts</button>
            </div>
        </form>
    )
}