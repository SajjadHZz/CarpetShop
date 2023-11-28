import React, { useEffect, useRef, useState, useMemo, useContext } from "react";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import useDiscountTimer from "../../hooks/useDiscountTimer";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import {
  Button,
  IconButton,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { AiOutlineHeart } from "react-icons/ai";
import { LiaRandomSolid } from "react-icons/lia";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Link, useParams } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { machineProducts, productsCategory } from "../../Datas";

// ---------------------------------------------------------------------------
function Specifications() {
  return (
    <>
      <div className="flex items-center gap-3  my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          رنگ
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          نقره ای
        </p>
      </div>
      <div className="flex items-center gap-3 my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          نام
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          فرش طرح بهشت نقره ای
        </p>
      </div>
      <div className="flex items-center gap-3 my-1">
        <p className="p-3 bg-[var(--colorFive)] text-white font-[Shabnam-Medium] text-sm w-1/3 rounded-lg ">
          سبک
        </p>
        <p className="p-3 bg-[var(--colorFour)] text-black font-[Shabnam-Light] text-sm w-2/3 rounded-lg">
          پوست و چرم
        </p>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
function FormComment({ title, subTitle, placeholder }) {
  return (
    <>
      <h3 className="font-[Shabnam-Medium] text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{subTitle} خود را در مورد محصول مطرح نمایید</p>
      <textarea
        className="resize-y mt-3 w-full h-32 p-2 bg-[var(--colorFour)] border border-solid rounded-md transition-all outline-none focus:outline-none  placeholder:text-sm placeholder:text-gray-500"
        placeholder={`${placeholder} ...`}
      ></textarea>
      <Button className="font-[Shabnam-Thin] py-2 bg-[var(--colorFive)]">ثبت و ارسال</Button>
    </>
  );
}

// ---------------------------------------------------------------------------
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

import QuickAccessModal from "../../context/QuickAccessModal";

////////////////////////////////////////////// START MAIN FUNCTION //////////////////////////////////////////////
export default function DetailsProduct() {
  const { openQuicklyModal, setOpenQuicklyModal, setProductChosedId } = useContext(QuickAccessModal);

  const param = useParams();
  const [product, setProduct] = useState(machineProducts.find((item) => item.id === +param.productID));

  const data = [
    {
      label: "معرفی",
      value: "introduction",
      desc: `محصولی در کمال زیبایی که به زیبایی هر چه تمام تر هنر طراحی و بافت فرش ایرانی را به نمایش می گذارد. این فرش با طراحی و رنگ بی نظیرش، به راحتی هر فضایی را با تغییرات کامل بصری روبرو کرده و رنگ زمینه نقره ای آن که ملایم و خنثی هست، محیطی صمیمی و دلنشین در اختیار شما قرار می دهد. کاربرد این فرش بر کف پوش های تا حد امکان تیره تر و همین طور مبلمان با رنگ های متضاد یعنی طیف رنگ های گرم و روشن مانند انواع کرم ، نسکافه ای و حتی قرمز می تواند خاص ترین و باشکوه ترین دکوراسیون ها را ایجاد نماید. جنس الیاف به کار رفته در بافت این فرش درجه یک اکریلیک هیت ست می باشد. که از مهم ترین خصوصیات آن قابلیت تمیز شدن راحت تر ، سبکتر بودن فرش به نسبت انواع فرش های قدیمی تر می باشد. از دیگر مزایای این محصول تنوع سایز و همین طور ضد حساسیت بودن آن است. اگر به دنبال ایحاد یک فضای خاص و سراسر هارمونی هستید می توانید از انواع اکسسوری های به رنگ گل های زمینه فرش استفاده کنید. به گونه ای که رنگ های زمینه را به راحتی در وسایل به حرکت در آورید. این فرش درجه یک ضد حساسیت و پرزدهی بوده و در برابر آلودگی ها بسیار مقاوم می باشد.`,
    },
    {
      label: "مشخصات",
      value: "specifications",
      desc: <Specifications />,
    },
    {
      label: "دیدگاه ها",
      value: "comments",
      desc: <FormComment title="دیدگاه و نظرات شما" subTitle="دیدگاه" placeholder="دیدگاه شما" />,
    },
    {
      label: "پرسش و پاسخ",
      value: "quastion",
      desc: <FormComment title="پرسش و پاسخ" subTitle="پرسش" placeholder="پرسش شما" />,
    },
  ];

  const swiper = useRef();

  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 5,
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      rtl: true,
      slides: {
        perView: 4,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const [productCounter, setProductCounter] = useState(1);
  const addCounterProudctHandler = () => {
    setProductCounter((prevCount) => prevCount + 1);
  };
  const minusCounterProductHandler = () => {
    if (productCounter !== 1) {
      setProductCounter((prevCount) => prevCount - 1);
    }
  };

  const [selectSize, setSelectSize] = useState(0);

  const [pageURL, setPageURL] = useState([]);
  useEffect(() => {
    setPageURL([{ label: "محصولات", link: "/products" }]);
  }, []);

  const [seconds, minutes, hours, days] = useDiscountTimer(product.discount?.timeDiscount);

  return (
    <>
      <Header />
      <Breadcrumb url={pageURL} thisPage={product.title} />

      {/* ------------------------------------------------- * PRODUCT DISPLAY * ------------------------------------------------ */}

      <div className="flex items-stretch justify-between gap-10 mx-2 md:mx-6 xl:mx-16 font-[Shabnam-Light] ">
        {/* --------------- PRODUCT DETAILES ---------------- */}
        {useMemo(() => {
          return (
            <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-stretch gap-2 bg-white">
              {/* ///////////// SLIDER IMAGES ///////////// */}
              <div className="px-2 md:px-0 w-11/12 md:w-1/3 mx-auto">
                <div ref={sliderRef} className="flex flex-row-reverse overflow-hidden mb-2">
                  {product.srcGallery.map((item, index) => {
                    return (
                      <div key={index} className="keen-slider__slide">
                        <Zoom wrapElement="span">
                          <img className="w-full h-full object-cover" src={item} />
                        </Zoom>
                      </div>
                    );
                  })}
                </div>

                <div ref={thumbnailRef} className="flex flex-row-reverse overflow-hidden">
                  {product.srcGallery.map((item, index) => {
                    return (
                      <div key={index} className="keen-slider__slide">
                        <img className="w-full h-full object-cover" src={item} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ///////////// DETAILES ///////////// */}
              <div className="py-5 px-3 w-full md:w-2/3">
                <h2 className="font-black text-xl">{product.title}</h2>
                <p className=" after:w-11/12 after:h-[2px] after:bg-gray-300 after:inline-block flex items-center after:flex-1 gap-2 text-sm mt-3 text-gray-600 font-semibold">
                  کد فرش : {product.code.toLocaleString("fa-ir", { useGrouping: false })}
                </p>

                {/* ----- CATEGORY ----- */}
                <div className="font-bold flex items-center mt-2">
                  <p className="pl-2 border-l border-solid border-gray-400">
                    <span className="">دسته بندی</span> {" : "}
                    <span className="text-[var(--colorFive)]">فرش ماشینی</span>
                  </p>
                  <p className="pr-2">
                    <span className="">برند</span>{" "}
                    <span className="text-[var(--colorFive)]">{product.brand}</span>
                  </p>
                </div>

                {/* ----- ATTRIBUTES ----- */}
                <h5 className="font-bold mt-4">مهمترین ویژگی های محصول :</h5>
                <ul className="">
                  {product.attributes.map((attr, index) => {
                    return (
                      <li
                        key={index}
                        className="text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:transition-colors before:hover:bg-[var(--colorFive)] before:ml-2 mt-2"
                      >
                        <span className="">{attr.name}</span>
                        {" : "}
                        <span className="text-[var(--colorFive)]">{attr.value}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* ----- CHOSE SIZE ----- */}
                <div className="flex items-center gap-2 my-3">
                  <p className=" ml-2 font-bold">انتخاب سایز :</p>
                  {product.dimensions
                    .map((item, index) => {
                      return (
                        <div key={index} className="relative flex items-center justify-center">
                          <label
                            className="text-xs  absolute cursor-pointer"
                            htmlFor={`checkboxSize${index}`}
                          >
                            {item.metter.toLocaleString("fa-ir")} متر
                          </label>
                          <input
                            onClick={() => setSelectSize(index)}
                            defaultChecked
                            id={`checkboxSize${index}`}
                            type="radio"
                            name="carpetSize"
                            className="appearance-none transition-all w-12 h-6 text-black checked:ring-[var(--colorFive)] checked:ring-2 bg-[var(--colorFour)] px-2 py-1 cursor-pointer rounded-full text-xs"
                          />
                        </div>
                      );
                    })
                    .reverse()}
                </div>

                {/* ----- BUTTONS ----- */}
                <div className="flex items-center gap-2 my-3">
                  <div className="ml-3 w-[5rem] relative text-center rounded-full border-[1px] border-solid p-1">
                    <button
                      onClick={minusCounterProductHandler}
                      className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] absolute -right-2 top-1/2 -translate-y-1/2 bg-[var(--colorTow)] w-5 h-5  text-white rounded-full"
                    >
                      -
                    </button>
                    <p className="select-none">{productCounter.toLocaleString("fa-ir")}</p>
                    <button
                      onClick={addCounterProudctHandler}
                      className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] absolute -left-2 top-1/2 -translate-y-1/2 bg-[var(--colorTow)] w-5 h-5  text-white rounded-full"
                    >
                      +
                    </button>
                  </div>
                  <Tooltip className="font-[Shabnam-Light]" content="چشممو گرفت">
                    <IconButton className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] bg-[var(--colorTow)] text-lg">
                      <AiOutlineHeart className="" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip className="font-[Shabnam-Light]" content="مقایسه">
                    <Link to="/compare">
                      <IconButton className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] bg-[var(--colorTow)] text-lg">
                        <LiaRandomSolid className="" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  {/* <div className=""></div> */}
                </div>
              </div>
            </div>
          );
        }, [product, productCounter])}

        {/* --------------- SIDEBAR (PRODUCT PRICE) ---------------- */}
        <div className="w-1/3 hidden lg:inline-block">
          {/* ///////////// TIMER ///////////// */}
          {product.discount && (
            <div className="bg-white mb-2 border-solid border-gray-500 border-[1px] p-2 text-center">
              <div className="flex justify-center items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--colorFive)] rounded-lg text-white select-none flex-col">
                  <div>{seconds.toLocaleString("fa-ir")}</div>
                  <div className="mt-1">ثانیه</div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--colorFive)] rounded-lg text-white select-none flex-col">
                  <div>{minutes.toLocaleString("fa-ir")}</div>
                  <div className="mt-1">دقیقه</div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--colorFive)] rounded-lg text-white select-none flex-col">
                  <div>{hours.toLocaleString("fa-ir")}</div>
                  <div className="mt-1">ساعت</div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--colorFive)] rounded-lg text-white select-none flex-col">
                  <div>{days.toLocaleString("fa-ir")}</div>
                  <div className="mt-1">روز</div>
                </div>
              </div>
              <p className="mt-3 font-bold">زمان باقیمانده تا پایان تخفیف</p>
            </div>
          )}

          {/* ///////////// INFOS ///////////// */}
          {useMemo(() => {
            return (
              <div className="bg-white border-solid border-gray-500 border-[1px] pb-2 px-2">
                <div className="px-2 divide-y divide-solid divide-gray-400">
                  <div className="flex items-center gap-2 py-3 ">
                    <BsFillBox2HeartFill className="" />
                    <p className="">گارانتی تعویض 6 ماهه دیجی فرش</p>
                  </div>
                  <div className="flex items-center gap-2 py-3 ">
                    <BsFillBookmarkFill className="" />
                    <p className="px-2 py-0.5 bg-green-600 text-white rounded-sm">موجود در انباری</p>
                    <p className="">ارسال پس از 4 روز کاری</p>
                  </div>
                  <div className="flex items-center gap-2 py-3 ">
                    <BsInfoCircleFill className="" />
                    <p className="text-justify w-full">
                      امکان برگشت کالا در گروه ساعت هوشمند با دلیل "انصراف از خرید" تنها در صورتی مورد قبول
                      است که پلمب کالا باز نشده باشد.
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2 py-3 ">
                    <div className="flex items-center gap-2">
                      <BiDollarCircle className="text-yellow-800" />
                      <p className="">قیمت محصول</p>
                    </div>
                    <div className="text-center">
                      {product.discount && (
                        <div className="flex items-center gap-2  mb-2">
                          <del className="text-xs text-[var(--colorFive)] no-underline after:w-full after:h-[1px] after:inline-block after:rotate-3 after:bg-[var(--colorFive)] after:absolute relative after:top-1/2 after:right-0">
                            {product.dimensions[selectSize].price.toLocaleString("fa-ir")} تومان
                          </del>
                          <p className="text-sm px-2 bg-[var(--colorFive)] text-white rounded-sm">
                            {product.discount.percent.toLocaleString("fa-ir")}%
                          </p>
                        </div>
                      )}

                      <p>
                        <span className="text-lg font-bold">
                          {product.discount === null
                            ? product.dimensions[selectSize].price.toLocaleString("fa-ir")
                            : (
                                Math.floor(
                                  (product.dimensions[selectSize].price *
                                    (1 - product.discount?.percent / 100)) /
                                    1000
                                ) * 1000
                              ).toLocaleString("fa-ir")}
                        </span>{" "}
                        <span className="text-gray-700 text-sm">تومان</span>
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  fullWidth
                  className="bg-[var(--colorTow)] hover:bg-[var(--colorThree)] font-[Shabnam-Light] rounded-none"
                >
                  افزودن به سبد خرید
                </Button>
              </div>
            );
          }, [selectSize])}
        </div>
      </div>

      {/* ------------------------------------------------- * PRODUCT CONTENT * ------------------------------------------------ */}

      <div className="relative flex flex-col-reverse lg:flex-row justify-between gap-4 mt-5 mx-2 md:mx-6 xl:mx-16 h-full">
        {/* --------------- PRODUCT CATEGORY ---------------- */}
        {useMemo(() => {
          return (
            <div className="w-full lg:w-1/4">
              {/* ///////////// CATEGORY ///////////// */}
              <div className="bg-white px-2 py-1">
                <h4 className="text-lg font-[Shabnam-Bold] border-b border-gray-400 border-solid p-2">
                  دسته بندی
                </h4>
                <div className="px-2">
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
                                    <p className="text-gray-400 ml-2 text-sm">(12)</p>
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

              {/* ///////////// INSTANT PRODUCTS ///////////// */}
              <div className="mt-3">
                <div className="flex justify-between items-center gap-1">
                  <h4 className="text-lg font-[Shabnam-Bold] p-2 flex-1">پرفروش ترین ها</h4>
                  <button
                    onClick={() => {
                      swiper.current.swiper.slidePrev();
                    }}
                    className="p-2 bg-[var(--colorTow)] rounded-full text-white transition-all hover:bg-[var(--colorThree)] hover:scale-110 "
                  >
                    <AiOutlineArrowRight />
                  </button>
                  <button
                    onClick={() => {
                      swiper.current.swiper.slideNext();
                    }}
                    className="p-2 bg-[var(--colorTow)] rounded-full text-white transition-all hover:bg-[var(--colorThree)] hover:scale-110 "
                  >
                    <AiOutlineArrowLeft />
                  </button>
                </div>

                <Swiper
                  loop="true"
                  ref={swiper}
                  slidesPerView={1}
                  grid={{ rows: 1 }}
                  spaceBetween={30}
                  modules={[Grid]}
                  className="mySwiper pt-2"
                >
                  <SwiperSlide className="w-full bg-white">
                    <div className="flex gap-3 pl-2">
                      <Link to="/1">
                        <img
                          src="public/img/Carpets/08.jpg"
                          alt="Product Image"
                          className="w-26 h-40 object-cover"
                        />
                      </Link>
                      <div className="flex-1 font-[Shabnam-Light] py-2 flex flex-col justify-between">
                        <Link to="/detailsproduct/1" className="flex-1">
                          <p className="font-bold">فرش ماشینی الیناز</p>
                          <p className="text-gray-600 text-sm">کد 53234</p>
                        </Link>
                        <div className="flex justify-between items-center gap-1 mb-2">
                          <div className="flex gap-1 text-xl">
                            <Tooltip className="font-[Shabnam-Light]" content="چشممو گرفت">
                              <IconButton className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]">
                                <AiOutlineHeart />
                              </IconButton>
                            </Tooltip>
                            <Tooltip className="font-[Shabnam-Light]" content="مقایسه">
                              <Link to="/compare">
                                <IconButton className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]">
                                  <LiaRandomSolid />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip className="font-[Shabnam-Light]" content="مشاهده سریع">
                              <IconButton
                                onClick={() => {
                                  setOpenQuicklyModal(!openQuicklyModal);
                                  setProductChosedId(1);
                                }}
                                className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]"
                              >
                                <BiSearchAlt />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <p className="text-xs">12340000 تومان</p>
                        </div>
                        <Link to="/1">
                          <Button
                            fullWidth
                            className="bg-[var(--colorFive)] rounded-md p-2.5 font-[Shabnam-Light]"
                          >
                            مشاهده محصول
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="w-full bg-white">
                    <div className="flex gap-3 pl-2">
                      <Link to="/2">
                        <img
                          src="public/img/Carpets/06.jpg"
                          alt="Product Image"
                          className="w-26 h-40 object-cover"
                        />
                      </Link>
                      <div className="flex-1 font-[Shabnam-Light] py-2 flex flex-col justify-between">
                        <Link to="/detailsproduct/2" className="flex-1">
                          <p className="font-bold">فرش ماشینی افرا طرح نیلوفر</p>
                          <p className="text-gray-600 text-sm">کد 53234</p>
                        </Link>
                        <div className="flex justify-between items-center gap-1 mb-2">
                          <div className="flex gap-1 text-xl">
                            <Tooltip className="font-[Shabnam-Light]" content="چشممو گرفت">
                              <IconButton className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]">
                                <AiOutlineHeart />
                              </IconButton>
                            </Tooltip>
                            <Tooltip className="font-[Shabnam-Light]" content="مقایسه">
                              <Link to="/compare">
                                <IconButton className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]">
                                  <LiaRandomSolid />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip className="font-[Shabnam-Light]" content="مشاهده سریع">
                              <IconButton
                                onClick={() => {
                                  setOpenQuicklyModal(!openQuicklyModal);
                                  setProductChosedId(2);
                                }}
                                className="w-6 h-6 text-lg bg-[var(--colorTow)] hover:bg-[var(--colorFive)]"
                              >
                                <BiSearchAlt />
                              </IconButton>
                            </Tooltip>
                          </div>
                          <p className="text-xs">12340000 تومان</p>
                        </div>
                        <Link to="/2">
                          <Button
                            fullWidth
                            className="bg-[var(--colorFive)] rounded-md p-2.5 font-[Shabnam-Light]"
                          >
                            مشاهده محصول
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          );
        }, [open])}

        {/* --------------- DETAIL PRODUCT ---------------- */}

        {useMemo(() => {
          return (
            <div className="sticky top-28 w-full h-full lg:w-3/4">
              <Tabs value="introduction">
                <TabsHeader className="z-0">
                  {data.map(({ label, value }) => (
                    <Tab
                      activeClassName="text-[var(--colorFive)]"
                      className="font-[Shabnam-Medium] px-3 w-fit transition-all"
                      key={value}
                      value={value}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className="z-0">
                  {data.map(({ value, desc }) => (
                    <TabPanel
                      className="font-[Shabnam-Light] text-justify border border-solid bg-white mt-1"
                      key={value}
                      value={value}
                    >
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          );
        }, [])}
      </div>

      <ProductsSlider titleSlider="محصولات مشابه" />

      {/* ///////////// SMALL PRICE CONTAINER ///////////// */}
      {useMemo(() => {
        return (
          <div className="sticky bottom-0 z-[1] flex lg:hidden justify-between items-center gap-3 p-3 sm:px-5 sm:py-3 bg-white rounded-t-3xl border-t border-solid border-gray-400 shadow font-[Shabnam-Light]">
            <Button className="w-1/2 bg-[var(--colorTow)] hover:bg-[var(--colorThree)] font-[Shabnam-Light] rounded-none">
              افزودن به سبد خرید
            </Button>
            <div className="text-center min-w-[135px]">
              {product.discount && (
                <div className="flex items-center gap-2 mb-2">
                  <del className="text-xs text-[var(--colorFive)] no-underline after:w-full after:h-[1px] after:inline-block after:rotate-3 after:bg-[var(--colorFive)] after:absolute relative after:top-1/2 after:right-0">
                    {product.dimensions[selectSize].price.toLocaleString("fa-ir")} تومان
                  </del>
                  <p className="text-xs px-2 py-0.5 bg-[var(--colorFive)] text-white rounded-full">
                    {product.discount.percent.toLocaleString("fa-ir")}%
                  </p>
                </div>
              )}

              <p>
                <span className="text-lg font-bold">
                  {product.discount === null
                    ? product.dimensions[selectSize].price.toLocaleString("fa-ir")
                    : (
                        Math.floor(
                          (product.dimensions[selectSize].price * (1 - product.discount?.percent / 100)) /
                            1000
                        ) * 1000
                      ).toLocaleString("fa-ir")}
                </span>{" "}
                <span className="text-gray-700 text-sm">تومان</span>
              </p>
            </div>
          </div>
        );
      }, [selectSize])}

      <div className="hidden md:inline-block">
        <Footer />
      </div>
    </>
  );
}
