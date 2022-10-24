import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "../Components/Dialogs/DialogsContainer";
import {PagesContainer} from "../Components/Pages/PagesContainer";
import {UsersContainer} from "../Components/Users/UsersContainer";
import {Music} from "../Components/Music/Music";
import {Settings} from "../Components/Settings/Settings";
import {LoginContainer} from "../Components/login/LoginContainer";
import React from "react";
import {ErrorPage} from "../Components/error/ErrorPage";

export const PATH = {
    DIALOGS: "/dialogs",
    PROFILE: "/profile",
    USERS: "/users",
    MUSIC: "/music",
    SETTINGS: "/settings",
    LOGIN: "/login",
    ERROR: "/404"


}
export const PagesRouters = () => {
    return <Routes>
        <Route path={'/'} element={<Navigate to="/login"/>}/>
        <Route path={'/socialNetworkTS'} element={<Navigate to="/login"/>}/>
        <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
        <Route path={PATH.PROFILE} element={<PagesContainer/>}>
            <Route path=":userId" element={<PagesContainer/>}/>
        </Route>
        <Route path={PATH.USERS} element={<UsersContainer/>}/>
        <Route path={PATH.MUSIC} element={<Music/>}/>
        <Route path={PATH.SETTINGS} element={<Settings/>}/>
        <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
        <Route path={PATH.ERROR} element={<ErrorPage/>}/>
        <Route path={"/*"} element={<Navigate to={"404"}/>}/>

    </Routes>
}