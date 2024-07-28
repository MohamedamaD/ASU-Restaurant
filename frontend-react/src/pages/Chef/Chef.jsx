import React from "react";
import "./Chef.scss";
import { Chefs, Reservation } from "../../containers";
export const Chef = () => {
  return (
    <div className="App-chef">
      <Chefs />
      <Reservation />
    </div>
  );
};
