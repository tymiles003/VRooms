import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = (props) => (

  <div className="mobile-menu js-mobile-menu">
    <a href="/about" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">About</a>
    <a href="/agents" className="mobile-menu__link text--white text--bold a-submenu" data-page-name="Agents">Agents</a>
    <a href="/showcase" className="mobile-menu__link text--white text--bold ">Showcase</a>
    <a href="/contact" className="mobile-menu__link text--white text--bold ">Contact us</a>

    <div className="mobile-menu-btn-wrapper">
        <a data-auth="no" href="/login" className="mobile-menu__btn navigation-menu__sign_in a-login">sign in</a>
    </div>
  </div>
);

export default MobileMenu;
