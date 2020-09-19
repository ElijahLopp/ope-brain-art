import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerRegistration from "./pages/CustomerRegistration";

// Import any page here

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={CustomerRegistration} />
    </BrowserRouter>
  );
}

export default Routes;
