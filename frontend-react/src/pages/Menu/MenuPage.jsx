import React from "react";
import "./MenuPage.scss";
import { BookTable } from "../../components";
import { Menu } from "../../containers";
export const MenuPage = () => {
  return (
    <div className="App-menu">
      <Menu />
      <section className="book-menu white">
        <div className="container">
          <div className="wrapper">
            <BookTable />
          </div>
        </div>
      </section>
    </div>
  );
};
