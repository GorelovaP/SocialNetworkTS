import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";


export type FormDataType = {
    newMessageBody: string
}

const maxLength150 = maxLengthCreator(150)

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea}
                           name="newMessageBody"
                           validate={[required, maxLength150]}
                           placeholder={"Enter your message"}/>
                </div>
                <button>Send</button>
            </div>

        </form>
    )
}