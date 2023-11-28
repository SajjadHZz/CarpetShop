import React, { memo } from "react";

import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <div className="w-full py-4 px-6 md:px-12 bg-[var(--colorTow)] text-white">
      <div className="w-full flex flex-col flex-wrap md:flex-row justify-between gap-5 border-b-[2px] border-solid border-white py-2 mb-4">
        <div className="w-full xl:w-1/4">
          <h4 className="font-[Shabnam-Bold] text-2xl mb-4">درباره ما</h4>
          <p className="font-[Shabnam-Light] text-justify mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
            گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
            هم فراهم کرد.
          </p>
          <div className="flex gap-2">
            <BsInstagram className="w-12 h-12 p-2 overflow-visible bg-white text-[var(--colorTow)] cursor-pointer transition-all hover:text-[var(--colorFive)] hover:scale-105" />
            <BiLogoFacebook className="w-12 h-12 p-2 overflow-visible bg-white text-[var(--colorTow)] cursor-pointer transition-all hover:text-[var(--colorFive)] hover:scale-105" />
            <FaLinkedinIn className="w-12 h-12 p-2 overflow-visible bg-white text-[var(--colorTow)] cursor-pointer transition-all hover:text-[var(--colorFive)] hover:scale-105" />
            <BiLogoTelegram className="w-12 h-12 p-2 overflow-visible bg-white text-[var(--colorTow)] cursor-pointer transition-all hover:text-[var(--colorFive)] hover:scale-105" />
          </div>
        </div>
        <div>
          <h4 className="font-[Shabnam-Bold] text-2xl mb-4">اطلاعات تماس</h4>
          <div>
            <p className="font-[Shabnam-Light] text-justify mb-2">آدرس :</p>
            <p className="font-[Shabnam-Light] text-justify mb-2">
              خیابان آزادگان، خیابان سهیل، کوچه شهید پکوک
            </p>
          </div>

          <div>
            <p className="font-[Shabnam-Light] text-justify mb-2">مشاوره و پشتیبانی : </p>
            <p className="font-[Shabnam-Light] text-end mb-2" dir="ltr">
              ۰۹۰۲ ۶۰۴ ۳۵۸۰
            </p>
          </div>

          <div>
            <p className="font-[Shabnam-Light] text-justify mb-2">ایمیل :</p>
            <p className="font-[Shabnam-Light] text-justify mb-2">sajadhz1381@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-[Shabnam-Bold] text-2xl mb-4">دسترسی سریع</h4>
          <Link to="/help" className="block font-[Shabnam-Light] text-justify mb-2">
            سوالات متداول
          </Link>
          <Link to="/account" className="block font-[Shabnam-Light] text-justify mb-2">
            علاقه مندی ها
          </Link>
          <Link to="/products" className="block font-[Shabnam-Light] text-justify mb-2">
            فرش ماشینی
          </Link>
          <Link to="/products" className="block font-[Shabnam-Light] text-justify mb-2">
            فرش دستبافت
          </Link>
          <Link to="/products" className="block font-[Shabnam-Light] text-justify mb-2">
            موکت
          </Link>
          <Link to="/products" className="block font-[Shabnam-Light] text-justify mb-2">
            برندهای فرش ماشینی
          </Link>
        </div>
        <div>
          <h4 className="font-[Shabnam-Bold] text-2xl mb-4">مجوز ها</h4>
          <div className="flex gap-1">
            <img
              src="images/zarinPal.png"
              alt="License"
              className="w-24 h-32 object-cover p-2 bg-white overflow-hidden rounded-lg"
            />
            <img
              src="images/samandehi.png"
              alt="License"
              className="w-24 h-32 object-cover p-2 bg-white overflow-hidden rounded-lg"
            />
            <img
              src="images/enamad.png"
              alt="License"
              className="w-24 h-32 object-cover p-2 bg-white overflow-hidden rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-between items-center gap-4 font-[Shabnam-Light]">
        <h4 className="text-2xl font-[Shabnam-Bold]">به خبرنامه ما ملحق شوید</h4>

        <p>اطلاع از تخفیفات و جدیدترین های دیجی فرش</p>
        <form action="#" className="flex-1 flex min-w-[15rem]">
          <input
            type="email"
            className="w-full bg-white text-black py-2 px-4 border border-transparent border-solid outline-none rounded-r-full focus:border-gray-500"
            placeholder="ایمیل ..."
          />
          <button className="py-2 px-4 rounded-l-full bg-[var(--colorFive)] outline-none border-none transition-colors hover:bg-red-500 font-[Shabnam-Medium]">
            اشتراک
          </button>
        </form>
      </div>
    </div>
  );
});
export default Footer;
