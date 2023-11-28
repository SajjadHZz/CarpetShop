import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { MdModeEditOutline } from "react-icons/md";
import { GiHeartKey } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { BiExit, BiHomeHeart } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { LiaGrinHeartsSolid } from "react-icons/lia";
import { BsChatHeart, BsBox2Heart, BsSearchHeart, BsBell } from "react-icons/bs";

import { Avatar, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const listLinks = [
  { id: 1, label: "پیشخوان", icon: <BiHomeHeart /> },
  { id: 2, label: "سفارشات", icon: <BsBox2Heart /> },
  { id: 3, label: "آدرس ها", icon: <GoLocation /> },
  { id: 4, label: "نظرات و پیشنهادات", icon: <BsChatHeart /> },
  { id: 5, label: "علاقه مندی ها", icon: <LiaGrinHeartsSolid /> },
  { id: 6, label: "پیگیری سفارشات", icon: <BsSearchHeart /> },
  { id: 7, label: "اعلان ها", icon: <BsBell /> },
  { id: 8, label: "تنظیمات حساب", icon: <FaRegUserCircle /> },
];

import axios from "axios";

export default function UserAccount() {
  const [openAccountFeatures, setOpenAccountFeatures] = useState();

  const handleOpenAccountFeatures = (value) =>
    setOpenAccountFeatures(openAccountFeatures === value ? 0 : value);

  // const sendHandler = () => {
  //   axios
  //     .post("https://realmiddle.backendless.app/api/data/Products", {
  //       brand: "پامچال",
  //       pattern: "سنتی",
  //       title: "فرش 1200 شانه طرح گیلدا با زمینه صدفی کد 14561",
  //       srcGallery: [
  //         "public/img/Carpets/Machine/01/01.jpg",
  //         "public/img/Carpets/Machine/01/02.jpg",
  //         "public/img/Carpets/Machine/01/03.jpg",
  //         "public/img/Carpets/Machine/01/04.jpg",
  //         "public/img/Carpets/Machine/01/05.jpg",
  //         "public/img/Carpets/Machine/01/06.jpg",
  //         "public/img/Carpets/Machine/01/07.jpg",
  //         "public/img/Carpets/Machine/01/08.jpg",
  //         "public/img/Carpets/Machine/01/09.jpg",
  //       ],
  //       attributes: [
  //         { name: "رنگ پس زمینه", value: "صدفی" },
  //         { name: "تعداد شانه", value: "1200 شانه" },
  //         { name: "ضخامت فرش", value: "7 + 1 میلی متر" },
  //         { name: "جنس فرش", value: "پلی استر پنبه" },
  //         { name: "سایر مشخصات", value: "بدون پرز _ ضد حساسیت و آلرژی" },
  //       ],
  //       colors: ["صدفی", "#e1fefe"],
  //       comb: 1200,
  //       dimensions: [
  //         { size: "12 متر", price: 3_345_000 },
  //         { size: "9 متر", price: 2_866_000 },
  //         { size: "6 متر", price: 2_105_000 },
  //       ],
  //       discount: {
  //         percent: 5,
  //         timeDiscount: "2023/12/7",
  //       },
  //       labels: ["پذیرایی", "آشپزخانه", "اتاق خواب"],
  //     })
  //     .then((res) => {
  //       alert("ok");
  //     });
  // };

  // const sendHandler = () => {
  //   axios.get("https://realmiddle.backendless.app/api/data/Products").then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <>
      <Header />

      <div className="my-4 px-2 lg:px-16 flex flex-col md:flex-row justify-between gap-5 lg:gap-10 font-[Shabnam-Light]">
        {/* ------------------- SIDEBAR ------------------- */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col items-center bg-white border border-solid border-gray-300 rounded-xl overflow-hidden">
            <div className="mt-2 relative">
              <Avatar src="public/img/undefiend.png" alt="avatar" size="xl" />
              <MdModeEditOutline className="absolute bottom-0 left-0 bg-gray-50 rounded-full p-0.5 w-5 h-5 border border-solid border-gray-500 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <h2 className="mt-2 font-bold">سجاد حسین زاده</h2>
            <div className="mt-4 border-t border-solid divide-x divide-x-reverse divide-solid flex w-full justify-evenly items-center">
              <div className="py-2 flex flex-1 flex-col items-center gap-2 cursor-pointer transition hover:bg-[var(--colorFive)] hover:text-white">
                <GiHeartKey />
                <p className="">تغییر رمز</p>
              </div>
              <div className="py-2 flex flex-1 flex-col items-center gap-2 cursor-pointer transition hover:bg-[var(--colorFive)] hover:text-white">
                <BiExit />
                <p className="md:text-sm lg:text-base">خروج از حساب</p>
              </div>
            </div>
          </div>
          {/* ///////////////////// */}
          <div className="hidden md:block mt-4 p-4 bg-white border border-solid divide-y border-gray-300 rounded-xl overflow-hidden">
            <h2 className="font-bold pb-4">حساب کاربری شما</h2>
            <div className="pt-4">
              {listLinks.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 group p-4 transition-colors duration-500 hover:bg-gray-50 cursor-pointer rounded-xl"
                  >
                    <div className="text-2xl transition group-hover:text-[var(--colorFive)]">{item.icon}</div>
                    <p className="inline-block transition group-hover:text-[var(--colorFive)]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Accordion
            className="md:hidden mt-4 p-4 bg-white border border-solid divide-y border-gray-300 rounded-xl overflow-hidden"
            open={openAccountFeatures === 1}
            icon={<Icon id={1} open={openAccountFeatures} />}
          >
            <AccordionHeader onClick={() => handleOpenAccountFeatures(1)}>
              <h2 className="font-bold font-[Shabnam-Light] text-base">حساب کاربری شما</h2>
            </AccordionHeader>
            <AccordionBody>
              {listLinks.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 group p-4 transition-colors duration-500 hover:bg-gray-50 cursor-pointer rounded-xl"
                  >
                    <div className="text-2xl transition group-hover:text-[var(--colorFive)]">{item.icon}</div>
                    <p className="font-[Shabnam-Light] text-base text-black inline-block transition group-hover:text-[var(--colorFive)]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </AccordionBody>
          </Accordion>
        </div>
        {/* ------------------- CONTENTS ------------------- */}
        <div className="w-full md:w-3/4">
          <div className="mb-10 bg-white border border-solid border-gray-300 rounded-xl p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-[Shabnam-Bold] font-bold text-lg after:absolute after:-bottom-2 relative after:right-0 after:inline-block after:w-full after:h-1 after:bg-red-500">
                سفارش های من
              </h3>
              <a href="#" className="text-[var(--colorFive)] text-sm font-bold ">
                مشاهده همه
              </a>
            </div>
            <div className="flex justify-around text-center font-bold text-xs divide-x divide-solid divide-gray-200 divide-x-reverse">
              <div className="flex-1 flex flex-col items-center">
                <img src="public/img/order-pending.png" alt="Logo" className="w-20" />
                <p>در انتظار پرداخت</p>
                <p className="mt-2 text-sm">0 سفارش</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="public/img/order-on-hold.png" alt="Logo" className="w-20" />
                <p>در انتظار بررسی</p>
                <p className="mt-2 text-sm">0 سفارش</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="public/img/order-completed.png" alt="Logo" className="w-20" />
                <p>تکمیل شده</p>
                <p className="mt-2 text-sm">0 سفارش</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="public/img/order-cancelled.png" alt="Logo" className="w-20" />
                <p>لغو شده</p>
                <p className="mt-2 text-sm">0 سفارش</p>
              </div>
            </div>
          </div>
          <div className="mb-10 bg-white border border-solid border-gray-300 rounded-xl p-5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-[Shabnam-Bold] font-bold text-lg after:absolute after:-bottom-2 relative after:right-0 after:inline-block after:w-full after:h-1 after:bg-red-500">
                مورد علاقه های من
              </h3>
              <a href="#" className="text-[var(--colorFive)] text-sm font-bold ">
                مشاهده همه
              </a>
            </div>
            <p className="">لیست شما خالی می باشد.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
