import React from "react";
import './MenuCard.scss'
export const MenuCard = ({ price, img, name, ingredients }) => {
  return (
    <div className="menu-card-body">
      <div className="card-img">
        <img src={img} alt="img" />
      </div>
      <div className="card-text">
        <span>{name}</span>
        <p>{ingredients}</p>
      </div>
      <h4>{price}</h4>
    </div>
  );
};
