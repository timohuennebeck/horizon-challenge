import "./DefaultInterface.css";

// libraries
import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function DefaultInterface() {
  return (
    <div className="interface">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Outlet />
    </div>
  );
}
