import React from "react";

import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";

import { machineProducts } from "../../Datas";
const productsSelected = machineProducts.splice(0, 2);

import { Link } from "react-router-dom";

export default function CompareProducts() {
  return (
    <>
      <Header />

      <div className="hidden lg:block px-16 font-[Shabnam-Light] my-4">
        <div className="flex justify-center gap-5">
          {productsSelected.map((item) => {
            return (
              <Link
                to="/detailsproduct"
                key={item.id}
                className="w-1/4 flex flex-col items-center text-center bg-white py-5 rounded shadow-md"
              >
                <img src={item.srcGallery[0]} alt="Product Image" className="w-1/2 h-56 object-cover" />
                <h3 className="text-xl font-[Shabnam-Bold] mt-3 w-5/6 flex-1 transition-colors duration-500 hover:text-[var(--colorFive)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg font-bold">
                  {item.dimensions[0].price.toLocaleString("fa-ir")} تومان
                </p>
              </Link>
            );
          })}
        </div>
        {/* ///////////////////////////// این منطق اشتباه است ⬇ //////////////////////////////// */}
        {productsSelected.map((product) => {
          return product.attributes.map((attr, index) => {
            return (
              <div key={index}>
                <p className="w-full px-4 py-2 font-bold mt-4 bg-[var(--colorTow)] rounded-full text-white text-lg">
                  {attr.name} :
                </p>
                <div className="flex justify-center items-center gap-4 mt-2">
                  {productsSelected.map((item, indexId) => {
                    return (
                      <div key={indexId} className="w-1/4  bg-white rounded-lg py-2 px-4 shadow-md text-lg">
                        {item.attributes[index].value}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          });
        })}
        {/* ///////////////////////////// این منطق اشتباه است ⬆ //////////////////////////////// */}
      </div>

      <div className="lg:hidden font-[Shabnam-Bold] text-4xl text-center bg-white m-4 px-1 py-3 rounded-xl shadow-xl leading-normal">
        <h2>این صفحه در موبایل قابل مشاهده نمی باشد.</h2>
      </div>
      <Footer />
    </>
  );
}
