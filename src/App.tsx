import './App.css';
import React from 'react';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Pages} from "./Components/Pages/Pages";
import {Route, Routes} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {stateTypeRootPage} from "./Redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


function App(props: stateTypeRootPage) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                    <Route path={"/pages"}
                           element={<Pages/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
