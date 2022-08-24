import './App.css';

import React from 'react';

import {Nav} from "./Components/Nav/Nav";
import {Pages} from "./Components/Pages/Pages";
import {Route, Routes} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {stateTypeRootPage} from "./Redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";



function App(props: stateTypeRootPage) {
    return (

        <div className='app-wrapper'>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                    <Route path={"/pages"}
                           element={<Pages/>}/>
                    <Route path={"/users"} element={<UsersContainer/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
            {/*<Mass/>*/}
        </div>


    );
}

export default App;
