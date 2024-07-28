import React from "react";
import "./Chef.scss";
import { ChefCard, SectionTitle } from "../../components";
import { images } from "../../constants";
const api = [
  {
    img: images.chef1,
    name: "noura",
    position: "ceo founder",
  },
  {
    img: images.chef2,
    name: "john smith",
    position: "ceo founder",
  },
];
export const Chefs = () => {
  return (
    <section id="chef" className="chef">
      <div className="container">
        <SectionTitle name={"chef"} title={"our master chef"} />
        <div className="cards">
          {api.map((el, i) => (
            <ChefCard
              key={el.name + i}
              img={el.img}
              name={el.name}
              position={el.position}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
