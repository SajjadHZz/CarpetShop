import React from "react";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { Button } from "@material-tailwind/react";

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* ////////////////////////////// BREADCRAMB //////////////////////////////// */}

      <Breadcrumb />

      {/* ////////////////////////////// ABOUT US //////////////////////////////// */}
      <div className="my-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 px-2 lg:px-16 font-[Shabnam-Light]">
        {/* ----------------- CONTENT ------------------ */}
        <div className="flex flex-col items-center gap-5 w-full lg:w-2/3 text-justify text-sm bg-white p-5 rounded-xl shadow-xl">
          <p>
            دیجی‌فرش با اعتبار و پشتوانه 50 سال تجربه و حضور در حوزه فرش دستبافت، از سال 1389 به عنوان اولین
            استارتاپ تخصصی فروش فرش، وارد عرصه تجارت الکترونیک و فروش اینترنتی شد.
          </p>
          <img src="public/img/about-us.png" alt="" className="w-96" />
          <p>
            در طول سال‌ها تجربه و حضور در زمینه فروش آنلاین فرش و در پی استقبال بی‌نظیر و رضایت خریداران،
            گستره محصولات ما از فرش فراتر رفته و اکنون تنوع کالاهای ما انواع فرش‌های دستی و ماشینی، کالای
            خواب، پرده، موکت، پارکت، وسایل دکوراتیو، صنایع‌دستی و... را دربر می‌گیرد.
          </p>
          <img src="public/img/about-us.png" alt="" />
          <p>
            دیجی‌فرش به عنوان اولین فروشگاه تخصصی فروش فرش و وسایل دکوراسیون منزل، در کنار تنوع سبد کالایی، با
            کیفیت‌ترین برندها و تولیدکنندگان را بعد از تایید کیفیت به صورت «یکجا» گرد هم آورده تا خریداران
            محترم ضمن مقایسه و بررسی هرچه بهتر، بتوانند با خیال آسوده و با هر میزان بودجه به محصول مورد نیاز
            خود دست پیدا کنند و تجربه‌ای شیرین از خرید خود داشته باشند. مجموعه دیجی‌فرش جزء اولین وب‌سایت‌های
            دریافت کننده نماد اعتماد الکترونیک دو ستاره از وزارت صنعت، معدن و تجارت، عضو رسمی انجمن کسب
            ‌وکارهای اینترنتی و عضو اتحادیه کسب و کارهای مجازی کشور بوده و کلیه محصولات را در سریع‌ترین زمان،
            با ضمانت کیفیت و قیمت به دست خریداران عزیز می‌رساند. همچنین کارشناسان ما در تمامی مراحل انتخاب و
            خرید تا زمان تحویل کالا و بعد از آن همراه خریداران و پاسخگوی سوالات آن‌ها خواهند بود.
          </p>
          <img src="public/img/about-us.png" alt="" />
          <p>
            هدف دیجی‌فرش صرفا «فروش» نیست، هدف ما فراهم کردن تجربه دلنشین از خرید برای خریداران و همچنین رشد و
            توسعه بازار تجارت الکترونیک و کارآفرینی بر پایه تجربه، علم و دانش و تلاش بی‌وقفه است.
          </p>

          <div className="mt-10 w-full text-base">
            <div className="mb-4 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">با ما در تماس باشید</h3>
            </div>
            <textarea
              className="w-full h-32 p-2 font-[Shabnam-Thin] border border-solid border-gray-600 bg-white outline-none"
              placeholder="انتقادات و پیشنهادات شما ..."
            ></textarea>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 font-[Shabnam-Thin]">
              <input
                required
                type="text"
                className="flex-1 w-full md:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
                placeholder="نام شما ..."
              />
              <input
                required
                type="text"
                className="flex-1 w-full md:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
                placeholder="ایمیل شما ..."
              />
            </div>
            <div className="mt-2">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="font-[Shabnam-Light] text-sm mr-2">
                اطلاعات من را ذخیره کن تا در آینده نیازی به ورود اطلاعات نداشته باشم
              </label>
            </div>
            <Button
              color="red"
              className="w-full lg:w-fit font-[Shabnam-Light] bg-[var(--colorFive)] mt-2 text-base px-3 py-2"
            >
              ارسال نظر
            </Button>
          </div>
        </div>

        {/* ----------------- CONTACT SIDEBAR ------------------ */}
        <div className="w-full lg:w-1/3 relative">
          <div className="bg-white sticky top-40 p-5">
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

      {/* ////////////////////////////// ATTRIBUTES //////////////////////////////// */}
      <div className=""></div>

      {/* ////////////////////////////// PRODUCTS CAROUSEL //////////////////////////////// */}

      {/* ////////////////////////////// FOOTER //////////////////////////////// */}
      <Footer />
    </>
  );
}
