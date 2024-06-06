import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={` navbar navbar-expand-lg bg-${props.bgMode} text-${props.txMode}`}>
      <div className=" container-fluid">
        <NavLink className={({ isActive }) => `nav-link text-${props.txMode} ${isActive ? "red" : ""}`} to="/">
          TextUtils
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-${props.txMode} ${isActive ? "red" : ""}`} to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="bg-info btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode Enable
            </label>
          </div>
        </div>
      </div>      
    </nav>
  );
}
