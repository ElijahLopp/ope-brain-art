import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Views from "./pages/Schedule";
import Finance from "./pages/Finance";
import MReport from "./pages/MReport";
import CustomerRegistration from "./pages/CustomerRegistration";

// Import any page here

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Views} />
      <Route path="/Finance" exact component={Finance} />
      <Route path="/MReport" exact component={MReport} />
      <Route path="/CustomerRegistration" exact component={CustomerRegistration} />
    </BrowserRouter>
  );
}

export default Routes;
