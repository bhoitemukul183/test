import { textAlign } from "@mui/system";
import React, { useState } from "react";
import "./Baner.css";
// import bgimage from "../../Assets/Baner/bb.jpg";
import Cardwave from "../../Assets/cardwave.svg";

// import * as React from "react";

function GoInfo(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 14 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
      />
    </svg>
  );
}

// export default GoInfo;

export const Baner = () => {
  const [changeheight, setChangeheight] = useState(0);

  function openPdp(pdpNumber) {
    setChangeheight(pdpNumber);
  }

  // function openPdp(x) {
  //     var pd2 = document.getElementById("pd2");

  //     if (x == 1) {
  //         pd1.style.height = "300px";
  //     }
  //     else if (x == 2) {
  //         pd1.style.height = "0px";
  //     }
  // }
  // onClick = {() => openPdp(1)}

  return (
    <div>
      <div className="main-tag-container" id="project">
        <div className="tag-sub-conteiner">
          <div className="tag">Projects</div>
        </div>
      </div>
      <div className="banner-container">
        <div
          className="banner-content-container"
          onClick={() => openPdp(changeheight == 1 ? 0 : 1)}
        >
          <img src={Cardwave} alt="" />
          <div className="content">
            <div className="content-row">
              {" "}
              <b> Name :</b> Fooddiiee
            </div>
            <div className="content-row">
              {" "}
              <b> Description :</b> The Site Create For Making Digitelis Your
              Food Menu.
            </div>
            <div className="content-row" style={{ color: "greenyellow" }}>
              <b>Status :</b> Completed
            </div>
            <div className="viwe-logo">
              <GoInfo />
            </div>
          </div>
        </div>
        <div
          className="banner-content-container"
          onClick={() => openPdp(changeheight == 2 ? 0 : 2)}
        >
          <img src={Cardwave} alt="" />
          <div className="content">
            <div className="content-row">
              {" "}
              <b> Name :</b> Food Site
            </div>
            <div className="content-row">
              {" "}
              <b> Description :</b> The Site Create For Making Digitelis Your
              Food Menu.
            </div>
            <div className="content-row" style={{ color: "darkorange" }}>
              <b>Status :</b> InProgress
            </div>
            <div className="viwe-logo">
              <GoInfo />
            </div>
          </div>
        </div>
        <div
          className="banner-content-container"
          onClick={() => openPdp(changeheight == 3 ? 0 : 3)}
        >
          <img src={Cardwave} alt="" />
          <div className="content">
            <div className="content-row">
              {" "}
              <b> Name :</b> Food Site
            </div>
            <div className="content-row">
              {" "}
              <b> Description :</b> The Site Create For Making Digitelis Your
              Food Menu.
            </div>
            <div className="content-row" style={{ color: "red" }}>
              <b>Status :</b> InCompleted
            </div>
            <div className="viwe-logo">
              <GoInfo />
            </div>
          </div>
        </div>
        <div
          className="banner-content-container"
          onClick={() => openPdp(changeheight == 4 ? 0 : 4)}
        >
          <img src={Cardwave} alt="" />
          <div className="content">
            <div className="content-row">
              <b> Name :</b> Food Site
            </div>
            <div className="content-row">
              <b> Description :</b> The Site Create For Making Digitelis Your
              Food Menu.
            </div>
            <div className="content-row" style={{ color: "darkorange" }}>
              <b>Status :</b> InProgress
            </div>
            <div className="viwe-logo">
              <GoInfo />
            </div>
          </div>
        </div>
        <div
          className="banner-content-container"
          onClick={() => openPdp(changeheight == 5 ? 0 : 5)}
        >
          <img src={Cardwave} alt="" />
          <div className="content">
            <div className="content-row">
              <b> Name :</b> Food Site
            </div>
            <div className="content-row">
              <b> Description :</b> The Site Create For Making Digitelis Your
              Food Menu.
            </div>
            <div className="content-row" style={{ color: "darkorange" }}>
              <b>Status :</b> InProgress
            </div>
            <div className="viwe-logo">
              <GoInfo />
            </div>
          </div>
        </div>
      </div>
      <div className="under-line"></div>
      <div
        className="project-details"
        id="pd1"
        style={{
          height: changeheight == 1 ? "300px" : "0",
          padding: changeheight == 1 ? "5%" : "0",
        }}
      >
        <div className="detail-content">
          <div className="detail-content-row">
            <b>Name :</b>
          </div>
          <div className="detail-content-row">
            <b>Details :</b>
          </div>
          <div className="detail-content-row">
            <b>Status :</b>
          </div>
          <div className="detail-content-row">
            <b>Used Languages :</b>
          </div>
          <div className="detail-content-row">
            <b>Link :</b>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-content-row">Fooddiiee</div>
          <div className="detail-content-row">
            The Site Create For Making Digitelis Your Food Menu.
          </div>
          <div className="detail-content-row" style={{ color: "greenyellow" }}>
            Completed
          </div>
          <div className="detail-content-row">Html, Css, JavaScript</div>
          <div className="detail-content-row">Www.Fooddiiee.com</div>
        </div>
      </div>
      <div
        className="project-details"
        id="pd1"
        style={{
          height: changeheight == 2 ? "300px" : "0",
          padding: changeheight == 2 ? "5%" : "0",
        }}
      >
        <div className="detail-content">
          <div className="detail-content-row">
            <b>Name :</b>
          </div>
          <div className="detail-content-row">
            <b>Details :</b>
          </div>
          <div className="detail-content-row">
            <b>Status :</b>
          </div>
          <div className="detail-content-row">
            <b>Used Languages :</b>
          </div>
          <div className="detail-content-row">
            <b>Link :</b>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-content-row">Fooddiiee</div>
          <div className="detail-content-row">
            The Site Create For Making Digitelis Your Food Menu.
          </div>
          <div className="detail-content-row" style={{ color: "darkorange" }}>
            InProgress
          </div>
          <div className="detail-content-row">Html, Css, JavaScript</div>
          <div className="detail-content-row">Www.Fooddiiee.com</div>
        </div>
      </div>
      <div
        className="project-details"
        id="pd1"
        style={{
          height: changeheight == 3 ? "300px" : "0",
          padding: changeheight == 3 ? "5%" : "0",
        }}
      >
        <div className="detail-content">
          <div className="detail-content-row">
            <b>Name :</b>
          </div>
          <div className="detail-content-row">
            <b>Details :</b>
          </div>
          <div className="detail-content-row">
            <b>Status :</b>
          </div>
          <div className="detail-content-row">
            <b>Used Languages :</b>
          </div>
          <div className="detail-content-row">
            <b>Link :</b>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-content-row">Fooddiiee</div>
          <div className="detail-content-row">
            The Site Create For Making Digitelis Your Food Menu.
          </div>
          <div className="detail-content-row" style={{ color: "red" }}>
            InCompleted
          </div>
          <div className="detail-content-row">Html, Css, JavaScript</div>
          <div className="detail-content-row">Www.Fooddiiee.com</div>
        </div>
      </div>
      <div
        className="project-details"
        id="pd1"
        style={{
          height: changeheight == 4 ? "300px" : "0",
          padding: changeheight == 4 ? "5%" : "0",
        }}
      >
        <div className="detail-content">
          <div className="detail-content-row">
            <b>Name :</b>
          </div>
          <div className="detail-content-row">
            <b>Details :</b>
          </div>
          <div className="detail-content-row">
            <b>Status :</b>
          </div>
          <div className="detail-content-row">
            <b>Used Languages :</b>
          </div>
          <div className="detail-content-row">
            <b>Link :</b>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-content-row">Fooddiiee</div>
          <div className="detail-content-row">
            The Site Create For Making Digitelis Your Food Menu.
          </div>
          <div className="detail-content-row" style={{ color: "darkorange" }}>
            InProgress
          </div>
          <div className="detail-content-row">Html, Css, JavaScript</div>
          <div className="detail-content-row">Www.Fooddiiee.com</div>
        </div>
      </div>
      <div
        className="project-details"
        id="pd1"
        style={{
          height: changeheight == 5 ? "300px" : "0",
          padding: changeheight == 5 ? "5%" : "0",
        }}
      >
        <div className="detail-content">
          <div className="detail-content-row">
            <b>Name :</b>
          </div>
          <div className="detail-content-row">
            <b>Details :</b>
          </div>
          <div className="detail-content-row">
            <b>Status :</b>
          </div>
          <div className="detail-content-row">
            <b>Used Languages :</b>
          </div>
          <div className="detail-content-row">
            <b>Link :</b>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-content-row">Fooddiiee</div>
          <div className="detail-content-row">
            The Site Create For Making Digitelis Your Food Menu.
          </div>
          <div className="detail-content-row" style={{ color: "darkorange" }}>
            InProgress
          </div>
          <div className="detail-content-row">Html, Css, JavaScript</div>
          <div className="detail-content-row">Www.Fooddiiee.com</div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
