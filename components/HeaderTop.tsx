import React from "react";
import Image from "next/image";
import logo from "../src/assets/images/logo.svg";
import sunIcon from "../src/assets/icons/sun.svg";

const HeaderTop = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="top-header-left">
          <div className="logo">
            <Image src={logo} width={180} height={50} />
          </div>
          <div className="search-box">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="top-header-right">
          <ul>
            <li>EN</li>
            <li>USD</li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
            <button>
              <Image src={sunIcon} width={20} height={20} />
            </button>
            <button className="subscribe">Subscribe</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
