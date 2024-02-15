import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <Link className="d-flex gap-3 align-items-center" to={"/home"}>
        <img height={40} src="/dollar currency symbol on gold coin - PNG.png" />
        <h3 className="text-light">CoinTime</h3>
      </Link>

      <nav className="d-flex gap-3">
        <NavLink to={"/"}>Login</NavLink>
        <NavLink to={"/home"}>Home Page</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
