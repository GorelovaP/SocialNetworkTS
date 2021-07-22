import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AddPosts, ChangeNewPostText, stateTypeRoot} from "./Redux/state";

export let renderTree=(state:stateTypeRoot)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPosts} ChangeNewPostText={ChangeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
