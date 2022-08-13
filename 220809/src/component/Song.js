import React from 'react';
//let songs = [{artistName:"Prodigy", songName:"Fire Starter"},{artistName:"Daft Punk", songName:"Revolution 909"},{artistName:"Joey Beltram", songName:"Energy Flash"}];
const Song = (props) => {
    return (
        <div>
            {props.dainos.map((value) => <li>{value.artistName} {"-"} {value.songName}</li> )}
        </div>
    );
};

export default Song;