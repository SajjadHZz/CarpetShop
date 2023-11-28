import Home from "./pages/Home/Home";
import DetailsProduct from "./pages/DetailsProduct/DetailsProduct";
import Products from "./pages/Products/Products";
import BlogHome from "./pages/BlogHome/BlogHome";
import CategoryBlog from "./pages/CategoryBlog/CategoryBlog";
import DetailsBlog from "./pages/DetailsBlog/DetailsBlog";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import ShopHelp from "./pages/ShopHelp/ShopHelp";
import UserAccount from "./pages/UserAccount/UserAccount";
import CompareProducts from "./pages/CompareProducts/CompareProducts";
import BasketShop from "./pages/BasketShop/BasketShop";
import ShippingLocation from "./pages/ShippingLocation/ShippingLocation";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/:productID", element: <DetailsProduct /> },
  { path: "/blog", element: <BlogHome /> },
  { path: "/blogs", element: <CategoryBlog /> },
  { path: "/detailsblog", element: <DetailsBlog /> },
  { path: "/login", element: <Login status="login" /> },
  { path: "/sign", element: <Login status="sign" /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/help", element: <ShopHelp /> },
  { path: "/account", element: <UserAccount /> },
  { path: "/compare", element: <CompareProducts /> },
  { path: "/basket", element: <BasketShop /> },
  { path: "/location", element: <ShippingLocation /> },
  { path: "*", element: <Home /> },
];

export { routes };
