import React from "react";
import brandsStyle from "./styles/Brandslide.module.css";
import Slider from "react-slick";

const Brandslide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={brandsStyle.images}>
      <Slider {...settings}>
        <img src="/static/img/castle.png" alt="castle" />
        <img src="/static/img/coca.png" alt="coca" />
        <img src="/static/img/davido.png" alt="davido" />
        <img src="/static/img/dmw.png" alt="dmw" />
        <img src="/static/img/theplug.png" alt="theplug" />
        <img src="/static/img/visalogo.png" alt="visalogo" />
        <img src="/static/img/teGroup.png" alt="tegroup" />
      </Slider>
    </div>
  );
};

export default Brandslide;
