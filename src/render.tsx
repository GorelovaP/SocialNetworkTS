import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPosts, ChangeNewPostText} from "./Redux/state";
import {state} from "./Redux/state";
debugger
export const renderTree = () => {
    debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPosts} ChangeNewPostText={ChangeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
