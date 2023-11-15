import React from "react";
import "./Breadcrumb.css";

import { BiSolidHomeSmile } from "react-icons/bi";
import { RiArrowDropLeftLine } from "react-icons/ri";

import { Breadcrumbs } from "@material-tailwind/react";

export default function Breadcrumb() {
  return (
    <nav
      className=" font-[Shabnam-Medium] hidden md:flex px-5 py-3 shadow rounded-lg my-4 bg-white mx-16"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center ">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-[var(--colorOne)] hover:text-[var(--colorThree)]"
          >
            <BiSolidHomeSmile className="w-5 h-5" />
          </a>
        </li>
        <RiArrowDropLeftLine className="mx-2" />
        <li>
          <a href="#" className=" text-sm font-medium text-[var(--colorOne)] hover:text-[var(--colorThree)]">
            محصولات
          </a>
        </li>
        <RiArrowDropLeftLine className="mx-2" />
        <li aria-current="page">
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
            فرش ماشینی
          </span>
        </li>
      </ol>
    </nav>
    // <Breadcrumbs>
    //   <a href="#" className="opacity-60">
    //     Docs
    //   </a>
    //   <a href="#" className="opacity-60">
    //     Components
    //   </a>
    //   <a href="#">Breadcrumbs</a>
    // </Breadcrumbs>
  );
}
