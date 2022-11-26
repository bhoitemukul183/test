import React from "react";
import "./Template.scss";
import Work from "../../Assets/work.gif";
import Profile from "../../Assets/1logo.png";

function Template() {
  function FaUserTie(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z" />
      </svg>
    );
  }

  function FaMobile(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 320 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
      </svg>
    );
  }

  function GrMail(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
        />
      </svg>
    );
  }

  function RiComputerFill(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13 18v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" />
        </g>
      </svg>
    );
  }

  function FaCode(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
      </svg>
    );
  }

  function GiThreeFriends(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M389 40.84c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35-18.7-35-44.03c0-25.24 16.5-44.03 35-44.03zm-132.9 0c18.4 0 35 18.79 35 44.03 0 25.33-16.6 44.03-35 44.03-18.5 0-35.1-18.7-35.1-44.03 0-25.24 16.6-44.03 35.1-44.03zm-133 0c18.5 0 35 18.79 35 44.03 0 25.33-16.5 44.03-35 44.03s-35.09-18.7-35.09-44.03c0-25.24 16.59-44.03 35.09-44.03zm133 109.06c64 2 118 2 182.8 4.2 30.9 17.8 45.2 109 44.3 140.7l-17.6 17.7c-7.7-42.8-17.4-99.9-33.5-112.6v87.6l4.1 183.7H414l-16.7-184.7h-18l-16.7 184.7h-22.3l4.2-183.7-8-88.5h-29.3l-7.2 88.2 4.2 183.7h-22.3l-16.8-184.7h-18l-16.8 184.7h-22.2l4.2-183.7L205 199h-29.3l-8 88.5 4.2 183.7h-22.3l-16.7-184.7h-18L98.01 471.2h-22.2l4.2-183.7v-87.6c-16.2 12.7-25.9 69.8-33.6 112.6l-17.6-17.7c-.9-31.7 13.5-122.9 44.3-140.7 64.99-2.2 118.99-2.2 182.99-4.2z" />
      </svg>
    );
  }

  function VscTriangleUp(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z" />
      </svg>
    );
  }

  return (
    <>
      <div className="self-info-container" id="self-info">
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
              <div className="profile-table-data">
                <FaUserTie />
              </div>
              <div className="profile-table-data">Mukul Mahesh Bhoite</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <FaMobile />
              </div>
              <div className="profile-table-data">9405829407</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <GrMail />
              </div>
              <div className="profile-table-data">bhoitemukul183@gmail.com</div>
            </div>
          </div>
          <div className="profile-table-container">
            <div className="profile-table-row">
              <div className="profile-table-tag">Skills</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <RiComputerFill />
              </div>
              <div className="profile-table-data">HTML</div>
            </div>
            {/* adding */}
            <div className="profile-table-row">
              <div className="profile-table-data">
                <RiComputerFill />
              </div>
              <div className="profile-table-data">CSS</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <RiComputerFill />
              </div>
              <div className="profile-table-data">Java Script</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <RiComputerFill />
              </div>
              <div className="profile-table-data">MSCIT</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <RiComputerFill />
              </div>
              <div className="profile-table-data">Advance Excel</div>
            </div>
          </div>
          <div className="profile-table-container">
            <div className="profile-table-row">
              <div className="profile-table-tag">Hobbies</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <FaCode />
              </div>
              <div className="profile-table-data">Spending Time In Coding</div>
            </div>
            <div className="profile-table-row">
              <div className="profile-table-data">
                <GiThreeFriends />
              </div>
              <div className="profile-table-data">Making New Friends</div>
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
