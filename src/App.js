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

  const data = [
    {value: 1, name: 'A'},
    {value: 2, name: 'B'},
    {value: 3, name: 'C'},
  ]; 

  const [token, setToken] = useState('');  
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
  const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
  const [trackDetail, setTrackDetail] = useState(null);

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
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {        
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
      
    });

  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

  const genreChanged = val => {
    setGenres({
      selectedGenre: val, 
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    });

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(playlistResponse => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items
      })
    });

  }

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

    setTrackDetail(trackInfo[0].track);
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
        <p
        style={{color: 'white', fontSize: '13px', letterSpacing: '0.1em', marginLeft: '700px'}}
        class="username">
        username
        </p>
        <hr
        style={{marginBottom:'20px'}}>
        </hr>
      </div>

      <div className='userInfoBtn'>
        <a href=''>
          <button 
          style={{background:'rgba(217, 217, 217, 0.1)', border:'2px solid #FFFFFF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '30px'}}>
            <p style={{color: 'white', marginLeft: '10px', marginRight: '10px', right:'50px'}}>
            View Account Info
            </p>
          </button>
        </a>
        <br>
        </br>
        <br>
        </br>
        <a href=''>
          <button 
          style={{background:'rgba(217, 217, 217, 0.1)', border:'2px solid #FFFFFF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '30px'}}>
            <p style={{color: 'white', marginLeft: '10px', marginRight: '10px'}}>
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
          options={genres.listOfGenresFromAPI} 
          selectedValue={genres.selectedGenre}
          changed={genreChanged} />
        <Dropdown label="Then, pick a playlist: "
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged} />
        
        <div className="col-sm-6 row form-group px-0">
            <button type='submit' className="btn btn-success col-sm-12">
              Search
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