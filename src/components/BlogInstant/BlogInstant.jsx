import React, { useRef, useState } from "react";
import "./BlogInstant.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Link } from "react-router-dom";

import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

const blogDatas = [
  {
    id: 1,
    src: "public/img/Carpets/Show-Carpets/decor-farsh-vintage-code-917.jpg",
    desc: "فرش دستبافت تبریز را چگونه تمیز نگه داریم ؟",
    date: "14 مهر 1402",
  },
  {
    id: 2,
    src: "public/img/Carpets/Show-Carpets/decor-farsh-vintage-code-922.jpg",
    desc: "فرش ماشینی کرج را چگونه بشوییم ؟",
    date: "21 آبان 1401",
  },
  {
    id: 3,
    src: "public/img/Carpets/Show-Carpets/decor-farsh-vintage-code-b34-abi.jpg",
    desc: "موکت ظریف مصور را چگونه تمیز نگه داریم ؟",
    date: "03 فروردین 1399",
  },
  {
    id: 4,
    src: "public/img/Carpets/Show-Carpets/pahn-farsh-vintage-code-bp24-noqre.jpg",
    desc: "فرش دستبافت کاشان را چگونه رفو کنیم ؟",
    date: "23 اسفند 1401",
  },
];

const screenWidth = window.innerWidth >= 750 ? 3 : window.innerWidth >= 600 ? 2 : 1;

export default function BlogInstant() {
  const swiper = useRef();

  return (
    <div className="p-6 w-full lg:w-2/3 border-2 border-solid border-black bg-white">
      <div className="blogInstant__titleBox">
        <h2 className="blogInstant__title">جدیدترین مقالات منتشر شده</h2>
        <IoMdArrowDroprightCircle
          onClick={() => {
            swiper.current.swiper.slidePrev();
          }}
          className="blogInstant__btnPrev"
        />
        <IoMdArrowDropleftCircle
          onClick={() => {
            swiper.current.swiper.slideNext();
          }}
          className="blogInstant__btnNext"
        />
      </div>
      <Swiper slidesPerView={screenWidth} spaceBetween={20} ref={swiper}>
        {blogDatas.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to="detailsblog">
              <div className="blogInstant__blogCont">
                <img src={item.src} alt="Image Slider" className="blogInstant__Img" />
                <p className="blogInstant__desc">{item.desc}</p>
                <div className="blogInstant__dataCont">
                  <p className="blogInstant__blogDate">{item.date}</p>
                  <p className="blogInstant__blogAuthor">{item.author === undefined && "سجاد حسین زاده"}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
