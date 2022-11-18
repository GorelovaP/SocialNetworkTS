import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {UsersContainer} from "../Components/Users/UsersContainer";
import {Preloader} from "../Components/common/preloader/Preloader";

const DialogsContainer = lazy(() => import("../Components/Dialogs/DialogsContainer"));
const PagesContainer = lazy(() => import("../Components/Pages/PagesContainer"));
const ErrorPage = lazy(() => import("../Components/error/ErrorPage"));
const LoginContainer = lazy(() => import("../Components/login/LoginContainer"));
const Settings = lazy(() => import("../Components/Settings/Settings"));
const Music = lazy(() => import("../Components/Music/Music"));


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
    return <Suspense fallback={<div><Preloader/></div>}>
        <Routes>
            <Route path={'/'} element={<Navigate to="/login"/>}/>
            <Route path={'/socialNetworkTS'} element={<Navigate to="/login"/>}/>
            <Route path={PATH.DIALOGS} element={<DialogsContainer/>}>
                <Route path=":userId" element={<DialogsContainer/>}/>
            </Route>
            <Route path={PATH.PROFILE}>
                <Route path=":userId" element={<PagesContainer/>}/>
            </Route>
            <Route path={PATH.USERS} element={<UsersContainer/>}/>
            <Route path={PATH.MUSIC} element={<Music/>}/>
            <Route path={PATH.SETTINGS} element={<Settings/>}/>
            <Route path={PATH.LOGIN} element={<LoginContainer/>}/>
            <Route path={PATH.ERROR} element={<ErrorPage/>}/>
            <Route path={"/*"} element={<Navigate to={"404"}/>}/>
        </Routes>
    </Suspense>
}