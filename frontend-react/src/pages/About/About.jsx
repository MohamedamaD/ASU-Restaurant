import React from "react";
import "./About.scss";
import { Button } from "../../components";
import { Secret, Testimonials } from "../../containers";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setActiveLink } from "../../store/Slices/NavSlices";
const dataProgress = [
  { element: "Tasty Dishes", progress: 100 },
  { element: "Dishes Served", progress: 400 },
  { element: "Restaurants", progress: 19 },
  { element: "Happy Customers", progress: 463 },
];
export const About = () => {
  const progress = dataProgress.map((element) => (
    <div className="item" key={element.element}>
      <motion.span data-progress={element.progress}>0</motion.span>
      <h5>{element.element}</h5>
    </div>
  ));
  const dispatch = useDispatch();

  return (
    <div className="App-about">
      <Secret />
      <section className="progress">
        <div className="overlay"></div>
        <div className="container">
          <div className="wrapper white">{progress}</div>
        </div>
      </section>
      <section className="book">
        <div className="container white">
          <h1>We Make Delicious & Nutritious Food</h1>
          <Button
            onclick={() => {
              dispatch(setActiveLink("menu"));
            }}
            href="/menu"
            value={"Book A Table"}
          />
        </div>
      </section>
      <Testimonials />
    </div>
  );
};
