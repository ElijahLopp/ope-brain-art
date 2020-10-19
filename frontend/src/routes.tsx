import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import CostomerRegistration from "./pages/CustomerRegistration";

// Import any page here

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/Landing" exact component={Landing} />
      <Route path="/registration" exact component={CostomerRegistration} />
    </BrowserRouter>
  );
}

export default Routes;
