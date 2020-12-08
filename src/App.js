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
import SettingsContainer from "./components/Settings/Settings-container";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= { () =>
                        <Dialogs state={props.state.DialogPage}  /> } />
                    <Route path='/profile' render= { () =>
                        <Profile store={props.store}
                            /*state={props.state.ProfilePage}
                            AddNewProfile={props.state.ProfilePage.AddNewProfile}
                            dispatch={ props.dispatch }*/
                        /> }/>
                    <Route path='/music' component={Songs}/>
                    <Route path='/settings' render= { () =>
                        <SettingsContainer
                            store={props.store}
                            /*SettingsPage={props.state.SettingsPage}
                            addNewSetting={props.state.SettingsPage.addNewSetting}
                            dispatch={ props.dispatch }*/
                        />  }/>
                    <Route exact path='/' component={Home}/>
                </div>
            </div>
    );
}


export default App;
