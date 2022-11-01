import React from "react";
import "./Media.scss";
import image1 from "../../Assets/pirate.jpg";

function Media() {
  return (
    <>
      <div className="media-main-container">
        <base target="_blank" />
        <ul>
          <li>
            <div className="media-image-container">
              <img src="//images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=c3f046fc34580ce265fdc17116bca02a&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" />
            </div>
          </li>
          <li>
            <div className="media-image-container">
              <img src="//images.unsplash.com/photo-1529688499411-262f191fe29e?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=e792852cdfe94c89c561ffff69047cb0&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" />
            </div>
          </li>
          <li>
            <div className="media-image-container">
              <img src="//images.unsplash.com/photo-1509070016581-915335454d19?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=e1315ac6ca5cc07e38a83dbacef90dce&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" />
            </div>
          </li>
          <li>
            <div className="media-image-container">
              <img src={image1} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Media;
