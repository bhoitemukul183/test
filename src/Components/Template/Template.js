import React from "react";
import "./Template.scss";
import Work from "../../Assets/work.gif";

function Template() {
  return (
    <>
      <div className="self-info-container">
        <div className="template-parent">
          <img src={Work} />
        </div>
      </div>
    </>
  );
}

export default Template;
