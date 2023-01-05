import React from "react";
import "./MainScreenTwo.css";
function MainScreenTwo() {
  return (
    <div className="mainScreenTwo_main">
      <div className="mainScreen_Content">
        <div className="main_left">
          <div class="our-story-card-animation-container">
            <img
              alt=""
              class="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
            <div class="our-story-card-animation">
              <div class="our-story-card-animation-image">
                <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>
              <div class="our-story-card-animation-text">
                <div class="text-0">Stranger Things</div>
                <div class="text-1">Downloading...</div>
              </div>
              <div class="our-story-card-animation-custom"></div>
            </div>
          </div>
        </div>
        <div className="main_right">
          <h1>Download your shows to watch offline..</h1>
          <h2>Save your favorites easily and always have something to watch.</h2>
        </div>
      </div>
    </div>
  );
}

export default MainScreenTwo;
