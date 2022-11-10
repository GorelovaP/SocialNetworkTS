

export const required = (value: string) => {
    return value ? undefined : "Field is required"
}

export const maxLengthCreator =(maxLength: number)=> (value: string) => {
    return value && value.length > maxLength ?  `Max length is ${maxLength} symbols` : undefined
}
export const minLengthCreator =(minLength: number)=> (value: string) => {
    return value && value.length < minLength ?  `Min length is ${minLength} symbols` : undefined
}


