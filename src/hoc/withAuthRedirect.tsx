import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {reduxStateType} from "../Redux/redax-store";

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    //T - пропсы, которые придут нам с компонентой
    // ComponentType - джинериковая типизация , работает только в function declaration, но не в стрелочных функциях!!!


    type mapStateToPropsTYpe = {
        isAuth: boolean
    }

    const mapStateToProps = (state: reduxStateType): mapStateToPropsTYpe => {
        return {
            isAuth: state.auth.isAuth
        }

    }
    const RedirectComponent = (props: mapStateToPropsTYpe) => {
        let {isAuth, ...restProps} = props // деструктуризация пропсов, чтобы не прокидывать дальше isAUth(изолировать)


        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}