import React from "react";
import { BrowserRouter, Route, link, Redirect } from "react-router-dom";
import Input from "./input/Input";

import Header from "../header/Header";
import Registration from "./registration/Registration";
import Footer from "../footer/Footer";
import Login from "./login/Login";
// import ResetPassword from "./reset_password/ResetPassword";
// import "./authorization.css";
// import { BrowserRouter, Route } from "react-router-dom";
// import styles from "./Authorization.module.css";
// import Registration from "./registration/Registration";

function Authorization() {
  console.log("Auth");
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="authorization">
          <Header bgColor={"#262525"} />
          <Route exact path="/Authorization">
            <Redirect to="/Authorization/login" />
          </Route>
          <Route path="/Authorization/login" component={Login} />
          <Route path="/Authorization/register" component={Registration} />

          {/* <Route
            path="/Authorization/resetPassword"
            component={ResetPassword}
          /> */}

          {/* <Register /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Authorization;

// import React from "react";
// import Header from "../header/Header";
// import Register from "./register/Register";
// import Footer from "../footer/Footer";
// import Login from "./login/Login";
// import ResetPassword from "./reset_password/ResetPassword";
// import "./authorization.css";
// import { BrowserRouter, Route } from "react-router-dom";

// function Authorization() {
//   return (
//     <React.StrictMode>
//       <BrowserRouter>
//         <div className="authorization">
//           <Header bgColor={"#262525"} />
//           <Route path="/Authorization/register" component={Register} />
//           <Route path="/Authorization/login" component={Login} />
//           <Route
//             path="/Authorization/resetPassword"
//             component={ResetPassword}
//           />

//           {/* <Register /> */}
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }
// export default Authorization;
