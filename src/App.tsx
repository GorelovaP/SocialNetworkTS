import './App.css';
import React from 'react';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Pages} from "./Components/Pages/Pages";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import {Settings} from "./Components/Settings/Settings";
import {Music} from "./Components/Music/Music";
import {stateTypeRootPage} from "./Redux/state";

function App(props: stateTypeRootPage) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"} element={ <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path={"/pages"}
                           element={<Pages profilePage={props.state.profilePage} addPost={props.addPost}
                                           ChangeNewPostText={props.ChangeNewPostText}/>}/>
                    <Route path={"/music"} element={<Music/>}/>
                    <Route path={"/settings"} element={<Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
