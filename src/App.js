import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Cart = lazy(() => import("./Cart"));
const Book = lazy(() => import("./Book"));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Shop} />
          <Suspense
            fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}
          >
            <Route path="/books" component={Book} />

            <Route path="/cart" component={Cart} />
          </Suspense>
        </Switch>
      </Router>

      {/*Navbar */}

      {/*Shop Body */}
      {/*<Shop />*/}
      {/*Footer */}
    </React.Fragment>
  );
}

export default App;
