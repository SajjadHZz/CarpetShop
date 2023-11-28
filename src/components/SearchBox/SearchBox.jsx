import React, { useState } from "react";
import "./SearchBox.css";

import { Link } from "react-router-dom";

const optionValues = [
  { label: "فرش ماشینی", value: "name" },
  { label: "فرش دستبافت", value: "code" },
  { label: "موکت ها", value: "carpet" },
  { label: "برند ها", value: "brands" },
];

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function SearchBox() {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpenSearchFilter, setIsOpenSearchFilter] = useState(false);
  const [valueSearchFilter, setValueSearchFilter] = useState(optionValues[0].label);

  const searchFilterShowHandler = () => {
    setIsOpenSearchFilter(!isOpenSearchFilter);
    setIsSearch(false);
  };
  const searchFilterValueHandler = (value) => {
    setValueSearchFilter(value);
    setIsOpenSearchFilter(false);
  };
  const searchHandler = () => {
    setIsSearch(!isSearch);
    setIsOpenSearchFilter(false);
  };
  return (
    <div className="w-[25rem] relative hidden md:flex flex-col justify-between items-stretch font-[Shabnam-Light]">
      {/* --------------- SEARCH BAR ---------------- */}
      <div className="relative z-[2] flex justify-between items-center rounded-full bg-white py-2  border border-solid">
        <div className="relative w-32 border-l border-solid border-gray-300 pl-2">
          <div
            className="flex justify-between items-center mr-4 cursor-pointer"
            onClick={searchFilterShowHandler}
          >
            <p className="font-bold text-sm">{valueSearchFilter}</p>
            <MdOutlineKeyboardArrowDown
              className={`${isOpenSearchFilter && "rotate-180"} transition-transform`}
            />
          </div>
          <div
            className={`${
              isOpenSearchFilter || "hidden"
            } absolute mt-2 p-1 rounded-xl w-32 bg-white shadow select-none`}
          >
            {optionValues.map((item, index) => {
              return (
                <p
                  key={index}
                  className="rounded-lg py-1 px-2 text-gray-700 cursor-pointer transition hover:bg-gray-100"
                  onClick={() => {
                    searchFilterValueHandler(item.label);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>

        <input type="text" placeholder="جستجو ..." className="px-3 outline-none flex-1" />
        <button onClick={searchHandler} className={`${isSearch && "-is-loading"} searchBox__submit ml-4`}>
          <span className="w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden border-none"></span>
        </button>
      </div>

      {/* --------------- RESULTS ---------------- */}
      <div
        className={`${
          isSearch ? "flex" : "hidden"
        } flex-col absolute z-[1] shadow-xl bg-[var(--colorFour)] top-3 pt-8 rounded-xl w-full max-h-60 overflow-hidden`}
      >
        <Link
          to="/1"
          className="flex items-center justify-between gap-3 w-full p-2 cursor-pointer transition hover:bg-gray-50 "
        >
          <div>
            <img src="public/img/Carpets/03.jpg" alt="" className="w-14 h-14 rounded-full inline-block" />
            <p className="mr-2 inline-block">فرش طلایی مشکی مدل آراد کد </p>
          </div>
          <p className="text-sm text-[var(--colorFive)] font-bold">2,345,000 تومان</p>
        </Link>
        <Link
          to="/2"
          className="flex items-center justify-between gap-3 w-full p-2 cursor-pointer transition hover:bg-gray-50 "
        >
          <div>
            <img src="public/img/Carpets/03.jpg" alt="" className="w-14 h-14 rounded-full inline-block" />
            <p className="mr-2 inline-block">فرش طلایی مشکی مدل آراد کد </p>
          </div>
          <p className="text-sm text-[var(--colorFive)] font-bold">2,345,000 تومان</p>
        </Link>
      </div>
    </div>
  );
}
