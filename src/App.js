import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import { useState } from "react";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player />;
    </div>
  );
}

export default App;
