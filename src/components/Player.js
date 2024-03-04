import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player-controller-container">
      <div className="time-controller-container">
        <p>start time</p>
        <input type="range" />
        <p>end time</p>
      </div>
      <div className="control-buttons-container">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
