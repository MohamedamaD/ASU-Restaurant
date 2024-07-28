import React, { useEffect } from "react";
import { SectionTitle, TestimonialSlide } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css";
import "./Testimonials.scss";
import { fetchTestimonials } from "../../store/Slices/Restaurant";

export const Testimonials = () => {
  const { testimonials } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  console.log(testimonials);
  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);
  return (
    <section id="testimonials" className="testimonials">
      <div className="overlay"></div>
      <div className="container">
        <SectionTitle name={"Testimony"} title={"Happy Customer"} />
        <Swiper
          effect="flip"
          pagination={{
            el: ".bullets",
            type: "bullets",
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectFlip, Pagination]}
          allowTouchMove={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item?._id}>
              <TestimonialSlide
                feedback={item?.feedback}
                img={item?.img}
                name={item?.name}
                position={item?.position}
              />
            </SwiperSlide>
          ))}

          <div className="bullets"></div>
        </Swiper>
      </div>
    </section>
  );
};
