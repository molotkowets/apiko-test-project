import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./home.css";
// import Kalkulator from "./kalkulator/Kalkulator";
// import Api from "./home";

import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

function Home() {
  return (
    <div className="containerContent">
      <Header search={true} bgColor={"#262525"} />
      {/* <Api /> */}
      <h2>My first Apollo app</h2>
      <Footer />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById("root")
);

export default Home;
