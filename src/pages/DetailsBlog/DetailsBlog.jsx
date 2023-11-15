import React from "react";
import BlogNavbar from "../../components/BlogNavbar/BlogNavbar";
import Footer from "../../components/Footer/Footer";

/////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////////////////////////////////////////
import { Accordion, AccordionHeader, AccordionBody, Button } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform `}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

////////////////////////////////////////////////////////////////////////////////////
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

export default function DetailsBlog() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {/* //////////////////// NAVBAR ////////////////////// */}
      <BlogNavbar />

      {/* //////////////////// BREADCRAMP ////////////////////// */}
      <div className="px-2 lg:px-16 mt-2 font-[Shabnam-Light] text-xs flex items-center gap-1 text-gray-600">
        <p>وبلاگ</p>
        <RiArrowLeftSLine />
        <p>دکوراسیون منزل</p>
        <RiArrowLeftSLine />
        <p>دکوراسیون منزل خود را در نوروز 1402 با پیشنهادهای فرش آنلاین تکمیل کنید!</p>
      </div>

      <div className="my-5 flex flex-col lg:flex-row justify-between gap-10 px-2 lg:px-16">
        {/* ////////////// BLOG ///////////// */}
        <div className="w-full lg:w-2/3 ">
          <img
            src="public/img/Carpets/Show-Carpets/03.jpg"
            alt="Blog Image"
            className="w-full lg:w-3/4 object-cover"
          />
          <h1 className="text-xl md:text-2xl font-[Shabnam-Bold] mt-3 text-center lg:text-right">
            دکوراسیون منزل خود را در نوروز 1402 با پیشنهادهای فرش آنلاین تکمیل کنید!
          </h1>
          <h2 className="md:text-lg text-gray-700 font-[Shabnam-Light] mt-1">
            با این کالاها، دکوراسیون منزل خود را را خاص کنید!
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs font-[Shabnam-Light] text-gray-600">
            <p className="">
              <span className="">نوشته شده توسط </span>
              <span className="font-[Shabnam-Bold] text-gray-700">سجاد حسین زاده</span>
            </p>
            <AiOutlineLine />
            <p className="">
              <span className="">در تاریخ </span>
              <span className="font-[Shabnam-Bold] text-gray-700">۲۸ دی, ۱۴۰۱</span>
            </p>
            <AiOutlineLine />
            <p className="">
              <span className="">به روزرسانی شده در </span>
              <span className="font-[Shabnam-Bold] text-gray-700">۴ بهمن, ۱۴۰۱</span>
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="border rounded-full py-1 px-2 bg-white">
              <AiOutlineShareAlt className="w-5 h-5 inline-block ml-2" />
              <p className="inline-block font-[Shabnam-Medium] text-xs sm:text-sm">اشتراک گذاری</p>
            </div>
            <BiLogoInstagramAlt className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-purple-600 text-white rounded-full" />
            <BiLogoTelegram className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-blue-600 text-white rounded-full" />
            <IoLogoWhatsapp className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-green-600 text-white rounded-full" />
            <FaXTwitter className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-black text-white rounded-full" />
          </div>
          {/* ----------------------------------------- */}
          <div className="mt-4 font-[Shabnam-Light]">
            <p className="text-justify">
              عید نوروز و حواشی جذاب آن، مهم‌ترین بخش سال برای ما ایرانیان محسوب می‌شود. گرچه بسیاری از ما
              امسال شاید دل‌ودماغ به استقبال عید رفتن را نداشته باشیم؛ اما به‌هرحال بودن به از نبود شدن، خاصه
              در بهار … عید نوروز با مراسم و سنت‌های جذاب و کمتر جذاب (چه بگوییم از خانه‌تکانی‌های افراطی!)
              پیش از سال تحویل است که مزه و طعم عید می‌گیرد. از خریدها و تعویض یا ترمیم لوازم کهنه دکوراسیون
              منزل گرفته تا توجه‌کردن و وقت‌گذاشتن برای منزل و دوستان و فامیل، چیزهایی است که شاید برای مایی
              که گرفتار تنگنای زندگی هستیم، در سال یک‌بار اتفاق بیفتد. پس آن را غنیمت می‌شماریم و لحظه را خوش
              می‌داریم؛ چرا که خاصیت بهار همین است، آب‌تنی کردن در حوضچه اکنون و نو شدن و نو خواستن برای همه،
              از خودمان تا یار و دوستان و شهر و کشور …
            </p>
            <div className="mt-3 border-y border-gray-400 border-solid py-3 px-4">
              <p className="font-[Shabnam-Medium] mb-3">شاید برای شما جالب باشد</p>
              <Link to="/detailsblog" className="flex gap-2">
                <img
                  src="public/img/Carpets/Show-Carpets/05.jpg"
                  alt=""
                  className="w-32 h-20 object-cover rounded-xl"
                />
                <div>
                  <p className="text-sm transition-colors duration-500 hover:text-[var(--colorFive)] font-[Shabnam-Medium]">
                    همه چیز درباره فرش ابریشم ماشینی+ معرفی بهترین برندها
                  </p>
                  <p className="text-xs mt-1 text-gray-700 font-[Shabnam-Light]">۱۱ مرداد, ۱۴۰۱</p>
                </div>
              </Link>
            </div>
            <p className="mt-3 text-justify">
              فرش آنلاین در این نوشتار قصد دارد برای عید نوروز پیش‌رو برخی از دغدغه‌های شما برای نو شدن
              دکوراسیون منزل یا نو خواستن برای خود و دیگران (هدیه متفاوت دادن به دیگران نوجویی است دیگر!) را
              پاسخ دهد و پیشنهاداتی درحال و هوای عید به شما بدهد. پیشنهاداتی که شاید بخشی از نیازهای شما برای
              تغییر دکوراسیون منزل یا حتی هدیه‌دادن به دیگران را تأمین کند. در این نوشته ما سعی کرده‌ایم با
              تکیه به تجربیات پیشین خرید همراهان فرش آنلاین، پیشنهادهایی از کالاهای خاصی را آماده کنیم که شما
              را برای هدیه‌دادن یا استفاده از آنها در دکوراسیون منزلتان، سربلند کند. باور ندارید؟ پس همراه ما
              باشید تا پیشنهادها را مرور کنیم. البته این متن، بخش اول پیشنهادهای عیدانه فرش آنلاین است. منتظر
              قسمت دوم آن نیز باشید …
            </p>

            <Accordion
              className="mt-4 border border-solid border-gray-300 bg-white w-full md:w-1/2"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader className="font-[Shabnam-Light] text-lg px-4" onClick={() => handleOpen(1)}>
                آنچه در این مقاله می خوانید
              </AccordionHeader>
              <AccordionBody className="px-8 py-2 ">
                <ol className="font-[Shabnam-Light]">
                  <li className="my-2 cursor-pointer transition-colors hover:text-[var(--colorFive)]">
                    تابلو فرش اختصاصی، تمثال مبارک!
                  </li>
                  <li className="my-2 cursor-pointer transition-colors hover:text-[var(--colorFive)]">
                    تابلو فرش اختصاصی، تمثال مبارک!
                  </li>
                  <li className="my-2 cursor-pointer transition-colors hover:text-[var(--colorFive)]">
                    تابلو فرش اختصاصی، تمثال مبارک!
                  </li>
                  <li className="my-2 cursor-pointer transition-colors hover:text-[var(--colorFive)]">
                    تابلو فرش اختصاصی، تمثال مبارک!
                  </li>
                </ol>
              </AccordionBody>
            </Accordion>

            <h2 className="mt-5 text-2xl font-[Shabnam-Medium]">تابلو فرش اختصاصی، تمثال مبارک!</h2>
            <p className="text-justify mt-2">
              تا دو سه دهه پیش، داشتن یک طرح اختصاصی از خود در قالب مواردی مثل پرتره نقاشی از چهره، عکس سلفی
              یا خود-گرفت، بافت چهره روی فرش یا تابلوفرش و… تقریباً یک امر مختص اقشار اعیان محسوب می‌شد. اگر
              کسی هم دنبال این کار می‌رفت ممکن بود وی را چندان جدی نگیرند؛ چرا که احترام به خود و اهمیت‌دادن
              به شخصیت و فردیت، چندان در جامعه ما جا نیفتاده بود. اما با وقوع تغییرات فرهنگی در جامعه و در
              دسترس قرار گرفتن ابزارها و امکانات برای همه، به‌تدریج اهمیت‌دادن به خود در جامعه ما پررنگ‌تر شد.
              نمونه‌اش را در گسترش عکس‌های سلفی یا سلف پرتره‌های نقاشی می‌توانید ببینید! با ذکر این مقدمه
              می‌خواستیم بگوییم که فرش آنلاین امکانی فراهم آورده که شما همراهان عزیز بتوانید چهره خودتان یا هر
              تصویری که دوست دارید را به ما سفارش بدهید و تابلوفرش اختصاصی‌تان را بعد از طراحی و بافت تحویل
              بگیرید یا هدیه بدهید؛ هدیه‌ای در شأن عزیزانتان. باور بفرمایید مواجه‌شدن مهمانان نوروزی‌تان با
              تابلوفرش مزین به تمثال مبارک شما یا عزیزانتان در دکوراسیون منزل، بسیار خوشایند است. می‌گویید نه
              امتحان بفرمایید!
            </p>
            <img src="public/img/Carpets/Show-Carpets/01.jpg" alt="" className="mt-3 w-full" />
            <p className="text-justify mt-3">
              بزرگ‌ترین لذت عید نوروز در کودکی و چه‌بسا نوجوانی ما به‌غیراز خرید لباس‌های نو و آجیل‌ها و
              شیرینی‌های جذاب (البته برای ما دهه شصتی‌ها جذاب بود، شما را نمی‌دانم!)، زمانی بود که اسکناس‌های
              صدتومانی و هزارتومانی و بعداً ده‌هزار تومانی از جیب اعاظم و شیوخ یا خودمانی‌اش بزرگ‌ترهای فامیل
              بیرون می‌آمد و به‌عنوان عیدی نصیب کودکان فی ابن سبیل می‌شد! اما امروزه کاهش ارزش پول ملی، افزایش
              درآمد سرانه فرزندان از ناحیه جیب مبارک والدین گرامی، کار اقتصادی بیشتر نوجوانان نسبت به آن زمان
              و… از پول و اسکناس، تقدس‌زدایی کرده و نقشی مشابه کاغذ باطله به این شخصیت بزرگوار و مقدس زمان ما
              بخشیده است!
            </p>
            <div className="flex items-center gap-3 text-sm mt-3">
              <div className="flex items-center gap-2 py-1 px-2 rounded-full bg-gray-800 text-white">
                <MdDiscount />
                <p>برچسب ها</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs text-white rounded-full border border-solid py-1 px-2 bg-[var(--colorFive)]">
                  دکوراسیون
                </p>
                <p className="text-xs text-white rounded-full border border-solid py-1 px-2 bg-[var(--colorFive)]">
                  منزل
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="border rounded-full py-1 px-2 bg-white">
                <AiOutlineShareAlt className="w-5 h-5 inline-block ml-2" />
                <p className="inline-block font-[Shabnam-Medium] text-xs sm:text-sm">اشتراک گذاری</p>
              </div>
              <BiLogoInstagramAlt className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-purple-600 text-white rounded-full" />
              <BiLogoTelegram className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-blue-600 text-white rounded-full" />
              <IoLogoWhatsapp className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-green-600 text-white rounded-full" />
              <FaXTwitter className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2 bg-black text-white rounded-full" />
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="mt-14 border border-solid border-gray-600 bg-white p-3">
            <img src="public/Logo.png" alt="" className="w-28 mb-2" />
            <p className="text-justify font-[Shabnam-Light]">
              دیجی فرش به عنوان اولین فروشگاه تخصصی فروش فرش و وسایل دکوراسیون منزل، در کنار تنوع سبد کالایی،
              با کیفیت‌ترین برندها و تولیدکنندگان را بعد از تایید کیفیت به صورت «یکجا» گرد هم آورده تا
              خریداران محترم ضمن مقایسه و بررسی هرچه بهتر، بتوانند با خیال آسوده و با هر میزان بودجه به محصول
              مورد نیاز خود دست پیدا کنند و تجربه‌ای شیرین از خرید خود داشته باشند.
            </p>
          </div>
          <div className="mt-10 border border-solid border-gray-600 bg-white p-3">
            <div className="mb-4 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">ممکن است شما دوست داشته باشید</h3>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <Link to="/detailsblog" className="w-full sm:w-1/2 md:w-1/3">
                <img
                  src="public/img/Carpets/Show-Carpets/04.png"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-xl transition duration-500 hover:brightness-75"
                />
                <h4 className="font-[Shabnam-Light] text-base mt-2 transition cursor-pointer px-2 hover:text-[var(--colorFive)]">
                  چطور از قالیچه ها در منزل خود استفاده کنیم؟
                </h4>
              </Link>
              <Link to="/detailsblog" className="hidden sm:inline-block sm:w-1/2 md:w-1/3">
                <img
                  src="public/img/Carpets/Show-Carpets/04.png"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-xl transition duration-500 hover:brightness-75"
                />
                <h4 className="font-[Shabnam-Light] text-base mt-2 transition cursor-pointer px-2 hover:text-[var(--colorFive)]">
                  چطور از قالیچه ها در منزل خود استفاده کنیم؟
                </h4>
              </Link>
              <Link to="/detailsblog" className="hidden md:inline-block md:w-1/3">
                <img
                  src="public/img/Carpets/Show-Carpets/04.png"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-xl transition duration-500 hover:brightness-75"
                />
                <h4 className="font-[Shabnam-Light] text-base mt-2 transition cursor-pointer px-2 hover:text-[var(--colorFive)]">
                  چطور از قالیچه ها در منزل خود استفاده کنیم؟
                </h4>
              </Link>
            </div>
            <div className="flex items-center gap-2 font-[Shabnam-Light] mt-5">
              <button className="px-2 py-1 border border-solid border-gray-600 text-xs transition-all hover:bg-[var(--colorFive)] hover:text-white">
                <IoMdArrowDropright className="inline-block" />
                <p className="inline-block">قبلی</p>
              </button>
              <button className="px-2 py-1 border border-solid border-gray-600 text-xs transition-all hover:bg-[var(--colorFive)] hover:text-white">
                <p className="inline-block">بعدی</p>
                <IoMdArrowDropleft className="inline-block" />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className="mb-4 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">نظرات خود را برای ما بنویسید</h3>
            </div>
            <textarea
              className="w-full h-32 p-2 font-[Shabnam-Thin] border border-solid border-gray-600 bg-white outline-none"
              placeholder="نظر شما ..."
            ></textarea>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-[Shabnam-Thin]">
              <input
                required
                type="text"
                className="sm:flex-1 w-full sm:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
                placeholder="نام شما ..."
              />
              <input
                required
                type="text"
                className="sm:flex-1 w-full sm:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
                placeholder="ایمیل شما ..."
              />
            </div>
            <div className="mt-2">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="font-[Shabnam-Light] text-sm mr-2">
                اطلاعات من را ذخیره کن تا در آینده نیازی به ورود اطلاعات نداشته باشم
              </label>
            </div>
            <Button
              color="red"
              className="w-full sm:w-fit font-[Shabnam-Light] bg-[var(--colorFive)] mt-2 text-base px-3 py-2"
            >
              ارسال نظر
            </Button>
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
            <div className="mb-3 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">دسته بندی مطالب</h3>
            </div>
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
