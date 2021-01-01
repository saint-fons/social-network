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
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/app-reducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(this.props.initialized)
        {
            return <Preloader />
        }


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
                    <Route path='/login' render={() =>
                        <Login/>}/>
                    <Route exact path='/' component={Home}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps,
        {initializeApp}))(App);
