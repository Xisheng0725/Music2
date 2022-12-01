import React from 'react';

const Dtl = ({album, artists, name}) => {
    
    fetch("http://localhost:8080/songs/getEmail", {
        method: "GET",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ "name": name }),
    }).then(() => {
        console.log("http://localhost:8080/songs/getEmail");
    })

    return (
        <div>
            <div>
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div>
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
            <div>
                <label htmlFor={artists[0].name}>
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Dtl;
