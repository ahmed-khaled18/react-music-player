import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="player-controller-container">
      <div className="time-controller-container">
        <p>start time</p>
        <input type="range" />
        <p>end time</p>
      </div>
      <div className="control-buttons-container">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
