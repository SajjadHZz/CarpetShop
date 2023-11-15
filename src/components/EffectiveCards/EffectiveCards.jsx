import React, { useRef, useState } from "react";
import "./EffectiveCards.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle } from "react-icons/hi2";

import { Tooltip, IconButton } from "@material-tailwind/react";

import { machineProducts } from "../../Datas";

import { Link } from "react-router-dom";

export default function EffectiveCards({ titleCategory }) {
  const swiper = useRef();
  return (
    <div className="effectiveCards w-64">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} ref={swiper}>
        {machineProducts.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to="/detailsproduct">
                <div className="overflow-hidden relative w-full h-96 group">
                  <img src={item.srcGallery[0]} alt="Image" className="w-full h-full object-cover" />
                  <div className="absolute z-[1] right-1/2 bottom-2 translate-x-1/2 border-2 border-solid border-black rounded-xl bg-black/30 opacity-0 py-2 px-3 transition-all backdrop-blur group-hover:opacity-100">
                    <Tooltip content="افزودن به سبد" className="font-[Shabnam-Light]">
                      <IconButton className="w-8 h-6 bg-transparent shadow-none hover:shadow-none">
                        <RiShoppingBasketLine className="effectiveCards__icon" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="دوستش دارم" className="font-[Shabnam-Light]">
                      <IconButton className="w-8 h-6 bg-transparent shadow-none hover:shadow-none">
                        <AiOutlineHeart className="effectiveCards__icon" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="مشاهده سریع" className="font-[Shabnam-Light]">
                      <IconButton className="w-8 h-6 bg-transparent shadow-none hover:shadow-none">
                        <BiSearchAlt className="effectiveCards__icon" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-between items-center gap-2 mt-4">
        <button
          onClick={() => {
            swiper.current.swiper.slidePrev();
          }}
          className="p-1 transition-transform duration-300 hover:scale-110"
        >
          <HiOutlineArrowRightCircle className="w-10 h-10" />
        </button>
        <h3 className="text-lg font-[Shabnam-Bold]">{titleCategory}</h3>
        <button
          onClick={() => {
            swiper.current.swiper.slideNext();
          }}
          className="p-1 transition-transform duration-300 hover:scale-110"
        >
          <HiOutlineArrowLeftCircle className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
