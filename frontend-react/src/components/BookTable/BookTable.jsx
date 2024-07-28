import React from "react";
import { InputFields } from "../InputFields/InputFields";
import "./BookTable.scss";
export const BookTable = () => {
  return (
    <form action="" method="POST" id="book-form" className="white">
      <label htmlFor="name">BOOK YOUR TABLE</label>
      <InputFields name={"name"} id={"name"} type="text" placeholder="name" />
      <InputFields name={"email"} type="email" placeholder="email" required />
      <InputFields name={"tel"} type="tel" placeholder="phone" />
      <InputFields name="check-in" type="date" placeholder="check-in" />
      <InputFields name="time" type="text" placeholder="time" />
      <select name="seats" id="seats">
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <InputFields type="submit" value="book your table now" />
    </form>
  );
};
