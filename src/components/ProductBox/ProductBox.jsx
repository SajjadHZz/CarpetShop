import React from "react";
import "./ProductBox.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaRandomSolid } from "react-icons/lia";

import { Tooltip, IconButton } from "@material-tailwind/react";

import { Link } from "react-router-dom";
const number = 123123;
number.toLocaleString("fa-ir");
export default function ProductBox({ title, srcGallery, dimensions, discount }) {
  return (
    <div className="font-[Shabnam-Light] w-72 shadow rounded pb-2 bg-white border-2 border-white overflow-hidden border-solid">
      <div className="relative w-full">
        {discount && (
          <p className="text-[var(--colorFive)] text-xs font-bold bg-red-100 select-none inline absolute top-2 right-2 py-1 px-2 rounded-full">
            %{discount.percent.toLocaleString("fa-ir")} تخفیف
          </p>
        )}
        <div className="flex content-between items-center gap-1 absolute top-2 left-2">
          <Tooltip className="font-[Shabnam-Light]" content="مقایسه">
            <IconButton className="w-5 h-5 mx-1 text-black bg-transparent">
              <LiaRandomSolid className="cursor-pointer w-7 h-7 rounded-full bg-[var(--colorFour)] p-1 hover:scale-110 hover:text-[var(--colorFive)] transition" />
            </IconButton>
          </Tooltip>
          <Tooltip className="font-[Shabnam-Light]" content="چشممو گرفت">
            <IconButton className="w-5 h-5 mx-1 text-black bg-transparent">
              <AiOutlineHeart className="cursor-pointer w-7 h-7 rounded-full bg-[var(--colorFour)] p-1  hover:scale-110 hover:text-[var(--colorFive)] transition" />
            </IconButton>
          </Tooltip>
          <Tooltip className="font-[Shabnam-Light]" content="مشاهده سریع">
            <IconButton className="w-5 h-5 mx-1 text-black bg-transparent">
              <BiSearchAlt className="cursor-pointer w-7 h-7 rounded-full bg-[var(--colorFour)] p-1  hover:scale-110 hover:text-[var(--colorFive)] transition" />
            </IconButton>
          </Tooltip>
        </div>
        <Link to="/detailsproduct">
          <img src={srcGallery[0]} alt="Image Product" className="object-cover w-full h-80" />
        </Link>
      </div>
      {}
      <Link to="/detailsproduct">
        <h5 className="font-[Shabnam-Bold] text-lg p-2 text-center">{title}</h5>
      </Link>
      <div className="flex justify-between items-center p-2 bg-[var(--colorFour)] m-2 rounded-lg">
        <div className="text-sm">
          <p className="font-bold">{dimensions[0].price.toLocaleString("fa-ir")} تومان</p>
          {discount && (
            <p className="line-through text-gray-500">
              {Math.floor(
                ((dimensions[0].price * (1 - discount.percent / 100)) / 1000) * 1000
              ).toLocaleString("fa-ir")}{" "}
              تومان
            </p>
          )}
        </div>
        <Link
          to="/detailsproduct"
          className="cursor-pointer flex justify-center items-center gap-1 p-2 bg-[var(--colorThree)] hover:bg-[var(--colorTow)] text-white rounded transition"
        >
          <RiShoppingBasketLine />
          <span>خرید محصول</span>
        </Link>
      </div>
    </div>
  );
}
