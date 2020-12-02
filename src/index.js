import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewSettingText, addPost, addSetting} from "./Redux/State"
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } addSetting={ addSetting }
                 addNewSettingText={ addNewSettingText } />
        </BrowserRouter>
        ,document.getElementById('root')
    );
}

rerenderEntireTree(state);


subscribe(rerenderEntireTree)




