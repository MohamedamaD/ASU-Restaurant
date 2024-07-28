import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { Button, SectionTitle } from "../../components";
import { MenuCard } from "../../components/MenuCard/MenuCard";
import { motion } from "framer-motion";
import { effects } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../../store/Slices/Restaurant";

export const Menu = () => {
  const { menus } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState([]);
  console.log(0);
  useEffect(() => {
    dispatch(fetchMenus());
    setLimit(Array(menus.length).fill(5));
  }, [dispatch, menus.length]);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <SectionTitle name={"Specialties"} title={"Our Menu"} />
        <div className="meals">
          {menus.map((element, index) => (
            <motion.div
              className="card"
              // initial={effects.scale.initial}
              // whileInView={effects.scale.animate}
              // transition={{
              //   ...effects.transition.trans,
              //   delay: index * 0.2,
              // }}
              key={element?._id}
            >
              <h3>{element?.title}</h3>
              {element?.menuItems.slice(0, limit[index]).map((el, i) => (
                <MenuCard
                  img={el?.img}
                  ingredients={el?.dsc}
                  name={el?.name}
                  price={el?.price}
                  key={el?.id}
                />
              ))}
              <div className="more-wrapper">
                <button
                  className="moreButton"
                  onClick={() => {
                    limit[index] += 5;
                    setLimit([...limit]);
                  }}
                >
                  show more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
