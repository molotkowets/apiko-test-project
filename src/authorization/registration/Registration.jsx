import React, { useEffect, useState } from "react";
import "../authorization.css";
import Input from "../input/Input";

function Register() {
  // const [statePass, setPassword] = useState("password");
  return (
    <div className="register">
      <div className="entryField">
        <h2>Register</h2>
        <Input type={"text"} text="Email" value="Example@gmail.com" />
        <Input type={"text"} text="Full name" value="Tony Stark" />
        <Input type={"password"} text="Password" />
        <Input type={"password"} text="Password again" />
        <button>Register</button>
      </div>
      <div className="messageHelp">
        <p>
          I already have an account,<span> LOG IN</span>
        </p>
      </div>
    </div>
  );
}
export default Register;
