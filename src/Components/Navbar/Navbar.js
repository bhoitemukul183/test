import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [hamactive, sethamActive] = useState("");

  function open() {
    sethamActive(hamactive == "open" ? "" : "open");
    if (!hamactive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <div>
      <div
        className="nav-tray"
        style={{
          height: hamactive == "open" ? "100vh" : "0",
          width: hamactive == "open" ? "100%" : "0",
        }}
      >
        <div
          className="nav-sub-tray"
          style={{
            height: hamactive == "open" ? "60%" : "0",
            width: hamactive == "open" ? "60%" : "0",
          }}
        >
          <div className="nav-content">
            <div className="nav-row">
              <a href="#self-info"> About</a>
            </div>
            <div className="nav-row">
              <a href="#exp"> Experience</a>
            </div>
            <div className="nav-row">
              <a href="#edu"> Education</a>
            </div>
            <div className="nav-row">
              <a href="#project"> Projects</a>
            </div>
            {/* <div className="nav-row"> Experience</div>
            <div className="nav-row">Education</div>
            <div className="nav-row">Projects</div>      */}
          </div>
        </div>
      </div>
      <div className="header">
        <div id="nav-icon1" className={hamactive} onClick={open}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
