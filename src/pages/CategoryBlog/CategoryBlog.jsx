import React from "react";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import Footer from "../../components/Footer/Footer";

/////////////////////////////////////////////////////////////////////////
import { IconButton } from "@material-tailwind/react";

////////////////////////////////////////////////////////////////////////////////////
import { BiLogoInstagramAlt, BiLogoTelegram, BiLogoFacebookCircle } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////

export default function CategoryBlog() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };
  // ---------------------------------------------------------------------------
  return (
    <>
      {/* //////////////////// NAVBAR ////////////////////// */}
      <BlogNavbar />

      {/* //////////////////// BREADCRAMP ////////////////////// */}
      <div className="px-16 mt-2 font-[Shabnam-Light] text-xs flex items-center gap-1 text-gray-600">
        <p>وبلاگ</p>
        <RiArrowLeftSLine />
        <p>دکوراسیون منزل</p>
      </div>

      <div className="my-5 flex flex-col lg:flex-row justify-between gap-5 px-2 lg:px-16">
        {/* ////////////// CARDS ///////////// */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <h2 className="text-4xl font-[Shabnam-Bold] pb-4 border-b border-solid border-gray-300">
            دکوراسیون منزل
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border-b border-solid border-gray-400">
              <Link to="/detailsblog">
                <img
                  src="public/img/Carpets/Show-Carpets/03.jpg"
                  alt="Image"
                  className="w-full object-cover rounded-xl"
                />
              </Link>
              <Link to="/detailsblog">
                <h4 className="text-lg font-[Shabnam-Medium] mt-2 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
                </h4>
              </Link>
              <p className="text-xs font-[Shabnam-Light] text-gray-600 mt-1">۳۰ اردیبهشت, ۱۴۰۲</p>
              <p className="text-sm font-[Shabnam-Light] text-gray-800 mt-2 mb-3">
                این مقاله درباره چگونگی آراستن منزل به سبک دکوراسیون مینیمال و نقش فرش مینیمال در زیبایی آن،
                اطلاعات جذابی را فراهم…
              </p>
            </div>
            <div className="border-b border-solid border-gray-400">
              <Link to="/detailsblog">
                <img
                  src="public/img/Carpets/Show-Carpets/03.jpg"
                  alt=""
                  className="w-full object-cover rounded-xl"
                />
              </Link>
              <Link to="/detailsblog">
                <h4 className="text-lg font-[Shabnam-Medium] mt-2 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
                </h4>
              </Link>
              <p className="text-xs font-[Shabnam-Light] text-gray-600 mt-1">۳۰ اردیبهشت, ۱۴۰۲</p>
              <p className="text-sm font-[Shabnam-Light] text-gray-800 mt-2 mb-3">
                این مقاله درباره چگونگی آراستن منزل به سبک دکوراسیون مینیمال و نقش فرش مینیمال در زیبایی آن،
                اطلاعات جذابی را فراهم…
              </p>
            </div>
            <div className="border-b border-solid border-gray-400">
              <Link to="/detailsblog">
                <img
                  src="public/img/Carpets/Show-Carpets/03.jpg"
                  alt=""
                  className="w-full object-cover rounded-xl"
                />
              </Link>
              <Link to="/detailsblog">
                <h4 className="text-lg font-[Shabnam-Medium] mt-2 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
                </h4>
              </Link>
              <p className="text-xs font-[Shabnam-Light] text-gray-600 mt-1">۳۰ اردیبهشت, ۱۴۰۲</p>
              <p className="text-sm font-[Shabnam-Light] text-gray-800 mt-2 mb-3">
                این مقاله درباره چگونگی آراستن منزل به سبک دکوراسیون مینیمال و نقش فرش مینیمال در زیبایی آن،
                اطلاعات جذابی را فراهم…
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 self-center">
            <IconButton
              variant="text"
              className="text-[var(--colorFour)] bg-[var(--colorTow)]"
              onClick={prev}
              disabled={active === 1}
            >
              <BsArrowRightSquareFill className="w-10 h-10" />
            </IconButton>
            <div className="flex items-center gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <IconButton
              variant="text"
              className=" text-[var(--colorFour)] bg-[var(--colorTow)]"
              onClick={next}
              disabled={active === 5}
            >
              <BsArrowLeftSquareFill className="w-10 h-10" />
            </IconButton>
          </div>
        </div>

        {/* ////////////// SIDEBAR ///////////// */}
        <div className="w-full lg:w-1/3">
          <div className="border bg-white p-3">
            <div className="mb-4 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">جدیدترین مقالات مجله فرش آنلاین</h3>
            </div>
            <div className="font-[Shabnam-Medium]">
              <Link to="/detailsblog" className="flex gap-2 my-3">
                <img
                  src="public/img/Carpets/Show-Carpets/05.jpg"
                  alt="Image"
                  className="w-24 h-16 object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm transition-colors duration-300 hover:text-[var(--colorFive)]">
                    همه چیز درباره فرش ابریشم ماشینی+ معرفی بهترین برندها
                  </p>
                  <p className="text-xs text-gray-500 font-[Shabnam-Light]">۱۱ مرداد, ۱۴۰۱</p>
                </div>
              </Link>
              <Link to="/detailsblog" className="flex gap-2 my-3">
                <img
                  src="public/img/Carpets/Show-Carpets/05.jpg"
                  alt="Image"
                  className="w-24 h-16 object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm transition-colors duration-300 hover:text-[var(--colorFive)]">
                    همه چیز درباره فرش ابریشم ماشینی+ معرفی بهترین برندها
                  </p>
                  <p className="text-xs text-gray-500 font-[Shabnam-Light]">۱۱ مرداد, ۱۴۰۱</p>
                </div>
              </Link>
              <Link to="/detailsblog" className="flex gap-2 my-3">
                <img
                  src="public/img/Carpets/Show-Carpets/05.jpg"
                  alt="Image"
                  className="w-24 h-16 object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm transition-colors duration-300 hover:text-[var(--colorFive)]">
                    همه چیز درباره فرش ابریشم ماشینی+ معرفی بهترین برندها
                  </p>
                  <p className="text-xs text-gray-500 font-[Shabnam-Light]">۱۱ مرداد, ۱۴۰۱</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="border bg-white p-3 mt-3">
            <div className="mb-3 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">ما را در شبکه های اجتماعی دنبال کنید</h3>
            </div>
            <div className="flex gap-3">
              <BiLogoInstagramAlt className="text-white w-10 h-10 p-2 bg-[var(--colorTow)] cursor-pointer rounded-[0] hover:rounded-full" />
              <BiLogoTelegram className="text-white w-10 h-10 p-2 bg-[var(--colorTow)] cursor-pointer rounded-[0] hover:rounded-full" />
              <IoLogoWhatsapp className="text-white w-10 h-10 p-2 bg-[var(--colorTow)] cursor-pointer rounded-[0] hover:rounded-full" />
              <BiLogoFacebookCircle className="text-white w-10 h-10 p-2 bg-[var(--colorTow)] cursor-pointer rounded-[0] hover:rounded-full" />
            </div>
          </div>
          <div className="border bg-white p-3 mt-3">
            <h3 className="font-[Shabnam-Medium] mb-3 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              دسته بندی مطالب
            </h3>

            <div className="flex flex-col gap-3 font-[Shabnam-Light]">
              <Link to="/blogs" className="block">
                <FaFolderOpen className="inline-block ml-2" />
                <p className="inline-block">آشپزخانه</p>
              </Link>
              <Link to="/blogs" className="block">
                <FaFolderOpen className="inline-block ml-2" />
                <p className="inline-block">آشپزخانه</p>
              </Link>
              <Link to="/blogs" className="block">
                <FaFolderOpen className="inline-block ml-2" />
                <p className="inline-block">آشپزخانه</p>
              </Link>
              <Link to="/blogs" className="block">
                <FaFolderOpen className="inline-block ml-2" />
                <p className="inline-block">آشپزخانه</p>
              </Link>
              <Link to="/blogs" className="block">
                <FaFolderOpen className="inline-block ml-2" />
                <p className="inline-block">آشپزخانه</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////// FOOTER ///////////// */}
      <Footer />
    </>
  );
}
