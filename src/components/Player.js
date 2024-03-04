import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
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
  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  };

  const timeFormatter = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };
  return (
    <div className="player-controller-container">
      <div className="time-controller-container">
        <p>{timeFormatter(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{timeFormatter(songInfo.duration)}</p>
      </div>
      <div className="control-buttons-container">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio onLoadedMetadata={timeHandler} onTimeUpdate={timeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
