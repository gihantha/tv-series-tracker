import React from "react";

import "./Navbar.css";
import logo from "../../Assets/logo.png";
import search from "../../Assets/search-icon.png";
import userIcon from "../../Assets/user-logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-search">
        <div className="navbar-serach-icon">
          <img src={search} alt="navbar-search-icon" />
        </div>
      </div>
      <ul className="nav-menu-left">
        <li>Shows</li>
        <li>Movies</li>
        <li>Calendar</li>
      </ul>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <p>Watch Dogs</p>
      <ul className="nav-menu-right">
        <li>Discover</li>
        <li>Apps</li>
        <li>VIP</li>
      </ul>
      <div className="nav-user">
        <div className="nav-user-icon w-1/3">
          <img src={userIcon} alt="user icon" />
        </div>
        <p className="w-2/3">User</p>
      </div>
    </div>
  );
};

export default Navbar;
