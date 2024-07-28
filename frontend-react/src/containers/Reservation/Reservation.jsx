import React from "react";
import "./Reservation.scss";
import { BookTable, SectionTitle } from "../../components";
import { motion } from "framer-motion";
import { effects } from "../../constants";
export const Reservation = () => {
  console.log(effects.fade.animate);
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="wrap">
          <BookTable />
          <motion.div
            className="text-box"
            initial={effects.slide.initial}
            whileInView={effects.slide.animate}
            transition={{
              ...effects.transition.trans,
              x: effects.transition.spring,
            }}
          >
            <SectionTitle name={"reservation"} title={"get it right now."} />
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
