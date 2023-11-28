import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Button } from "@material-tailwind/react";

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { BsTelegram, BsFillBagCheckFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

export default function BasketShop() {
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
      <Header />

      <div className="hidden md:block w-5/6 mx-auto py-16 px-10 lg:px-16 font-[Shabnam-Medium] text-center text-[var(--colorTow)]">
        <ProgressBar percent={0} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                } bg-[var(--colorFour)] rounded-full overflow-visible w-fit`}
              >
                <img src="images/Icons/basket.png" alt="Logo" className="w-16 h-16 mb-2" />
                <p className="">سبد خرید</p>
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                } bg-[var(--colorFour)] rounded-full overflow-visible`}
              >
                <img src="images/Icons/tracking.png" alt="Logo" className="w-16 h-16 mb-2" />
                <p className="">آدرس شما</p>
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                } bg-[var(--colorFour)] rounded-full overflow-visible`}
              >
                <img src="images/Icons/give-money.png" alt="Logo" className="w-16 h-16 mb-2" />
                <p className="">پرداخت مبلغ</p>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      {/* ----------------------------------- CONTENT -------------------------------- */}
      <div className="px-2 lg:px-10 my-4 flex flex-col lg:flex-row justify-between gap-5 font-[Shabnam-Light]">
        {/* ////////////////// PRODUCTS //////////////////// */}
        <div className="w-full lg:w-2/3">
          <div className="relative bg-white px-1 py-2 sm:p-2 flex rounded-xl shadow mb-3">
            <AiOutlineCloseCircle className="absolute top-2 left-2 w-5 h-5 cursor-pointer transition-colors duration-300 hover:text-[var(--colorFive)]" />
            <img src="images/Carpets/02.jpg" alt="Product" className="ml-5 w-32" />
            <div className="flex flex-col justify-between flex-1">
              <div className="mt-4">
                <h3 className="text-sm sm:text-base inline-block ml-3 font-bold">
                  فرش 1200 شانه برین کاشان طرح بهشت نقره ای 6 متری
                </h3>
                <span className="absolute right-5 top-5 md:static inline-block text-xs text-red-600 bg-red-50 rounded-full px-2 py-0.5">
                  16%
                </span>
                <div className="mt-2 divide-x-reverse divide-x-2 divide-gray-400 divide-solid">
                  <p className="px-2 text-xs sm:text-sm text-gray-600 inline-block">کد 12345</p>
                  <p className="px-2 inline-block text-xs sm:text-sm">سایز : بزرگ</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mb-4 ml-4 self-end">
                <div className="flex-1 divide-x-reverse divide-x divide-gray-400 divide-solid">
                  <del className="inline-block px-2 text-sm text-gray-500">154694000 تومان</del>
                  <p className="inline-block px-2 font-bold text-[var(--colorFive)]">6541000 تومان</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={minusCounterProductHandler}
                    className="inline-block ml-1 w-10 h-7 rounded-r-full bg-[var(--colorTow)] transition-all hover:scale-110 hover:bg-[var(--colorThree)] text-white"
                  >
                    -
                  </button>
                  <p className="w-10 h-6 align-middle shadow-md rounded-sm inline-block">
                    {productCounter.toLocaleString("fa-ir")}
                  </p>
                  <button
                    onClick={addCounterProudctHandler}
                    className="inline-block mr-1 w-10 h-7 rounded-l-full bg-[var(--colorTow)] transition-all hover:scale-110 hover:bg-[var(--colorThree)] text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////// SIDEBAR //////////////////// */}
        <div className="w-full lg:w-1/3">
          {/* --- DETAILES --- */}
          <div className="bg-white rounded-xl shadow mb-4 p-5 hidden lg:block">
            <h2 className="font-bold text-lg border-b-4 border-solid border-gray-200 pb-2 mb-3">
              <BsFillBagCheckFill className="inline-block ml-2 text-[var(--colorTow)] text-2xl" /> سفارش شما
            </h2>
            <div className="flex justify-between items-center py-2 px-4 mb-3 bg-[var(--colorFour)] rounded-lg shadow-sm">
              <p>قیمت محصولات :</p>
              <p>17654654 ـومان</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 mb-3 bg-[var(--colorFour)] rounded-lg shadow-sm">
              <p>هزینه ارسال :</p>
              <p>17654654 ـومان</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4 mb-3 bg-[var(--colorFour)] rounded-lg shadow-sm">
              <p>تخفیف شما :</p>
              <p>17654654 ـومان</p>
            </div>
            <div className="text-lg flex justify-between items-center py-2 px-4 mb-3 bg-[var(--colorFour)] text-[var(--colorTow)] font-bold rounded-lg shadow-sm">
              <p>مبلغ قابل پرداخت :</p>
              <p>17654654 ـومان</p>
            </div>
            <Link to="/location">
              <Button fullWidth className="font-[Shabnam-Light] bg-[var(--colorFive)]">
                ادامه مراحل پرداخت
              </Button>
            </Link>
          </div>

          {/* --- HELP --- */}
          <div className="bg-white rounded-xl shadow mb-4 p-5">
            <p className="font-[Shabnam-Medium] text-lg">سوالی دارید؟</p>
            <p className="text-gray-700 mt-3">
              اگـر نیاز به پشتیبانی فنی و راهنمایی دارید، لطفا با تیم پشتیبانی فرش آنلاین تماس بگیرید
            </p>
            <p className="text-center text-3xl mt-4 cursor-pointer">
              <span className="text-gray-500 mr-2">021</span>
              <span className="text-gray-800">22619718</span>
            </p>
            <div className="bg-[var(--colorFour)] mt-4 rounded-xl flex justify-between items-center gap-2 px-3 py-2">
              <p className="flex-1 text-sm">پشتیبانی آنلاین</p>
              <BsTelegram className="w-9 h-9 p-1.5 bg-blue-500 rounded-full text-white cursor-pointer" />
              <IoLogoWhatsapp className="w-9 h-9 p-1.5 bg-green-500 rounded-full text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ///////////// SMALL PRICE CONTAINER ///////////// */}
      <div className="sticky bottom-0 z-[1] flex lg:hidden justify-between items-center gap-3 px-5 py-3 bg-white rounded-t-3xl border-t border-solid border-gray-400 shadow font-[Shabnam-Light]">
        <Link className="w-1/2" to="/location">
          <Button color="red" className="w-full bg-[var(--colorFive)] font-[Shabnam-Light] rounded-none">
            ثبت سفارش
          </Button>
        </Link>
        <div className="text-end min-w-[135px]">
          <p className="text-xs text-gray-600 mb-1">جمع سبد خرید</p>
          <p>
            <span className="text-lg font-bold">20000000</span>
            <span className="text-gray-700 text-sm">تومان</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
}
