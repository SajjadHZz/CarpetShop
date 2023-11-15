import React, { useState } from "react";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";

import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Login() {
  const [pageSelect, setPageSelect] = useState(1);
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh]">
      <img
        src="public/img/bgLogin.jpg"
        alt="Background Image"
        className="absolute inset-0 mx-auto w-full h-full object-cover bg-center"
      />
      <div className="w-full lg:w-11/12 xl:w-3/4 backdrop-blur-xl bg-gray-200/[0.6] h-[90vh] px-2 py-6 lg:p-8 relative flex justify-between items-center gap-5 border-2 border-solid border-white rounded-3xl">
        {/* --------------------- LOGIN -------------------- */}
        <div className="hidden md:inline-block w-1/2 lg:w-96">
          <div className="flex flex-col items-center">
            <Link to="/">
              <img src="public/Logo.png" alt="Image" className="w-40" />
            </Link>
            <p className="font-[Shabnam-Medium]">خوشحالیم که دوباره شما رو می بینیم</p>
          </div>
          <form action="#" className="mt-8">
            <input
              placeholder="ایمیل ..."
              type="email"
              className="p-2 w-full rounded-xl font-[Shabnam-Light] outline-none"
            />

            <div className="relative mt-3 mb-1">
              <input
                placeholder="رمز عبور ..."
                type="password"
                className="p-2 w-full rounded-xl font-[Shabnam-Light] outline-none"
              />
              <AiOutlineEyeInvisible className="cursor-pointer text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <a
              href="#"
              className="font-[Shabnam-Thin] text-sm mr-3 transition-all before:ml-2 before:bg-opacity-0 before:w-1 before:h-1 before:transition-all before:inline-block hover:before:bg-opacity-100 hover:before:w-4 before:bg-red-800 hover:before:rounded-full"
            >
              فراموشی رمز عبور
            </a>
            <Button fullWidth className="font-[Shabnam-Light] text-base mt-5 bg-[var(--colorFive)]">
              ورود
            </Button>
          </form>
          <p className="text-center mt-5">
            <span className="font-[Shabnam-Light] text-xs ml-1">اگه هنوز ثبت نام نکردید،</span>
            <span
              onClick={() => setPageSelect(1)}
              className="text-[var(--colorTow)] text-sm font-[Shabnam-Medium] cursor-pointer"
            >
              از اینجا عضو بشید
            </span>
          </p>
        </div>

        {/* --------------------- SIGN -------------------- */}
        <div className="w-full md:w-1/2 lg:w-96 h-full overflow-y-auto none_scroolbar">
          <div className="flex flex-col items-center">
            <Link to="/">
              <img src="public/Logo.png" alt="Image" className="w-40" />
            </Link>
            <p className="font-[Shabnam-Medium]">به دیجی‌فرش خوش آمدید</p>
          </div>
          <form action="#" className="mt-8">
            <div className="flex justify-between items-center gap-2">
              <input
                className="p-2 w-1/2 rounded-xl font-[Shabnam-Light] outline-none"
                placeholder="نام ..."
                type="text"
              />
              <input
                className="p-2 w-1/2 rounded-xl font-[Shabnam-Light] outline-none"
                placeholder="نام خانوادگی ..."
                type="text"
              />
            </div>
            <input
              placeholder="ایمیل یا شماره همراه ..."
              type="email"
              className="p-2 mt-3 w-full rounded-xl font-[Shabnam-Light] outline-none"
            />
            <div className="flex justify-between items-center gap-2">
              <div className="flex-1 relative mt-3 mb-1">
                <input
                  placeholder="رمز عبور ..."
                  type="password"
                  className="p-2 w-full rounded-xl font-[Shabnam-Light] outline-none"
                />
                <AiOutlineEyeInvisible className="cursor-pointer text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex-1 relative mt-3 mb-1">
                <input
                  placeholder="تکرار رمز عبور ..."
                  type="password"
                  className="p-2 w-full rounded-xl font-[Shabnam-Light] outline-none"
                />
                <AiOutlineEyeInvisible className="cursor-pointer text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <p className="text-xs font-[Shabnam-Light] mt-1 mr-2">
              <BsFillInfoCircleFill className="inline-block ml-1 text-sm" />
              رمزعبور باید دارای 8 کاراکتر باشد
            </p>
            <div className="mt-4">
              <Checkbox
                ripple={false}
                color="red"
                className="border border-solid border-black"
                label={
                  <Typography className="font-[Shabnam-Light] text-sm text-black">
                    مایل به دریافت خبرنامه ایمیلی هستم
                  </Typography>
                }
              />
              <Checkbox
                ripple={false}
                color="red"
                className="border border-solid border-black"
                label={
                  <Typography className="font-[Shabnam-Light] text-sm text-black">
                    با ثبت عضویت، تمام قوانین و مقررات سایت را می پذیرم
                  </Typography>
                }
              />
            </div>
            <Button fullWidth className="font-[Shabnam-Light] text-base mt-5 bg-[var(--colorFive)]">
              عضویت
            </Button>
          </form>
          <p className="text-center mt-3">
            <span className="font-[Shabnam-Light] text-xs">اگه قبلا عضو شدید، </span>
            <span
              onClick={() => setPageSelect(0)}
              className="text-[var(--colorTow)] text-sm font-[Shabnam-Medium] cursor-pointer"
            >
              از اینجا وارد بشید
            </span>
          </p>
        </div>

        {/* --------------------- IMAGE -------------------- */}
        <div
          className={`hidden md:inline-block w-1/2 h-[calc(100%-1rem)] absolute left-0 rounded-3xl overflow-hidden m-2 transition-transform duration-700 ${
            pageSelect === 0 ? "translate-x-0" : "translate-x-[97%]"
          }`}
        >
          <img
            src="public/img/LoginFormBg.jpg"
            alt=""
            className="absolute top-0 w-full h-full object-cover brightness-75"
          />
          <img
            src="public/img/CarpetLoginForm.png"
            alt=""
            className={`w-2/3 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ${
              pageSelect === 0 ? "scale-x-100" : "-scale-x-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
