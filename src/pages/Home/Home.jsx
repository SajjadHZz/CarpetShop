import React from "react";
import Header from "../../components/Header/Header";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import Instant from "../../components/Instant/Instant";
import DiscountBox from "../../components/DiscountBox/DiscountBox";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import BlogInstant from "../../components/BlogInstant/BlogInstant";
import CustomersComments from "../../components/CustomersComments/CustomersComments";
import Footer from "../../components/Footer/Footer";

import { FaGift } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 100000, easing: (t) => t };
const screenWidth =
  window.innerWidth >= 1350
    ? 8
    : window.innerWidth >= 1070
    ? 7
    : window.innerWidth >= 820
    ? 6
    : window.innerWidth >= 580
    ? 5
    : window.innerWidth >= 450
    ? 4
    : window.innerWidth >= 400
    ? 3
    : 2;

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { origin: "center", perView: screenWidth, spacing: 30 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <Header />
      <HeaderSlider />
      <div className="px-2 w-full flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 my-4 h-[var(--heightSuggestion)]">
        <DiscountBox />
        <Instant />
      </div>

      <div className="my-16">
        <h3 className="font-[Shabnam-Bold] text-2xl text-center mb-5">برندهای فرش ماشینی</h3>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/bozorgmehr.png"
                alt="Bozorgmehr"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/gheitaran.png"
                alt="Gheitaran"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/mohtasham.png"
                alt="Mohtasham"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/negine.png"
                alt="Negine"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/pamchal.png"
                alt="Pamchal"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/sabalan.png"
                alt="Sabalan"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/savin.png"
                alt="Savin"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/shahrokh.png"
                alt="Shahrokh"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="w-28 h-28 bg-white border-2 border-solid border-black rounded-full overflow-hidden">
              <img
                src="public/img/Brands/zomorod.png"
                alt="Zomorod"
                className="object-cover p-6 w-full h-full overflow-visible"
              />
            </div>
          </div>
        </div>
      </div>

      <ProductsSlider titleSlider="پرفروش ترین ها" />

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5 my-8 px-2 lg:px-16">
        <img
          src="public/img/advertising1.jpg "
          alt="Advertising"
          className="flex-1 lg:w-1/3 rounded-xl object-cover"
        />
        <img
          src="public/img/advertising2.jpg"
          alt="Advertising"
          className="flex-1 lg:w-1/3 rounded-xl object-cover"
        />
      </div>

      <ProductsSlider titleSlider="جدیدترین ها" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 font-[Shabnam-Medium] px-2 lg:px-16 mb-10 xl:divide-x divide-solid divide-black xl:divide-x-reverse">
        <div className="px-5 flex flex-col items-center gap-4">
          <Link
            to="/products"
            className="inline-block transition-colors duration-300 hover:text-[var(--colorFive)] cursor-pointer after:mt-1 after:w-full after:h-1 after:block after:bg-red-600"
          >
            <img src="public/img/Icons/carpet.png" alt="Title Icon" className="w-7 inline-block ml-2" />
            <h4 className="inline-block">گلچین فرش های ماشینی</h4>
          </Link>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <img src="public/img/Carpets/01.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/02.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/03.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/04.jpg" alt="" className="w-40 h-68 object-cover" />
          </div>
        </div>
        <div className="px-5 flex flex-col items-center gap-4">
          <Link
            to="/products"
            className="inline-block transition-colors duration-300 hover:text-[var(--colorFive)] cursor-pointer after:mt-1 after:w-full after:h-1 after:block after:bg-red-600"
          >
            <img src="public/img/Icons/prayer.png" alt="Title Icon" className="w-7 inline-block ml-2" />
            <h4 className="inline-block">گلچین فرش های دستبافت</h4>
          </Link>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <img src="public/img/Carpets/05.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/06.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/07.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/08.jpg" alt="" className="w-40 h-68 object-cover" />
          </div>
        </div>
        <div className="px-5 flex flex-col items-center gap-4">
          <Link
            to="/products"
            className="inline-block transition-colors duration-300 hover:text-[var(--colorFive)] cursor-pointer after:mt-1 after:w-full after:h-1 after:block after:bg-red-600"
          >
            <img src="public/img/Icons/yoga-mat.png" alt="Title Icon" className="w-7 inline-block ml-2" />
            <h4 className="inline-block">گلچین انواع موکت</h4>
          </Link>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <img src="public/img/Carpets/09.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/10.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/11.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/12.jpg" alt="" className="w-40 h-68 object-cover" />
          </div>
        </div>
        <div className="px-5 flex flex-col items-center gap-4">
          <Link
            to="/products"
            className="inline-block transition-colors duration-300 hover:text-[var(--colorFive)] cursor-pointer after:mt-1 after:w-full after:h-1 after:block after:bg-red-600"
          >
            <img src="public/img/Icons/tag.png" alt="Title Icon" className="w-7 inline-block ml-2" />
            <h4 className="inline-block">گلچین برندهای فرش ماشینی</h4>
          </Link>
          <div className="grid grid-rows-2 grid-cols-2 gap-2">
            <img src="public/img/Carpets/01.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/02.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/03.jpg" alt="" className="w-40 h-68 object-cover" />
            <img src="public/img/Carpets/04.jpg" alt="" className="w-40 h-68 object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-10 lg:flex-row px-2 lg:px-16">
        <BlogInstant />
        <CustomersComments />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-12 mx-8">
        <div className="border-r-2 border-solid border-gray-400 p-2 flex items-center gap-2">
          <FaGift className="w-8 h-8 text-gray-500" />
          <div>
            <h5 className="font-[Shabnam-Bold]">پرداخت در محل</h5>
            <p className="font-[Shabnam-Light] text-sm">پرداخت در محل برای تمام سفارشات تهران</p>
          </div>
        </div>
        <div className="border-r-2 border-solid border-gray-400 p-2 flex items-center gap-2">
          <IoWalletSharp className="w-8 h-8 text-gray-500" />
          <div>
            <h5 className="font-[Shabnam-Bold]">۷ روز ضمانت بازگشت</h5>
            <p className="font-[Shabnam-Light] text-sm">تعویض یا بازگشت محصول در صورت مغایرت</p>
          </div>
        </div>
        <div className="border-r-2 border-solid border-gray-400 p-2 flex items-center gap-2">
          <FaBoxOpen className="w-8 h-8 text-gray-500" />
          <div>
            <h5 className="font-[Shabnam-Bold]">ارسال سریع و رایگان</h5>
            <p className="font-[Shabnam-Light] text-sm">
              ارسال رایگان در تهران (خریدهای بیش از ۴۰۰ هزار تومان)
            </p>
          </div>
        </div>
        <div className="border-r-2 border-solid border-gray-400 p-2 flex items-center gap-2">
          <Ri24HoursFill className="w-8 h-8 text-gray-500" />
          <div>
            <h5 className="font-[Shabnam-Bold]">تضمین بهترین کیفیت و قیمت</h5>
            <p className="font-[Shabnam-Light] text-sm">محصولات درجه یک با بهترین قیمت و کیفیت</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
