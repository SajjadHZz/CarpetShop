import React from "react";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      {/* ////////////////////////////// NAVBAR ////////////////////////////// */}
      <BlogNavbar />
      {/* -------------------------------------------------------------------------------------------------------- */}

      {/* ////////////////////////////// HEADER ////////////////////////////// */}
      <header className="px-2 sm:px-10 lg:px-16 my-4 font-[Shabnam-Medium] h-[40rem] lg:h-[26rem] gap-1 grid grid-rows-3 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4">
        <Link
          to="/detailsblog"
          className="group relative row-span-1 col-span-2 lg:row-span-2 lg:col-span-2 rounded-3xl overflow-hidden after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:opacity-80"
        >
          <img
            src="public/img/Carpets/Show-Carpets/01.jpg"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-6 right-6 z-[1]">
            <p className="text-white md:text-xl transition-colors duration-500 hover:text-[var(--colorFive)]">
              چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
            </p>
            <p className="text-gray-400 text-xs font-[Shabnam-Thin] mt-2">۳۰ اردیبهشت, ۱۴۰۲</p>
          </div>
        </Link>
        <Link
          to="/detailsblog"
          className="group relative row-span-1 col-span-2 lg:row-span-1 lg:col-span-2 rounded-3xl overflow-hidden after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:opacity-80"
        >
          <img
            src="public/img/Carpets/Show-Carpets/01.jpg"
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-6 right-6 z-[1]">
            <p className=" text-white md:text-lg transition-colors duration-500 hover:text-[var(--colorFive)]">
              چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
            </p>
            <p className=" text-gray-400 text-xs font-[Shabnam-Thin] mt-2">۳۰ اردیبهشت, ۱۴۰۲</p>
          </div>
        </Link>
        <Link
          to="/detailsblog"
          className="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:opacity-80"
        >
          <img
            src="public/img/Carpets/Show-Carpets/01.jpg"
            alt=""
            className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-6 right-6 z-[1]">
            <p className="text-sm md:text-base text-white ml-4 transition-colors duration-500 hover:text-[var(--colorFive)]">
              چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
            </p>
            <p className="hidden md:block text-gray-400 text-xs font-[Shabnam-Thin] mt-2">
              ۳۰ اردیبهشت, ۱۴۰۲
            </p>
          </div>
        </Link>
        <Link
          to="/detailsblog"
          className="group relative row-span-1 col-span-1 rounded-3xl overflow-hidden after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:opacity-80"
        >
          <img
            src="public/img/Carpets/Show-Carpets/01.jpg"
            alt=""
            className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-6 right-6 z-[1]">
            <p className="text-sm md:text-base text-white ml-4 transition-colors duration-500 hover:text-[var(--colorFive)]">
              چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
            </p>
            <p className="hidden md:block text-gray-400 text-xs font-[Shabnam-Thin] mt-2">
              ۳۰ اردیبهشت, ۱۴۰۲
            </p>
          </div>
        </Link>
      </header>

      {/* -------------------------------------------------------------------------------------------------------- */}

      <div className="relative px-2 sm:px-10 lg:px-16 py-4 md:flex justify-between gap-4 font-[Shabnam-Medium]">
        <img src="public/img/Asset-2.png" alt="" className="absolute -top-32 -right-80 -z-10" />
        {/* //////////////////////CARDS///////////////////// */}
        <div className="w-full lg:w-4/6">
          <div className="after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
            <img src="public/img/Icons/relax.png" alt="Image" className="w-7 inline-block ml-2" />
            <h3 className="text-lg inline-block ">دکوراسیون منزل</h3>
          </div>
          {/* --------------- top ------------- */}
          <div className="border my-3 bg-white overflow-hidden rounded-xl">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/01.jpg"
                alt="Card Image"
                className="w-full object-cover rounded-xl"
              />
            </Link>
            <div className="mx-4 my-3">
              <Link to="/detailsblog">
                <h4 className="text-xl transition-colors duration-500 hover:text-[var(--colorFive)]">
                  چگونه منزلمان را به سبک دکوراسیون مینیمال، چیدمان کنیم؟
                </h4>
              </Link>
              <p className="text-xs text-gray-500 font-[Shabnam-Light] my-1">۳۰ اردیبهشت, ۱۴۰۲</p>
              <p className="text-sm text-gray-700 my-2 font-[Shabnam-Light]">
                این مقاله درباره چگونگی آراستن منزل به سبک دکوراسیون مینیمال و نقش فرش مینیمال در زیبایی آن،
                اطلاعات جذابی را فراهم نموده است. با اینکه سبک ماکسیمال باعث بزرگ بینی فضای خانه میشود اما سبک
                مینیمال باعث افزایش جزئیات در طراحی دکوراسیون شما می گردد...
              </p>
            </div>
          </div>

          {/* --------------- bottom ------------- */}
          <div className="grid sm:grid-cols-2 gap-3 mb-2">
            <div className="border-b border-solid border-gray-400">
              <Link to="/detailsblog">
                <img src="public/img/Carpets/Show-Carpets/02.jpg" alt="" className="rounded-xl w-full" />
              </Link>
              <Link to="/detailsblog">
                <h4 className="mt-2 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  دکوراسیون منزل خود را در نوروز 1402 با پیشنهادهای فرش آنلاین تکمیل کنید!
                </h4>
              </Link>
              <p className="mt-1 text-xs text-gray-600 font-[Shabnam-Light]">۲۸ دی, ۱۴۰۱</p>
              <p className="mt-2 mb-4 text-sm font-[Shabnam-Light] text-gray-700">
                در این نوشته پیشنهادهای خاصی را برای تکمیل دکوراسیون منزل یا هدیه‌دادن در عید نوروز آماده
                کرده‌ایم که شما بتوانید…
              </p>
            </div>
            <div className="border-b border-solid border-gray-400">
              <Link to="/detailsblog">
                <img src="public/img/Carpets/Show-Carpets/02.jpg" alt="" className="rounded-xl w-full" />
              </Link>
              <Link to="/detailsblog">
                <h4 className="mt-2 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  دکوراسیون منزل خود را در نوروز 1402 با پیشنهادهای فرش آنلاین تکمیل کنید!
                </h4>
              </Link>
              <p className="mt-1 text-xs text-gray-600 font-[Shabnam-Light]">۲۸ دی, ۱۴۰۱</p>
              <p className="mt-2 mb-4 text-sm font-[Shabnam-Light] text-gray-700">
                در این نوشته پیشنهادهای خاصی را برای تکمیل دکوراسیون منزل یا هدیه‌دادن در عید نوروز آماده
                کرده‌ایم که شما بتوانید…
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////////SIDEBAR///////////////////// */}
        <div className="w-full lg:w-1/4 ">
          <div className="border p-3 bg-white">
            <div className="mb-2 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <img src="public/img/Icons/rug.png" alt="" className="w-6 inline-block ml-2" />

              <h3 className="inline-block">فرش و دکوراسیون</h3>
            </div>
            <div className="divide-y divide-solid divide-gray-400">
              <div className="py-3">
                <Link to="/detailsblog">
                  <img src="public/img/Carpets/Show-Carpets/04.png" alt="" className="rounded-xl w-full" />
                </Link>
                <Link to="/detailsblog">
                  <h4 className="text-lg my-2 transition-colors duration-300 hover:text-[var(--colorFive)]">
                    8دلیل برای اثبات اینکه «فرش پاتریس یه تخته اش کمه»!!
                  </h4>
                </Link>
                <p className="my-2 text-xs text-gray-500 font-[Shabnam-Light]">۱۳ شهریور, ۱۴۰۱</p>
                <p className="text-sm text-gray-700">
                  چرا همیشه فرش های پاتریس یکی از پیشنهادات کارشناسان به متقاضیان فرش باکیفیت است؟در این نوشته
                  8دلیل کارشناسان فرش…
                </p>
              </div>
              <div className="py-2">
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
          </div>
          <div className="border p-3 bg-white mt-2">
            <h3 className="mb-2 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <img src="public/img/Icons/lightbulb.png" alt="Icon" className="inline-block ml-1 w-7" />
              <span>ایده های جدید</span>
            </h3>
            <div>
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
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}

      {/* ////////////////////////////// HANDMADE ////////////////////////////// */}
      <div className="overflow-hidden bg-[var(--colorTow)] relative text-white text-center font-[Shabnam-Medium]">
        <img
          src="public/img/Asset.png"
          className="absolute -top-32 sm:-top-1/3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:h-full opacity-70"
        />
        <Link to="/blogs">
          <h3 className="inline-block relative w-fit mt-4 px-3 py-2 bg-[var(--colorFive)]">فرش دستبافت</h3>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 lg:px-16 py-10">
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}

      {/* ////////////////////////////// CARPET ////////////////////////////// */}
      <div className="px-2 lg:px-16 font-[Shabnam-Medium] my-4">
        <Link
          to="/blogs"
          className="after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]"
        >
          <img src="public/img/Icons/mat.png" alt="Icon" className="w-6 inline-block ml-2" />
          <h3 className="inline-block text-xl">موکت</h3>
        </Link>
        <div className="mt-5 gap-4 grid md:grid-row-2 md:grid-cols-4 ">
          <div className="row-span-2 col-span-2">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/06.jpg"
                alt="Image"
                className="rounded-xl w-full transition hover:brightness-75"
              />
            </Link>
            <Link to="/detailsblog">
              <h4 className="transition-colors duration-300 hover:text-[var(--colorFive)] text-lg mt-2">
                مهم‌ترین ترندهای موکت در سال 2023 (1402)
              </h4>
            </Link>
            <p className="text-xs text-gray-500 font-[Shabnam-Light] mt-1">۱۱ بهمن, ۱۴۰۱</p>
            <p className="text-sm text-gray-700 my-2">
              این مقاله ترندهای موکت سال 2023 را با نگاهی به سایت‌های مطرح دکوراسیون در دنیا، بررسی می‌کند و
              رنگ‌ها و مدل‌های…
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/06.jpg"
                alt="Image"
                className="rounded-xl w-full transition hover:brightness-75"
              />
            </Link>
            <Link to="/detailsblog">
              <h4 className="transition-colors duration-300 hover:text-[var(--colorFive)] mt-2">
                مهم‌ترین ترندهای موکت در سال 2023 (1402)
              </h4>
            </Link>
            <p className="hidden sm:block text-sm text-gray-700 my-2 font-[Shabnam-Light]">
              این مقاله ترندهای موکت سال 2023 را با نگاهی به سایت‌های مطرح دکوراسیون در دنیا، بررسی می‌کند و
              رنگ‌ها و مدل‌های…
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/06.jpg"
                alt="Image"
                className="rounded-xl w-full transition hover:brightness-75"
              />
            </Link>
            <Link to="/detailsblog">
              <h4 className="transition-colors duration-300 hover:text-[var(--colorFive)] mt-2">
                مهم‌ترین ترندهای موکت در سال 2023 (1402)
              </h4>
            </Link>
            <p className="hidden sm:block text-sm text-gray-700 my-2 font-[Shabnam-Light]">
              این مقاله ترندهای موکت سال 2023 را با نگاهی به سایت‌های مطرح دکوراسیون در دنیا، بررسی می‌کند و
              رنگ‌ها و مدل‌های…
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/06.jpg"
                alt="Image"
                className="rounded-xl w-full transition hover:brightness-75"
              />
            </Link>
            <Link to="/detailsblog">
              <h4 className="transition-colors duration-300 hover:text-[var(--colorFive)] mt-2">
                مهم‌ترین ترندهای موکت در سال 2023 (1402)
              </h4>
            </Link>
            <p className="hidden sm:block text-sm text-gray-700 my-2 font-[Shabnam-Light]">
              این مقاله ترندهای موکت سال 2023 را با نگاهی به سایت‌های مطرح دکوراسیون در دنیا، بررسی می‌کند و
              رنگ‌ها و مدل‌های…
            </p>
          </div>
          <div className="row-span-1 col-span-1">
            <Link to="/detailsblog">
              <img
                src="public/img/Carpets/Show-Carpets/06.jpg"
                alt="Image"
                className="rounded-xl w-full transition hover:brightness-75"
              />
            </Link>
            <Link to="/detailsblog">
              <h4 className="transition-colors duration-300 hover:text-[var(--colorFive)] mt-2">
                مهم‌ترین ترندهای موکت در سال 2023 (1402)
              </h4>
            </Link>
            <p className="hidden sm:block text-sm text-gray-700 my-2 font-[Shabnam-Light]">
              این مقاله ترندهای موکت سال 2023 را با نگاهی به سایت‌های مطرح دکوراسیون در دنیا، بررسی می‌کند و
              رنگ‌ها و مدل‌های…
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------- */}

      {/* ////////////////////////////// MACHINE ////////////////////////////// */}
      <div className="overflow-hidden bg-[var(--colorTow)] relative text-white text-center font-[Shabnam-Medium]">
        <img
          src="public/img/Asset.png"
          className="absolute -top-32 sm:-top-1/3 right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:h-full opacity-70"
        />
        <Link to="/blogs">
          <h3 className="inline-block relative w-fit mt-4 px-3 py-2 bg-[var(--colorFive)]">فرش ماشینی</h3>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 lg:px-16 py-10">
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
          <Link
            to="/detailsblog"
            className="inline-block relative group rounded-xl overflow-hidden h-96 after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:inline-block after:absolute after:bottom-0 after:right-0 after:opacity-40"
          >
            <img
              src="public/img/Carpets/Show-Carpets/06.jpg"
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-[1] w-full">
              <h4 className="p-2 transition-transform duration-300 hover:scale-105">
                پیشنهادهای عیدانه فرش آنلاین برای دکوراسیون منزل شما-قسمت دوم
              </h4>
              <p className="text-xs text-gray-400 font-[Shabnam-Light]">۴ شهریور, ۱۳۹۶</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ////////////////////////////// FOOTER ////////////////////////////// */}
      <Footer />
    </>
  );
}
