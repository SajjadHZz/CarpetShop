import React, { useEffect, useRef, useState, useContext } from "react";
import QuickAccessModal from "../../context/QuickAccessModal";
import "./SearchBox.css";

import { NavLink } from "react-router-dom";

const optionValues = [
  { label: "فرش ماشینی", value: "name" },
  { label: "فرش دستبافت", value: "code" },
  { label: "موکت ها", value: "carpet" },
  { label: "برند ها", value: "brands" },
];

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { machineProducts } from "../../Datas";

export default function SearchBox() {
  const searchInput = useRef();
  // useEffect(() => {
  //   console.log(searchInput.current.value);
  // }, [searchInput]);

  const { setOpenAlert, setAlertMessage } = useContext(QuickAccessModal);

  const [searchProudcts, setSearchProudcts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isOpenSearchFilter, setIsOpenSearchFilter] = useState(false);
  const [valueSearchFilter, setValueSearchFilter] = useState(optionValues[0].label);

  const searchFilterShowHandler = () => {
    setIsOpenSearchFilter(!isOpenSearchFilter);
    setIsSearch(false);
  };
  const searchFilterValueHandler = (value) => {
    setValueSearchFilter(value);
    setIsOpenSearchFilter(false);
  };
  const searchHandler = () => {
    setIsOpenSearchFilter(false);
    if (searchInput.current.value.trim().length > 2) {
      setIsSearch(!isSearch);
      setSearchProudcts(
        machineProducts.filter((item) => {
          return item.title.includes(searchInput.current.value);
        })
      );
    } else {
      setAlertMessage("لطفا بیش از ۳ کاراکتر وارد کنید");
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
  };
  return (
    <div className="w-[25rem] relative hidden md:flex flex-col justify-between items-stretch font-[Shabnam-Light]">
      {/* --------------- SEARCH BAR ---------------- */}
      <div className="relative z-[2] flex justify-between items-center rounded-full bg-white py-2  border border-solid">
        <div className="relative w-32 border-l border-solid border-gray-300 pl-2">
          <div
            className="flex justify-between items-center mr-4 cursor-pointer"
            onClick={searchFilterShowHandler}
          >
            <p className="font-bold text-sm">{valueSearchFilter}</p>
            <MdOutlineKeyboardArrowDown
              className={`${isOpenSearchFilter && "rotate-180"} transition-transform`}
            />
          </div>
          <div
            className={`${
              isOpenSearchFilter || "hidden"
            } absolute mt-2 p-1 rounded-xl w-32 bg-white shadow select-none`}
          >
            {optionValues.map((item, index) => {
              return (
                <p
                  key={index}
                  className="rounded-lg py-1 px-2 text-gray-700 cursor-pointer transition hover:bg-gray-100"
                  onClick={() => {
                    searchFilterValueHandler(item.label);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        </div>

        <input ref={searchInput} type="text" placeholder="جستجو ..." className="px-3 outline-none flex-1" />
        <button onClick={searchHandler} className={`${isSearch && "-is-loading"} searchBox__submit ml-4`}>
          <span className="w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden border-none"></span>
        </button>
      </div>

      {/* --------------- RESULTS ---------------- */}
      <div
        className={`${
          isSearch ? "flex" : "hidden"
        } flex-col absolute z-[1] shadow-xl bg-[var(--colorFour)] top-3 pt-8 rounded-xl w-full max-h-60 overflow-auto`}
      >
        {searchProudcts.length === 0 ? (
          <p className="w-full text-center p-2 text-[var(--colorFive)]">محصولی یافت نشد</p>
        ) : (
          searchProudcts.map((item) => {
            return (
              <NavLink
                to={`/${item.id}`}
                className="flex items-center gap-2 w-full p-2 cursor-pointer transition hover:bg-gray-50 "
              >
                <img
                  src={item.srcGallery[0]}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full inline-block"
                />
                <p className="text-sm inline-block">{item.title}</p>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
}
