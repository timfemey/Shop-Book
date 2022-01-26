import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import Shelf from "./components/Shelf";

const Book = () => {
  const [bookarr, boookSet] = useState([]);
  const [second, secSet] = useState([]);
  const arr = [
    "programming",
    "web",
    "beginners",
    "coding",
    "professional",
    "database",
    "api",
    "algorithm",
  ];
  let no = useRef(Math.floor(Math.random() * 8));
  let no2 = useRef(Math.floor(Math.random() * 8));
  useEffect(() => {
    axios
      .get(`https://api.itbook.store/1.0/search/${arr[no.current]}`)
      .then((res) => {
        console.log(res);
        let book = res.data.books;
        boookSet(book);
      })
      .catch((err) => {
        alert(err);
      });
  }, [no.current]);

  useEffect(() => {
    axios
      .get(`https://api.itbook.store/1.0/search/${arr[no2.current]}`)
      .then((res) => {
        var book = res.data.books;
        secSet(book);
      })
      .catch((err) => {
        alert(err);
      });
  }, [no2.current]);

  const shelf = bookarr.map((lib, i) => (
    <Shelf
      key={i}
      image={lib.image}
      name={lib.title}
      price={lib.price}
      desc={lib.subtitile}
      isbn={lib.isbn13}
    />
  ));
  const shelf2 = second.map((lib, i) => (
    <Shelf
      key={i}
      id={i}
      image={lib.image}
      name={lib.title}
      price={lib.price}
      desc={lib.subtitile}
      isbn={lib.isbn13}
    />
  ));
  return (
    <div className="row py-3">
      {shelf}
      {shelf2}
    </div>
  );
};

export default Book;
