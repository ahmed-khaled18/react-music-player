import React from "react";

const librarySong = ({ song, currentSong, setCurrentSong, setIsPlaying }) => {
  const currentSongHandller = () => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  return (
    <div onClick={currentSongHandller} className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}>
      <img alt={song.name} src={song.cover} />
      <div className="library-song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default librarySong;
