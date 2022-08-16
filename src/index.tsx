import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from "./Redux/redax-store";


// After


const renderTree = () => {

    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));

}
renderTree()
store.subscribe(() => renderTree());


reportWebVitals()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
