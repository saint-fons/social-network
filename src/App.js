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


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= { () =>
                        <Dialogs state={props.state.DialogPage}  /> } />
                    <Route path='/profile' render= { () =>
                        <Profile state={props.state.ProfilePage}
                                 AddNewProfile={props.state.ProfilePage.AddNewProfile}
                                 addProfile={props.addProfile}
                                 addNewProfileText={props.addNewProfileText}
                        /> }/>
                    <Route path='/music' component={Songs}/>
                    <Route path='/settings' render= { () =>
                        <Settings state={props.state.SettingsPage}
                                  addNewSetting={props.state.SettingsPage.addNewSetting}
                                  addNewSettingText={ props.addNewSettingText }
                                  addSetting={ props.addSetting } />  }/>
                    <Route exact path='/' component={Home}/>
                </div>
            </div>
    );
}


export default App;
