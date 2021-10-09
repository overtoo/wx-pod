import React, { useState } from "react";
import NavBar from "./NavBar";
import Text from "./Text";
import Player from "./Player";
import Words from "./Words";
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
      <div className="container">
        <div className="text-wrapper">
          <Text
            getCurrentTime={getCurrentTime}
            setCurrentTime={setCurrentTime}
          />
        </div>
        <div className="words-wrapper">
          <Words />
        </div>
      </div>
    </div>
  );
}

export default Reader;
