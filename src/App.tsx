import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
// import Layout from "./components/layout/Layout";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />

      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

