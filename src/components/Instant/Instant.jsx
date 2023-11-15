/////////////////////  * REACT & CSS *   ////////////////////////
import React, { useEffect, useState, useRef } from "react";
import "./Instant.css";

/////////////////////  * SWIPER *   ////////////////////////
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

/////////////////////  * REACT-ICONS *   ////////////////////////
import { MdLocalOffer } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

/////////////////////  * TOLTIP *   ////////////////////////
import { Tooltip, IconButton, Button } from "@material-tailwind/react";

/////////////////////  * PRODUCTS DATA *   ////////////////////////
import { machineProducts } from "../../Datas";

/////////////////////  * REACT ROUTER DOM *   ////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////  *** START MAIN FUNCTION ***   //////////////////////////////////////////////////////
export default function Instant() {
  //  * VARIABELS & FUNCTIONS *  //
  const progressBar = useRef();
  const swiper = useRef();

  const mouseEnterHandler = () => {
    swiper.current.swiper.autoplay.pause(stop, true);
    swiper.current.swiper.autoplay.stop();
  };
  const mouseLeaveHandler = () => {
    swiper.current.swiper.autoplay.start();
  };
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressBar.current.style.setProperty("width", `${(1 - progress) * 100}%`);
  };

  //  * RENDER *  //
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="w-full h-96 group rounded-xl overflow-hidden border-2 border-solid border-[var(--colorFive)] relative"
    >
      <Swiper
        ref={swiper}
        loop="true"
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[EffectFade, Autoplay]}
      >
        {machineProducts
          .filter((product) => product.discount === null)
          .map((slideContent) => (
            <SwiperSlide key={slideContent.id}>
              <div className="relative overflow-hidden h-96 group-hover:h-60 transition-all group-hover:-mt-10 after:absolute after:bottom-0 after:inline-block after:bg-gradient-to-t after:from-black after:to-transparent after:w-full after:h-full after:opacity-70 after:transition-all after:duration-300 group-hover:after:h-0">
                {/* <Link to="/detailsproduct"> */}
                <img
                  src={slideContent.srcGallery[0]}
                  alt="Instant-Image"
                  className="instant__productImg w-full h-full object-cover transition-all "
                />
                {/* </Link> */}
              </div>

              <div className="py-2 px-4 bg-white font-[Shabnam-Light] h-full">
                <Link
                  to="/detailsproduct"
                  className="text-lg md:text-base overflow-hidden -mt-24 mb-12 relative text-white h-12 transition-all flex flex-col justify-between items-center font-[Shabnam-Medium] group-hover:block group-hover:mt-1 group-hover:mb-5 group-hover:text-black"
                >
                  {slideContent.title}
                </Link>
                <div className="flex justify-between items-center mb-2">
                  <div className="w-fit">
                    <Tooltip content="افزودن به سبد" className="font-[Shabnam-Light]">
                      <IconButton className="w-8 h-8 md:w-6 md:h-6 bg-transparent text-black shadow-none hover:shadow-none">
                        <RiShoppingBasketLine className="transition-colors w-6 h-6 md:w-5 md:h-5 hover:text-[var(--colorFive)]" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="دوستش دارم" className="font-[Shabnam-Light]">
                      <Link to="/account">
                        <IconButton className="w-8 h-8 md:w-6 md:h-6 bg-transparent text-black shadow-none hover:shadow-none">
                          <AiOutlineHeart className="transition-colors w-6 h-6 md:w-5 md:h-5 hover:text-[var(--colorFive)]" />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip content="مشاهده سریع" className="font-[Shabnam-Light]">
                      <IconButton className="w-8 h-8 md:w-6 md:h-6 bg-transparent text-black shadow-none hover:shadow-none">
                        <BiSearchAlt className="transition-colors w-6 h-6 md:w-5 md:h-5 hover:text-[var(--colorFive)]" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <p className="font-[Shabnam-Medium] md:text-sm">
                    {slideContent.dimensions[0].price.toLocaleString("fa-ir")} تومان
                  </p>
                </div>
                <Link to="/detailsproduct">
                  <Button
                    fullWidth
                    className="font-[Shabnam-Medium] bg-[var(--colorFive)] text-white border-2 border-solid border-transparent outline-none py-2 px-4 rounded transition hover:bg-transparent hover:border-[var(--colorFive)] hover:text-[var(--colorFive)]"
                  >
                    مشاهده محصول
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        <div className="absolute bottom-0 z-[1] h-4 w-full block group-hover:hidden">
          <div ref={progressBar} className="instatn__progressInner"></div>
        </div>
      </Swiper>
      <h3 className="instantTitle">
        <MdLocalOffer className="inline-block" /> پیشنهاد لحظه ای
      </h3>
    </div>
  );
}
