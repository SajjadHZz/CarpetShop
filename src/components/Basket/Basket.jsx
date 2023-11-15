import React from "react";
import { PiBasket } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IconButton, Badge } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Basket() {
  const number = 1;
  return (
    <div className="relative group font-[Shabnam-Light]">
      <Link to="/basket">
        <Badge content={number.toLocaleString("fa-ir")}>
          <IconButton className="w-10 h-10 bg-[var(--colorTow)] hover:bg-[var(--colorThree)]">
            <PiBasket className="w-6 h-6 " />
          </IconButton>
        </Badge>
      </Link>
      <div className="-right-16 top-10 hidden w-80 min-w-80 border border-solid border-white text-sm absolute z-[6] shadow-xl md:group-hover:inline-block">
        <div className="bg-[var(--colorFour)] shadow p-1 h-60 overflow-y-auto">
          <div className="bg-white m-2 p-3 rounded">
            <Link to="/detailsproduct" className="flex justify-between g-3">
              <img src="public/img/Carpets/07.jpg" alt="Product Image" className="w-16 h-16 object-cover" />
              <p className="mr-2 font-bold">فرش طرح افشان گل گلی رنگ طوسی مدل زیباسرا</p>
            </Link>
            <div className="flex justify-between items-center text-lg mt-2">
              <p className="text-xs">
                تعداد : {1} &#215; {220000} تومان
              </p>
              <RiDeleteBin6Line className="hover:text-[var(--colorFive)] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 bg-white py-2 px-4 text-sm">
          <div className="font-bold">
            <p>مبلغ کل :</p>
            <p>234,345,000 تومان</p>
          </div>
          <Link
            to="/location"
            className="bg-[var(--colorFive)] text-white px-3 py-2 rounded-xl cursor-pointer text-center hover:bg-red-800"
          >
            ثبت سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}
