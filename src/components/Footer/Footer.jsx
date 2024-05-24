import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/images/logo-white.webp";
import faceIcon from "../../assets/images/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`bg-black pt-5 pb-5 ${classes.wrapper}`}>
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <Link to="/">
              <img className="img-fluid" src={logo} />
            </Link>
          </div>
          <div className="col">
            <ul className="list-unstyled mb-0">
              <li className="text-white mb-4 text-uppercase">Company Link</li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-light text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/help-center"
                  className="text-light text-decoration-none"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/our-team"
                  className="text-light text-decoration-none"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light text-decoration-none">
                  The Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled mb-0">
              <li className="text-white mb-4 text-uppercase">Useful</li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-light text-decoration-none"
                >
                  Collections
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/help-center"
                  className="text-light text-decoration-none"
                >
                  Guide
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/our-team"
                  className="text-light text-decoration-none"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled mb-0">
              <li className="text-white mb-4 text-uppercase">Quicklinks</li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-light text-decoration-none"
                >
                  Compare
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/help-center"
                  className="text-light text-decoration-none"
                >
                  My WishList
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/our-team"
                  className="text-light text-decoration-none"
                >
                  My Account
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-light text-decoration-none">
                  Orders Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*  */}
        <div className="d-flex justify-content-between align-items-center py-3">
          <div>
            <span>
              <img src={faceIcon} alt="" />
            </span>
          </div>
          <div>
            <p className="text-white">© 2021 Toro. All rights reserved</p>
          </div>
          <div>
            <span>
              <img src={faceIcon} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/**
 * dùng bootstrap, react bootstrap
 */
