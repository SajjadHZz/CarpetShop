import React, { useEffect, useRef, useState } from "react";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Button, IconButton, Tooltip } from "@material-tailwind/react";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { LiaRandomSolid } from "react-icons/lia";
import { PiBasketBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////////////////////////////////
import { machineProducts } from "../../Datas";

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

////////////////////////////////////////////// START MAIN FUNCTION //////////////////////////////////////////////
export default function QuickAccess({ productSelectedId }) {
  const [chosedProduct, setChosedProduct] = useState(machineProducts[productSelectedId]);
  useEffect(() => {
    setChosedProduct(machineProducts[productSelectedId]);
  }, [productSelectedId]);

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

  return (
    <>
      <img src="public/img/Asset-3.png" className="absolute -left-1/3 opacity-[0.04] " />
      <div className="relative w-full flex flex-col md:flex-row items-stretch gap-2 p-px sm:p-2 overflow-y-auto">
        {/* ///////////// SLIDER IMAGES ///////////// */}
        <div className="hidden md:inline-block px-2 md:px-0 w-11/12 md:w-1/3 mx-auto">
          <div ref={sliderRef} className="flex flex-row-reverse overflow-hidden mb-2">
            {chosedProduct.srcGallery.map((item, index) => {
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
            {chosedProduct.srcGallery.map((item, index) => {
              return (
                <div key={index} className="keen-slider__slide">
                  <img className="w-full h-full object-cover" src={item} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ///////////// DETAILES ///////////// */}
        <div className="py-5 px-3 w-full md:w-2/3 font-[Shabnam-Light]">
          <h2 className="font-black text-base md:text-xl">{chosedProduct.title}</h2>
          <p className="text-xs md:text-sm after:w-11/12 after:h-[2px] after:bg-gray-300 after:inline-block flex items-center after:flex-1 gap-2 mt-3 text-gray-600 font-semibold">
            کد فرش : {chosedProduct.code.toLocaleString("fa-ir", { useGrouping: false })}
          </p>

          {/* ----- CATEGORY ----- */}
          <div className="text-sm md:text-base font-bold flex items-center mt-2">
            <p className="pl-2 border-l border-solid border-gray-400">
              <span>دسته بندی</span> {" : "}
              <span className="text-[var(--colorFive)]">فرش {chosedProduct.pattern}</span>
            </p>
            <p className="pr-2">
              <span>برند</span> <span className="text-[var(--colorFive)]">{chosedProduct.brand}</span>
            </p>
          </div>

          {/* ----- ATTRIBUTES ----- */}
          <h5 className="text-sm md:text-base font-bold mt-4">مهمترین ویژگی های محصول :</h5>
          <ul>
            {chosedProduct.attributes.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-xs md:text-sm font-semibold before:w-1 before:h-1 before:bg-[var(--colorTow)] before:inline-block before:rounded-full before:ml-2 mt-2"
                >
                  <span>{item.name}</span>
                  {" : "}
                  <span className="text-[var(--colorFive)]">{item.value}</span>
                </li>
              );
            })}
          </ul>

          {/* ----- CHOSE SIZE ----- */}
          <div className="text-xs md:text-sm flex items-center gap-2 my-3">
            <p className=" ml-2 font-bold">انتخاب سایز :</p>
            {chosedProduct.dimensions
              .map((item, index) => {
                return (
                  <div key={index} className="relative flex items-center justify-center">
                    <label className="text-xs  absolute cursor-pointer" htmlFor={`checkboxSize${index}`}>
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
          <div className="text-sm md:text-base flex items-center gap-1 sm:gap-2 my-3 w-full">
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
              <IconButton className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] bg-[var(--colorTow)] w-8 h-8 sm:w-12 sm:h-12 text-lg">
                <PiBasketBold />
              </IconButton>
            </Tooltip>
            <Tooltip className="font-[Shabnam-Light]" content="چشممو گرفت">
              <IconButton className="transition-all hover:scale-110 hover:bg-[var(--colorThree)] bg-[var(--colorTow)] w-8 h-8 sm:w-12 sm:h-12 text-lg">
                <AiOutlineHeart />
              </IconButton>
            </Tooltip>
            <Tooltip className="font-[Shabnam-Light]" content="مقایسه">
              <Link to="/compare">
                <IconButton className="hidden lg:inline-block transition-all hover:scale-110 hover:bg-[var(--colorThree)] bg-[var(--colorTow)] w-8 h-8 sm:w-12 sm:h-12 text-lg">
                  <LiaRandomSolid />
                </IconButton>
              </Link>
            </Tooltip>
            {/* <Button className="">مشاهده محصول</Button> */}
            <div className="flex-1 text-end ">
              <p className="inline-block text-black font-bold min-w-[110px] ">
                {chosedProduct.discount
                  ? (
                      Math.floor(
                        (chosedProduct.dimensions[selectSize].price *
                          (1 - chosedProduct.discount.percent / 100)) /
                          1000
                      ) * 1000
                    ).toLocaleString("fa-ir")
                  : chosedProduct.dimensions[selectSize].price.toLocaleString("fa-ir")}{" "}
                تومان
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
