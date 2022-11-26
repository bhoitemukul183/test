import React from "react";
import "./ContactUs.scss";

function ContactUs() {
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

  function ImPhone(props) {
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
        <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
      </svg>
    );
  }

  function AiFillHome(props) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
      </svg>
    );
  }

  function AiFillInstagram(props) {
    return (
      <svg
        stroke="currentColor"
        fill="#456e84"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
      </svg>
    );
  }

  function FaTwitter(props) {
    return (
      <svg
        stroke="currentColor"
        fill="#456e84"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    );
  }

  function FaFacebookSquare(props) {
    return (
      <svg
        stroke="currentColor"
        fill="#456e84"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
      </svg>
    );
  }

  function FaLinkedin(props) {
    return (
      <svg
        stroke="currentColor"
        fill="#456e84"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    );
  }

  return (
    <>
      <div className="contact-container">
        <div className="contact-sub-container1">
          <div className="social-media-icon">
            <a href="https://www.instagram.com/mr_lucifer_morningstar_30/">
              <AiFillInstagram />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.facebook.com/profile.php?id=100004204818264">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://twitter.com/BhoiteMukul">
              <FaTwitter />
            </a>
          </div>
          <div className="social-media-icon">
            <a href="https://www.linkedin.com/in/mukul-bhoite-29217315a/">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="contact-sub-container2">
          <div className="contact-row">
            <div className="table-contact-data">
              <ImPhone />
            </div>
            <div className="table-contact-data">9405829407</div>
          </div>
          <div className="contact-row">
            <div className="table-contact-data">
              <AiFillHome />
            </div>
            <div className="table-contact-data">
              302, Dhandip Building, Bhekrai Nagar, Hadapsar. Pune -412308
            </div>
          </div>
          <div className="contact-row">
            <div className="table-contact-data">
              <GrMail />
            </div>
            <div className="table-contact-data">Bhoitemukul183@gmail.com</div>
          </div>
          {/* <div className="height"></div> */}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
