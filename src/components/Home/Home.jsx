import React from 'react';
import style from './Home.module.css'

const Header = () => {
    return(
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Go-home-2.svg' alt='home' />
            <h6 className={style.hello}>
                Hello this is my first project.
                U can try functions from navigation bar. plz check registration, and profiles
            </h6>
        </div>
    )
}


export default Header;