import React from "react";
import "./Text.css";

function Text({ getCurrentTime, setCurrentTime }) {
  //functions
  //this function only works for under 10 minutes
  function fmtMSS(s) {
    return ((s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s).substr(0, 4);
  }

  function activeSenIndex(getCurrentTime) {
    for (let i = 1; i < hardcoded.textTrad.length; i++) {
      if (hardcoded.textTrad[i].time > getCurrentTime) {
        return i - 1;
      }
    }
  }

  const hardcoded = {
    textTrad: [
      { time: 0, text: "最近這一兩天搬了新家" },
      { time: 3.8, text: "我的好朋友借我車子讓我可以搬家" },
      { time: 6.8, text: "我和台北的朋友" },
      { time: 8.3, text: "趁半夜一兩點時開車搬家" },
      { time: 11.8, text: "東西太多了因此來回了三趟" },
      { time: 14.8, text: "總共搬了4個小時" },
      { time: 16.8, text: "從晚上搬到了天亮" },
      { time: 19.4, text: "我從新店搬到古亭捷運站附近" },
      { time: 23.2, text: "位置就在牯嶺街（GuLing Street）" },
      { time: 25.1, text: "牯嶺街在台灣早期是著名的書店街" },
      { time: 28.7, text: "有非常多書局" },
      { time: 30.1, text: "因此這個地區非常有人文氣息" },
      { time: 32.9, text: "住家附近有公園、也有非常多的便利商店" },
      { time: 36.7, text: "生活機能非常好" },
      { time: 38.3, text: "現在住的地方有7個室友" },
      { time: 41.3, text: "有博士班的學生、有醫生、有工程師、也有學生" },
      { time: 47.5, text: "大家共用廚房跟客廳一起生活" },
      { time: 52.1, text: "還有三隻貓會在客廳跟每個房間跑來跑去的" },
      { time: 56.1, text: "希望未來共居生活（co-living）可以順順利利的" },
      { time: 61.13, text: "" },
    ],
    textSimp: ["test", "test2"],
    mp3: ``,
  };
  return (
    <div className="text">
      {hardcoded.textTrad.map((item, index) => (
        <p>
          {index === activeSenIndex(getCurrentTime) ? (
            <div>
              <span className="arrow red">{" ➡ "}</span>
              <span className="red-border">
                {fmtMSS(item.time)} {item.text}
              </span>
            </div>
          ) : (
            <div>
              <span className="arrow" onClick={() => setCurrentTime(item.time)}>
                {" ➡ "}
              </span>
              <span>
                {fmtMSS(item.time)} {item.text}
              </span>
            </div>
          )}
        </p>
      ))}
    </div>
  );
}

export default Text;
