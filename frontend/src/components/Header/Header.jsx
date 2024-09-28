import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/" className="logoText">
          Uacademy.com
        </Link>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="navItems">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="navItems">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/" className="navItems">
            About
          </Link>
        </li>
      </ul>

      <div className="user">
        <li>
          <RiLoginBoxLine className="icon" />
          <Link to="/login" className="userLinks">
            Login
          </Link>
        </li>
        <li>
          <FaUsers className="icon" />
          <Link to="/register" className="userLinks">
            Register
          </Link>
        </li>
      </div>
    </header>
  );
};

export default Header;
