import React, { useState } from "react";
import "./Products.css";

import { machineProducts, productsCategory } from "../../Datas";

//////////////////////////////////////////////////////////////////////////////////////
import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

//////////////////////////////////////////////////////////////////////////////////////
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

//////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

//////////////////////////////////////////////////////////////////////////////////////
import {
  Button,
  IconButton,
  Card,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  Drawer,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

//////////////////////////////////////////////////////////////////////////////////////
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill, BsFilterRight } from "react-icons/bs";
import { FaFilter } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";

const filterProductLabel = [
  { label: "پربازدید ترین", value: "visit" },
  { label: "پرفروش ترین", value: "shoper" },
  { label: "ارزان ترین", value: "cheap" },
  { label: "گران ترین", value: "expensive" },
  { label: "جدید ترین", value: "news" },
];

///////////////////////////////////////// * START FUNCTION * /////////////////////////////////////////////
export default function Category() {
  const [pageURL, setPageURL] = useState([]);
  useEffect(() => {
    setPageURL([{ label: "محصولات", link: "/products" }]);
  }, []);

  const [filterProducts, setFilterProducts] = useState();

  const pageShowProducts = 3;
  const pageCount = Math.ceil(machineProducts.length / pageShowProducts);
  const pageShowNumber = Array.from(Array(pageCount).keys());
  const [activePagination, setActivePagination] = useState(1);
  const pageShowProductsArrey = machineProducts.slice(
    activePagination * pageShowProducts - pageShowProducts,
    activePagination * pageShowProducts
  );
  console.log(pageShowProductsArrey);

  const getItemProps = (index) => ({
    variant: activePagination === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActivePagination(index),
  });

  const next = () => {
    if (activePagination === pageCount) return;
    setActivePagination(activePagination + 1);
  };

  const prev = () => {
    if (activePagination === 1) return;
    setActivePagination(activePagination - 1);
  };

  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const filterPriceRange = [0, 20_000_000, 500_000];
  const [startProductPrice, setStartProductPrice] = useState(filterPriceRange[0]);
  const [endProductPrice, setEndProductPrice] = useState(filterPriceRange[1]);
  const priceSliderHandler = (e) => {
    setStartProductPrice(e[0]);
    setEndProductPrice(e[1]);
  };

  const [openBottomProducts, setOpenBottomProducts] = useState(false);
  const openDrawerProductsBottom = () => setOpenBottomProducts(true);
  const closeDrawerProductsBottom = () => setOpenBottomProducts(false);
  const [openFilterProudcts, setOpenFilterProudcts] = useState(false);
  const openDrawerFilterProudcts = () => setOpenFilterProudcts(true);
  const closeDrawerFilterProudcts = () => setOpenFilterProudcts(false);

  return (
    <>
      <Header />
      <Breadcrumb url={pageURL} thisPage="فرش ماشینی" />

      <div className="flex justify-between gap-4 my-5 mx-2 xl:mx-16">
        {/* -------------------------- FILTERS -------------------------- */}
        <div className="hidden lg:inline-block bg-white px-3 py-2 rounded-lg overflow-hidden w-1/4 h-fit">
          {/* ///////////////// PRODUCTS CATEGORY //////////////// */}
          <div className="mb-2">
            <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
              دسته بندی
            </h4>
            <div className="pr-2">
              {productsCategory.map((item) => {
                return (
                  <Accordion
                    key={item.id}
                    open={open === item.id}
                    icon={open === item.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  >
                    <AccordionHeader
                      className="font-[Shabnam-Light] border-none text-md p-2"
                      onClick={() => handleOpen(item.id)}
                    >
                      {item.title}
                    </AccordionHeader>
                    <AccordionBody className="p-0">
                      <List className="py-0 px-2 w-11/12">
                        {item.subCategory.map((category, index) => {
                          return (
                            <Link key={index} to="/products">
                              <ListItem className="p-0">
                                <Typography className=" w-full py-2 cursor-pointer text-sm text-blue-gray-400 font-[Shabnam-Light] mr-2">
                                  {category.lable}
                                </Typography>
                                <p className="text-gray-400 ml-2 text-sm">(1)</p>
                              </ListItem>
                            </Link>
                          );
                        })}
                      </List>
                    </AccordionBody>
                  </Accordion>
                );
              })}
            </div>
          </div>

          {/* ///////////////// FILTER PRICE //////////////// */}
          <div className="mb-2">
            <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
              فیلتر قیمت
            </h4>
            <div className="mt-5">
              <RangeSlider
                id="range-slider"
                defaultValue={[filterPriceRange[0], filterPriceRange[1]]}
                min={filterPriceRange[0]}
                max={filterPriceRange[1]}
                step={filterPriceRange[2]}
                onInput={priceSliderHandler}
              />
            </div>
            <div className="flex justify-between mt-4 font-[Shabnam-Light]">
              <p className="">{endProductPrice.toLocaleString("fa-ir")} تومان</p>
              <p className="">{startProductPrice.toLocaleString("fa-ir")} تومان</p>
            </div>
          </div>

          {/* ///////////////// FILTER COLORS //////////////// */}
          <div className="mb-2">
            <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
              رنگبندی
            </h4>
            <div className="flex flex-wrap gap-2 mt-4 text-sm font-[Shabnam-Light]">
              <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <p>قرمز</p>
              </div>
              <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                <p>زرد</p>
              </div>
              <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                <p>آبی</p>
              </div>
              <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                <p>بنفش</p>
              </div>
              <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
                <p>سبز</p>
              </div>
            </div>
          </div>

          {/* ///////////////// FILTER BUTTON //////////////// */}
          <Button
            className="mt-3 font-[Shabnam-Light] bg-[var(--colorTow)] hover:bg-[var(--colorThree)]"
            fullWidth
          >
            اعمال فیلتر
          </Button>
        </div>

        {/* -------------------------- PRODUCTS -------------------------- */}
        <div className="lg:w-3/4 flex flex-col gap-3">
          <Card className="w-full mx-auto">
            <List className="hidden lg:flex flex-row h-14 gap-5">
              <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold]  p-2">فیلتر بر اساس :</h4>
              {filterProductLabel.map((item, index) => {
                return (
                  <ListItem
                    onClick={() => setFilterProducts(item.value)}
                    key={index}
                    className={`${
                      filterProducts === item.value ? "bg-[var(--colorFour)] text-black" : ""
                    } focus:bg-[var(--colorFour)] focus:text-black  p-0 w-fit`}
                  >
                    <Typography className="font-mediu px-3 w-full cursor-pointer items-center font-[Shabnam-Medium]">
                      {item.label}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
            <List className="flex-row lg:hidden">
              <Button
                className="flex items-center gap-2 bg-transparent hover:bg-[var(--colorFour)] shadow-none text-black hover:shadow-none font-[Shabnam-Medium]"
                onClick={openDrawerFilterProudcts}
              >
                <FaFilter className="w-6 h-6" />
                <span className="">فیلتر</span>
              </Button>
              <Button
                className="flex items-center gap-2 bg-transparent hover:bg-[var(--colorFour)] shadow-none text-black hover:shadow-none font-[Shabnam-Medium]"
                onClick={openDrawerProductsBottom}
              >
                <BsFilterRight className="w-8 h-8" />
                <span className="">پربازدید ترین</span>
              </Button>
            </List>
          </Card>

          {/* --------------- BOTTOM PRODUCTS DRAWER --------------- */}
          <Drawer
            placement="bottom"
            open={openBottomProducts}
            onClose={closeDrawerProductsBottom}
            className="p-4"
            size={400}
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className=" font-[Shabnam-Bold]">
                فیلتر بر اساس :
              </Typography>
              <IconButton variant="text" color="blue-gray" onClick={closeDrawerProductsBottom}>
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
              {filterProductLabel.map((item, index) => {
                return (
                  <ListItem key={index} className="font-[Shabnam-Light]">
                    {item.label}
                    <ListItemSuffix className="ml-0 mr-auto">
                      <TiTick />
                    </ListItemSuffix>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>

          {/* --------------- PRODUCTS FILTER DRAWER --------------- */}
          <Drawer
            placement="bottom"
            open={openFilterProudcts}
            onClose={closeDrawerFilterProudcts}
            className="p-4"
            size={450}
          >
            <div className="flex justify-end">
              <IconButton variant="text" color="blue-gray" onClick={closeDrawerFilterProudcts}>
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
              {/* ///////////////// FILTER PRICE //////////////// */}
              <div className="mb-2">
                <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
                  فیلتر قیمت
                </h4>
                <div className="mt-5">
                  <RangeSlider
                    id="range-slider"
                    defaultValue={[filterPriceRange[0], filterPriceRange[1]]}
                    min={filterPriceRange[0]}
                    max={filterPriceRange[1]}
                    step={filterPriceRange[2]}
                    onInput={priceSliderHandler}
                  />
                </div>
                <div className="flex justify-between mt-4 font-[Shabnam-Light]">
                  <p className="">{endProductPrice.toLocaleString("fa-ir")} تومان</p>
                  <p className="">{startProductPrice.toLocaleString("fa-ir")} تومان</p>
                </div>
              </div>

              {/* ///////////////// FILTER COLORS //////////////// */}
              <div className="mb-2">
                <h4 className="text-lg text-[var(--colorTow)] font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
                  رنگبندی
                </h4>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-[Shabnam-Light]">
                  <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-red-500"></div>
                    <p>قرمز</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                    <p>زرد</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                    <p>آبی</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                    <p>بنفش</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[var(--colorFour)] py-1 px-2 rounded-full w-fit cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-green-500"></div>
                    <p>سبز</p>
                  </div>
                </div>
              </div>

              {/* ///////////////// FILTER BUTTON //////////////// */}
              <Button
                className="mt-3 font-[Shabnam-Light] bg-[var(--colorTow)] hover:bg-[var(--colorThree)]"
                fullWidth
              >
                اعمال فیلتر
              </Button>
            </List>
          </Drawer>

          <div className="flex justify-center flex-wrap lg:flex-row lg:justify-between gap-2">
            {pageShowProductsArrey.map((item) => {
              return <ProductBox key={item.id} {...item} />;
            })}
          </div>

          {/* --------------- PRODUCTS PAGINATION --------------- */}

          <div className="flex items-center gap-4 self-center mt-5">
            <IconButton
              variant="text"
              className="text-[var(--colorFour)] bg-[var(--colorTow)]"
              onClick={prev}
              disabled={activePagination === 1}
            >
              <BsArrowRightSquareFill className="w-10 h-10" />
            </IconButton>
            <div className="flex items-center gap-2">
              {pageShowNumber.map((item) => {
                return (
                  <IconButton key={item} {...getItemProps(item + 1)}>
                    {item + 1}
                  </IconButton>
                );
              })}
            </div>
            <IconButton
              variant="text"
              className=" text-[var(--colorFour)] bg-[var(--colorTow)]"
              onClick={next}
              disabled={activePagination === 5}
            >
              <BsArrowLeftSquareFill className="w-10 h-10" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* //////////////////////// */}
      <div className="hidden md:inline-block">
        <Footer />
      </div>
    </>
  );
}
