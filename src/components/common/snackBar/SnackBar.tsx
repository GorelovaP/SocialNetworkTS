import {memo, useEffect} from "react"
import s from "./snackBar.module.css"
import {VscChromeClose} from 'react-icons/vsc'

export const SnackBar = memo((props: SnackbarPropsType) => {

    const onClickAction = () => {
        props.setAppErrorNull("")
    }

    useEffect(() => {
        let showError = setTimeout(() => {
            props.setAppErrorNull("")
        }, 7000)

        return () => clearTimeout(showError)
    }, [])

    return (
        <div className={s.snackbar}>
            <span className={s.error}>{props.text}</span>
            <VscChromeClose className={s.cross} onClick={onClickAction} size={'20px'}/>
        </div>
    )
})

// types
type SnackbarPropsType = {
    text: string
    setAppErrorNull: (error: string) => void
}