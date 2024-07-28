import React from "react";
import "./SectionTitle.scss";
export const SectionTitle = ({ name, title }) => {
  return (
    <div className="section-title">
      <span>{name}</span>
      <h3>{title}</h3>
    </div>
  );
};
