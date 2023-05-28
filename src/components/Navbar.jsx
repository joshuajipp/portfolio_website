import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar(props) {
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive(!isActive);
  }
  function handleNavigationClick() {
    setIsActive(false);
  }

  function handleDarkMode() {
    props.handleClick();
  }

  return (
    <header class="page__header header">
      <div class="header__container container">
        <div class="header__body">
          <div class="header__leftside">
            <Link to="/" title="" class="header__logo">
              <span className="first-letter">Joshua</span>{" "}
              <span className="second-letter">Jipp</span>
            </Link>
          </div>
          <div class="header__rightside">
            <div
              className={`header__menu header-menu ${isActive && "is-active"}`}
            >
              <ul class="header-menu__list">
                <li class="header-menu__item">
                  <Link
                    to="/"
                    className="header-menu__link"
                    onClick={handleNavigationClick}
                  >
                    Home
                  </Link>
                </li>
                <li class="header-menu__item">
                  <Link
                    to="/projects"
                    class="header-menu__link"
                    onClick={handleNavigationClick}
                  >
                    Projects
                  </Link>
                </li>
                <li class="header-menu__item">
                  <Link
                    to="/experience"
                    class="header-menu__link"
                    onClick={handleNavigationClick}
                  >
                    Experience
                  </Link>
                </li>
                <li class="header-menu__item">
                  <Link
                    to="/contact"
                    class="header-menu__link"
                    onClick={handleNavigationClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="moon-box" onClick={handleDarkMode}>
              <i
                className={`${
                  props.isDarkMode ? "bx bx-sun" : "bx bx-moon"
                } dm-icon`}
              ></i>
            </div>

            <div className="header__mob" onClick={handleMenuClick}>
              <div className="header__mob-menu">
                <i className="bx bx-menu burger"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
