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
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path={"/pages"}
                           render={() => <Pages profilePage={props.state.profilePage} addPost={props.addPost}
                                                ChangeNewPostText={props.ChangeNewPostText}/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
