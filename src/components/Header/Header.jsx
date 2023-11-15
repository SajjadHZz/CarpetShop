import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import Account from "../Account/Account";
import Basket from "../Basket/Basket";

/////////////////////////////////////////////////////////////////////////////////////////
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

/////////////////////////////////////////////////////////////////////////////////////////
import { HiOutlineSearchCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////
export default function Header() {
  return (
    <div className="md:sticky md:top-0 md:z-[2] ">
      <div className="z-[3] flex justify-between items-center gap-4 bg-white px-4 lg:px-16 py-4">
        <div className="md:flex justify-center items-center gap-4">
          <Link to="/">
            <img src="public/Logo.png" alt="Digifarsh-Logo" className="w-24 md:w-40" />
          </Link>
          <SearchBox />
        </div>
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <Basket />
          <Account />
          {/* <HiOutlineSearchCircle className="md:hidden w-7 h-7" /> */}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
