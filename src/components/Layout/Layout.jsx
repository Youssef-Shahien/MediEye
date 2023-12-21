import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import HeaderLogin from './../Header/Header';
import { useState } from "react";

export default function Layout() {
  const [isMinized,setIsminmized] = useState(false)
  return (
    <>
       <HeaderLogin />
      <div className="d-flex min-vh-100 align-items-stretch">
        <div className={isMinized ? style["sidebar-mini"]:`${style.sidebar}`}>
          <Sidebar isMinized={isMinized} setIsminmized = {setIsminmized}/>
        </div>

        <div className={`${style.content}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
