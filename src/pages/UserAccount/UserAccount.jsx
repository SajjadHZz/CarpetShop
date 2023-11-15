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

export default function UserAccount() {
  const [openAccountFeatures, setOpenAccountFeatures] = useState();

  const handleOpenAccountFeatures = (value) =>
    setOpenAccountFeatures(openAccountFeatures === value ? 0 : value);

  return (
    <>
      <Header />

      <div className="my-4 px-2 lg:px-16 flex flex-col md:flex-row justify-between gap-5 lg:gap-10 font-[Shabnam-Light]">
        {/* ------------------- SIDEBAR ------------------- */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col items-center bg-white border border-solid border-gray-300 rounded-xl overflow-hidden">
            <div className="mt-2 relative">
              <Avatar src="public/img/Profiles/Profile12.png" alt="avatar" size="xl" />
              <MdModeEditOutline className="absolute bottom-0 left-0 bg-gray-50 rounded-full p-0.5 w-5 h-5" />
            </div>
            <h2 className="mt-2 font-bold">sajjad hossein zadeh</h2>
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
        <div className="w-full md:w-3/4 bg-white"></div>
      </div>
      <Footer />
    </>
  );
}
