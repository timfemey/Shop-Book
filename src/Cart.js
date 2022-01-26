import React from "react";
import { useSelector } from "react-redux";
import CartStyle from "./components/CartStyle";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  let view = "";

  cart.length === 0 ? (view = "Nothing in Cart") : (view = "");
  let total = 0;

  cart?.map((elem) => {
    total += elem.price;
  });

  let items = cart?.map((elem) => {
    return (
      <CartStyle
        key={elem.id}
        id={elem.id}
        image={elem.image}
        name={elem.name}
        desc={elem.desc}
        price={elem.price}
        isbn={elem.isbn}
      />
    );
  });

  return (
    <>
      <h1 style={{ display: "inline-block" }}>{view}</h1>
      <h5 className="my-2" style={{ float: "right", display: "inline-block" }}>
        Total: ${total.toFixed(2)}
      </h5>
      <br />
      <div className="row py-3">{items}</div>
    </>
  );
};

export default Cart;
