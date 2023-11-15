import React from "react";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

import { Button, Radio } from "@material-tailwind/react";

import { BsTelegram, BsFillBagCheckFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

import { Link } from "react-router-dom";

export default function ShippingLocation() {
  return (
    <>
      <Header />

      <div className="hidden md:block w-5/6 mx-auto py-16 px-10 lg:px-16 font-[Shabnam-Medium] text-center text-[var(--colorTow)]">
        <ProgressBar percent={50} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                } bg-[var(--colorFour)] rounded-full overflow-visible w-fit`}
              >
                <img src="public/img/Icons/basket.png" alt="Logo" className="w-16 h-16 mb-2" />
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
                <img src="public/img/Icons/tracking.png" alt="Logo" className="w-16 h-16 mb-2" />
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
                <img src="public/img/Icons/give-money.png" alt="Logo" className="w-16 h-16 mb-2" />
                <p className="">پرداخت مبلغ</p>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      {/* ----------------------------------- CONTENT -------------------------------- */}
      <div className="px-2 lg:px-16 my-4 flex justify-between gap-5 font-[Shabnam-Light]">
        {/* ////////////////// PRODUCTS //////////////////// */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-5">
            <h2 className="font-bold text-xl pb-3 border-b-2 border-solid">آدرس تحویل سفارش</h2>
            <form action="#" className="mt-4">
              <div className="flex gap-5 w-full mb-4">
                <div className="w-1/2">
                  <label htmlFor="firstname">نام</label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    id="firstname"
                    type="text"
                  />
                </div>
                <div className="w-1/2">
                  <label className="" htmlFor="lastname">
                    نام خانوادگی
                  </label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    id="lastname"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full mb-4">
                <div className="w-1/2">
                  <label htmlFor="state">استان</label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    type="text"
                    id="state"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="city">شهر</label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    type="text"
                    id="city"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label htmlFor="address">آدرس</label>
                <input
                  className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                  type="text"
                  id="address"
                />
              </div>
              <div className="flex gap-5 w-full mb-4">
                <div className="w-1/2">
                  <label htmlFor="postal">کدپستی</label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    type="text"
                    id="postal"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="phone">تلفن</label>
                  <input
                    className="w-full mt-2 border border-solid rounded-lg py-1 px-2"
                    type="text"
                    id="phone"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="notes">یادداشت های اضافی</label>
                <textarea
                  className="w-full mt-2 h-32 border border-solid rounded-lg py-2 px-3"
                  id="notes"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        {/* ////////////////// SIDEBAR //////////////////// */}
        <div className="hidden lg:block lg:w-1/3">
          {/* --- DETAILES --- */}
          <div className="bg-white rounded-xl shadow mb-4 p-5">
            <h2 className="font-bold text-lg border-b-4 border-solid border-gray-200 pb-2 mb-3">
              <BsFillBagCheckFill className="inline-block ml-2 text-[var(--colorTow)] text-2xl" /> نحوه پرداخت
            </h2>
            <div className="text-lg flex justify-between items-center py-2 px-4 mb-3 bg-[var(--colorFour)] text-[var(--colorTow)] font-bold rounded-lg shadow-sm">
              <p>مبلغ قابل پرداخت :</p>
              <p>17654654 ـومان</p>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <Radio name="type" label="پرداخت مستقیم" />
              <Radio name="type" label="پی پال" />
              <Radio name="type" label="پرداخت در محل" defaultChecked />
            </div>
            <Button fullWidth className="font-[Shabnam-Light] bg-[var(--colorFive)]">
              ادامه مراحل پرداخت
            </Button>
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
