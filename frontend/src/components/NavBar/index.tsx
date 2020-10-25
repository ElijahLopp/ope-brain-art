import React from "react";

import { Link } from "react-router-dom";

import logoMain from "../../assets/images/logo-main/mainLogo.png";
import logout from "../../assets/images/Icons/logout.svg";

import "./styles.css";

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
          {/* <a className="navbar-brand" href="#">
            <img src={logoMain} alt="" />
          </a> */}
          <Link to="/" className="navbar-brand">
            <img className="navbar-brand" src={logoMain} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <!-- <div className="links-nav"> --> */}
              {/* <a
              className="nav-item nav-link active link-navbar"
              href="./backup.html"
            >
              Backup <span className="sr-only">(current)</span>
            </a> */}
              <Link to="/MReport" className="nav-item nav-link active link-navbar">
                Prontuário <span className="sr-only">(current)</span>
              </Link>

              {/* <a className="nav-item nav-link active link-navbar" href="#">
                Agenda
              </a> */}

              {/* <a className="nav-item nav-link active link-navbar" href="#">
                Finanças
              </a> */}

              <Link
                to="/Finance"
                className="nav-item nav-link active link-navbar"
                href="#"
              >
                Finanças
              </Link>

              <Link
                to="/"
                className="nav-item nav-link active link-navbar"
                href="#"
              >
                <div className="logout">
                  <p>Logout</p>
                  <img src={logout} alt="" />
                </div>
              </Link>

              {/* <!-- </div> --> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
