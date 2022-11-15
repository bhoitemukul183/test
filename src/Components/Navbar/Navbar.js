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
        ></div>
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
