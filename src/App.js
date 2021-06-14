import React from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  React.useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getPlaylist("3iQvDHWSS1KhyJZ4xnHzcE").then((response) => {
        console.log(response);
        dispatch({
          type: "SET_SHAZAM",
          shazam: response,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
         dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token,dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
