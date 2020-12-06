import React from 'react';
import './index.css';
import store from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state}
                 addSetting={ store.addSetting.bind(store) }
                 addNewSettingText={ store.addNewSettingText.bind(store) }
                 addProfile ={ store.addProfile.bind(store) }
                 addNewProfileText ={ store.addNewProfileText.bind(store) }
            />
        </BrowserRouter>
        ,document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)



