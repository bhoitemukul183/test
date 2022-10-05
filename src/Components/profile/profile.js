import React from "react";
import "./profile.scss";
import bag from "../../Assets/bag.png";

function profile() {
    return <>
        <div className="profile-main-container">
            <div className="tagline">
                <div className="icon"><img src={bag} alt="" /></div>
                <div className="profile-tag">Education</div>
            </div>
        </div>
    </>
}

export default profile;
