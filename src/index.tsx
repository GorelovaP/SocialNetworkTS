import './index.css';
import React from "react";
import {AddPosts, ChangeNewPostText, stateTypeRoot, subscribe} from "./Redux/state";
import reportWebVitals from './reportWebVitals';
import {state} from "./Redux/state";
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


// After


const renderTree = (state: stateTypeRoot) => {

    ReactDOM.render(<BrowserRouter>
        <App state={state} addPost={AddPosts}
             ChangeNewPostText={ChangeNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));

}
renderTree(state)
subscribe(() => renderTree(state));
reportWebVitals()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
