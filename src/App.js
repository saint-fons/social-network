import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Profile/Profile";
import Profile from "./components/Navbar/Navbar";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />

        </div>
    );
}


export default App;
