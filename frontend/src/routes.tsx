import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";

// Import any page here

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/Landing" exact component={Landing} />
    </BrowserRouter>
  );
}

export default Routes;
