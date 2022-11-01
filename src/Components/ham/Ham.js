import React from "react";
import "./Ham.scss";
import Baner from "../Baner/Baner.js";
import Profile from "../profile/Profile.jsx";
import Footer from "../Footer/Footer.js";
import Media from "../Media/Media.js";
import Gallery from "../Cards/Cards";

function Ham() {
  return (
    <div className="ham-main-container">
      <div className="ham-container1">
        <div className="ham-sub-container1">
          {/* <div className="images"></div> */}
        </div>
      </div>
      <div className="ham-container2">
        <div className="ham-sub-container2">
          <div className="content-main-container">
            {/* All Elements Write Here */}
            <br />
            <Profile />
            <Baner />
            {/* <Gallery /> */}
            <Media />
            <Footer />
            <div style={{ height: "300px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ham;
