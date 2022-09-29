import './App.css';

import React, {ComponentType} from 'react';

import {Nav} from "./Components/Nav/Nav";
import {Navigate, Route, Routes} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";

import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {PagesContainer, withRouter} from "./Components/Pages/PagesContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {LoginContainer} from "./Components/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseAppTC} from "./Redux/app-reduсer";
import {reduxStateType} from "./Redux/redax-store";
import {Preloader} from "./Components/common/preloader/Preloader";


class App extends React.Component<appPropsType> {
    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        debugger
        return !this.props.initialised ? <Preloader/> : (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/socialNetworkTS'} element={<Navigate to="/login"/>}/>

                        <Route path={"/dialogs"} element={<DialogsContainer/>}/>

                        <Route path="/profile" element={<PagesContainer/>}>
                            <Route path=":userId" element={<PagesContainer/>}/>
                        </Route>
                        <Route path={"/users"} element={<UsersContainer/>}/>
                        <Route path={"/music"} element={<Music/>}/>
                        <Route path={"/settings"} element={<Settings/>}/>
                        <Route path={"/login"} element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


type MapDispatchToProps = {
    initialiseApp: () => void
}
type MapStateToPropsType = {
    initialised: boolean
}
const mapStateToProps = (state: reduxStateType) => ({
    initialised: state.app.initialized
})

export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialiseApp: initialiseAppTC}))(App);


type appPropsType = MapDispatchToProps & MapStateToPropsType