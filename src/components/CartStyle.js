import React from "react";
import { useDispatch } from "react-redux";

const CartStyle = ({ id, image, name, desc, price, isbn }) => {
  const dispatch = useDispatch();
  const pay = (event) => {
    event.preventDefault();
    window.open(`https://itbook.store/go/buy/${isbn}`, "_blank");
  };
  return (
    <>
      <section class="col-md-3 col-sm-6 my-3 my-md-0 ">
        <div class="card" style={{ width: "18rem" }}>
          <img src={image} class="img-fluid card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${price}</li>
            </ul>
            <button onClick={pay} className="btn btn-success mx-2">
              Buy
            </button>
            <a
              onClick={() => dispatch({ type: "REMOVE", payload: id })}
              style={{ background: "#030e12", color: "#fff" }}
              href="#"
              class="btn "
            >
              {"Remove from Cart"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartStyle;
