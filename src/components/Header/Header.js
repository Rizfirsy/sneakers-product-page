import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";

import openIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import avatar from "../../assets/images/image-avatar.png";
import styles from "./Header.css";

const Header = () => {
  const openMenuHandler = () => {
    document.querySelector(".header--menu_mobile").style.transform =
      "translateX(0)";
    document.querySelector(".header--menu_mobile--close").style.display =
      "block";
  };
  const closeMenuHandler = () => {
    document.querySelector(".header--menu_mobile").style.transform =
      "translateX(-100%)";
    document.querySelector(".header--menu_mobile--close").style.display =
      "none";
  };

  return (
    <div className="header section-max-width">
      <div className="header--menus">
        <img
          onClick={openMenuHandler}
          className="header--menu_mobile--open"
          src={openIcon}
          alt="open"
        />
        <img
          onClick={closeMenuHandler}
          className="header--menu_mobile--close"
          src={closeIcon}
          alt="close"
        />
        <img className="header--logo" src={logo} alt="logo" />
        <ul className="header--menu_desktop">
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#women">Women</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="header--menu_mobile">
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#women">Women</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header--profile">
        <img src={cartIcon} alt="icon" />
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
