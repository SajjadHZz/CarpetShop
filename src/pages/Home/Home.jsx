import React from "react";
import Header from "../../components/Header/Header";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import Instant from "../../components/Instant/Instant";
import DiscountBox from "../../components/DiscountBox/DiscountBox";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";
import EffectiveCards from "../../components/EffectiveCards/EffectiveCards";
import BlogInstant from "../../components/BlogInstant/BlogInstant";
import CustomersComments from "../../components/CustomersComments/CustomersComments";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderSlider />
      <div className="px-2 w-full flex flex-col md:flex-row md:justify-around md:items-center md:gap-4 my-4 h-[var(--heightSuggestion)]">
        <DiscountBox />
        <Instant />
      </div>
      <ProductsSlider titleSlider="پرفروش ترین ها" />
      <ProductsSlider titleSlider="جدیدترین ها" />
      <div className="flex flex-col gap-5 justify-center items-center overflow-hidden mb-4 md:flex-row md:justify-around">
        <EffectiveCards titleCategory="فرش های ماشینی" />
        <EffectiveCards titleCategory="فرش های دستبافت" />
        <EffectiveCards titleCategory="موکت ها" />
      </div>
      <BlogInstant />
      <CustomersComments />
      <Footer />
    </>
  );
}
