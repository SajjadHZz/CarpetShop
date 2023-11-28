import React, { useState, useEffect, useContext } from "react";
import Megamenu from "../Megamenu/Megamenu";

////////////////////////////////////////////////////////////////////////////
import QuickAccessModal from "../../context/QuickAccessModal";

////////////////////////////////////////////////////////////////////////////
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

////////////////////////////////////////////////////////////////////////////
import { navbarCategory, productsCategory } from "../../Datas";

////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////
export default function Navbar() {
  const { openSidebar, setOpenSidebar } = useContext(QuickAccessModal);

  const openDrawer = () => {
    setOpenSidebar(true);
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const controlNavbar = () => {
    window.scrollY > 250 ? setShowNavbar(true) : setShowNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <ul
      className={`relative font-[Shabnam-Light] flex items-center gap-4 bg-white shadow-md transition-all duration-500 md:-z-[1] ${
        showNavbar ? "md:-translate-y-16 h-0" : "md:translate-y-0 h-full"
      }`}
    >
      <li className="hidden md:flex relative group items-center gap-2 py-3 px-2 transition cursor-pointer font-[Shabnam-Medium] hover:text-white hover:bg-[var(--colorTow)]">
        <CgMenuGridR className="w-6 h-6" />
        <p>دسته بندی محصولات</p>
        <Megamenu />
      </li>
      {/* ------------------------- LARGE CATEGORY ------------------------- */}
      {navbarCategory.map((item, index) => {
        return (
          <Link key={index} to={item.link} className="hidden md:inline-block">
            <li className="relative flex items-center gap-2 py-3 px-2 text-sm transition hover:text-[var(--colorFive)] cursor-pointer after:bg-[var(--colorFive)] after:block after:w-0 after:h-[2px] after:absolute after:bottom-0 after:transition-all after:hover:w-full">
              <img src={item.icon} alt="List Icon" className="w-4" />
              <p>{item.title}</p>
            </li>
          </Link>
        );
      })}
      {/* ------------------------- SMALL MENU ------------------------- */}
      <Button
        onClick={openDrawer}
        className="bg-transparent shadow-none text text-black w-fit h-fit p-2 m-0 inline-block md:hidden"
      >
        <GiHamburgerMenu className="w-8 h-8 inline-block ml-2" />
        <span className="font-[Shabnam-Medium]">منو</span>
      </Button>

      {/* ------------------------- PHONE NUMBER ------------------------- */}
      <div className="absolute left-4 flex items-center p-2 border border-dotted border-transparent rounded-2xl cursor-pointer transition-all hover:text-[var(--colorFive)] hover:border-black">
        <p className="ml-2 font-bold text-sm">۰۹۹۰۹۰۹۰۹۰۰</p>
        <img src="images/Icons/headset.png" alt="Support Icon" className="w-5" />
      </div>
    </ul>
  );
}
