import React from "react";

import { CiSearch } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";

import { Link } from "react-router-dom";

import { Drawer, Button, IconButton, List, ListItem } from "@material-tailwind/react";

export default function BlogNavbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <nav className="px-2 lg:px-16 py-1 bg-white sticky top-0 z-10 border-b border-solid border-gray-300">
        <div className="px-5 flex justify-between items-center">
          <Link to="/blog">
            <img src="Logo.png" alt="" className="w-40" />
          </Link>

          <ul className="hidden md:flex items-center gap-4 font-[Shabnam-Light]">
            <Link to="/blogs" className="transition hover:text-[var(--colorFive)]">
              <li>دکوراسیون منزل</li>
            </Link>
            <Link to="/blogs" className="transition hover:text-[var(--colorFive)]">
              <li>فرش و دکوراسیون</li>
            </Link>
            <Link to="/blogs" className="transition hover:text-[var(--colorFive)]">
              <li>فرش دستبافت</li>
            </Link>
            <Link to="/blogs" className="transition hover:text-[var(--colorFive)]">
              <li>فرش ماشینی</li>
            </Link>
            <Link to="/blogs" className="transition hover:text-[var(--colorFive)]">
              <li>موکت</li>
            </Link>
            <Link to="/" className="bg-[var(--colorFive)] py-4 px-3 text-white">
              <li>فروشگاه</li>
            </Link>
          </ul>
          {/* <CiSearch className="w-6 h-6" /> */}

          {/* -------------------------- SCREEN SMALL SIZE ------------------------- */}
          <Button
            onClick={openDrawer}
            className="inline-block md:hidden text-black bg-transparent shadow-none hover:shadow-none hover:scale-110"
          >
            <HiMenuAlt2 className="w-8 h-8" />
          </Button>
        </div>
      </nav>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/blog">
            <img src="Logo.png" alt="" className="w-28" />
          </Link>
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

        <List className="font-[Shabnam-Medium]">
          <Link to="/blogs">
            <ListItem>
              {/* <ListItemPrefix><PresentationChartBarIcon className="h-5 w-5" /></ListItemPrefix> */}
              دکوراسیون منزل
            </ListItem>
          </Link>
          <Link to="/blogs">
            <ListItem>
              {/* <ListItemPrefix><ShoppingBagIcon className="h-5 w-5" /></ListItemPrefix> */}
              فرش و دکوراسیون
            </ListItem>
          </Link>
          <Link to="/blogs">
            <ListItem>
              {/* <ListItemPrefix><InboxIcon className="h-5 w-5" /></ListItemPrefix> */}
              فرش دستبافت
            </ListItem>
          </Link>
          <Link to="/blogs">
            <ListItem>
              {/* <ListItemPrefix><UserCircleIcon className="h-5 w-5" /></ListItemPrefix> */}
              فرش ماشینی
            </ListItem>
          </Link>
          <Link to="/blogs">
            <ListItem>
              {/* <ListItemPrefix><Cog6ToothIcon className="h-5 w-5" /></ListItemPrefix> */}
              موکت
            </ListItem>
          </Link>
          <div className="absolute bottom-5 w-full pl-12">
            <Link to="/" className="text-[var(--colorFive)]">
              صفحه فروشگاه
            </Link>
            <p className="text-xs align-middle mt-2 font-[Shabnam-Light]">
              &copy; ساخته شده توسط سجاد حسین زاده
            </p>
          </div>
        </List>
      </Drawer>
    </>
  );
}
