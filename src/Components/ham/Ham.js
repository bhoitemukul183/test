import React from "react";
import "./Ham.scss";
import Baner from "../Baner/Baner.js";
import Profile from "../profile/Profile.jsx";
import Footer from "../Footer/Footer.js";
import Media from "../Media/Media.js";

function Ham() {


  return (
    <div className="ham-main-container">
      <div className="ham-container1">
        <div className="ham-sub-container1">
          <div className="logo"></div>
          <div className="ham-burger">
            <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
          </div>
        </div>
      </div>
      <div className="ham-container2">
        <div className="ham-sub-container2">
          <div className="content-main-container">
            {/* All Elements Write Here */}
            <br />
            <Profile />
            <Baner />
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
