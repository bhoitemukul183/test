import React, { useState } from "react";
import "./Testimonials.scss";
import ProfilePic from "../../Assets/prof.jpg";

function Testimonials() {
  const [openForm, setOpenForm] = useState(false);
  const [testimonial, setTestimonial] = useState({
    name: "",
    desc: "",
    img: "",
  });
  const [testimonialList, setTestimonialList] = useState([]);

  function ImQuotesLeft(props) {
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
        <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z" />
      </svg>
    );
  }

  function ImQuotesRight(props) {
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
        <path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z" />
      </svg>
    );
  }

  function AiFillEdit(props) {
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
        <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
      </svg>
    );
  }

  function AiFillCloseCircle(props) {
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
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
      </svg>
    );
  }

  function IoMdSend(props) {
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
        <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" />
      </svg>
    );
  }

  const submitForm = () => {
    setTestimonialList([...[...testimonialList, testimonial]]);
    setTestimonial({ name: "", desc: "", gender: "Male" });
    setOpenForm(false);
  };
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-cards">
          <div className="testimonial-image">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="testimonial-content">
            <ImQuotesLeft />
            &nbsp; Text in a pre element is displayed in a fixed-width font, and
            it preserves both spaces.........
            <ImQuotesRight />
          </div>
          <div className="testimonial-name">- Mukul Bhoite</div>
        </div>
        {testimonialList.map((card, index) => {
          return (
            <div className="testimonial-cards" key={index}>
              <div className="testimonial-image">
                {card.gender == "Male" ? (
                  <img src={ProfilePic} alt="" />
                ) : (
                  <img src={card.img} alt="" />
                )}
              </div>
              <div className="testimonial-content">
                <ImQuotesLeft />
                &nbsp;{card.desc}&nbsp;
                <ImQuotesRight />
              </div>
              <div className="testimonial-name">- {card.name}</div>
            </div>
          );
        })}
      </div>
      <br />
      <div className="add-thought-btn-container">
        <div className="add-thought-btn" onClick={() => setOpenForm(true)}>
          <AiFillEdit />
          <span>Add Thoughts</span>
        </div>
      </div>
      {openForm && (
        <div className="form" id="form">
          <div className="form-content">
            <div className="form-close" onClick={() => setOpenForm(false)}>
              <AiFillCloseCircle />
            </div>
            <div className="input-row">
              <input
                type="text"
                id="name"
                value={testimonial.name}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, name: e.target.value })
                }
              />
              <label className={`${testimonial.name ? "active" : ""}`}>
                Name
              </label>
            </div>
            <div className="input-row">
              <input
                type="text"
                id="name"
                value={testimonial.desc}
                onChange={(e) =>
                  setTestimonial({ ...testimonial, desc: e.target.value })
                }
              />
              <label className={`${testimonial.desc ? "active" : ""}`}>
                Thought
              </label>
            </div>
            <div className="gender-container">
              <div
                className="gender-sub-container"
                onClick={() =>
                  setTestimonial({ ...testimonial, gender: "Male" })
                }
              >
                <input
                  type="radio"
                  id="Male"
                  name="fav_language"
                  value={testimonial.gender == "Male"}
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div
                className="gender-sub-container"
                onClick={() =>
                  setTestimonial({ ...testimonial, gender: "Female" })
                }
              >
                <input
                  type="radio"
                  id="Female"
                  name="fav_language"
                  value={testimonial.gender == "Female"}
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
            {/* <div className="input-row">
                            <input type="text" id="name" value={testimonial.img} onChange={(e) => setTestimonial({ ...testimonial, img: e.target.value })} />
                        </div> */}
            {/* <button submit="submit" id="submit" onClick={submitForm} >submit </button> */}
            <br></br>
            <div className="submit" id="submit" onClick={submitForm}>
              Submit &nbsp; <IoMdSend />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
