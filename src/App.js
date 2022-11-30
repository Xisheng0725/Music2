import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Listbox from './Listbox';
import Detail from './Detail';
import axios from 'axios';
import './App.css';

const App = () => {

  const spotify = {
    ClientId: '1aee870fccdb4d3cae9de281ffed5f7b',
    ClientSecret: '8feee0b1b9544a0784fdbf309b522697'
  };  


  const [auth, thisToken] = useState('');  
  const [gen, thisGen] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, thisPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, thisSong] = useState({selectedTrack: '', listOfTracksFromAPI: []});
  const [trackDetail, thisSongInfo] = useState(null);

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      thisToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        thisGen({
          selectedGenre: gen.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
      
    });

  }, [gen.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const genreChanged = val => {
    thisGen({
      selectedGenre: val, 
      listOfGenresFromAPI: gen.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=20`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + auth}
    })
    .then(playlistResponse => {
      thisPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });

  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=50`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + auth
      }
    })
    .then(tracksResponse => {
      thisSong({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  const playlistChanged = val => {
    thisPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }



  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

    thisSongInfo(trackInfo[0].track);
  }

  return (

    <div className="container" style={{background: '#16295A', padding: '20px'}}>
      <header className='App-header'>
      <form onSubmit={buttonClicked}>
      
      <div style={{}}>
          <p 
          style= {{color:'white', fontSize:'18px', letterSpacing: '0.5em'}}>
          #pro-aux
          </p>

          <p
          style={{color: 'white', fontSize: '10px', letterSpacing: '0.1em'}}>
          The right songs for any occasion
          </p>
      </div >

      <div className='userinfo'>
      <img className='avatar' style={{marginBottom: '1px', marginLeft: '900px', height:'50px', width:'50px', border:'1px solid #FFFFFF'}} alt="timer" src={require('./avatar.png')} />
        <p
        style={{marginBottom: '1px', marginTop: '1px', color: 'white', fontSize: '13px', letterSpacing: '0.1em', marginLeft: '900px'}}
        class="username">
        username
        </p>
        <hr
        style={{marginTop: '1px', marginBottom:'20px'}}>
        </hr>
      </div>




      <div className='userInfoBtn'>
        <a href=''>
          <button className='btn-success'>
            <p style={{color: 'white', marginLeft: '10px', marginRight: '10px', right:'50px', letterSpacing:'0.15em'}}>
            View Account Info
            </p>
          </button>
        </a>


        <a href=''>
          <button className='btn-success'>
            <p style={{color: 'white', marginLeft: '10px', marginRight: '10px',letterSpacing:'0.15em'}}>
            Logout / Switch Account
            </p>
          </button>
        </a>
      </div>
      <br>
      </br>
        <p style={{color: 'white', fontSize: '18px', letterSpacing: '0.15em', padding: '10px', lineHeight:'18px'}}>
          Welcome to Pro-aux!
        </p>
        <Dropdown 
          label="First, pick a GENRE you are interested in: " 
          options={gen.listOfGenresFromAPI} 
          selectedValue={gen.selectedGenre}
          changed={genreChanged} />
        <Dropdown label="Then, pick a playlist: "
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged} />
        
        <Dropdown label="Then, pick a playlist: "
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged} />
        
        <div >
            <button type='submit' className="btn btn-success col-sm-12">
              <p style={{color: 'white', marginLeft: '10px', marginRight:'10px', letterSpacing:'0.15em'}}>
                Search
              </p>
              
            </button>
        </div>


        <div className="row">
            <Listbox items={tracks.listOfTracksFromAPI} 
            clicked={listboxClicked}/>
            <p style={{fontSize: '15px', marginLeft:'10px', letterSpacing: '0.2em'}}>
              {trackDetail && <Detail {...trackDetail} /> }
            </p>
            
        </div>

      </form>
      </header>
      
    </div>
  );
}

export default App;
