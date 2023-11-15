import React, { useRef, useState } from "react";

///////////////////////////////////////////////////////////////////
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

///////////////////////////////////////////////////////////////////
const imageDatas = [
  "public/img/Header-Slider/sld1.jpg",
  "public/img/Header-Slider/sld2.jpg",
  "public/img/Header-Slider/sld3.jpg",
  "public/img/Header-Slider/sld4.jpg",
  "public/img/Header-Slider/sld5.jpg",
  "public/img/Header-Slider/sld6.jpg",
  "public/img/Header-Slider/sld7.jpg",
  "public/img/Header-Slider/sld8.jpg",
  "public/img/Header-Slider/sld9.jpg",
  "public/img/Header-Slider/sld10.jpg",
  "public/img/Header-Slider/sld11.jpg",
  "public/img/Header-Slider/sld12.jpg",
];
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
          <SwiperSlide key={item}>
            <img src={item} alt="Image Slider" className="w-full h-20 md:h-80 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-1 md:bottom-4 right-1/2 translate-x-1/2 w-full md:w-fit md:right-4 md:translate-x-0 z-[1] flex flex-col items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
        <div>
          {imageDatas.map((item, index) => (
            <span
              key={item}
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
