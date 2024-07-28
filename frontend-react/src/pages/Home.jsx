import React from "react";
import {
  Blog,
  Chefs,
  Menu,
  Reservation,
  Testimonials,
  Secret,
} from "../containers";
export const Home = () => {
  return (
    <div className="App-home">
      <Reservation />
      <Menu />
      <Testimonials />
      <Chefs />
      <Secret />
      <Blog />
    </div>
  );
};
