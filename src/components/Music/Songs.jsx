import React from 'react';
import m from "./Songs.module.css";
import Song from './Song/Song'



const Songs = () => {
    return <div>
        My favorites songs;
        <div className={m.song}>
            <Song />
        </div>

    </div>
}


export default Songs;