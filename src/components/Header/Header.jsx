import React, { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import Account from "../Account/Account";
import Basket from "../Basket/Basket";

/////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////
const Header = memo(() => {
  return (
    <div className="md:sticky md:top-0 md:z-[2] ">
      <div className="z-[3] flex justify-between items-center gap-4 bg-white px-4 lg:px-16 py-4">
        <div className="md:flex justify-center items-center gap-4">
          <Link to="/">
            <img src="Logo.png" alt="Digifarsh-Logo" className="w-24 md:w-40" />
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
});
export default Header;
