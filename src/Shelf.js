import React from "react";

const Shelf = (props) => {
  return (
    <>
      <section>
        <div class="card" style={{ width: " 18rem" }}>
          <img src={props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.desc}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{props.price}</li>
            </ul>
            <a
              style={{ background: "#030e12", color: "#fff" }}
              href="#"
              class="btn "
            >
              Add to Cart
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shelf;
