import React from "react";
import "./Template.scss";
import Work from "../../Assets/work.gif";
import Profile from "../../Assets/1logo.png";

function Template() {
  return (
    <>
      <div className="self-info-container">
        <div className="Profile-Container">
          <div className="Profile-picture-Container">
            <div className="profile-picture">
              <img src={Profile} alt="" />
            </div>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-table-container">
            <div className="profile-table-row">
              <div className="profile-table-tag">Personal Info</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">Name</div>
              <div className="profile-table-data">Mukul Mahesh Bhoite</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">Number</div>
              <div className="profile-table-data">9405829407</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">E-mail</div>
              <div className="profile-table-data">bhoitemukul183@gmaail.com</div>
            </div>
          </div>
        </div>
        <div className="template-parent">
          <img src={Work} />
        </div>
      </div>
    </>
  );
}

export default Template;
