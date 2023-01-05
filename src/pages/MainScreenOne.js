import React from "react";
import "./MainScreen.css";
import MainScreenTree from "./MainScreenTree";
import MainScreenTwo from "./MainScreenTwo";
export const MainScreenOne = () => {
  return (
    <>
    <div className="mainScreenOne_main">
      <div className="mainScreen_Content">
        <div className="main_left">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="main_right">
          <div className="main_right_imgAndVideo">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <video autoPlay loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <MainScreenTwo/>
    <div className="mainScreenOne_main">
      <div className="mainScreen_Content">
        <div className="main_left">
          <h1>Watch everywhere.</h1>
          <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
          </h2>
        </div>
        <div className="main_right">
          <div className="main_right_imgAndVideo1">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
            <video autoPlay loop muted>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <MainScreenTree/>
    </>
  );
};
