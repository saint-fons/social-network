import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Songs from "./components/Music/Songs";
import UsersContainer from "./components/Users/Users-container"
import {Route} from "react-router-dom";
import Home from "./components/Home/Home";
import SettingsContainer from "./components/Settings/Settings-container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs/>}/>
                <Route path='/profile/:userId?' render={() =>
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
