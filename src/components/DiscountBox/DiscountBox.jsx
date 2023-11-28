import React, { useMemo, useRef, useContext } from "react";
import "./DiscountBox.css";

import QuickAccessModal from "../../context/QuickAccessModal";

import { BiSolidHot, BiSearchAlt } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { Tooltip, Button, IconButton } from "@material-tailwind/react";

import { machineProducts } from "../../Datas";

import useDiscountTimer from "../../hooks/useDiscountTimer";

import { Link } from "react-router-dom";

export default function DiscountBox() {
  const swiper = useRef();
  const mouseEnterHandler = () => {
    swiper.current.swiper.autoplay.stop();
  };
  const mouseLeaveHandler = () => {
    swiper.current.swiper.autoplay.start();
  };

  const { openQuicklyModal, setOpenQuicklyModal, setProductChosedId } = useContext(QuickAccessModal);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="discountBox mb-5 md:mb-0 flex-1 w-full md:max-w-[70%] font-[Shabnam-Medium] relative"
    >
      <Swiper
        className="border-2 border-solid border-[var(--colorFive)] rounded-xl"
        ref={swiper}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
      >
        {machineProducts
          .filter((product) => {
            return product.discount !== null;
          })
          .map((item) => {
            const [seconds, minutes, hours, days] = useDiscountTimer(item.discount.timeDiscount);

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row md:items-center gap-3 bg-white px-2 py-4 md:py-4 md:px-8">
                  <div className="mx-auto">
                    <Link to={`/${item.id}`}>
                      <img
                        src={item.srcGallery[0]}
                        alt="Product"
                        className="w-60 md:w-52 lg:w-60 h-80 object-cover rounded"
                      />
                    </Link>

                    <div className="relative z-[1] w-11/12 md:w-5/6 -mt-12 mx-auto px-3 py-2 bg-white bg-opacity-60 border border-black border-dotted flex justify-evenly items-center gap-2 rounded text-xs">
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--colorFour)] rounded-full flex justify-center items-center">
                          {seconds.toLocaleString("fa-ir")}
                        </div>
                        <span>ثانیه</span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--colorFour)] rounded-full flex justify-center items-center">
                          {minutes.toLocaleString("fa-ir")}
                        </div>
                        <span>دقیقه</span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--colorFour)] rounded-full flex justify-center items-center">
                          {hours.toLocaleString("fa-ir")}
                        </div>
                        <span>ساعت</span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--colorFour)] rounded-full flex justify-center items-center">
                          {days.toLocaleString("fa-ir")}
                        </div>
                        <span>روز</span>
                      </div>
                    </div>
                  </div>
                  {useMemo(() => {
                    return (
                      <div className="font-[Shabnam-Light] flex-1 h-80 md:pl-0 lg:pl-24">
                        <Link to={`/${item.id}`} className="font-[Shabnam-Bold] flex items-center gap-2 mb-4">
                          <CiDiscount1 className="min-w-[1.5rem] min-h-[1.5rem]" />
                          <h4>{item.title}</h4>
                        </Link>
                        <ul className="mb-4">
                          {item.attributes.map((attr, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-800 before:inline-block before:w-1 before:h-1 before:rounded-full before:bg-black before:ml-1 before:transition-all before:hover:bg-[var(--colorFive)] before:hover:w-2"
                            >
                              {attr.name} : {attr.value}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gradient-to-r from-[var(--colorThree)] from-50% to-[var(--colorFive)] to-50% h-8 mb-8 rounded-tr-full rounded-bl-full flex justify-around items-center text-white">
                          <div className="relative md:text-xs lg:text-base after:absolute after:right-0 after:bottom-1/2 after:top-1/2 after:w-full after:h-[2px] after:bg-white after:rotate-3 after:opacity-80">
                            {item.dimensions[0].price.toLocaleString("fa-ir")} تومان
                          </div>
                          <div className="w-8 h-8 bg-white text-black flex justify-center items-center rounded-full font-bold">
                            %{item.discount.percent.toLocaleString("fa-ir")}
                          </div>
                          <div className="md:text-xs lg:text-base">
                            {(
                              Math.floor(
                                (item.dimensions[0].price * (1 - item.discount.percent / 100)) / 1000
                              ) * 1000
                            ).toLocaleString("fa-ir")}{" "}
                            تومان
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <div className="min-w-fit">
                            <Tooltip content="افزودن به سبد" className="font-[Shabnam-Light]">
                              <IconButton className="bg-transparent ml-1 w-6 h-6 text-black shadow-none hover:shadow-none">
                                <RiShoppingBasketLine className="text-xl transition-all duration-500 hover:text-[var(--colorFive)] hover:scale-105" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="دوستش دارم" className="font-[Shabnam-Light]">
                              <Link to="/account">
                                <IconButton className="bg-transparent ml-1 w-6 h-6 text-black shadow-none hover:shadow-none">
                                  <AiOutlineHeart className="text-xl transition-all duration-500 hover:text-[var(--colorFive)] hover:scale-105" />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip content="مشاهده سریع" className="font-[Shabnam-Light]">
                              <IconButton
                                onClick={() => {
                                  setOpenQuicklyModal(!openQuicklyModal);
                                  setProductChosedId(item.id - 1);
                                }}
                                className="bg-transparent ml-1 w-6 h-6 text-black shadow-none hover:shadow-none"
                              >
                                <BiSearchAlt className="text-xl transition-all duration-500 hover:text-[var(--colorFive)] hover:scale-105" />
                              </IconButton>
                            </Tooltip>
                          </div>

                          <Link to={`/${item.id}`} className="w-full">
                            <Button fullWidth className="bg-[var(--colorFive)] font-[Shabnam-Light]">
                              مشاهده محصول
                            </Button>
                          </Link>
                        </div>
                      </div>
                    );
                  }, [])}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <h3 className="discountBox__discountTitle hidden md:flex items-center gap-1">
        <BiSolidHot className="discountBox__titleIcon" /> پیشهاد شگفت انگیز
      </h3>
    </div>
  );
}
