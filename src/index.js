import React from 'react';
import './index.css';
import store from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ store.getState() }
                 addPost={ store.addPost }
                 addSetting={ store.addSetting }
                 addNewSettingText={ store.addNewSettingText } />
        </BrowserRouter>
        ,document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)









