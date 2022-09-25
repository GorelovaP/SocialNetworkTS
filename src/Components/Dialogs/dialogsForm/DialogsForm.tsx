import React from "react";
import {Field, InjectedFormProps} from "redux-form";


export type FormDataType = {
    newMessageBody: string
}

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component="textarea" name="newMessageBody" placeholder={"Enter your message"}/>
                </div>
                <button>Отправить смс</button>
            </div>

        </form>
    )
}