import React from "react";
import "./Secret.scss";
import { Button, SectionTitle } from "../../components";
import { images } from "../../constants";
export const Secret = () => {
  return (
    <section id="secret" className="secret">
      <div className="container">
        <div className="item">
          <img src={images.secret1} alt="secret1" />
          <img src={images.secret2} alt="secret2" />
        </div>
        <div className="item">
          <SectionTitle
            name={"This Is Our Secrets"}
            title={"Perfect Ingredients"}
          />
          <p>
            Far Far Away, Behind The Word Mountains, Far From The Countries
            Vokalia And Consonantia, There Live The Blind Texts. Separated They
            Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large
            Language Ocean.
          </p>
          <Button value={"learn more"} />
        </div>
      </div>
    </section>
  );
};
