import React from "react";
import s from "./FormControls.module.css"


// type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
//
// type SuperTextAreaPropsType = {}


type CommonType = {
    input: inputType
    meta: metaType
    children: React.ReactNode
}
type inputType = {
    name: string
    onBlur: (e: React.FocusEvent<any>) => void
    onChange: (e: React.ChangeEvent<any>) => void
    onDragStart: (e: React.DragEvent<any>) => void
    onDrop: (e: React.DragEvent<any>) => void
    onFocus: (e: React.FocusEvent<any>) => void
    value: string
}
type metaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: any
    error: undefined | any
    form: string
    initial: undefined | any
    invalid: boolean
    pristine: boolean
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: undefined | string
}


const FormControl: React.FC<CommonType> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}: CommonType) => {
    return (
        <FormControl input={input} meta={meta}><textarea {...input} {...props}/></FormControl>
    )
}

export const Input = ({input, meta, ...props}: CommonType) => {
    return (
        <FormControl input={input} meta={meta}><input {...input} {...props}/></FormControl>
    )
}