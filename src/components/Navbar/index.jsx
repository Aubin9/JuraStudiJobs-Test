import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import "./nav.css";
import Logo from "../../components/assets/logo.png";
import Dropdown from "./Dropdown/dropdown";
import "bootstrap/dist/css/bootstrap.css";
import { FaArrowRight } from "react-icons/fa6";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className="d-flex w-100">
          <NavLink to="" activeStyle>
            <a href="/" className="navbar-brand me-auto">
              <img src={Logo} alt="" className="logo" />
            </a>
          </NavLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <Dropdown />
          <NavLink to="/job-alerts" activeStyle>
            Get Job Alerts
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          {/* <NavLink to="/language" activeStyle className={"me-3"}></NavLink>
          <NavLink to="/connexion" activeStyle></NavLink> */}
        </NavMenu>
        <span className="fb">
          <div className="d-flex dropdown">
            <LocaleSwitcher />
          </div>
          <a href="/connexion" className="me-3">
            <button className="login-btn">
              Login <FaArrowRight />
            </button>
          </a>
        </span>
      </Nav>
    </>
  );
};

export default Navbar;
