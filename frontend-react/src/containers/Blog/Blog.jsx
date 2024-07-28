import React, { useEffect } from "react";
import "./Blog.scss";
import { BlogCard, SectionTitle } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/Slices/Restaurant";

export const Blog = () => {
  const { blogs } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="blog" id="blog">
      <div className="container">
        <SectionTitle name="blog" title="recent blog" />
        <div className="cards">
          {blogs.map((el, i) => (
            <BlogCard
              key={el._id + i}
              details={el.details}
              img={el.img}
              publicationDate={el.publicationDate}
              url={el.url}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
