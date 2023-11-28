import React, { useRef, useState } from "react";

///////////////////////////////////////////////////////////////////
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

///////////////////////////////////////////////////////////////////
const imageDatas = [
  { id: 1, sm: "images/Header-Slider/sm-sld1.jpg", xl: "images/Header-Slider/sld1.jpg" },
  { id: 2, sm: "images/Header-Slider/sm-sld2.jpg", xl: "images/Header-Slider/sld2.jpg" },
  { id: 3, sm: "images/Header-Slider/sm-sld3.jpg", xl: "images/Header-Slider/sld3.jpg" },
  { id: 4, sm: "images/Header-Slider/sm-sld4.jpg", xl: "images/Header-Slider/sld4.jpg" },
  { id: 5, sm: "images/Header-Slider/sm-sld5.jpg", xl: "images/Header-Slider/sld5.jpg" },
];
const windowInner = window.innerWidth;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeaderSlider() {
  const [slideActive, setSlideActive] = useState(0);
  const swiper = useRef();
  return (
    <div className="group w-full relative mb-4">
      <Swiper
        grabCursor="true"
        onSlideChange={() => setSlideActive(swiper.current.swiper.realIndex)}
        ref={swiper}
        loop="true"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {imageDatas.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={windowInner > 500 ? item.xl : item.sm}
              alt="Image Slider"
              className="w-full h-32 sm:h-40 lg:h-60 xl:h-80 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-1 md:bottom-4 right-1/2 translate-x-1/2 w-full md:w-fit md:right-4 md:translate-x-0 z-[1] flex flex-col items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
        <div>
          {imageDatas.map((item, index) => (
            <span
              key={item.id}
              onClick={() => {
                setSlideActive(index);
                swiper.current.swiper.slideToLoop(index);
              }}
              className={`inline-block h-1 md:h-3 rounded-full mx-0.5 md:mx-1 cursor-pointer transition-all  ${
                index === slideActive
                  ? "w-3 md:w-6 bg-[var(--colorFive)] opacity-100"
                  : "bg-black opacity-20 w-1 md:w-3"
              }`}
            ></span>
          ))}
        </div>
        <div className="hidden md:inline-block">
          <button
            onClick={() => {
              swiper.current.swiper.slidePrev();
            }}
            className="border-none outline-none bg-white rounded-full p-1 mx-1.5 cursor-pointer"
          >
            <MdKeyboardArrowRight className="w-8 h-8" />
          </button>
          <button
            onClick={() => {
              swiper.current.swiper.slideNext();
            }}
            className="border-none outline-none bg-white rounded-full p-1 cursor-pointer"
          >
            <MdKeyboardArrowLeft className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
