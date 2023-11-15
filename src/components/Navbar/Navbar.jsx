import React, { useState } from "react";
import Megamenu from "../Megamenu/Megamenu";

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
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const openDrawer = () => setOpenSidebar(true);
  const closeDrawer = () => setOpenSidebar(false);

  return (
    <ul className="relative font-[Shabnam-Light] flex items-center gap-4 bg-white shadow-md">
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
      <Drawer placement="left" open={openSidebar} onClose={closeDrawer} className="p-2">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] px-3 py-2 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 flex items-center justify-between">
            <Typography className="font-[Shabnam-Medium]" variant="h5" color="blue-gray">
              دسته بندی محصولات
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </IconButton>
          </div>
          <List>
            {productsCategory.map((item) => {
              return (
                <Accordion
                  key={item.id}
                  open={openAccordion === item.id}
                  icon={
                    <MdOutlineKeyboardArrowDown
                      className={`mx-auto h-4 w-4 transition-transform ${
                        openAccordion === item.id ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={openAccordion === item.id}>
                    <AccordionHeader onClick={() => handleOpenAccordion(item.id)} className="border-b-0 py-3">
                      <ListItemPrefix>
                        <img src={item.icon} alt="Logo" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-2 w-full flex justify-between font-normal font-[Shabnam-Medium]"
                      >
                        {item.title}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <Link to="/products">
                        <ListItem className="font-[Shabnam-Light] text-sm flex justify-between items-center">
                          <span>فرش کودک</span>
                          <ListItemPrefix>(12)</ListItemPrefix>
                        </ListItem>
                      </Link>
                    </List>
                  </AccordionBody>
                </Accordion>
              );
            })}

            {navbarCategory.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <ListItem>
                    <ListItemPrefix>
                      <img src={item.icon} alt="Icon" className="w-5 ml-2" />
                    </ListItemPrefix>
                    <p className="font-[Shabnam-Medium]">{item.title}</p>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Card>
      </Drawer>

      {/* ------------------------- PHONE NUMBER ------------------------- */}
      <div className="absolute left-4 flex items-center p-2 border border-dotted border-transparent rounded-2xl cursor-pointer transition-all hover:text-[var(--colorFive)] hover:border-black">
        <p className="ml-2 font-bold text-sm">۰۹۹۰۹۰۹۰۹۰۰</p>
        <img src="public/img/Icons/headset.png" alt="Support Icon" className="w-5" />
      </div>
    </ul>
  );
}
