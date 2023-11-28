import React from "react";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { Button } from "@material-tailwind/react";

export default function ShopHelp() {
  return (
    <>
      <Header />

      {/* ////////////////////////////// BREADCRAMB //////////////////////////////// */}

      <Breadcrumb thisPage="راهنمای خرید" />

      {/* ////////////////////////////// ABOUT US //////////////////////////////// */}
      <div className="my-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 px-2 lg:px-16 font-[Shabnam-Light]">
        {/* ----------------- CONTENT ------------------ */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3 text-justify text-sm bg-white p-5 rounded-xl shadow-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-[Shabnam-Bold]">قوانین و مقررات سایت :</h2>
            <b>1- نحوه انتخاب فرش</b>
            <p>
              وب سایت فرش آنلاین برای رفاه حال بازدید کنندگان و سرعت عمل بیشتر طوری طراحی شده تا در کمترین
              زمان ممکن محصولات مورد علاقه خود را مشاهده و از بین آنها بهترین ها را مطابق با سلیقه و دکوراسیون
              منزل خود انتخاب فرمایید.
            </p>
            <b>2- نحوه سفارش فرش مورد نظر</b>
            <p>
              پس از انتخاب محصول و تعداد مورد نیاز با کلیک بر روی "افزودن به سبد خرید" به صفحه سفارشات و سبد
              خرید منتقل و در آنجا با کامل کردن اطلاعات ضروری موجود در فرم سفارش، روی تکمیل خرید کلیک
              نمایید.در این مرحله نوع پرداخت را انتخاب نموده و در نهایت سفارش شما ثبت شده و یک ایمیل تایید
              سفارش به آدرس پست الکترونیکی شما ارسال می شود. سپس همکاران ما در همان روز (درساعات اداری) جهت
              تایید سفارش و هماهنگی برای ارسال و پاسخگویی به سوالات احتمالی شما تماس خواهند گرفت. در صورت عدم
              تماس با شما، با تلفن سفارشات فرش آنلاین تماس بگیرید.در صورت تمایل می توانید سفارشات خود را
              مستقیما با شماره تلفن 021,22619718 به اطلاع همکاران بخش فروش ما برسانید تا فرش مورد نظر به زودی
              برای شما ارسال شود.
            </p>
            <b>3- نحوه تحویل و پرداخت وجه سفارش</b>
            <p>
              کلیه سفارشات در تهران و شهرستانها بسته به موجودی انبار و نوع سفارش و مسافت شهرها از 1 ساعت تا 10
              روز پس از ثبت سفارش به دست مشتریان محترم خواهد رسید.ارسال فرشهای بالاتر از 400 هزار تومان برای
              تمام مناطق 22 گانه شهر تهران رایگان و پرداخت پس از تحویل سفارش و اطمینان مشتری از سالم ودرجه یک
              بودن محصول میباشد. هزینه ارسال فاکتورهای کمتر از 400 هزار تومان برای شهر تهران 35 هزار تومان
              است.هزینه ارسال از طریق باربری که برای تمام شهرهای ایران دارای سرویس میباشد برای هر تخته فرش با
              توجه به مسافت و ابعاد 30 تا 90 هزار تومان میباشد که هزینه ارسال به صورت پسکرایه هنگام تحویل فرش
              در باربری مقصد دریافت میشود. ارسال از طریق ترمینال اتوبوسرانی در صورت درخواست مشتری انجام می
              شود(کلیه هزینه های ارسال از طریق اتوبوس طبق تعرفه تعاونی های اتوبوسرانی به عهده خریدار می باشد)
              پرداخت درب منزل برای شهرستانها توسط پست و تیپاکس انجام می شود.
            </p>
            <b>4- نحوه بازگشت و تعویض فرش</b>
            <p>
              طبق قانون تجارت الکترونیک برای اطمینان بیشتر خریداران کلیه محصولات ارسال شده تا 7 روز پس از
              دریافت، در صورتی که مغایرتی با عکس و مشخصات درج شده در سایت داشته و یا دارای ایراد کارخانه باشد
              قابل تعویض و برگشت است.برای برگشت محصولات، بسته بندی و کاور آنها باید به همان صورت اولیه دوباره
              بسته بندی شود.کالای برگشتی باید استفاده نشده باشد(این مورد باید به تایید کارشناسان فرش آنلاین
              برسد).هزینه برگشت یا تعویض کالا پس از تحویل و بازگشت پیک فرش آنلاین به عهده خریدار است.(هزینه
              برگشت شهرستانها به عهده فرش آنلاین است)لطفا جهت برگشت یا تعویض فرش با ذکر علت با آدرس ایمیل
              farshonline@gmail.com مکاتبه فرمایید. تمام قیمتها به صورت آنلاین بروز می شوند و مادامی که روی
              سایت قرار داشته باشند معتبر هستند.
            </p>
            <p>تلفن تماس: 021,22619718 </p>
            <p>شماره حسابهای فرش آنلاین:</p>
            <p> کارت بانک رسالت 7282 9550 7210 5041</p>
            <p> کارت بانک ملت 0976 6172 3377 6104</p>
            <p>به نام محمد نصیری</p>
            <p>دستگاه کارت خوان سیار برای سفارشات تهران و شهرهای نزدیک ارسال می شود</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-[Shabnam-Bold]">راهنمای خرید از سایت :</h2>
            <b>کلیات سایت و استفاده از آن</b>
            <p>چطور می‌توانم محصول موردنظرم را در سایت پیدا کنم؟</p>
            <p>
              شما می‌توانید با استفاده از نوار جستجوی سایت به راحتی نام کالای موردنظرتان را جستجو کنید و یا با
              ورود به دسته‌بندی هر نوع کالا و استفاده از فیلترهای قیمت، رنگ، ابعاد و... قرارداده شده در سایت،
              محصول مد نظرتان را پیدا کنید.
            </p>
            <p>چطور می‌توانم در مورد محصول موردنظرم اطلاعات دقیق به‌دست بیاورم؟</p>
            <p>
              برای تصمیم‌گیری آسان‌تر کاربران، تصویر، مشخصات و ویژگی‌های هرکالا به همراه نقد و بررسی آن در
              صفحه محصول مورد نظر قرار گرفته. همچنین شما می‌توانید سوالات خود را به سه صورت با کارشناسان فرش
              آنلاین درمیان بگذارید:
            </p>
            <p>از طریق بخش «پرسش و پاسخ» قرار داده شده در صفحه هر محصول</p>
            <p>تماس تلفنی با کارشناسان « فرش آنلاین »</p>
            <p>پیام در پیام رسان‌های واتس‌اپ و تلگرام (0921.2202701)</p>
            <p>راجع به یک محصول سوال دارم، چطور می‌توانم بپرسم؟</p>
            <p>
              شما می‌توانید سوالات خود را بعد از ورود به سایت از بخش «پرسش و پاسخ» قرار داده شده در صفحه هر
              محصول بپرسید تا همکاران ما در اسرع وقت به شما پاسخ بدهند.
            </p>
            <p>از طریق تماس تلفنی با شماره‌های 021.22619718 و 021.46129110</p>
            <p>و یا پیام در پیام رسان‌های واتس‌اپ و تلگرام (0921.2202701)</p>
            <p>
              با کارشناسان ما در میان بگذارید. کارشناسان « فرش آنلاین » روزهای شنبه تا پنجشنبه از ساعت 8.30 تا
              17 آماده پاسخ‌گویی به شما هستند.
            </p>
            <p>نظرم راجع به یک محصول را چطور می‌توانم ثبت کنم و یا نظرات دیگران را بخوانم؟</p>
            <p>
              شما می‌توانید بعد از «ورود به سایت» در بخش «نظرات کاربران» که در صفحه هر محصول قرار داده شده
              نظرات دیگران را بخوانید و یا نظر خودتان راجع به محصول مورد نظر را ثبت کنید.{" "}
            </p>
            <p>کالاهای فروش ویژه، جشنواره‌ای و تخفیف‌دار سایت را کجا می‌توانم ببینم؟</p>
            <p>
              برای مشاهده کالاهای ویژه، جشنواره‌ای و تخفیفی می‌توانید از صفحه اصلی سایت وارد بخش «فروش ویژه و
              جشنواره‌ها» که در قسمت بالای صفحه اصلی قرار داده شده شوید
            </p>
            <p>
              آیا « فرش آنلاین » فرش دست دوم ما را هم می‌خرد؟ و یا می‌توانیم فرش کهنه خودمان را با نو تعویض
              کنیم؟
            </p>
            <p>
              بله، « فرش آنلاین » خدمات خرید فرش دستباف و ماشینی دست دوم و تعویض فرش نو با کهنه را در تهران
              ارائه می‌کند. برای هماهنگی جهت ارزیابی و قیمت‌گذاری می‌توانید از ساعت 9 تا 20 با کارشناس خرید
              سایت، آقای حسن‌نژاد تماس بگیرید. تلفن تماس: 09122018940
            </p>
            <b>نحوه خرید و ارسال محصول</b>
            <p>برای خرید از سایت باید ثبت‌نام کنم؟</p>
            <p>
              خیر، با توجه به سیاست خرید آسان در « فرش آنلاین » برای خرید الزامی به ثبت‌‌نام نیست. شما
              می‌توانید به سه صورت ثبت سفارش کنید: ثبت‌نام در سایت و خرید اینترنتی تماس با « فرش آنلاین » و
              ثبت سفارش تلفنی برای بعضی از محصولات به صورت حضوری و با هماهنگی قبلی
            </p>
          </div>

          <div className="mt-10 w-full text-base">
            <div className="mb-4 after:mt-2 after:block after:w-full after:h-1 after:bg-[var(--colorFive)]">
              <h3 className="font-[Shabnam-Medium]">با ما در تماس باشید</h3>
            </div>
            <textarea
              className="w-full h-32 p-2 font-[Shabnam-Thin] border border-solid border-gray-600 bg-white outline-none"
              placeholder="انتقادات و پیشنهادات شما ..."
            ></textarea>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-[Shabnam-Thin]">
              <input
                required
                type="text"
                className="flex-1 w-full md:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
                placeholder="نام شما ..."
              />
              <input
                required
                type="text"
                className="flex-1 w-full md:w-1/2 px-2 py-1 outline-none border border-solid border-gray-600"
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
              className="w-full lg:w-fit font-[Shabnam-Light] bg-[var(--colorFive)] mt-2 text-base px-3 py-2"
            >
              ارسال نظر
            </Button>
          </div>
        </div>

        {/* ----------------- CONTACT SIDEBAR ------------------ */}
        <div className="w-full lg:w-1/3 relative">
          <div className="bg-white sticky top-40 p-5">
            <p className="font-[Shabnam-Medium] text-lg">سوالی دارید؟</p>
            <p className="text-gray-700 mt-3">
              اگـر نیاز به پشتیبانی فنی و راهنمایی دارید، لطفا با تیم پشتیبانی فرش آنلاین تماس بگیرید
            </p>
            <p className="text-center text-3xl mt-4 cursor-pointer">
              <span className="text-gray-500 mr-2">021</span>
              <span className="text-gray-800">22619718</span>
            </p>
            <div className="bg-[var(--colorFour)] mt-4 rounded-xl flex justify-between items-center gap-2 px-3 py-2">
              <p className="flex-1 text-sm">پشتیبانی آنلاین</p>
              <BsTelegram className="w-9 h-9 p-1.5 bg-blue-500 rounded-full text-white cursor-pointer" />
              <IoLogoWhatsapp className="w-9 h-9 p-1.5 bg-green-500 rounded-full text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////// ATTRIBUTES //////////////////////////////// */}
      <div className=""></div>

      {/* ////////////////////////////// PRODUCTS CAROUSEL //////////////////////////////// */}

      {/* ////////////////////////////// FOOTER //////////////////////////////// */}
      <Footer />
    </>
  );
}
