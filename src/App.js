import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, useLocation } from "react-router-dom";
import Authorization from "./authorization/Authorization.jsx";
import Home from "./home/Home";
import ErrorPage from "./error/ErrorPage";

function App() {
  console.log("app");
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path="/" component={""} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/Home" component={Home} />
        <Route path="/Authorization" component={Authorization} />
        {/* <Route path="*" component={ErrorPage} /> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
