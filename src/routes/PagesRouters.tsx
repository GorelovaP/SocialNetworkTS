import React, {lazy, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {UsersContainer} from "../components/users/UsersContainer";
import {Preloader} from "../components/common/preloader/Preloader";

const DialogsContainer = lazy(() => import("../components/dialogs/DialogsContainer"));
const PagesContainer = lazy(() => import("../components/pages/PagesContainer"));
const ErrorPage = lazy(() => import("../components/error/ErrorPage"));
const LoginContainer = lazy(() => import("../components/login/LoginContainer"));
const Settings = lazy(() => import("../components/settings/Settings"));
const Music = lazy(() => import("../components/music/Music"));


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