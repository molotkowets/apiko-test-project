import React from "react";
import "../authorization.css";
import Input from "../input/Input";
import style from "./Login.module.css";

function Login() {
  return (
    <div className="register">
      <div className="entryField">
        <h2>Login</h2>
        <Input text="Email" value="Example@gmail.com" />
        <Input text="Password" eye="true" />
        <button className={style.button}>Continue</button>
      </div>
      <div className="messageHelp">
        <p>
          I have no account,<span> REGISTER NOW</span>
        </p>
      </div>
    </div>
  );
}
export default Login;
