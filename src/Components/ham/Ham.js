import React from "react";
import "./Ham.scss";
import Baner from '../Baner/Baner.js';

function ham() {
    return <div className="ham-main-container">
        <div className="ham-container1">
            <div className="ham-sub-container1"></div>
        </div>
        <div className="ham-container2">
            <div className="ham-sub-container2">
                <div className="content-main-container">
                    {/* All Elements Write Here */}
                    <Baner></Baner>

                </div>
            </div>
        </div>
    </div>
}

export default ham;
