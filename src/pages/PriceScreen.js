import React from "react";
import { useNavigate } from "react-router-dom";
import "./PriceScreen.css";

function PriceScreen() {
  const navigation = useNavigate();
  return (
    <div className="priseScreen_price">
      <div className="priceScreen_main">
        <div className="priceScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button onClick={() => navigation("/")}>Subscribe</button>
      </div>
      <div className="priceScreen_main">
        <div className="priceScreen_info">
          <h5>Standart</h5>
          <h6>1080p</h6>
        </div>
        <button onClick={() => alert("Get Premium ")} >Subscribe</button>
      </div>

      <div className="priceScreen_main">
        <div className="priceScreen_info">
          <h5>Premium</h5>
          <h6>4K+HDR</h6>
        </div>
        <button onClick={() => alert("Get Premium ")} >Subscribe</button>
      </div>
    </div>
  );
}

export default PriceScreen;
