import React, { useState, useMemo } from "react";

import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import QuickAccess from "./components/QuickAccess/QuickAccess";
import { Dialog } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";

import QuickAccessModal from "./context/QuickAccessModal";

////////////////////////////////////////////////////////////////////////////
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

////////////////////////////////////////////////////////////////////////////
import { navbarCategory, productsCategory } from "./Datas";

////////////////////////////////////////////////////////////////////////////
import {
  Drawer,
  Typography,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

/////////////////////////////////////  * START FUNCTION *  ///////////////////////////////////////
function App() {
  const router = useRoutes(routes);

  const [openAccordion, setOpenAccordion] = useState(0);

  const handleOpenAccordion = (value) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  // const openDrawer = () => setOpenSidebar(true);
  const closeDrawer = () => {
    setOpenSidebar(false);
    return (window.onscroll = function () {
      window.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollTop);
    });
  };

  const [openQuicklyModal, setOpenQuicklyModal] = useState(false);
  const [productChosedId, setProductChosedId] = useState(0);
  const handleOpenQuicklyModal = (Id = 0) => {
    setOpenQuicklyModal(!openQuicklyModal);
    setProductChosedId(Id - 1);
  };

  return (
    <>
      <QuickAccessModal.Provider
        value={{
          openQuicklyModal,
          setOpenQuicklyModal,
          productChosedId,
          setProductChosedId,
          openSidebar,
          setOpenSidebar,
        }}
      >
        {router}
      </QuickAccessModal.Provider>

      {/* ----------------------------------------------- */}

      {useMemo(() => {
        return (
          <Dialog
            size="lg"
            open={openQuicklyModal}
            handler={handleOpenQuicklyModal}
            className="overflow-hidden"
          >
            <QuickAccess productSelectedId={productChosedId} />
            <AiOutlineClose
              onClick={handleOpenQuicklyModal}
              className="absolute top-2 left-2 text-2xl text-[var(--colorTow)] w-8 h-8 p-2 bg-[var(--colorFour)] rounded-full transition hover:bg-[var(--colorFive)] hover:text-white cursor-pointer"
            />
          </Dialog>
        );
      }, [openQuicklyModal])}

      {/* ----------------------------------------------- */}

      <Drawer
        placement="left"
        open={openSidebar}
        onClose={closeDrawer}
        className="inline-block md:hidden p-2 overflow-y-auto bg-white"
      >
        <Card className="w-full max-w-[20rem] px-3 py-2 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 flex items-center justify-between">
            <Typography className="font-[Shabnam-Medium]" variant="h5" color="blue-gray">
              دسته بندی محصولات
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
            {productsCategory.map((item) => {
              return (
                <Accordion
                  key={item.id}
                  open={openAccordion === item.id}
                  icon={
                    <MdOutlineKeyboardArrowDown
                      className={`mx-auto h-4 w-4 transition-transform ${
                        openAccordion === item.id ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={openAccordion === item.id}>
                    <AccordionHeader onClick={() => handleOpenAccordion(item.id)} className="border-b-0 py-3">
                      <ListItemPrefix>
                        <img src={item.icon} alt="Logo" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-2 w-full flex justify-between font-normal font-[Shabnam-Medium]"
                      >
                        {item.title}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      {item.subCategory.map((category, index) => {
                        return (
                          <Link key={index} to="/products" onClick={closeDrawer}>
                            <ListItem className="font-[Shabnam-Light] text-sm flex justify-between items-center">
                              <span>{category.lable}</span>
                              <ListItemPrefix>(1)</ListItemPrefix>
                            </ListItem>
                          </Link>
                        );
                      })}
                    </List>
                  </AccordionBody>
                </Accordion>
              );
            })}

            {navbarCategory.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <ListItem>
                    <ListItemPrefix>
                      <img src={item.icon} alt="Icon" className="w-5 ml-2" />
                    </ListItemPrefix>
                    <p className="font-[Shabnam-Medium]">{item.title}</p>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Card>
      </Drawer>
    </>
  );
}

export default App;
