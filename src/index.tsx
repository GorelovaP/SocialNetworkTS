import './index.css';
import React from "react";
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {store} from "./Redux/redax-store";
import App from "./App";
import {Provider} from 'react-redux';


// After


ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>

</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
reportWebVitals()