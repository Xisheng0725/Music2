import React from 'react';

const Detail = ({album, artists, name}) => {
    
    fetch("http://localhost:8080/songs/getEmail", {
        method: "GET",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ "name": name }),
    }).then(() => {
        console.log("http://localhost:8080/songs/getEmail");
    })

    return (
        <div className="offset-md-1 col-sm-4" >
            <div className="row col-sm-12 px-0">
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={artists[0].name} className="form-label col-sm-12">
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Detail;