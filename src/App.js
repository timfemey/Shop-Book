import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingCard from "./LoadingCard";
const Cart = lazy(() => import("./Cart"));
const Book = lazy(() => import("./Book"));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Shop} />
          <Suspense fallback={<LoadingCard />}>
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
