import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./Book";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/books" component={Book} />
        </Switch>
      </Router>

      {/*Navbar */}

      {/*Shop Body */}
      {/*<Shop />*/}
      {/*Footer */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
