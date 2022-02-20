import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import Shelf from "./components/Shelf";

const Book = () => {
  const [bookarr, boookSet] = useState([]);
  const [second, secSet] = useState([]);
  const [recommend, setRecommend] = useState(false);
  const [foundBook, setFoundBook] = useState([]);
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
        let book = res.data.books;
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
  function searchResults(bookname) {
    axios
      .get(`https://api.itbook.store/1.0/search/${bookname}`)
      .then((res) => {
        let book = res.data.books;
        setFoundBook(book);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function bookSearch(val) {
    setRecommend(true);
    let value = String(val).replace(".", "");
    if (value.length <= 0) {
      setRecommend(false);
    } else {
      searchResults(value);
    }
  }
  let search =
    foundBook.length <= 0
      ? 100
      : foundBook.map((lib, i) => (
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
      <center>
        <h1>
          Search <i style={{ fontSize: "2rem" }} className="bi bi-search"></i>
          <input
            className="mx-2 py-0"
            type="text"
            onChange={(event) => bookSearch(event.target.value)}
          />
        </h1>
      </center>
      <br />
      {search === 100 ? (
        <center>
          <h3>Live Searching...</h3>
        </center>
      ) : (
        search
      )}
      {recommend ? (
        <center>
          <h2>Recommended:</h2>
        </center>
      ) : (
        " "
      )}

      {shelf}
      {shelf2}
    </div>
  );
};

export default Book;
