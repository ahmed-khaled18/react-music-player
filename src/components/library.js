import LibrarySong from "./LibrarySong";
const Library = ({ songs, currentSong, setCurrentSong, setIsPlaying, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} setCurrentSong={setCurrentSong} currentSong={currentSong} setIsPlaying={setIsPlaying} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Library;
