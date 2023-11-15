import React, { useState } from "react";

import {
  productsCategory,
  machineCategory,
  handmadeCategory,
  carpetCategory,
  brandCategory,
} from "../../Datas";

import { Link } from "react-router-dom";

export default function Megamenu() {
  const [category, setCategory] = useState(machineCategory);
  const mouseEnterHandler = (category) => {
    switch (category) {
      case "machine":
        setCategory(machineCategory);
        break;
      case "handmade":
        setCategory(handmadeCategory);
        break;
      case "carpet":
        setCategory(carpetCategory);
        break;
      case "brands":
        setCategory(brandCategory);
        break;
    }
  };
  return (
    <ul className="cursor-default absolute top-[48px] w-[50rem] h-80 right-0 hidden group-hover:flex items-stretch border-[2px] border-white shadow-xl overflow-hidden">
      <li className="flex flex-col justify-between items-stretch bg-[var(--colorTow)] font-[Shabnam-Medium]">
        {productsCategory.map((item) => {
          return (
            <div
              onMouseEnter={() => mouseEnterHandler(item.value)}
              key={item.id}
              className="cursor-pointer flex items-center gap-4 w-60 transition-colors flex-1 text-white p-4 hover:bg-[var(--colorThree)]"
            >
              <img src={item.icon} alt="Title Icon" className="w-7 invert" />
              <p className="inline-block">{item.title}</p>
            </div>
          );
        })}
      </li>
      <li className="flex justify-between gap-5 px-3 py-4 bg-[var(--colorFour)] text-black flex-1">
        <ul className="flex flex-col flex-wrap gap-4 w-fit h-full">
          {category.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to="/products"
                  className="cursor-pointer transition-colors hover:text-[var(--colorFive)] after:static after:w-2 after:h-2 after:inline-block after:border-gray-800 after:border-b-[2px] after:border-l-[2px] after:rotate-45 after:translate-x-0 after:mr-2 after:transition-transform after:hover:rotate-45 after:hover:-translate-x-1"
                >
                  {item.lable}
                </Link>
                {item.sub &&
                  item.sub.map((category, indexId) => {
                    return (
                      <Link to="/products" key={indexId} className="text-xs text-gray-600 mt-4 block">
                        {category}
                      </Link>
                    );
                  })}
              </li>
            );
          })}
        </ul>
        <img
          src="public/img/Carpets/Show-Carpets/decor-farsh-vintage-code-917.jpg"
          alt="Image Carpet"
          className="w-48 h-full object-cover"
        />
      </li>
    </ul>
  );
}
