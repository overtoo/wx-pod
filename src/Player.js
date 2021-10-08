import React, { useState, useEffect } from "react";

const useAudio = (url, setGetCurrentTime, currentTime) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (currentTime) {
      audio.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGetCurrentTime(audio.currentTime);
      setTime(audio.currentTime);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, time];
};

const Player = ({ url, setGetCurrentTime, currentTime }) => {
  function fmtMSS(s) {
    return ((s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s).substr(0, 4);
  }

  function fmtMSSDecimal(s) {
    return (s =
      (s - (s %= 60)) / 60 +
      (9 < s ? ":" : ":0") +
      s +
      (Number.isInteger(s) ? ".0" : ""));
  }
  const [playing, toggle, time] = useAudio(url, setGetCurrentTime, currentTime);

  return (
    <div>
      <button onClick={toggle}>{playing ? "◼" : "▶"}</button>{" "}
      <span>{fmtMSS(time.toFixed(1))}</span>
    </div>
  );
};

export default Player;
