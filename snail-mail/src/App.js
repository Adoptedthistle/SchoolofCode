import React from "react";
import css from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Address from "../src/AddressBook/index";
import Contact from "../src/Contact/index";
import Status from "../src/Status/index";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li className={css.nav}>
            <Link to="/address">ADDRESS BOOK</Link>
          </li>
          <li className={css.nav}>
            <Link to="/contact">ADD CONTACT</Link>
          </li>
          <li className={css.nav}>
            <Link to="/status">STATUS</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/address">
            <Address />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
