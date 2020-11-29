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
import {addPost} from "./Redux/State";


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= { () => <Dialogs state={props.state.DialogPage}  /> } />
                    <Route path='/profile' render= { () => <Profile state={props.state.ProfilePage} addPost={props.addPost} /> }/>
                    <Route path='/music' component={Songs}/>
                    <Route path='/settings' render= { () => <Settings setting={props.state.SettingsPage} addSetting={props.addSetting} />  }/>
                    <Route exact path='/' component={Home}/>
                </div>
            </div>
    );
}


export default App;
