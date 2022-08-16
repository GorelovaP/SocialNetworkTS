import './App.css';
import React from 'react';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Pages} from "./Components/Pages/Pages";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {stateTypeRootPage} from "./Redux/store";

function App(props: stateTypeRootPage) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path={"/pages"}
                           element={<Pages profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
