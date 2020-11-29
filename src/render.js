import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addSetting } from "./Redux/State"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree =(state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={ state } addPost={ addSetting } />
    </BrowserRouter>
    ,document.getElementById('root')
);
}