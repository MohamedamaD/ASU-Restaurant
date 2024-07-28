import React from "react";
import "./TestimonialSlide.scss";
export const TestimonialSlide = ({ img, name, position, feedback }) => {
  return (
    <div className="testimonial-slide">
      <div>
        <img src={img} alt="" />
        <p className="name">{name}</p>
        <span>{position}</span>
        <p className="white p">{feedback}</p>
      </div>
    </div>
  );
};
