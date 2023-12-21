import React from "react";
import style from "./Sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigat = useNavigate();
  const logout = () => {
    localStorage.removeItem("phar");
    navigat("/");
  };
  return (
    <>
      <nav className={`${style.nav} shadow-sm`}>
        <ul className="list-unstyled ">

          <li>
            <NavLink to="/layout/product">
              <i className="fas fa-bag-shopping ms-1 me-4"></i>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/orders">
              <i className="fas fa-cart-shopping me-4"></i>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/upload">
              <i className="fas fa-upload me-4"></i>
              Upload
            </NavLink>
          </li>
          <li>
            <span className="pointer" id="logout" onClick={logout}>
              <i className="bi bi-box-arrow-left me-4"></i>
              Log Out
            </span>
          </li>
        </ul>
        <div className={`${style.change} shadow pointer`}>
          <i className={`fa-solid fa-chevron-left `}></i>
        </div>
      </nav>
    </>
  );
}
