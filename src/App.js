import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/library";
import data from "./data";
import { useState } from "react";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
