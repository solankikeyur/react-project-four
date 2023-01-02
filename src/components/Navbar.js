import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {items} = useSelector((state) => state.cart)
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Project Four
        </Link>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/cart" >
              <button className="btn btn-primary m-2 btn-lg position-relative">
                <FiShoppingBag></FiShoppingBag>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {items.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
