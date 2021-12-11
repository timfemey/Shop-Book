import React from "react";
import "./Shop.css";
import zero from "./zero.jpg";
import steve from "./steve.jpg";
import atomic from "./atomic.jpg";
const Shop = () => {
  return (
    <React.Fragment>
      <div className="slide">
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
                <h5>Steve Jobs by Walter Isaacson</h5>
                <p>Understanding one of the Great Minds of Technology.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={zero} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Zero to one by Peter Thiel</h5>
                <p>Taking your Life to the Next Level</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={atomic} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Atomic Habits by Daniel Kahneman</h5>
                <p>
                  Building Great Habits you will need on the road to Success
                </p>
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
            style={{ background: "#030e12", color: "#fff" }}
            className="btn btn-block"
          >
            Checkout Books
          </a>
        </center>
      </div>
    </React.Fragment>
  );
};

export default Shop;
