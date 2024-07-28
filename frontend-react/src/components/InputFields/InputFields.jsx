import React from "react";
import "./InputFields.scss";
export const InputFields = ({ type, name, id, placeholder }) => {
  return (
    <input
      className="input-fields"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
