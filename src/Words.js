import React, { useState } from "react";
import tocfl from "./tocfl.json";
import "./Words.css";

function Words() {
  const myWords = [
    "最近",
    "這",
    "一",
    "兩",
    "天",
    "搬",
    "了",
    "新",
    "家",
    "我",
    "的",
    "好朋友",
    "借",
    "我",
    "車子",
    "讓",
    "我",
    "可以",
    "搬家",
    "我",
    "和",
    "台北",
    "的",
    "朋友",
    "趁",
    "半夜",
    "一",
    "兩",
    "點",
    "時",
    "開車",
    "搬家",
    "東西",
    "太",
    "多",
    "了",
    "因此",
    "來回",
    "了",
    "三",
    "趟",
    "總共",
    "搬",
    "了",
    "個",
    "小時",
    "從",
    "晚上",
    "搬",
    "到",
    "了",
    "天亮",
    "我",
    "從",
    "新店",
    "搬",
    "到",
    "古亭",
    "捷運",
    "站",
    "附近",
    "位置",
    "就",
    "在",
    "牯嶺",
    "街",
    "牯嶺",
    "街",
    "在",
    "台灣",
    "早期",
    "是",
    "著名",
    "的",
    "書店",
    "街",
    "有",
    "非常多",
    "書局",
    "因此",
    "這個",
    "地區",
    "非常",
    "有",
    "人文",
    "氣息",
  ];

  function findLevel() {
    const uniq = [...new Set(myWords)];

    let arr = [];
    for (let i = 0; i < uniq.length; i++) {
      for (let j = 0; j < tocfl.length; j++) {
        if (uniq[i] === tocfl[j].word) {
          arr.push({ word: uniq[i], level: tocfl[j].level });
          i++;
          j = 0;
        }
      }
      arr.push({ word: uniq[i], level: "???" });
    }
    return arr;
  }

  const levels = findLevel();

  // const tocflSorted = tocfl.sort(
  //   (firstItem, secondItem) => firstItem.level - secondItem.level
  // );

  function levelOnly(level) {
    return levels.filter((item) => item.level == level);
  }

  return (
    <div>
      <div className="levels-wrapper">
        {[1, 2, 3, 4, 5, 6, 7, "pl", "???"].map((item) => (
          <div className="level-box">
            <p className="title">{item > 0 ? "Level " + item : item}</p>
            <p className="words">
              {levelOnly(item).map((item) => (
                <span class="bubble">{item.word}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <div>{JSON.stringify([])}</div>
    </div>
  );
}

export default Words;
