import React, { useRef, useState } from "react";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Button, IconButton } from "@material-tailwind/react";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { LiaRandomSolid } from "react-icons/lia";
import { PiBasketBold } from "react-icons/pi";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { useTimer } from "react-timer-hook";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { machineProducts } from "../../Datas";

function Specifications() {
  return (
    <>
      <div className="flex items-center gap-3  my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          رنگ
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          نقره ای
        </p>
      </div>
      <div className="flex items-center gap-3 my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          نام
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          فرش طرح بهشت نقره ای
        </p>
      </div>
      <div className="flex items-center gap-3 my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          سبک
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          پوست و چرم
        </p>
      </div>
    </>
  );
}

////////////////////////////////////////////// START MAIN FUNCTION //////////////////////////////////////////////
export default function QuickAccess() {
  const discountTime = new Date("2024/1/12");
  const expiryTimestamp = new Date();
  const differentDays = Math.floor(-(expiryTimestamp.getTime() - discountTime.getTime()) / 1000);
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + differentDays);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const swiper = useRef();
  // const [thumbsSwiper, setThumbsSwiper] = useState("1");
  // console.log(swiper);
  // console.log(thumbsSwiper);

  const [productCounter, setProductCounter] = useState(1);
  const addCounterProudctHandler = () => {
    setProductCounter((prevCount) => prevCount + 1);
  };
  const minusCounterProductHandler = () => {
    if (productCounter !== 1) {
      setProductCounter((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="w-2/3 flex items-stretch gap-5 bg-white font-[Shabnam-Light] relative overflow-hidden">
        <img src="public/img/Asset-3.png" alt="Elem" className="absolute -left-1/3 opacity-[0.04] " />
        <div className="w-1/3 relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {machineProducts[0].srcGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            ref={swiper}
            // onSwiper={(swiper) => {
            //   console.log(swiper);
            //   return setThumbsSwiper();
            // }}
            // onSwiper={setThumbsSwiper}
            spaceBetween={3}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {machineProducts[0].srcGallery.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <p className="absolute top-2 right-2 z-[1] font-[Shabnam-Light] px-2 py-1 text-[var(--colorFive)] bg-pink-50 rounded-xl">
            تخفیف ویژه
          </p>
        </div>
        <div className="py-5 px-3 w-2/3 relative">
          <h2 className="font-black text-xl">فرش طرح افشان مدل افرا زمینه طوسی</h2>
          <p className=" after:w-11/12 after:h-[2px] after:bg-gray-300 after:inline-block flex items-center after:flex-1 gap-2 text-sm mt-3 text-gray-600 font-semibold">
            کد فرش : 12345
          </p>

          <div className="font-bold flex items-center mt-2">
            <p className="pl-2 border-l border-solid border-gray-400">
              <span className="">دسته بندی</span> {" : "}
              <span className="text-[var(--colorFive)]">فرش ماشینی</span>
            </p>
            <p className="pr-2">
              <span className="">برند</span> <span className="text-[var(--colorFive)]">پامچال</span>
            </p>
          </div>

          <h5 className="font-bold mt-4">مهمترین ویژگی های محصول :</h5>
          <ul className="">
            <li className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2">
              <span className="">جنس نخ</span>
              {" : "}
              <span className="text-[var(--colorFive)]">پلی اتیلن</span>
            </li>
            <li className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2">
              <span className="">جنس نخ</span>
              {" : "}
              <span className="text-[var(--colorFive)]">پلی اتیلن</span>
            </li>
            <li className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2">
              <span className="">جنس نخ</span>
              {" : "}
              <span className="text-[var(--colorFive)]">پلی اتیلن</span>
            </li>
            <li className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2">
              <span className="">جنس نخ</span>
              {" : "}
              <span className="text-[var(--colorFive)]">پلی اتیلن</span>
            </li>
            <li className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2">
              <span className="">جنس نخ</span>
              {" : "}
              <span className="text-[var(--colorFive)]">پلی اتیلن</span>
            </li>
          </ul>

          <div className="flex items-center gap-2 my-3">
            <p className=" ml-2 font-bold">انتخاب سایز :</p>
            <div className="bg-[var(--colorFour)] px-2 py-1 cursor-pointer rounded-full text-xs">3 متر</div>
            <div className="bg-[var(--colorFour)] px-2 py-1 cursor-pointer rounded-full text-xs">6 متر</div>
            <div className="bg-[var(--colorFour)] px-2 py-1 cursor-pointer rounded-full text-xs">9 متر</div>
          </div>

          <div className="flex items-center gap-2 my-3">
            <div className="ml-3 w-[5rem] relative text-center rounded-full border-[1px] border-solid p-1">
              <button
                onClick={minusCounterProductHandler}
                className="absolute -right-2 top-1/2 -translate-y-1/2 bg-[var(--colorTow)] w-5 h-5  text-white rounded-full"
              >
                -
              </button>
              <p className="select-none">{productCounter.toLocaleString("fa-ir")}</p>
              <button
                onClick={addCounterProudctHandler}
                className="absolute -left-2 top-1/2 -translate-y-1/2 bg-[var(--colorTow)] w-5 h-5  text-white rounded-full"
              >
                +
              </button>
            </div>
            <IconButton className="bg-[var(--colorTow)] text-lg">
              <PiBasketBold className="" />
            </IconButton>
            <IconButton className="bg-[var(--colorTow)] text-lg">
              <AiOutlineHeart className="" />
            </IconButton>
            <IconButton className="bg-[var(--colorTow)] text-lg">
              <LiaRandomSolid className="" />
            </IconButton>
            <div className=""></div>
          </div>
          <Button fullWidth className="bg-[var(--colorFive)] font-[Shabnam-Light] text-base">
            مشاهده محصول
          </Button>
        </div>
        <AiOutlineClose className="absolute top-2 left-2 text-2xl text-[var(--colorTow)] w-8 h-8 p-2 bg-[var(--colorFour)] rounded-full transition hover:bg-[var(--colorFive)] hover:text-white cursor-pointer" />
      </div>
    </>
  );
}
