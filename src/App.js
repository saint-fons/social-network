import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Songs from "./components/Music/Songs";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Dialog from "./components/Dialogs/Dialog/Dialog";


const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= { () => <Dialogs dialog={props.dialog} message={props.message} /> } />
                    <Route path='/profile' component={Profile}/>
                    <Route path='/music' component={Songs}/>
                    <Route path='/settings' component={Settings}/>
                    <Route exact path='/' component={Home}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
