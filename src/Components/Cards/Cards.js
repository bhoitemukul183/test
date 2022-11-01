import { React, useState, useEffect } from "react";
import "./Cards.css";
import Arrowr from "../../Assets/r.png";
import Arrowl from "../../Assets/l.png";
import Cancel from "../../Assets/cancel.png";
import g1 from "../../Assets/aqs/aqs1.png";
import g2 from "../../Assets/aqs/aqs2.png";
import g3 from "../../Assets/aqs/aqs3.png";
import g4 from "../../Assets/aqs/aqs4.png";
import g5 from "../../Assets/aqs/aqs5.png";
import g6 from "../../Assets/aqs/aqs6.png";

export default function Cards({ handleClick }) {
  const [activeCard, setActiveCard] = useState(1);

  function nextbtn() {
    let newActiveCard = activeCard + 1;
    if (activeCard == 6) newActiveCard = 1;
    setActiveCard(newActiveCard);
  }

  function prevbtn() {
    let newActiveCard = activeCard - 1;
    if (activeCard == 1) newActiveCard = 6;
    setActiveCard(newActiveCard);
  }

  return (
    <>
      <div className="preview-main-container">
        <div className="cards-main-container">
          <div className="cards-sub-container2">
            <div className={`card card1 ${activeCard == 1 ? "active" : ""}`}>
              <img src={g1} />
            </div>
            <div className={`card card2 ${activeCard == 2 ? "active" : ""}`}>
              <img src={g2} />
            </div>
            <div className={`card card3 ${activeCard == 3 ? "active" : ""}`}>
              <img src={g3} />
            </div>
            <div className={`card card4 ${activeCard == 4 ? "active" : ""}`}>
              <img src={g4} />
            </div>
            <div className={`card card5 ${activeCard == 5 ? "active" : ""}`}>
              <img src={g5} />
            </div>
            <div className={`card card6 ${activeCard == 6 ? "active" : ""}`}>
              <img src={g6} />
            </div>
          </div>
        </div>
        <div className="cards-sub-container">
          <div className="slider-btn" onClick={prevbtn}>
            <img src={Arrowl} />
          </div>
          <div className="slider-btn" onClick={handleClick}>
            <img src={Cancel} />
          </div>
          <div className="slider-btn" onClick={nextbtn}>
            <img src={Arrowr} />
          </div>
        </div>
      </div>
    </>
  );
}

// export default Cards
