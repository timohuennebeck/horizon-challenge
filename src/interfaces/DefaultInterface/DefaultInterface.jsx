import "./DefaultInterface.scss";

// libraries
import { Link, Outlet } from "react-router-dom";
import React from "react";

// icons
import logoImg from "../../assets/images/logo.svg";

export default function DefaultInterface() {
  return (
    <div className="interface">
      <Link to="/" className="interface__nav-logo">
        <img src={logoImg} alt="" className="interface__nav-logo-img" />
      </Link>

      <div className="interface__outlet">
        <Outlet />
      </div>
    </div>
  );
}
