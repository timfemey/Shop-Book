import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand name" href="/">
            ShopBook
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/books" class="nav-item nav-link book">
            Books
          </Link>

          <a
            style={{ float: "left", fontSize: "1.8rem", color: "#030e12" }}
            class="bi bi-cart"
          >
            <span
              style={{
                fontSize: "1.7rem !important",
                marginTop: "0",
              }}
              class="badge bg-secondary"
            >
              0
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
