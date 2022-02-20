import React from "react";
import "./css/Shop.css";
import zero from "./zero.jpg";
import steve from "./steve.jpg";
import atomic from "./atomic.jpg";
import Footer from "./Footer";
const Shop = () => {
  return (
    <React.Fragment>
      <div id="container" className="slide">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={steve} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Pro Django</h5>
                <p>Understanding Django.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={zero} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Find Your Favourite IT Books</h5>
                <p>Going from Zero to 100</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={atomic} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Powered by ITStore API</h5>
                <p>From Beginners to Professionals</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="start">
        <center>
          <a
            href="/books"
            style={{
              background: "#030e12",
              color: "#fff",
            }}
            className="btn btn-block"
          >
            Checkout Books
          </a>
        </center>
      </div>
      <br />
      <br />

      <Footer />
    </React.Fragment>
  );
};

export default Shop;
