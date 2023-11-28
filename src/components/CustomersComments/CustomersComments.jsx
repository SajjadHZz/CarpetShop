import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const comments = [
  {
    id: 1,
    user: "سجاد حسین زاده",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 2,
    user: "علیرضا مهدی پور",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 3,
    user: "خسرو هدایتی",
    comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.❤",
  },
  {
    id: 4,
    user: "علی رحمانی",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export default function CustomersComments() {
  const swiper = useRef();
  return (
    <div className="w-full lg:w-1/3 mt-4 lg:m-0 border-2 border-solid border-black relative font-[Shabnam-Light] py-12 bg-white">
      <div className="absolute w-full -top-5 right-1/2 translate-x-1/2 flex justify-center items-center gap-4 z-[1]">
        <button
          onClick={() => {
            swiper.current.swiper.slideNext();
          }}
          className="bg-white rounded-full"
        >
          <IoIosArrowDroprightCircle className="w-7 h-7" />
        </button>
        <div className="font-[Shabnam-Bold] bg-[var(--colorFive)] text-white py-2 px-3 rounded-full">
          نظرات شما
        </div>
        <button
          onClick={() => {
            swiper.current.swiper.slidePrev();
          }}
          className="bg-white rounded-full"
        >
          <IoIosArrowDropleftCircle className="w-7 h-7" />
        </button>
      </div>
      <Swiper slidesPerView={1} spaceBetween={20} ref={swiper} loop={true}>
        {comments.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <p className="customersComments__comment text-justify px-4">" {item.comment} "</p>
              <p className="text-[var(--colorTow)] font-bold">{item.user}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img src="public/img/Quotation.png" alt="Quotation" className="absolute w-12 top-0 right-0" />
      <img
        src="public/img/Quotation.png"
        alt="Quotation"
        className="absolute w-12 bottom-0 left-0 rotate-180"
      />
    </div>
  );
}
