import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewSettingText, addPost, addSetting} from "./Redux/State"
import {BrowserRouter} from "react-router-dom";



export let rerenderEntireTree =(state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={ state } addPost={ addPost } addSetting={ addSetting }
             addNewSettingText={ addNewSettingText } />
    </BrowserRouter>
    ,document.getElementById('root')
);
}