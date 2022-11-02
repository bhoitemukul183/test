import React, { useState } from "react";
import "./Landingpage.scss";

function Landingpage() {
  const [range, setrange] = useState(1);
  const [disablepage, setDisablePage] = useState("");

  function change(value) {
    setrange(value);
    var newOpacity = "0." + (19 - value);
    document.getElementById("container").style.opacity = newOpacity;

    if (newOpacity == 0) {
      setDisablePage("none");
    } else {
      setDisablePage("block");
    }
  }

  return (
    <div>
      <div
        className="main-container"
        id="container"
        style={{ display: disablepage }}
      >
        <div className="switch-container">
          <div>
            <input
              type="range"
              min="10"
              max="19"
              className="range blue"
              value={range}
              onChange={(e) => change(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
