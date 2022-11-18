import React from "react";
import "./Testimonials.scss";

function Testimonials() {
    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial-cards">
                    <div className="testimonial-image"></div>
                    <div className="testimonial-content"><pre>
                        Text in a pre element
                        is displayed in a fixed-width
                        font, and it preserves
                        both      spaces and
                        line breaks
                    </pre></div>
                    <pre>
                        Text in a pre element
                        is displayed in a fixed-width
                        font, and it preserves
                        both      spaces and
                        line breaks
                    </pre>
                </div>

                <div className="testimonial-cards"></div>
                <div className="testimonial-cards"></div>

            </div>;

        </>
    );
}

export default Testimonials;
