import React, { useState } from "react";
import { RiUserSmileLine } from "react-icons/ri";
import { LiaGrinHeartsSolid } from "react-icons/lia";
import { TbBoxSeam } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaPowerOffSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Account() {
  const [isUserLogin, setIsUserLogin] = useState(true);
  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative">
      {isUserLogin ? (
        <>
          <Menu>
            <MenuHandler>
              <Button className="p-0 bg-transparent shadow-none text-black hover:shadow-none flex justify-between items-center gap-1 md:gap-3 cursor-pointer select-none">
                <img src="public/img/Profiles/Profile1.png" alt="Profile" className="w-8 h-8 rounded-full" />
                <p className="hidden md:inline-block font-[Shabnam-Medium] text-xs md:text-sm">
                  قاسم هاشمی مسگر
                </p>
                <MdOutlineKeyboardArrowDown className="w-3 h-3" />
              </Button>
            </MenuHandler>
            <MenuList className="font-[Shabnam-Light]">
              <Link to="/account" className="outline-none">
                <MenuItem className="flex justify-between items-center p-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--colorFour)]">
                  <RiUserSmileLine />
                  <p className="select-none">حساب کاربری</p>
                </MenuItem>
              </Link>
              <Link to="/account" className="outline-none">
                <MenuItem className="flex justify-between items-center p-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--colorFour)]">
                  <LiaGrinHeartsSolid />
                  <p className="select-none">علاقه مندی ها</p>
                </MenuItem>
              </Link>
              <Link to="/account" className="outline-none">
                <MenuItem className="flex justify-between items-center p-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--colorFour)]">
                  <TbBoxSeam />
                  <p className="select-none">پیگیری سفارش</p>
                </MenuItem>
              </Link>
              <Link to="/account" className="outline-none">
                <MenuItem className="flex justify-between items-center p-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--colorFour)]">
                  <IoIosNotificationsOutline />
                  <p className="select-none">اعلانات</p>
                </MenuItem>
              </Link>
              <MenuItem
                onClick={(className = "outline-none") => setIsUserLogin(false)}
                className="flex justify-between items-center p-2 cursor-pointer transition-colors duration-500 hover:bg-[var(--colorFour)] text-[var(--colorFive)] hover:text-[var(--colorFive)]"
              >
                <LiaPowerOffSolid />
                <p className="select-none">خروج</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
        <>
          <div className="text-xs md:text-sm flex items-center gap-1 font-[Shabnam-Light]">
            <RiUserSmileLine />
            <p>حساب کاربری</p>
          </div>
          <div className="text-xs md:text-sm mt-1.5 mr-5 md:mr-10 font-[Shabnam-Medium]">
            <Link
              to="/login"
              className="mx-2 text-[var(--colorTow)] transition-colors hover:text-[var(--colorFive)]"
            >
              ورود
            </Link>
            /
            <Link
              to="/login"
              className="mx-2 text-[var(--colorTow)] transition-colors hover:text-[var(--colorFive)]"
            >
              ثبت نام
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
