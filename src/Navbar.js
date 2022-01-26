import React from "react";
import "./css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.total);
  const section = useLocation();
  let path;
  switch (section.pathname) {
    case "/cart":
      path = "Cart";
      break;

    default:
      path = "";
      break;
  }

  return (
    <React.Fragment>
      <nav
        id="container"
        style={{ borderBottom: "1px solid #eee" }}
        className="navbar navbar-expand-lg "
      >
        <div class="container-fluid">
          <a class="navbar-brand name" href="/">
            ShopBook {path}
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
            href="/cart"
            style={{ float: "left", fontSize: "1.6rem", color: "#030e12" }}
            class="bi bi-cart"
          >
            <span
              style={{
                fontSize: "1.5rem !important",
                marginTop: "0",
              }}
              class="badge bg-secondary"
            >
              {cart}
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
