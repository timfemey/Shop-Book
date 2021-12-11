import React from "react";
import Shelf from "./Shelf";
import steve from "./steve.jpg";
import atomic from "./atomic.jpg";
import zero from "./zero.jpg";

const Book = () => {
  return (
    <>
      <Shelf
        image={steve}
        name="Steve Jobs"
        price="$49.99"
        desc="Understanding the Life of Steve Jobs"
      />

      <Shelf
        image={zero}
        name="Steve Jobs"
        price="$40.99"
        desc="Understanding the Life of Steve Jobs"
      />

      <Shelf
        image={atomic}
        name="Steve Jobs"
        price="$39.99"
        desc="Understanding the Life of Steve Jobs"
      />
    </>
  );
};

export default Book;
