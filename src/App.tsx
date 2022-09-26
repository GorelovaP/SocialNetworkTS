import './App.css';

import React from 'react';

import {Nav} from "./Components/Nav/Nav";
import {Navigate, Route, Routes} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";

import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {PagesContainer} from "./Components/Pages/PagesContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {LoginContainer} from "./Components/login/LoginContainer";


function App() {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/'} element={<Navigate to="/login"/>}/>
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
            {/*<Mass/>*/}
        </div>


    );
}

export default App;
