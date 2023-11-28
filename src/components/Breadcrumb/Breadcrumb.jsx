import React, { memo } from "react";
import "./Breadcrumb.css";

import { BiSolidHomeSmile } from "react-icons/bi";
import { RiArrowDropLeftLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Breadcrumb = memo(({ url, thisPage }) => {
  return (
    <nav
      className=" font-[Shabnam-Medium] hidden md:flex px-5 py-3 shadow rounded-lg my-4 bg-white mx-16"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center ">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-[var(--colorOne)] hover:text-[var(--colorThree)]"
          >
            <BiSolidHomeSmile className="w-5 h-5" />
          </Link>
        </li>
        <RiArrowDropLeftLine className="mx-2" />
        {url !== undefined &&
          url.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li>
                  <Link
                    to={item.link}
                    className=" text-sm font-medium text-[var(--colorOne)] hover:text-[var(--colorThree)]"
                  >
                    {item.label}
                  </Link>
                </li>
                <RiArrowDropLeftLine className="mx-2" />
              </React.Fragment>
            );
          })}
        <li aria-current="page">
          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
            {thisPage}
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
});
export default Breadcrumb;
