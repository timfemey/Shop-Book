import React, { useState } from "react";

import { useDispatch } from "react-redux";

const Shelf = ({ name, id, image, desc, price, isbn }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  let str = price;
  let num = str.split("");
  num.splice(0, 1);
  let dec = Number(num.join(""));
  let value = dec;

  function status(event) {
    event.preventDefault();
    if (count == 0) setCount(1);
    if (count == 1) setCount(0);
    let item = {
      id: id,
      title: name,
      price: value,
      image: image,
      desc: desc,
      isbn: isbn,
    };
    if (count === 1) dispatch({ type: "ADD", payload: item });
    if (count === 0) dispatch({ type: "REMOVE", payload: item.id });
  }

  return (
    <>
      <section class="col-md-3 col-sm-6 my-3 my-md-0 ">
        <div class="card" style={{ width: "18rem" }}>
          <img src={image} class="img-fluid card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{desc}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{price}</li>
            </ul>
            <a
              onClick={status}
              style={{ background: "#030e12", color: "#fff" }}
              href="#"
              class="btn "
            >
              {count ? "Add to Cart" : "Remove from Cart"}
            </a>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default Shelf;
