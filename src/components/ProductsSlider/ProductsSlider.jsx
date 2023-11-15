import React, { useRef } from "react";
import "./ProductsSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import { Tooltip, IconButton } from "@material-tailwind/react";

import { machineProducts } from "../../Datas";

import { Link } from "react-router-dom";

const screenWidth =
  window.innerWidth >= 1350
    ? 5
    : window.innerWidth >= 1070
    ? 4
    : window.innerWidth >= 820
    ? 3
    : window.innerWidth >= 580
    ? 2
    : window.innerWidth >= 450
    ? 1.5
    : window.innerWidth >= 400
    ? 1.25
    : 1;

export default function ProductsSlider({ titleSlider }) {
  const swiper = useRef();
  return (
    <div className="sliderProducts">
      <div className="sliderProducts__titleBoxCont">
        <h3 className="sliderProducts__titleSlider">{titleSlider}</h3>
        <div className="sliderProducts__linkShowAll">
          <Link to="/detailsproduct">مشاهده همه ⬅</Link>
        </div>
      </div>
      <Swiper slidesPerView={screenWidth} ref={swiper}>
        {machineProducts.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to="/detailsproduct">
                <div className="sliderProducts__container">
                  <div className="sliderProducts__imgCont">
                    {item.discount && (
                      <div className="sliderProducts__productDiscount">
                        <p className="bg-white text-[var(--colorFive)] px-2 py-0.5 rounded-full">فروش ویژه</p>
                        <p className="productDiscount__discount">
                          {item.discount.percent.toLocaleString("fa-ir")} %
                        </p>
                      </div>
                    )}
                    <img
                      src={item.srcGallery[0]}
                      alt="Product Image"
                      className="sliderProducts__imgProduct"
                    />
                    <div className="sliderProducts__iconCont backdrop-blur bg-opacity-50">
                      <Tooltip className="font-[Shabnam-Light]" placement="left" content="افزودن به سبد">
                        <IconButton className="w-6 h-6 text-black bg-transparent shadow-none hover:shadow-none">
                          <RiShoppingBasketLine className="sliderProducts__icon" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip className="font-[Shabnam-Light]" placement="left" content="دوستش دارم">
                        <IconButton className="w-6 h-6 text-black bg-transparent shadow-none hover:shadow-none">
                          <AiOutlineHeart className="sliderProducts__icon" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip className="font-[Shabnam-Light]" placement="left" content="مشاهده سریع">
                        <IconButton className="w-6 h-6 text-black bg-transparent shadow-none hover:shadow-none">
                          <BiSearchAlt className="sliderProducts__icon" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                  <h5 className="sliderProducts__productTitle">{item.title}</h5>
                  <div className="sliderProducts__priceCont">
                    {item.discount && (
                      <p className="sliderProducts__prevPrice">
                        {item.dimensions[0].price.toLocaleString("fa-ir")} تومان
                      </p>
                    )}
                    <p className="sliderProducts__nowPrice ">
                      {item.dimensions[0].price.toLocaleString("fa-ir")} تومان
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        onClick={() => {
          swiper.current.swiper.slidePrev();
        }}
        className="sliderProducts__btnNext"
      ></div>
      <div
        onClick={() => {
          swiper.current.swiper.slideNext();
        }}
        className="sliderProducts__btnPrev"
      ></div>
    </div>
  );
}