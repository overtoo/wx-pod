import React, { useState } from "react";
import NavBar from "./NavBar";
import Text from "./Text";
import Player from "./Player";
import "./Reader.css";

function Reader() {
  const [getCurrentTime, setGetCurrentTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //   function clickHandleTemp(e) {
  //     console.log(e.target);
  //   }

  return (
    <div>
      <NavBar />
      <div className="player-wrapper">
        <Player
          currentTime={currentTime}
          setGetCurrentTime={setGetCurrentTime}
          url="https://github.com/overtoo/test/raw/main/4489231.m4a"
        />
      </div>
      <Text getCurrentTime={getCurrentTime} setCurrentTime={setCurrentTime} />
    </div>
  );
}

export default Reader;
