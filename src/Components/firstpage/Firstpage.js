import React, { useState } from "react";
import "./Firstpage.scss";
import Man from "../../Assets/man.png";

function Firstpage() {
  const [removePage, setRemovePage] = useState(false);

  return (
    <div>
      <div className={`design-container ${removePage ? "remove" : ""}`}>
        <div className="container1">
          <div className="sub-container1">
            <img src={Man} />
          </div>
        </div>
        <div className="container2">
          <div className="sub-container2">
            <div className="content">
              Hey👋, <br /> I Am Mukul. I Just Triying To Explore My Self In
              Front Of You.
            </div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="nxt-btn" onClick={() => setRemovePage(true)}>
              Know Me More →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
