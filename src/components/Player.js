import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  };

  const timeFormatter = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };

  const dragHandller = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  return (
    <div className="player-controller-container">
      <div className="time-controller-container">
        <p>{timeFormatter(songInfo.currentTime)}</p>
        <input onChange={dragHandller} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" />
        <p>{timeFormatter(songInfo.duration || 0)}</p>
      </div>
      <div className="control-buttons-container">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio onLoadedData={autoPlayHandler} onLoadedMetadata={timeHandler} onTimeUpdate={timeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
