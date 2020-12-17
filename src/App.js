import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Songs from "./components/Music/Songs";
import UsersContainer from "./components/Users/Users-container"
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";
import SettingsContainer from "./components/Settings/Settings-container";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs/>}/>
                <Route path='/profile' render={() =>
                    <ProfileContainer
                    />}/>
                <Route path='/music' component={Songs}/>
                <Route path='/settings' render={() =>
                    <SettingsContainer/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
                <Route exact path='/' component={Home}/>
            </div>
        </div>
    );
}


export default App;
