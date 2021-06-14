/* eslint-disable react/jsx-props-no-spreading */
// https://swiperjs.com/react

/* eslint-disable react/prop-types */

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

const SwiperCarousel = ({ _css, id, loop, options, nav, slides }) => {
  // ===========================================================================
  // context / ref / state

  const swiper = useRef(null);

  const [current, setCurrent] = useState(1);

  // ===========================================================================
  // methods

  const next = () => {
    if (swiper?.current?.swiper?.slideNext) {
      swiper.current.swiper.slideNext();
    }
  };

  const prev = () => {
    if (swiper?.current?.swiper?.slidePrev) {
      swiper.current.swiper.slidePrev();
    }
  };

  // ===========================================================================
  // render

  return (
    <>
      <Swiper
        id={id}
        ref={swiper}
        css={_css}
        loop={loop}
        onSlideChange={({ realIndex }) => {
          setCurrent(realIndex);
        }}
        {...options}
      >
        {slides.map((slide) => (
          <SwiperSlide>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {nav &&
        nav({
          current,
          next,
          prev,
        })}
    </>
  );
};

export default SwiperCarousel;
