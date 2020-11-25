import React from 'react';
import m from "./Songs.module.css";
import Song from './Song/Song'





const Songs = () => {

    let favoriteSongs = [
        {name: "charlixcx", song: "mercedes"},
        {name: "mozart", song: "requiem"}
    ]


    let songsElements = favoriteSongs.map( s => (<Song name={s.name} song={s.song} />))

    return <div>
        My favorites songs;
        <div className={m.song}>
            { songsElements }
        </div>

    </div>
}


export default Songs;